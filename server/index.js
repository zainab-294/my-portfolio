import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: CLIENT_ORIGIN,
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Restrict payload size to prevent denial-of-service via huge payloads
app.use(express.json({ limit: '10kb' }));

// -----------------------------------------------------------------------------
// Lightweight In-Memory Rate Limiter (Protects against spam & abuse)
// -----------------------------------------------------------------------------
const ipRequestHistory = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimitMiddleware = (req, res, next) => {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  const timestamps = ipRequestHistory.get(clientIp) || [];
  // Clean timestamps outside current window
  const recentTimestamps = timestamps.filter(time => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions from this connection. Please wait a few minutes before trying again.',
    });
  }

  recentTimestamps.push(now);
  ipRequestHistory.set(clientIp, recentTimestamps);

  // Periodically cleanup stale IPs
  if (ipRequestHistory.size > 1000) {
    for (const [ip, list] of ipRequestHistory.entries()) {
      if (list.every(t => now - t >= RATE_LIMIT_WINDOW_MS)) {
        ipRequestHistory.delete(ip);
      }
    }
  }

  next();
};

// -----------------------------------------------------------------------------
// Validation & Sanitization Helpers
// -----------------------------------------------------------------------------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// -----------------------------------------------------------------------------
// Mail Delivery Transporter Setup
// -----------------------------------------------------------------------------
function isSmtpConfigured() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return false;
  // Check if still placeholder values from .env.example
  if (host.includes('example.com') || user.includes('example.com')) return false;

  return true;
}

async function createTransporter() {
  if (process.env.USE_TEST_ACCOUNT === 'true') {
    // Generate an automatic Ethereal test account for safe local testing
    console.log('[Mail] Generating Ethereal SMTP test account for development...');
    const testAccount = await nodemailer.createTestAccount();
    return {
      transporter: nodemailer.createTransporter({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
      isTest: true,
    };
  }

  if (isSmtpConfigured()) {
    const isSecure = process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465';
    return {
      transporter: nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }),
      isTest: false,
    };
  }

  return null;
}

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-contact-api',
    emailConfigured: isSmtpConfigured() || process.env.USE_TEST_ACCOUNT === 'true',
  });
});

// Contact form submission endpoint
app.post('/api/contact', rateLimitMiddleware, async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    // 1. Server-side validation
    const errors = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Please provide your name (at least 2 characters).';
    } else if (name.trim().length > 60) {
      errors.name = 'Name must be 60 characters or fewer.';
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    } else if (email.trim().length > 100) {
      errors.email = 'Email must be 100 characters or fewer.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    } else if (message.trim().length > 1000) {
      errors.message = 'Message cannot exceed 1,000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed on submitted data.',
        validationErrors: errors,
      });
    }

    // 2. Sanitize content for safe email rendering
    const safeName = sanitizeText(name);
    const safeEmail = sanitizeText(email);
    const safeMessage = sanitizeText(message);

    // 3. Check email delivery configuration
    const mailConfig = await createTransporter();

    if (!mailConfig) {
      console.warn(`[Contact API] Received submission from "${safeName}" <${safeEmail}>, but SMTP is not configured in .env.`);
      return res.status(503).json({
        success: false,
        error: 'Email delivery service is not configured on the server. Please set up SMTP credentials in .env to deliver real messages.',
        notConfigured: true,
      });
    }

    // 4. Send email through configured transporter
    const toEmail = process.env.CONTACT_TO_EMAIL || 'zainab.dev@example.com';
    const fromName = process.env.SMTP_FROM_NAME || 'Portfolio Contact Form';
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'no-reply@example.com';

    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `New Portfolio Message from ${safeName}`,
      text: `You received a new message from your portfolio contact form:\n\nSender Name: ${name.trim()}\nSender Email: ${email.trim()}\n\nMessage:\n${message.trim()}\n\n---\nSent via Portfolio Contact API`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E0A24; max-width: 600px; margin: 0 auto; border: 1px solid #EEDBEE; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #8E1EA2; color: #ffffff; padding: 18px 24px;">
            <h2 style="margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
          </div>
          <div style="padding: 24px;">
            <p style="margin-top: 0;"><strong>Sender Name:</strong> ${safeName}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${safeEmail}" style="color: #8E1EA2;">${safeEmail}</a></p>
            <hr style="border: none; border-top: 1px solid #EEDBEE; margin: 20px 0;" />
            <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #FAF7FB; border-left: 4px solid #8E1EA2; padding: 14px 18px; border-radius: 4px; white-space: pre-wrap;">${safeMessage}</div>
          </div>
          <div style="background-color: #FAF7FB; padding: 12px 24px; font-size: 12px; color: #7A5785; border-top: 1px solid #EEDBEE;">
            Sent securely from your personal portfolio contact form.
          </div>
        </div>
      `,
    };

    const info = await mailConfig.transporter.sendMail(mailOptions);
    console.log(`[Contact API] Message successfully sent! MessageId: ${info.messageId}`);

    if (mailConfig.isTest) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log(`[Contact API - Ethereal Preview URL]: ${previewUrl}`);
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully (Ethereal test mode).',
        previewUrl,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you as soon as possible.',
    });
  } catch (error) {
    console.error('[Contact API Error]:', error.message || error);
    return res.status(502).json({
      success: false,
      error: 'Failed to deliver message through the mail server. Please try again later or contact me directly via email.',
    });
  }
});

// Fallback 404 handler for invalid API routes
app.use('/api', (req, res) => {
  res.status(404).json({ success: false, error: 'API route not found' });
});

// Centralized error handler
app.use((err, req, res, _next) => {
  console.error('[Server Error]:', err.message || err);
  res.status(500).json({
    success: false,
    error: 'An internal server error occurred. Please try again later.',
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`[Backend Server] Contact API listening on http://localhost:${PORT}`);
  if (!isSmtpConfigured() && process.env.USE_TEST_ACCOUNT !== 'true') {
    console.warn(`[Backend Server] Notice: SMTP is not yet configured in .env. Submissions will return HTTP 503 until SMTP credentials are provided.`);
  } else {
    console.log(`[Backend Server] Mail service is configured and ready.`);
  }
});
