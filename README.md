# Personal Developer Portfolio

A modern, accessible, and high-performance single-page developer portfolio designed and engineered for an aspiring frontend developer. Built with React 19, TypeScript, Vite, Framer Motion, and CSS Custom Properties following the exact specifications of `style.md` and `system.md`.

---

## 🌟 Key Features

1. **Mandatory Custom Design Palette**:
   - Light pink: `#FFC0DE`
   - Medium pink: `#ED96D7`
   - Pink-purple: `#C654C3`
   - Deep purple: `#8E1EA2`
   - Curated dark plum neutrals (`#1E0A24`, `#4A2854`) providing high contrast text meeting WCAG AA/AAA standards.

2. **Signature Four-Icon Navigation Dock**:
   - Centered near the bottom of the viewport with a frosted glass pill aesthetic.
   - Contains **exactly four icons**: Home (`#hero`), Skills (`#skills`), Education (`#education`), Contact Me (`#contact`).
   - Accessible hover/focus tooltips, minimum 44px touch targets on mobile, and an animated sliding pill indicator powered by Framer Motion.
   - Smooth scrolling with offset calculations ensuring headings and content remain visible.

3. **Hero Section (~75vh)**:
   - Fluid typography using CSS `clamp()`.
   - Clear professional identity: *"Aspiring Frontend Developer"*.
   - Direct CTAs to view projects and reach out, with verified social profile links.
   - Restrained ambient gradient lighting and developer profile card.

4. **Curated Project Showcase**:
   - **Personal Portfolio**: Complete — React, TypeScript, Framer Motion, and CSS design tokens.
   - **E-Commerce Product Search Page**: Complete — Debounced instant search, category filters, and responsive product catalog.
   - **Signup Form & Auth API Service**: In Progress — Client validation with ongoing Node.js/Express backend service experiments.
   - 16:9 previews with SVG assets and live demo / source code buttons.

5. **Honest Skills Architecture**:
   - Categorized into *Current Frontend Skills*, *Development Workflow*, and *Currently Learning*.
   - Zero fabricated percentage scores or arbitrary progress bars.
   - Emphasizes practical engineering capabilities.

6. **Editorial Education Section**:
   - Clean vertical timeline showcasing your academic qualification (Intermediate via Islamic Board).
   - Easily expandable in `src/data/education.ts` for additional studies.

7. **Validated Contact Form (Truthful Demo Mode)**:
   - Form fields: Name, Email, and Message (no password field).
   - Validation schema powered by React Hook Form & Zod (length limits, valid email pattern, trimmed whitespace).
   - Inline accessible error messages and ARIA live status region.
   - Truthful submission notice: clearly informs the user that message delivery is simulated in demo mode, ready to be hooked to an email service.

8. **Accessibility & Motion First**:
   - Native `prefers-reduced-motion` detection via custom hook `useReducedMotionPreference` and CSS media queries.
   - Skip to main content keyboard link.
   - Distinct `:focus-visible` outlines on all interactive elements.

---

## 📁 Project Architecture

```
src/
├── assets/                  # Static assets and icons
├── components/
│   ├── Button.tsx           # Reusable accessible button with variants
│   ├── ContactForm.tsx      # Zod + React Hook Form with truthful demo feedback
│   ├── Footer.tsx           # Accessible footer with back-to-top action
│   ├── NavigationDock.tsx   # 4-icon dock with active indicator & tooltips
│   ├── ProjectCard.tsx      # 16:9 showcase cards with status badges
│   ├── ScrollProgress.tsx   # Subtle top progress bar
│   ├── SectionHeading.tsx   # Editorial heading typography
│   ├── SkillGroup.tsx       # Grouped skill cards with practical focus
│   ├── SocialLinks.tsx      # Social icon buttons (GitHub, LinkedIn, Email)
│   └── icons/
│       └── BrandIcons.tsx   # Crisp inline SVG icons for GitHub & LinkedIn
├── data/
│   ├── education.ts         # Editable academic & certification entries
│   ├── personal.ts          # Editable bio, title, email, and social links
│   ├── projects.ts          # Project metadata, tags, and status
│   └── skills.ts            # Honest categorized skills data
├── hooks/
│   ├── useActiveSection.ts  # IntersectionObserver-based active section tracking
│   └── useReducedMotionPreference.ts # Reduced-motion media query listener
├── sections/
│   ├── Contact.tsx          # Contact info & form section
│   ├── Education.tsx        # Timeline & certifications section
│   ├── Hero.tsx             # 75vh hero section
│   ├── Projects.tsx         # Projects showcase section
│   └── Skills.tsx           # Categorized skills section
├── styles/
│   ├── animations.css       # Keyframes & reduced-motion rules
│   ├── components.css       # Reusable component styles
│   ├── globals.css          # Reset, typography, and container layout
│   └── variables.css        # Palette, tokens, shadows, and radii
├── App.tsx                  # Main single-page application layout
└── main.tsx                 # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ or v22+)
- npm (v10+)

### 1. Installation

Install all project dependencies:

```bash
npm install
```

### 2. Development Server

Start the local Vite development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✏️ Customizing Your Information

All personal content is separated from the UI logic and stored in the `src/data/` directory:

1. **Personal Information** (`src/data/personal.ts`):
   - Update your name, title, bio, email, GitHub, and LinkedIn URLs.

2. **Projects** (`src/data/projects.ts`):
   - Update project descriptions, live demo links, repository URLs, and status (`Complete` or `In Progress`).
   - Add your own project screenshots to `public/projects/` and reference them in `thumbnail`.

3. **Skills** (`src/data/skills.ts`):
   - Update your core frontend skills, workflow tools, and actively learned technologies.

4. **Education** (`src/data/education.ts`):
   - Replace the bracketed placeholders (`[Your Institution / University Name]`) with your real school, degree, dates, and coursework.

---

## 📬 Connecting a Real Contact Service

The contact form is currently configured in **Demonstration Mode** with full Zod input validation and truthful feedback. When you are ready to receive real emails:

1. Choose a service like [Formspree](https://formspree.io/), [Resend](https://resend.com/), or [EmailJS](https://www.emailjs.com/).
2. Create a `.env` file from `.env.example`:
   ```bash
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```
3. Update `onSubmit` in `src/components/ContactForm.tsx` to `fetch(import.meta.env.VITE_CONTACT_FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(data) })`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Run `npm run build`.
2. Connect your repository on [netlify.com](https://netlify.com).
3. Set Build Command: `npm run build` and Publish Directory: `dist`.
4. Deploy site.

---

## 📄 License

MIT © Zainab
