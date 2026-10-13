# Personal Developer Portfolio — Visual Design System and Style Guide

## 1. Creative Direction

Act as an experienced digital product designer and creative frontend developer.

Design a distinctive, elegant, modern developer portfolio with a clean editorial layout, sophisticated pink-purple colors, subtle visual depth, polished interactions, and carefully controlled animation.

The website should feel like a custom-designed portfolio belonging to a creative developer, not a generic portfolio template generated from a standard component library.

The design must balance:

- Professionalism.
- Minimalism.
- Personality.
- Technical sophistication.
- Readability.
- Interaction quality.
- Visual consistency.

Minimalism does not mean an empty page with a heading and two buttons. Create visual interest through typography, composition, whitespace, layered surfaces, precise alignment, subtle gradients, carefully selected accents, and purposeful motion.

Do not fill every empty area with decorative elements. Each element must contribute to the overall composition.

## 2. Mandatory Color Palette

Use these four primary colors exactly:

- Light pink: `#FFC0DE`
- Medium pink: `#ED96D7`
- Pink-purple: `#C654C3`
- Deep purple: `#8E1EA2`

Create centralized CSS custom properties:

```css
:root {
  --color-pink-light: #FFC0DE;
  --color-pink-medium: #ED96D7;
  --color-pink-purple: #C654C3;
  --color-purple-deep: #8E1EA2;
}
```

Extend the design system with restrained neutral colors, such as:

- Warm white.
- Soft off-white.
- Very pale pink-tinted surfaces.
- Dark plum or another sufficiently dark neutral for readable text.
- A subtle neutral border color.

Define these neutrals centrally rather than scattering arbitrary hexadecimal values throughout the stylesheet.

### Color usage

Use the colors with a deliberate hierarchy:

- `#FFC0DE`: large soft accents, subtle backgrounds, decorative surfaces.
- `#ED96D7`: secondary accents, hover backgrounds, gradient transitions.
- `#C654C3`: emphasis, selected states, prominent decorative details.
- `#8E1EA2`: primary actions, icon accents, active navigation states, and strong highlights.

Use white and near-white surfaces to preserve the clean appearance.

Do not make every section a saturated pink rectangle. The page should breathe.

Use gradients sparingly, such as a soft pink-to-purple gradient behind a decorative element or within a restrained hero accent.

Never sacrifice text contrast for color matching. Check contrast for body text, buttons, navigation icons, input borders, and focus indicators.

## 3. Design Tokens

Create a consistent design system containing:

- Primary and neutral colors.
- Typography scale.
- Spacing scale.
- Content-width limits.
- Border radii.
- Border colors.
- Shadow levels.
- Transition durations.
- Animation easing.
- Navigation dimensions.
- Responsive breakpoints.

Use CSS variables for recurring values.

Use a deliberate spacing system rather than assigning arbitrary margins to every component.

Prefer a combination of fixed spacing tokens and fluid spacing where appropriate.

Use `clamp()` for responsive typography and spacing when it improves consistency.

Keep border radii and shadows coordinated across components.

Avoid excessive shadows, strong glass effects, thick borders, and inconsistent rounded corners.

## 4. Typography

Use a refined, contemporary sans-serif typeface.

Choose a readable font pairing or a single versatile type family. If using an external font, use a reliable source, limit unnecessary font weights, and provide sensible fallback fonts.

Typography should provide much of the visual personality.

### Hierarchy

- Hero heading: prominent, confident, and responsive.
- Section headings: clear and visually consistent.
- Body text: calm, readable, and moderately narrow in line length.
- Eyebrow text: small, restrained, and letter-spaced where appropriate.
- Metadata: compact but legible.
- Buttons and navigation labels: concise and consistent.

Use a fluid heading scale instead of fixed oversized text that breaks on mobile.

Avoid excessive all-caps text, decorative fonts that harm readability, and too many competing font sizes.

Use intentional line breaks and text widths to create a balanced hero composition.

## 5. Overall Layout

Create a single-page composition with a clear visual hierarchy.

The layout should feel spacious and precise.

Use a centered maximum-width content container, consistent horizontal padding, and deliberate vertical rhythm.

Sections may alternate between a white surface and a subtle tinted background, but transitions must feel continuous rather than abrupt.

Use CSS Grid and Flexbox to create balanced layouts.

Avoid placing every element inside an individual rounded card. Mix open layouts, typography-led sections, fine separators, and a small number of elevated surfaces.

Maintain a coherent visual language from the hero through projects, skills, education, and contact.

## 6. Hero Design

The initial viewport should make a strong first impression.

The hero section should occupy approximately 75vh on typical desktop screens. Adapt the height naturally to short viewports and mobile screens.

Place the main content in a balanced composition, with clear visual emphasis on my name and professional identity.

Include:

- A small introductory label.
- A large heading.
- A concise introduction.
- A primary CTA.
- A secondary CTA.
- Optional social links when real URLs are provided.
- A restrained decorative element that complements the text.

### Visual treatment

Use the supplied palette to create subtle depth rather than overwhelming the entire background with color.

Possible techniques include:

- A soft radial gradient.
- A translucent pink decorative shape.
- A restrained abstract geometric accent.
- A thin outlined circle or layered shape.
- A subtle gradient underline.
- A carefully positioned floating visual detail.

Choose one coherent decorative direction rather than combining every effect.

The visual should enhance the hero without competing with the heading.

Avoid a giant generic stock illustration or a random 3D object unrelated to the content.

## 7. Four-Icon Navigation Dock

This is a signature interface element and must receive special design attention.

Place a compact navigation dock horizontally centered near the lower part of the initial viewport.

It must contain exactly four icons:

1. Home.
2. Skills.
3. Education.
4. Contact Me.

Do not add Projects as a fifth icon.

### Appearance

Use a pill-shaped or softly rounded horizontal surface.

Possible treatments include:

- A white or near-white background.
- A subtle border.
- A restrained shadow.
- Comfortable icon spacing.
- Deep-purple icons.
- A clear selected state.
- A subtle active indicator.

The result should look refined and intentional, not like a large generic mobile app toolbar.

### Interaction states

Design distinct default, hover, focus, active, and pressed states.

On hover or keyboard focus, reveal a concise tooltip or label.

On touch devices, ensure that visitors can identify every navigation item without relying on hover.

When the active section changes, animate the selected indicator subtly.

The dock must not cover section headings, buttons, or form controls.

On mobile, preserve comfortable touch targets and prevent horizontal overflow.

## 8. Animation and Motion Direction

Motion should feel smooth, restrained, and purposeful.

Use motion to establish hierarchy, guide attention, and provide feedback.

Do not animate every element simply because an animation library is available.

### Hero entrance

Use a coordinated entrance sequence:

- Introductory label appears first.
- Main heading follows.
- Supporting paragraph appears next.
- CTA buttons appear last.

Use restrained opacity and vertical movement.

Avoid dramatic zooms, elastic bouncing, and long delays.

### Decorative animation

Select one or two subtle effects for the hero, such as:

- A slow-moving gradient.
- A gently floating decorative shape.
- A restrained animated highlight.
- A small looping accent with very low visual intensity.

Keep movement slow and unobtrusive.

### Scroll reveals

Use subtle reveals for selected section headings and project cards.

Avoid hiding all page content until JavaScript triggers an animation.

Avoid large stagger delays that force visitors to wait for content.

### Micro-interactions

Add carefully designed feedback to:

- CTA buttons.
- Project cards.
- Navigation icons.
- Text links.
- Form fields.
- Submit button states.

Prefer short transitions and consistent easing.

Use CSS transitions for simple interactions and the motion library for coordinated sequences.

Respect `prefers-reduced-motion` and ensure all important information remains available when animations are reduced or disabled.

## 9. Button Design

Create a reusable button style with consistent dimensions, typography, radius, and interaction behavior.

Primary buttons should use a strong palette color with readable text.

Secondary buttons may use an outlined or quiet surface treatment.

Provide:

- Hover feedback.
- Pressed feedback.
- Keyboard focus.
- Disabled state.
- Appropriate contrast.
- Consistent transition timing.

Avoid oversized pill buttons everywhere, excessive glow, and gradients on every interactive element.

Buttons must have clear labels describing their actions.

## 10. Projects Design

The projects section should feel like a curated portfolio rather than a generic list of boxes.

Use a refined grid or an editorial layout with carefully balanced project cards.

Each project should have a clear hierarchy:

1. Screenshot or visual preview.
2. Project title.
3. Concise description.
4. Technology labels.
5. Live Demo and GitHub links when available.

Give screenshots consistent aspect ratios and prevent awkward image stretching.

Use subtle image movement, border changes, or surface transitions on hover.

Avoid extreme scaling and distracting 3D tilts.

Use small technology labels or tags, but do not turn every technology into a brightly colored badge.

Make project titles, descriptions, and links readable at a glance.

If a project has no real screenshot, use a tasteful neutral placeholder or a custom-created visual that accurately represents the project. Do not imply that an invented screenshot is the real working application.

## 11. Skills Design

Present skills in a visually structured, compact, and easy-to-scan format.

Use grouped layouts, understated iconography, typography, or a bento-style composition if appropriate.

Separate current skills from technologies being learned.

Use the supplied color palette consistently.

Avoid fake proficiency percentages, oversized skill meters, and decorative charts without useful meaning.

The design should communicate technical growth and practical capability without exaggeration.

## 12. Education Design

Use a calm, structured layout that prioritizes readability.

A vertical timeline is acceptable if it fits the design, with a subtle line, compact date labels, and clear qualification or course titles.

Alternatively, use a simple editorial list.

Avoid overly decorative timelines with large icons and unnecessary connector animations.

Keep missing personal information visibly editable.

Do not display fabricated qualifications as real facts.

## 13. Contact Section and Form

The contact section should feel welcoming, polished, and consistent with the rest of the site.

Use a balanced layout with a short invitation, contact details, optional social links, and a clear form.

### Form appearance

- Labels above inputs.
- Comfortable field heights.
- Consistent corner radii.
- Soft neutral surfaces.
- Restrained borders.
- A clear focus ring.
- Consistent spacing.
- A well-defined submit button.

Use the primary palette for focus and interactive states.

Error messages should be readable and placed near the relevant field.

Success or submission-status messages must not rely on color alone.

The form must contain Name, Email, and Message fields. Do not include Password.

Design empty, focused, invalid, submitting, and completed UI states where applicable.

Do not display a fake success message implying that an email was delivered if no sending service is connected.

## 14. Responsive Design

Use a mobile-first approach.

### Desktop

- Strong typographic hierarchy.
- Generous whitespace.
- Balanced hero composition.
- Well-proportioned project layouts.
- Compact centered navigation.

### Tablet

- Reduced spacing where necessary.
- Flexible grids.
- Controlled heading sizes.
- No cramped navigation.

### Mobile

- A readable hero heading.
- Naturally stacked content.
- Full-width or appropriately constrained form fields.
- Compact project cards.
- Comfortable touch targets.
- A centered four-icon dock.
- No horizontal overflow.
- No text hidden behind fixed elements.

Use fluid sizing and intentional breakpoints rather than relying on arbitrary device-specific pixel values.

Test short-height screens as well as narrow screens.

## 15. Accessibility as Part of the Visual Design

Accessibility must be integrated into the styling rather than added as an afterthought.

Provide:

- Sufficient color contrast.
- Visible keyboard focus.
- Clear active navigation states.
- Readable text sizes.
- Accessible icon labels.
- Properly associated form labels.
- Distinct error and status messages.
- Reduced-motion support.
- Comfortable interactive target sizes.

Never remove focus outlines without providing an equally visible replacement.

Do not rely exclusively on color, animation, or hover to communicate meaning.

## 16. Visual Effects to Avoid

Do not use:

- Excessive glassmorphism.
- Strong neon glow.
- Heavy shadows on every component.
- Too many gradients.
- Random decorative circles everywhere.
- Constant floating animations.
- Unnecessary parallax.
- Oversized animated cursors.
- Autoplay video or music.
- Large generic stock illustrations.
- Too many cards with identical layouts.
- Fake testimonials or client logos.
- Fake project statistics.
- Unrelated accent colors.
- Excessive transitions between every element.
- A navigation dock that blocks content.

The result should feel sophisticated because of its composition, spacing, typography, color balance, and interaction quality—not because it contains the maximum number of visual effects.

## 17. Final Visual Quality Review

Before considering the design complete, verify all of the following:

- The four required colors are defined and used consistently.
- The hero occupies approximately 75vh on suitable desktop viewports.
- The initial viewport has a clear visual hierarchy.
- The four-icon navigation is centered near the bottom of the initial viewport.
- Exactly four navigation icons are present.
- Active, hover, focus, and pressed states are visually coherent.
- Animations are subtle, smooth, and purposeful.
- The page remains attractive with reduced motion enabled.
- Project previews have consistent proportions.
- Skills are grouped clearly.
- Education remains readable and factual.
- Contact fields are aligned and visually consistent.
- Mobile layouts have no horizontal overflow.
- No element obstructs essential content.
- Typography, spacing, shadows, and radii follow a consistent design system.
- The final page looks custom-designed rather than like a generic template.

Use these guidelines as a coherent visual system. Make creative decisions where necessary, but do not abandon the defined color palette, navigation requirements, clean aesthetic, or restrained motion philosophy.