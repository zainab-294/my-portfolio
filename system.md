# Personal Developer Portfolio — System, Functional and Technical Requirements

## 1. Project Objective

Act as a senior frontend engineer, UI/UX engineer, interaction designer, and software architect.

Build a premium, modern, single-page portfolio website for an aspiring web developer. The website must showcase my identity, technical skills, education, projects, and contact information in a visually impressive and professional way.

This is not a basic HTML template or a generic portfolio copied from a standard tutorial. I want a thoughtfully engineered frontend experience with sophisticated visual details, polished interactions, meaningful animations, and a clear component architecture.

The result should be suitable for presenting to recruiters, freelance clients, and other developers.

I am comfortable using AI-assisted development and am willing to work with more advanced techniques. Do not unnecessarily simplify the implementation. However, keep the architecture understandable, the logic maintainable, and the code sufficiently organized that I can debug it myself.

Follow this document for functionality and architecture. Follow `portfolio-style.md` for visual direction.

## 2. My Background and Content

My current technical background includes:

- HTML5
- CSS3
- JavaScript fundamentals
- Git and GitHub
- Learning Node.js and Express
- Building frontend projects and experimenting with backend development

Projects I have worked on include:

1. Personal portfolio website.
2. E-commerce product search page.
3. A signup form and signup API project, where applicable, clearly identifying unfinished work.

Represent my current skills honestly. Do not describe me as a senior developer or claim professional experience I have not provided.

Use editable placeholders for my name, professional title, biography, education, email address, social profiles, project URLs, and any missing personal details.

Do not invent degrees, certifications, clients, testimonials, employment history, project statistics, or achievements.

## 3. Required Technology Stack

Use the following preferred stack:

- React for reusable UI components and stateful interactions.
- Vite for development tooling and production builds.
- TypeScript for stronger type safety and maintainable application logic.
- Modern CSS, CSS custom properties, Flexbox, Grid, and responsive design techniques.
- Framer Motion, now commonly used through the `motion` package, for intentional entrance animations, scroll-triggered reveals, layout transitions, and micro-interactions.
- Lucide React for consistent interface icons.
- React Hook Form and Zod for structured contact-form state management and validation, if the additional complexity is justified.
- ESLint and TypeScript checks for code quality.

Use current, mutually compatible stable package versions and verify package names and installation commands before installing dependencies.

Do not install libraries merely to create an impressive dependency list. Every dependency must serve a clear purpose.

Use a small number of reusable components instead of putting the entire website into one enormous component.

If an existing project already has a working structure, inspect it first and preserve useful work. Do not overwrite project files blindly.

## 4. Application Architecture

Organize the application into logical, maintainable modules.

Suggested structure:

src/
  assets/
  components/
    NavigationDock.tsx
    SectionHeading.tsx
    Button.tsx
    ProjectCard.tsx
    SkillGroup.tsx
    ContactForm.tsx
    SocialLinks.tsx
    ScrollProgress.tsx
  sections/
    Hero.tsx
    Projects.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
  hooks/
    useActiveSection.ts
    useReducedMotionPreference.ts
  data/
    projects.ts
    skills.ts
    education.ts
  styles/
    globals.css
    variables.css
    animations.css
  App.tsx
  main.tsx

This structure is a starting point, not a rigid requirement. Adjust it when a different organization improves the implementation.

Requirements:

- Keep content data separate from layout and interaction logic.
- Use reusable components for repeated interface patterns.
- Use descriptive component, variable, and function names.
- Define TypeScript interfaces or types for project data, skills, education entries, and other structured content.
- Avoid duplicated markup, unnecessary global state, and deeply nested conditional rendering.
- Keep animation configuration reusable where appropriate.
- Add comments to explain non-obvious logic, not every line of code.
- Keep dependencies between components understandable.
- Avoid unnecessary abstractions that make simple behavior difficult to debug.

## 5. Page Structure and Navigation

Build a single-page portfolio with these main sections:

1. Home
2. Projects
3. Skills
4. Education
5. Contact Me

Projects must appear on the page without adding another icon to the required navigation dock.

The primary navigation dock must contain exactly four icons:

- Home
- Skills
- Education
- Contact Me

The dock must be horizontally centered near the bottom of the initial viewport, visually connected to the hero composition.

Functional requirements:

- Each icon navigates to its corresponding section.
- Use smooth scrolling where motion preferences permit it.
- Use semantic section IDs and valid navigation targets.
- Account for the height of the navigation dock and section headings when scrolling.
- Provide accessible names for all icon-only controls.
- Display useful tooltips on hover and focus.
- On mobile, ensure labels and touch targets remain usable.
- Indicate the active section as the visitor scrolls.
- Keep the dock visually stable without obscuring important content.
- Handle direct navigation to section hashes correctly.
- Support keyboard navigation and visible focus states.

Implement active-section tracking with an appropriate approach such as Intersection Observer rather than continuously calculating scroll position on every scroll event.

Use a reusable hook such as `useActiveSection` if it makes the behavior easier to maintain.

## 6. Hero Section

The hero is the most important initial impression.

Target approximately 75vh for the main hero composition on typical desktop viewports. Adapt the height for smaller screens, short browser windows, and mobile devices.

The hero should include:

- A small introductory eyebrow.
- My name as the primary heading.
- A clear professional identity such as "Aspiring Frontend Developer" or "Frontend Developer in Progress".
- A concise introduction focused on responsive interfaces, clean code, and ongoing technical growth.
- A primary CTA leading to the projects section.
- A secondary CTA leading to the contact section.
- Optional GitHub and LinkedIn links when real URLs are supplied.
- A restrained visual element that makes the composition distinctive.

Add sophisticated but restrained motion, including:

- Staggered text entrance.
- A subtle decorative gradient or floating visual accent.
- Smooth button hover and press feedback.
- Carefully timed reveal effects.
- Optional text emphasis transitions that do not harm readability.

Do not make the entire hero dependent on animation. Content must remain readable if JavaScript or animation fails.

Avoid excessive animated text, distracting cursor effects, large bouncing objects, and long introductory loading sequences.

## 7. Projects Section

Create an attractive, professional project showcase.

Each project card should support:

- Project name.
- Concise project description.
- Technologies used.
- A real screenshot or project thumbnail when available.
- A live-demo link when available.
- A GitHub repository link when available.
- A clear project status such as Complete, In Progress, or Concept.

Initial project entries:

### Project A: Personal Portfolio
Describe the actual portfolio project. Add real demo and repository URLs when available.

### Project B: E-commerce Product Search Page
Showcase the product search interface I created. Describe only the functionality actually implemented.

### Project C: Signup API / Signup Form
Include this only with an accurate status. If the project is unfinished, label it In Progress.

Functional and visual requirements:

- Use reusable project-card components.
- Create consistent image aspect ratios.
- Include polished hover states and restrained motion.
- Make the entire interaction accessible without relying exclusively on hover.
- Use descriptive link labels and meaningful image alt text.
- Open external links safely when opening a new tab.
- Never use fake URLs or pretend that a repository exists.
- Do not fabricate project metrics, reviews, or client results.

Use local image assets or verified project screenshots rather than relying on arbitrary external images that may disappear.

## 8. Skills Section

Present my skills in clearly defined groups.

### Current frontend skills
- HTML5
- CSS3
- JavaScript

### Development workflow
- Git
- GitHub
- Responsive design
- Browser developer tools

### Currently learning
- React
- TypeScript
- Node.js
- Express

Only label technologies as currently learning if that accurately reflects my progress when the portfolio is completed.

Use a visually structured presentation such as grouped skill cards, compact icon-led items, or a refined bento-style layout.

Do not invent proficiency percentages or display arbitrary skill scores such as 95% JavaScript.

If proficiency labels are used, make them honest and editable.

The section should emphasize practical capabilities rather than decorative progress bars.

## 9. Education Section

Build a clean, structured education section that supports:

- Institution name.
- Qualification or course.
- Start and end dates.
- Relevant coursework.
- Optional certification entries.

Use a vertical timeline or another appropriate editorial layout if it fits the visual design.

All information must be editable. Do not invent institutions, dates, degrees, or qualifications.

If I have not supplied education information, use obvious placeholders or an editable example structure that is not presented as fact.

## 10. Contact Section

Create a polished contact section that includes:

- A concise invitation to get in touch.
- An email address placeholder.
- Optional GitHub and LinkedIn links.
- A contact form with Name, Email, and Message.
- A Send Message button.
- Accessible validation and submission feedback.

The form is for contacting me, not creating an account.

Do not include a password field.

### Validation requirements

Validate:

- Required name.
- Valid email format.
- Required message.
- Reasonable input lengths.
- Appropriate handling of whitespace.

Use React Hook Form and Zod if their benefits justify the additional dependencies.

Provide clear inline error messages, accessible labels, appropriate autocomplete attributes, and an obvious focus state.

Prevent duplicate submissions while a request is in progress.

Announce relevant status messages accessibly, for example using an appropriate live region.

### Submission requirements

A frontend-only form cannot deliver messages by itself.

Initially, implement the form UI and validation without pretending that a message has been delivered.

Show a truthful notice that message delivery has not yet been configured, or provide a clearly separated demo mode.

If a real sending feature is subsequently requested, connect it to a backend or a suitable form/email service.

Never expose email-service credentials, API secrets, or private keys in frontend code.

If a backend is introduced later, use environment variables, provide a `.env.example`, validate incoming data server-side, apply appropriate spam protection, and document the deployment configuration.

Do not create a backend solely to make the contact form appear more sophisticated.

## 11. Scroll-Based Interaction

Use subtle scroll-based behavior to improve the experience.

Possible interactions include:

- Reveal animations as sections enter the viewport.
- Active navigation state changes.
- A restrained scroll-progress indicator.
- Subtle transitions between content groups.

Use Intersection Observer or the animation library's appropriate viewport utilities.

Avoid attaching expensive calculations to every scroll event.

Prevent animations from repeatedly restarting in distracting ways.

Ensure that content is not permanently hidden if an animation does not execute.

Keep the implementation compatible with reduced-motion preferences.

## 12. Motion and Accessibility

Use a centralized approach to motion preferences.

Requirements:

- Respect `prefers-reduced-motion: reduce`.
- Disable or substantially reduce nonessential movement when requested.
- Do not use animation as the only way to communicate state.
- Preserve readable content if animation is unavailable.
- Provide visible keyboard focus.
- Use semantic buttons and links.
- Add accessible names to icon-only controls.
- Maintain appropriate text contrast.
- Do not trap keyboard focus in the navigation dock.
- Avoid flashing effects and unnecessary parallax.

Prefer CSS transitions for straightforward hover and focus effects. Use the animation library for more complex sequences and coordinated motion.

## 13. Responsive Behavior

Build mobile-first and test at common mobile, tablet, laptop, and desktop viewport sizes.

Requirements:

- No horizontal overflow.
- Responsive typography using `clamp()` where appropriate.
- Layouts that adapt naturally using Grid and Flexbox.
- Consistent content widths and spacing.
- Properly scaled hero content.
- A usable four-icon dock on narrow screens.
- Cards that stack appropriately on mobile.
- Readable forms and comfortable touch targets.
- No content obscured by fixed or sticky interface elements.

Do not treat desktop responsiveness as simply shrinking the desktop layout.

## 14. Performance and Quality

- Use efficient React rendering patterns.
- Avoid unnecessary effects and repeated state updates.
- Use stable keys when rendering lists.
- Clean up observers and event listeners when necessary.
- Avoid unnecessary dependencies and large assets.
- Lazy-load noncritical images where appropriate.
- Avoid layout shifts caused by images without defined dimensions or aspect ratios.
- Use optimized assets and modern image formats where practical.
- Add page title, meta description, and favicon support.
- Ensure the production build completes successfully.
- Check the browser console for errors and warnings.
- Run available linting and TypeScript checks.
- Fix broken links and invalid section targets.

## 15. SEO and Professional Presentation

Provide:

- A descriptive page title.
- A useful meta description.
- Appropriate heading hierarchy.
- Semantic HTML landmarks.
- Social profile links when supplied.
- Optional Open Graph metadata.
- A consistent favicon.
- Descriptive project content.
- Appropriate link text.

Do not add fake testimonials, fake statistics, fabricated experience, or meaningless placeholder paragraphs.

## 16. Deployment

Prepare the project for production deployment through a suitable static hosting provider, such as Vercel, Netlify, or GitHub Pages.

Recommend a host that matches the final framework and project configuration.

Explain:

- How to install dependencies.
- How to run the local development server.
- How to run the production build.
- How to preview the production build.
- How to deploy the website.
- Which personal details and URLs must be replaced before publishing.

Do not claim that the website is deployed unless deployment has actually been completed.

## 17. Implementation Workflow

Before making changes:

1. Inspect the current workspace and existing files.
2. Read `portfolio-style.md` completely.
3. Identify existing code that should be preserved.
4. Summarize the proposed architecture and key interactions.
5. Identify any missing personal content that requires placeholders.

Then implement the actual website.

Do not stop after generating a plan, wireframe, or isolated code snippets.

After implementation:

1. Run the project.
2. Verify the production build.
3. Test all navigation links.
4. Test active-section tracking.
5. Test form validation.
6. Check mobile and desktop layouts.
7. Check keyboard accessibility.
8. Check reduced-motion behavior.
9. Fix errors found during testing.
10. Summarize the architecture and explain how the main features work.

## 18. Final Acceptance Criteria

The project is complete only when:

- All required sections exist.
- The four-icon navigation works correctly.
- The hero follows the approximate 75vh requirement on suitable screens.
- The visual implementation follows `portfolio-style.md`.
- The page is responsive.
- Animations are polished and accessible.
- Project content is accurate and editable.
- The education section contains no fabricated facts.
- The contact form validates input and does not falsely report successful delivery.
- The source code is organized and understandable.
- The application builds successfully.
- Setup, debugging, and deployment instructions are provided.

Prioritize a coherent, polished final product over unnecessary complexity. Every advanced technique must serve a clear design, usability, or maintainability goal.