# Portfolio V2 Design Implementation Plan

## 1. Purpose of This Revision

The current portfolio direction is technically clean, but it still feels too close to a generic AI-generated developer portfolio. The next implementation pass should focus on stronger typography, a more intentional brand color, a sharper hero section, and custom-feeling motion.

The goal is not to add more decoration. The goal is to make the site feel deliberately designed.

## 2. Main Design Problems to Fix

### Current Issues

- The current blue accent color feels common and generic.
- The hero section feels too predictable: status badge, large heading, profile JSON card, buttons.
- The typography is too basic and does not create enough visual hierarchy.
- Text blocks are too explanatory in some sections.
- Animations are not distinctive enough.
- The UI feels clean, but not branded.
- The project cards are functional, but they need more editorial design and stronger spacing.
- The overall visual identity needs to feel more personal, less template-like.

### New Direction

The new direction should feel:

- Minimal but premium
- Clear from the first screen
- More editorial than dashboard-like
- More product-builder than “developer template”
- Dark-first, but warmer and less synthetic
- Animated in a controlled, memorable way

## 3. New Brand Direction

### Brand Feel

The portfolio should feel like a calm, confident engineering studio. It should communicate that Tolulope builds practical software systems with product sense, reliability, and strong frontend execution.

The design should avoid:

- Excessive gradients
- Neon blue developer aesthetics
- Overused terminal cards
- Too many pills and badges
- Generic animated blobs
- Long hero explanations
- Overcrowded sections

The design should use:

- Strong typography
- Controlled spacing
- Subtle motion
- Light green accent color
- Large readable text
- Few but meaningful visual elements
- Better section rhythm
- Short, sharp copy

## 4. Color System

### Primary Brand Color

Replace the current blue with a light green / mint accent.

Recommended primary accent:

```css
--brand: #9BEF8F;
```

This gives the portfolio a fresher and less generic identity.

### Supporting Colors

```css
--background: #070907;
--surface: #0D120D;
--surface-soft: #111811;
--border: rgba(155, 239, 143, 0.14);
--text-main: #F4F7F2;
--text-muted: #A5ADA2;
--text-soft: #6F7A6D;
--brand: #9BEF8F;
--brand-muted: rgba(155, 239, 143, 0.12);
--brand-border: rgba(155, 239, 143, 0.32);
```

### Accent Usage Rules

Use the green accent sparingly.

Use it for:

- Active navigation item
- Cursor trail
- CTA button background
- Small highlights
- Section eyebrow labels
- Text caret in typing animation
- Project status dot
- Border glow on hover

Do not use it for every icon, heading, border, and button at once. That will make the design feel cheap.

## 5. Typography Plan

The portfolio needs a stronger font system. The current typography feels too default.

### Recommended Font Pairing

Use:

- **Satoshi** or **Geist Sans** for general UI and body text
- **Clash Display** or **Cabinet Grotesk** for large hero/display headings

### Best Recommendation

Use:

- **Satoshi** for body/UI
- **Clash Display** for hero and major headings

This combination gives the site a more premium editorial/product feel.

### Font Usage

#### Display Font

Use for:

- Hero headline
- Large section headings
- Big numeric markers
- Selected project titles if needed

Example:

```css
font-family: var(--font-display);
```

#### Body Font

Use for:

- Paragraphs
- Navigation
- Buttons
- Cards
- Forms
- Labels

Example:

```css
font-family: var(--font-sans);
```

## 6. Font Size System

The design should use large type in key sections. This makes the portfolio more readable and visually confident.

### Hero Typography

```css
.hero-title {
  font-size: clamp(3.5rem, 8vw, 8.5rem);
  line-height: 0.92;
  letter-spacing: -0.07em;
}
```

Hero text should be big, not medium-sized.

### Section Headings

```css
.section-title {
  font-size: clamp(2.3rem, 5vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
}
```

### Body Text

```css
.body-large {
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.65;
}
```

### Small Labels

```css
.eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
```

## 7. Font Installation Options

### Option A: Use Google Fonts

Use `next/font/google` if the selected font is available there.

Good available options:

- Geist
- Space Grotesk
- Inter
- Manrope
- DM Sans

Recommended fallback if custom fonts are not being added manually:

- **Geist Sans** for body
- **Space Grotesk** for display headings

Install nothing extra. Use `next/font/google`.

Example:

```tsx
import { Geist, Space_Grotesk } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
```

### Option B: Use Local Premium Fonts

Use `next/font/local` if using downloaded font files.

Recommended local font pairing:

- Satoshi for body
- Clash Display for headings

Example structure:

```txt
src/
  assets/
    fonts/
      Satoshi-Variable.woff2
      ClashDisplay-Variable.woff2
```

Example setup:

```tsx
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.woff2",
  variable: "--font-sans",
});

const clash = localFont({
  src: "../assets/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-display",
});
```

### Recommendation

For fastest implementation, use:

- `Geist Sans`
- `Space Grotesk`

For the more premium version, use:

- `Satoshi`
- `Clash Display`

## 8. New Hero Section Direction

The hero should be redesigned completely.

### Remove or Reduce

Remove or reduce:

- The JSON/profile card on the right
- The long explanatory subtitle
- The generic “Full-stack Engineer” label placement
- Too many buttons in one row
- Heavy dashboard-like look

### New Hero Concept

The hero should feel like an editorial landing page.

Suggested layout:

```txt
Top left:
Tolulope Obasan

Center-left large headline:
I build useful software
for the web, mobile,
and real operations.

Animated typing line:
Currently building JobTrackr.
or
Focused on full-stack product engineering.

Short subtext:
Full-stack engineer working across frontend, backend, mobile, and reliability-focused software.

Primary CTA:
View selected work

Secondary CTA:
Download CV
```

### Better Hero Copy

Recommended hero headline:

```txt
I build useful software
for web, mobile,
and real operations.
```

Alternative:

```txt
Full-stack engineer
building practical
software products.
```

Alternative:

```txt
I turn product ideas
into reliable software
people can use.
```

Best option:

```txt
I build useful software
for web, mobile,
and real operations.
```

It is short, direct, and less generic.

### Hero Subtext

```txt
Full-stack engineer focused on frontend systems, backend APIs, mobile products, and polished user experiences.
```

Keep this short.

### Hero Micro Details

Instead of the JSON card, use a small horizontal “current focus” strip:

```txt
Current focus · JobTrackr · React Native · NestJS · Product engineering
```

Or use a small floating note:

```txt
Available for frontend, full-stack, and product engineering roles.
```

## 9. Animation System

The animations should feel custom, not like a generic scroll reveal package.

### Animation Principles

- Motion should support clarity, not distract.
- Avoid animating every element.
- Avoid excessive bouncing.
- Use soft transitions, masking, typing, and text replacement.
- Use animation mostly in the hero, project cards, and navigation.

## 10. Agreed Animation List

### 1. Hero Typing Text

The hero should include a typed line that changes between short phrases.

Example rotating phrases:

```txt
building JobTrackr.
designing polished interfaces.
shipping reliable products.
connecting frontend to real business workflows.
```

Behavior:

- Text types in character by character.
- Holds for a short moment.
- Deletes.
- Moves to next phrase.
- Shows a blinking green caret.

Implementation:

- Build a custom `TypingText.tsx` component.
- Do not use a typewriter package unless necessary.
- Use `useEffect`, `setTimeout`, and local state.

Component API:

```tsx
<TypingText
  phrases={[
    "building JobTrackr.",
    "designing polished interfaces.",
    "shipping reliable products.",
    "connecting frontend to real business workflows.",
  ]}
/>
```

### 2. Hero Word Swap

A key word in the hero can rotate smoothly.

Example:

```txt
I build useful software for [web / mobile / teams / operations].
```

Behavior:

- One word changes using vertical mask animation.
- Use `AnimatePresence` from `motion/react`.
- No flashy animation; just a clean word transition.

### 3. Cursor Trail

Use the light green brand color.

Behavior:

- Small soft dot follows cursor.
- Larger blurred aura trails behind.
- Disable on touch devices.
- Reduce intensity for accessibility.
- Do not make the cursor trail too large.

Visual style:

```css
background: rgba(155, 239, 143, 0.55);
box-shadow: 0 0 35px rgba(155, 239, 143, 0.28);
```

### 4. Magnetic Buttons

Primary buttons should respond subtly to cursor movement.

Use for:

- View selected work
- Download CV
- Contact me

Behavior:

- Button moves slightly toward cursor.
- Text/icon does not distort.
- Reset on mouse leave.

### 5. Project Card Hover Motion

Project cards should not only lift up. They should feel interactive.

Behavior:

- Card border brightens subtly.
- Card background gets slightly lighter.
- A small arrow moves diagonally.
- Project title shifts by 2px.
- Optional: soft radial glow follows mouse inside the card.

### 6. Section Heading Reveal

Use masking reveal, not basic fade-up.

Behavior:

- Section headings reveal from below with `clip-path` or overflow-hidden mask.
- Body text fades in after heading.
- Keep duration short.

### 7. Navigation Active Indicator

The nav active state should be cleaner.

Behavior:

- A small green dot or thin underline slides to active nav item.
- Avoid thick blue underline style.
- Nav should feel less default.

### 8. Reduced Motion Support

Add reduced motion handling.

Implementation:

- Use `useReducedMotion` from `motion/react`.
- Disable cursor trail, typing delete animation, and magnetic effects if the user prefers reduced motion.

## 11. Components to Build or Update

### New Components

```txt
src/components/animations/TypingText.tsx
src/components/animations/WordSwap.tsx
src/components/animations/CursorTrail.tsx
src/components/animations/MagneticButton.tsx
src/components/animations/RevealText.tsx
src/components/common/GlowCard.tsx
```

### Updated Components

```txt
src/components/sections/Hero.tsx
src/components/sections/Projects.tsx
src/components/sections/Stack.tsx
src/components/sections/Principles.tsx
src/components/common/Button.tsx
src/components/common/ProjectCard.tsx
src/app/globals.css
src/app/layout.tsx
```

## 12. Revised Page Structure

The site structure stays mostly the same, but the hero and section rhythm should change.

```txt
Hero
Selected Work
Stack
How I Work
Experience
Contact
Footer
```

Move projects closer to the top. The current stack appears too early and makes the portfolio feel like a resume page. Projects should come before stack because they prove ability better than listing tools.

### New Order

```txt
Hero
Selected Projects
Technical Stack
How I Work
Experience
Contact
```

## 13. Copy Direction

Reduce text volume.

### Current Style to Avoid

```txt
I build practical software systems for real product and business problems.
```

This is decent, but it has become slightly generic.

### Better Style

Use shorter, sharper text.

Hero:

```txt
I build useful software
for web, mobile,
and real operations.
```

Subtext:

```txt
Full-stack engineer focused on polished interfaces, backend APIs, mobile products, and reliable software delivery.
```

Project intro:

```txt
A few products and systems I have built or led.
```

Stack intro:

```txt
Tools I use to design, build, ship, and maintain software.
```

How I Work intro:

```txt
The principles I bring into every product and engineering workflow.
```

Contact intro:

```txt
Have a role, product, or project in mind? Send a message.
```

## 14. Section-Level Design Notes

### Hero

- Full viewport or near full viewport.
- Use very large text.
- Keep the hero clear and spacious.
- Remove the JSON card or replace it with a small minimal focus strip.
- Add typing text under the headline.
- Use one primary CTA and one secondary CTA.
- Use green accent on one or two words only.

### Projects

- Move this section immediately after hero.
- Use larger project cards.
- Add more whitespace.
- Use fewer bullet points.
- Each card should have:
  - Project name
  - Role
  - One-sentence description
  - Key features in compact form
  - Stack tags
  - Links
- Make JobTrackr the featured project.

Recommended layout:

```txt
Large featured JobTrackr card
Three smaller cards below:
Travely
CBM-EMR
Ravebil
```

This is better than four equal cards because JobTrackr is the strongest portfolio product.

### Stack

- Keep grouped stack, but reduce the visual weight.
- Make it feel like supporting evidence, not the main content.
- Use simple columns instead of large full-width cards if the current version feels too boxed.

### How I Work

- Keep the interactive principle section.
- Make the numbers bigger and use the display font.
- Add short descriptions only.
- Avoid long paragraphs.

### Experience

- Use timeline or role cards.
- Keep it concise.
- Focus on outcomes, systems, reliability, frontend leadership, and product delivery.

### Contact

- Make it visually distinct.
- Use a compact form.
- Submit should open WhatsApp with encoded message.
- Add social links beside or below form.
- Do not over-explain.

## 15. Implementation Steps

### Phase 1: Foundation

1. Replace color variables in `globals.css`.
2. Add new font setup in `layout.tsx`.
3. Update Tailwind theme if needed.
4. Replace all blue accent classes with brand green tokens.
5. Create reusable typography utility classes.

### Phase 2: Typography Upgrade

1. Add display and body fonts.
2. Update hero font sizes.
3. Update section headings.
4. Increase line-height readability for body text.
5. Reduce text blocks where copy is too long.
6. Add consistent letter spacing to headings and labels.

### Phase 3: Hero Redesign

1. Remove the current JSON card.
2. Rebuild hero layout around large editorial text.
3. Add typing text component.
4. Add focus strip or compact availability note.
5. Add cleaner CTA buttons.
6. Ensure mobile version still feels strong.

### Phase 4: Animation Components

1. Build `TypingText`.
2. Build `WordSwap`.
3. Build `CursorTrail`.
4. Build `MagneticButton`.
5. Build `RevealText`.
6. Add reduced-motion support.

### Phase 5: Project Section Upgrade

1. Move projects directly after hero.
2. Make JobTrackr a featured card.
3. Reduce project text.
4. Improve hover states.
5. Use the green brand accent carefully.
6. Add project link hierarchy.

### Phase 6: Polish Pass

1. Improve spacing between sections.
2. Fix mobile responsiveness.
3. Check contrast and readability.
4. Test animations on slower devices.
5. Test reduced motion.
6. Test WhatsApp contact form.
7. Review the site visually against the “not AI-looking” standard.

## 16. Suggested File Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    animations/
      CursorTrail.tsx
      MagneticButton.tsx
      RevealText.tsx
      TypingText.tsx
      WordSwap.tsx

    common/
      Button.tsx
      GlowCard.tsx
      ProjectCard.tsx
      SectionHeader.tsx
      SocialLinks.tsx

    sections/
      Hero.tsx
      Projects.tsx
      Stack.tsx
      Principles.tsx
      Experience.tsx
      Contact.tsx
      Footer.tsx

  data/
    projects.ts
    stack.ts
    experience.ts
    socials.ts

  lib/
    cn.ts
    whatsapp.ts
```

## 17. CSS Tokens to Add

Add these to `globals.css`:

```css
:root {
  --background: #070907;
  --surface: #0d120d;
  --surface-soft: #111811;
  --border: rgba(155, 239, 143, 0.14);

  --text-main: #f4f7f2;
  --text-muted: #a5ada2;
  --text-soft: #6f7a6d;

  --brand: #9bef8f;
  --brand-muted: rgba(155, 239, 143, 0.12);
  --brand-border: rgba(155, 239, 143, 0.32);
}
```

Optional background:

```css
body {
  background:
    radial-gradient(circle at 20% 10%, rgba(155, 239, 143, 0.08), transparent 28rem),
    linear-gradient(180deg, #070907 0%, #090c09 100%);
  color: var(--text-main);
}
```

Grid should be very subtle if used:

```css
.grid-bg {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 80px 80px;
}
```

Use this sparingly. The current grid is too dominant in the hero.

## 18. Example Hero Layout

```tsx
<section className="relative min-h-screen overflow-hidden px-6 pt-32 md:px-10">
  <div className="mx-auto flex max-w-6xl flex-col justify-center">
    <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand)]">
      Tolulope Obasan · Full-stack Engineer
    </p>

    <h1 className="max-w-5xl font-display text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.07em]">
      I build useful software for web, mobile, and real operations.
    </h1>

    <div className="mt-8 text-lg text-[var(--text-muted)]">
      Currently <TypingText phrases={["building JobTrackr.", "shipping product interfaces.", "working across web and mobile."]} />
    </div>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
      Full-stack engineer focused on polished interfaces, backend APIs, mobile products, and reliable software delivery.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <MagneticButton href="#projects">View selected work</MagneticButton>
      <MagneticButton href="/Tolulope-Obasan-CV.pdf" variant="secondary">
        Download CV
      </MagneticButton>
    </div>
  </div>
</section>
```

## 19. TypingText Component Logic

```tsx
"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export function TypingText({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 32,
  pause = 1200,
}: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setVisibleText(currentPhrase.slice(0, visibleText.length + 1));

          if (visibleText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setVisibleText(currentPhrase.slice(0, visibleText.length - 1));

          if (visibleText === "") {
            setIsDeleting(false);
            setPhraseIndex((current) => (current + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [visibleText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="text-[var(--brand)]">
      {visibleText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
```

## 20. Acceptance Criteria

The revision is complete when:

- The blue accent has been fully replaced with the green brand system.
- The hero no longer looks like a generic developer dashboard.
- The hero uses large display typography.
- The hero has a working typed text animation.
- The cursor trail uses the brand color and feels subtle.
- Projects appear before stack.
- JobTrackr is visually treated as the featured project.
- Copy is shorter and sharper.
- The site remains readable on desktop and mobile.
- Animations work smoothly without overwhelming the page.
- Reduced motion is respected.
- The portfolio feels intentionally designed, not template-generated.

## 21. Final Recommendation

Do not keep adding visual elements. The upgrade should come from better typography, spacing, hierarchy, and controlled motion.

The strongest version of this portfolio should feel like this:

```txt
Large words.
Short copy.
Strong projects.
Subtle green brand.
Smooth custom motion.
No unnecessary noise.
```
