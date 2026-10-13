import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { Button } from './Button';

// Validation schema with Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your name (at least 2 characters).' })
    .max(60, { message: 'Name must be 60 characters or fewer.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please enter a valid email address (e.g. name@example.com).' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(1000, { message: 'Message cannot exceed 1,000 characters.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState('submitting');
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmittedName(data.name.trim());
        setSubmissionState('submitted');
        // Clear fields only after successful delivery
        reset();
      } else {
        const errorMsg =
          result?.error ||
          'Failed to send message. Please verify your details or try again later.';
        setServerError(errorMsg);
        setSubmissionState('error');
      }
    } catch {
      setServerError('Unable to reach the server. Please check your internet connection or verify the server is running.');
      setSubmissionState('error');
    }
  };

  const handleReset = () => {
    setSubmittedName('');
    setServerError(null);
    setSubmissionState('idle');
  };

  return (
    <div className="contact-form-container">
      {/* Live region for accessibility announcements */}
      <div role="status" aria-live="polite" className="sr-only">
        {submissionState === 'submitting' && 'Sending message, please wait.'}
        {submissionState === 'submitted' && 'Your message was sent successfully.'}
        {submissionState === 'error' && serverError}
      </div>

      {submissionState === 'submitted' ? (
        <div className="contact-submission-feedback" role="alert">
          <div className="contact-submission-feedback__icon">
            <CheckCircle2 size={32} className="text-success" aria-hidden="true" />
          </div>
          <h3 className="contact-submission-feedback__title">Message Sent Successfully!</h3>
          
          <p className="contact-submission-feedback__message">
            Thank you, <strong>{submittedName}</strong>! Your message has been received. I will review it and get back to you as soon as possible.
          </p>

          <Button
            variant="secondary"
            size="md"
            icon={<RefreshCw size={15} aria-hidden="true" />}
            onClick={handleReset}
            className="contact-reset-button"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="contact-form"
          aria-label="Contact form"
        >
          {/* Server Error Alert Banner */}
          {serverError && (
            <div className="contact-server-error-banner" role="alert">
              <AlertCircle size={18} className="flex-shrink-0" aria-hidden="true" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Your Name <span className="form-required" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Jordan Lee"
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={`form-input ${errors.name ? 'form-input--error' : ''}`}
              disabled={submissionState === 'submitting'}
              {...register('name')}
            />
            {errors.name && (
              <p id="contact-name-error" className="form-error" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Email Address <span className="form-required" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="e.g. jordan@example.com"
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={`form-input ${errors.email ? 'form-input--error' : ''}`}
              disabled={submissionState === 'submitting'}
              {...register('email')}
            />
            {errors.email && (
              <p id="contact-email-error" className="form-error" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Message <span className="form-required" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Write your message here... Let me know about job openings, projects, or feedback."
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
              disabled={submissionState === 'submitting'}
              {...register('message')}
            />
            {errors.message && (
              <p id="contact-message-error" className="form-error" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submissionState === 'submitting'}
              icon={
                submissionState === 'submitting' ? (
                  <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                ) : (
                  <Send size={18} aria-hidden="true" />
                )
              }
              iconPosition="right"
            >
              {submissionState === 'submitting' ? 'Sending Message...' : 'Send Message'}
            </Button>
            <p className="form-notice-subtle">
              Your message is securely transmitted directly to my contact inbox.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
