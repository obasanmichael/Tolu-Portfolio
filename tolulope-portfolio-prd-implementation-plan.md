# Personal Portfolio Website PRD & Implementation Plan

**Project Name:** Tolulope Obasan Portfolio  
**Version:** v1.0  
**Document Type:** Product Requirements Document + Implementation Plan  
**Primary Goal:** Build a simple, premium, memorable personal portfolio that presents Tolulope Obasan as a product-minded full-stack engineer with strong frontend, backend, mobile, and real-world project experience.

---

## 1. Product Summary

This portfolio website will be a clean, unique, and well-branded single-page website for Tolulope Obasan. The site should communicate who he is as an engineer, the type of software he builds, his technical stack, work attitude, project experience, professional background, and how to contact him.

The website must not feel like a generic AI-generated portfolio. It should feel intentionally designed, simple, sharp, smooth, and modern. The design should have a strong brand feel while staying straightforward and easy to navigate.

The v1 version will not include a personal picture. The brand should rely on typography, layout, micro-interactions, visual rhythm, project presentation, and subtle motion design.

---

## 2. Positioning Statement

The portfolio should position Tolulope as:

> A full-stack engineer building practical software systems that solve real product and business problems.

Supporting identity:

- Product-minded full-stack engineer
- Strong frontend execution
- Backend and systems awareness
- Mobile and web product builder
- Practical engineer who values clarity, reliability, and maintainability
- Able to work across product, engineering, and user experience

---

## 3. Target Audience

### Primary Audience

1. **Recruiters**
   - Need to understand skills, experience, projects, and CV quickly.

2. **Engineering Managers**
   - Need to see technical maturity, project ownership, and engineering judgment.

3. **Founders / Clients**
   - Need to see credibility, product sense, and ability to build business-facing systems.

### Secondary Audience

1. Fellow developers
2. Technical collaborators
3. People discovering Tolulope through LinkedIn, GitHub, X, or direct referral

---

## 4. Core Objectives

The website should:

1. Present Tolulope clearly as a serious and capable engineer.
2. Showcase selected projects in a way that feels like real product work, not just a list of cards.
3. Provide a strong first impression within 5 seconds.
4. Allow visitors to download the CV easily.
5. Allow visitors to contact Tolulope through WhatsApp using a contact form.
6. Link to social media and developer profiles.
7. Feel visually polished, smooth, and intentionally designed.
8. Avoid generic, excessive, or meaningless animations.
9. Be fast, responsive, accessible, and SEO-friendly.
10. Be easy to update with new projects later.

---

## 5. Design Direction

### Recommended Brand Direction

**Product Builder + Personal Studio**

The site should feel like a blend of:

- A modern SaaS/product landing page
- A personal engineering profile
- A minimal creative studio website

It should not look like a plain resume page, but it should also not become overly decorative.

---

## 6. Brand Feel

### Desired Feel

- Clean
- Sharp
- Confident
- Smooth
- Technical
- Premium
- Minimal but not empty
- Designed but not over-designed
- Professional with slight personality

### Avoid

- Generic gradient-heavy AI portfolio look
- Random 3D blobs
- Too many scroll reveal animations
- Overused typewriter effects everywhere
- Weak project cards
- Excessive glassmorphism
- Fake “AI SaaS” aesthetic
- Poor contrast
- Long paragraphs
- Cluttered layouts
- Animations that slow down the site

---

## 7. Visual Style

### Theme

Dark-first theme with clean neutral sections.

Recommended base:

- Background: near-black / charcoal
- Text: off-white / soft white
- Secondary text: cool gray
- Brand accent: electric blue, cyan, violet, or lime-green
- Cards: dark gray with subtle border
- Borders: low-opacity neutral stroke
- Highlights: brand accent glow used sparingly

### Suggested Color Direction

Option 1: **Electric Cyan Brand**

- Background: `#080A0F`
- Surface: `#10141D`
- Surface Alt: `#151A24`
- Text: `#F5F7FA`
- Muted Text: `#9BA3AF`
- Accent: `#38BDF8`
- Accent Soft: `rgba(56, 189, 248, 0.15)`

Option 2: **Violet-Tech Brand**

- Background: `#09090B`
- Surface: `#111113`
- Surface Alt: `#18181B`
- Text: `#FAFAFA`
- Muted Text: `#A1A1AA`
- Accent: `#8B5CF6`
- Accent Soft: `rgba(139, 92, 246, 0.15)`

Recommendation: **Electric Cyan Brand**  
Reason: It feels technical, clean, modern, and works well with cursor trails, code-like UI details, and dark backgrounds.

---

## 8. Typography

Use a strong, modern font pairing.

### Recommended Fonts

Option 1:

- Headings: `Space Grotesk`
- Body: `Inter`

Option 2:

- Headings: `Geist Sans`
- Body: `Geist Sans`

Option 3:

- Headings: `Satoshi`
- Body: `Inter`

Recommendation:

- Use **Space Grotesk** for headings.
- Use **Inter** for body text.

Reason: Space Grotesk adds personality without making the site look playful. Inter keeps body text readable and professional.

---

## 9. UX Principles

The portfolio should be built around these UX principles:

1. **Immediate clarity**
   - Visitors should understand who Tolulope is within seconds.

2. **Short copy**
   - Use concise paragraphs and strong section headings.

3. **Smooth visual rhythm**
   - Sections should feel connected, not like unrelated blocks.

4. **Purposeful motion**
   - Animations should support the brand, not distract from it.

5. **Project-first credibility**
   - Projects should show real product thinking and contribution.

6. **Low friction contact**
   - Visitors should be able to contact Tolulope quickly through WhatsApp, email, or social links.

---

## 10. Site Architecture

The v1 website should be a single-page website.

### Route Structure

```txt
/
```

Future optional routes:

```txt
/projects/jobtrackr
/projects/travely
/projects/cbm-emr
/projects/ravebil
```

For v1, project details will be presented on the homepage.

---

## 11. Main Navigation

The navigation should be sticky or subtly fixed.

### Nav Items

- About
- Stack
- Projects
- Experience
- Contact
- Download CV

### Desktop Behavior

- Logo/name on the left
- Nav links centered or right-aligned
- Download CV button on the far right

### Mobile Behavior

- Minimal hamburger menu
- Smooth slide-down or full-screen menu
- Clear CTA for CV download

---

## 12. Page Sections

## 12.1 Hero Section

### Purpose

Create a strong first impression and communicate Tolulope’s identity clearly.

### Content

Should include:

- Name
- Role
- Short positioning line
- Animated text line
- CTA buttons
- Social links
- Small status/availability badge

### Suggested Copy

Headline:

> I build practical software systems for real product and business problems.

Subtext:

> I’m Tolulope Obasan, a full-stack engineer working across web, backend, mobile, and product-focused software development.

Animated role text examples:

```txt
Full-stack Engineer
Frontend-focused Product Builder
React / Next.js Developer
Backend-aware Software Engineer
Mobile + Web Product Builder
```

CTA buttons:

- View Projects
- Download CV
- Contact Me

### Hero Visual Concept

No personal picture for v1.

Instead, use a designed “engineer profile card” or “system card” on the right side.

Example card content:

```txt
status: building
focus: full-stack products
current: JobTrackr
stack: Next.js / NestJS / PostgreSQL
availability: open to opportunities
```

This gives personality without needing a photo.

---

## 12.2 About Section

### Purpose

Briefly explain who Tolulope is and how he approaches engineering.

### Suggested Copy Direction

Short paragraph:

> I’m an engineer who enjoys turning unclear product ideas and business needs into structured, usable software. I care about building interfaces that feel polished, APIs that are understandable, and systems that can be maintained beyond the first release.

Additional short points:

- I like clarity before complexity.
- I build with user experience and maintainability in mind.
- I care about reliability, not only visuals.
- I enjoy working across frontend, backend, and product decisions.

---

## 12.3 Stack Section

### Purpose

Show technical capability without dumping a random technology list.

### Stack Groups

#### Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- TanStack Query

#### Backend

- Node.js
- NestJS
- FastAPI
- PostgreSQL
- REST APIs

#### Mobile

- React Native

#### Tools & Infrastructure

- Git
- GitHub
- Vercel
- Docker
- Supabase
- Firebase
- Sentry
- CloudWatch
- Grafana

### Design

Use categorized stack cards or animated pill clusters.

Possible interaction:

- Hovering on a category subtly expands it.
- Stack pills can gently shift or glow.
- Avoid excessive bouncing.

---

## 12.4 Engineering Principles / Work Attitude Section

### Purpose

Make the portfolio feel personal and mature.

### Content Ideas

Use 4 to 5 principles:

1. **Clarity before complexity**
   - I prefer simple, understandable solutions before adding layers of abstraction.

2. **Product thinking**
   - I care about what the software is supposed to achieve, not only the code.

3. **Reliability matters**
   - I pay attention to stability, error states, edge cases, and maintainability.

4. **Polished user experience**
   - I believe good engineering should feel smooth to the person using the product.

5. **Documentation and handover**
   - I value decisions that future engineers can understand and maintain.

### Design

Use numbered principle blocks or a split layout with animated active principle.

Possible animation:

- Principles rotate one at a time in a “currently thinking about” panel.
- On hover, each principle reveals a short explanation.

---

## 12.5 Projects Section

### Purpose

Show credibility through selected work.

The projects should feel like product case studies, not just GitHub cards.

### Project 1: JobTrackr

**Type:** SaaS / Web + Mobile Product  
**Role:** Full-stack Engineer / Product Builder  
**Status:** In development or MVP, depending on current state  
**Stack:** Next.js, React Native, NestJS, PostgreSQL, TypeScript, Tailwind CSS, React Query, Zustand

**Description:**

> JobTrackr is a web and mobile job board and application tracking platform that helps users search for jobs, track applications, manage deadlines, review resumes, and receive job-alignment suggestions from one organized dashboard.

**Key Features:**

- Job board/search experience
- Application tracking dashboard
- Job matching
- Resume parsing
- Resume review
- Resume-to-job alignment suggestions
- Mobile app
- Admin dashboard
- Custom backend API

**Links:**

- Web repo
- Mobile repo
- Backend repo
- Live demo, if available

---

### Project 2: Travely

**Type:** Travel Recommendation Web App  
**Role:** Full-stack / Frontend + Recommendation Logic Integration  
**Stack:** React, TypeScript, Tailwind CSS, FastAPI, Firebase, Python

**Description:**

> Travely is a travel recommendation system that suggests destinations based on user budget, preferred activities, lodging interests, and destination features using content-based filtering and fuzzy logic.

**Key Features:**

- Destination recommendation
- Budget-aware fuzzy logic scoring
- Content-based filtering
- User preference collection
- Firebase authentication / preference storage
- FastAPI recommendation backend

**Links:**

- GitHub repo
- Live demo, if available

---

### Project 3: CBM-EMR

**Type:** Healthcare / EMR Web Application  
**Role:** Lead Frontend Engineer  
**Stack:** React, TypeScript, Tailwind CSS, and other confirmed stack items

**Description:**

> CBM-EMR is a healthcare-focused electronic medical records web application. As Lead Frontend Engineer, I worked on structuring and implementing key frontend interfaces for managing patient, clinical, and operational workflows.

**Key Contributions:**

- Led frontend implementation
- Built reusable UI components
- Worked on dashboard and workflow screens
- Improved frontend structure and user experience
- Collaborated with team members on product delivery

**Links:**

- Live link, if public
- GitHub repo, if public
- Case summary, if private

Note: If the project is private, show a case-study summary without exposing confidential information.

---

### Project 4: Ravebil / Client Websites

**Type:** Client Website / Digital Presence  
**Role:** Web Developer / Founder  
**Stack:** Next.js, React, Tailwind CSS, Vercel, SEO tools, DNS/domain tools

**Description:**

> Ravebil is my web design and digital presence work for service businesses, focused on building clean websites that improve credibility, online visibility, lead capture, and customer trust.

**Key Work:**

- Business websites
- Landing pages
- SEO setup
- Google indexing
- Domain and hosting setup
- Lead capture forms
- Client handover and support

**Links:**

- Ravebil website, if available
- Selected client websites
- Case examples

---

## 12.6 Experience Section

### Purpose

Show professional experience clearly.

### Format

Use a timeline or structured experience cards.

Each entry should include:

- Role
- Company
- Duration
- Short summary
- Key responsibilities
- Tools used

### Current Experience Direction

For engineering/SRE-style work:

Possible content themes:

- Engineering support
- Production issue investigation
- System reliability
- Debugging
- Observability tools
- Architecture understanding
- Documentation
- Cross-functional collaboration

Example wording:

> I work across engineering support and reliability-focused tasks, helping investigate production issues, understand system behavior, support debugging workflows, and improve technical visibility through documentation and observability practices.

This should be adjusted with the exact company and role details before implementation.

---

## 12.7 Resume / CV Section

### Purpose

Make CV access obvious.

### Requirements

- Add a visible “Download CV” button in hero.
- Add another CV CTA near the bottom.
- Store CV in `/public/tolulope-obasan-cv.pdf`.
- Use proper `download` behavior.

### Example

```tsx
<a href="/tolulope-obasan-cv.pdf" download>
  Download CV
</a>
```

---

## 12.8 Contact Section

### Purpose

Allow visitors to send a message to Tolulope through WhatsApp.

### Form Fields

- Name
- Email
- Message

### Behavior

When submitted:

1. Validate fields.
2. Encode form values into a WhatsApp message.
3. Open WhatsApp URL in a new tab.

### WhatsApp Message Template

```txt
Hello Tolulope, my name is [Name].

Email: [Email]

[Message]
```

### WhatsApp URL Format

```txt
https://wa.me/YOUR_PHONE_NUMBER?text=ENCODED_MESSAGE
```

### Validation Rules

- Name is required.
- Email must be valid.
- Message must be at least 10 characters.
- Show clean error messages.

### Optional v2 Enhancement

- Send backup email using Resend.
- Store contact submissions in Supabase.
- Add spam protection.

For v1, WhatsApp-only is enough.

---

## 13. Social Links

The footer and hero should include links to:

- LinkedIn
- X / Twitter
- Instagram
- WhatsApp
- GitHub
- Email

Even though the user mentioned LinkedIn, X, Instagram, and WhatsApp, GitHub should also be included because this is an engineering portfolio.

---

## 14. Animation & Interaction Requirements

The animation should be memorable but controlled.

The site must not depend only on normal scroll reveal animations.

### Required Motion Ideas

## 14.1 Cursor Trail

Create a subtle cursor trail using the brand accent color.

### Behavior

- Trail follows cursor smoothly.
- Trail is subtle, not distracting.
- Disabled on touch/mobile devices.
- Should not hurt performance.
- Should respect `prefers-reduced-motion`.

### Implementation Options

Option A:

- Use Framer Motion with `motion.div`.
- Track mouse position.
- Animate a soft glowing circle following the cursor.

Option B:

- Use canvas-based trail for smoother effects.
- Slightly more complex but more flexible.

Recommendation for v1:

- Use Framer Motion-based cursor glow.
- Add optional tiny trailing particles only if performance stays good.

---

## 14.2 Animated Role Text

Hero should include an infinite changing text effect.

Example:

```txt
Full-stack Engineer
Product-minded Developer
Frontend Lead
Mobile + Web Builder
Backend-aware Engineer
```

### Behavior

- Text changes every few seconds.
- Should animate smoothly.
- Use blur/fade/slide transition.
- Avoid harsh blinking.

Recommended library:

- Framer Motion `AnimatePresence`.

---

## 14.3 Typewriter Sentence

Use one typed sentence effect, preferably in the hero or profile card.

Example:

```txt
currently building: JobTrackr
```

or

```txt
shipping products across web, backend, and mobile.
```

### Rules

- Do not overuse.
- Only one typewriter element on the page.
- It should add brand personality, not reduce readability.

---

## 14.4 Interactive Project Cards

Project cards should have premium interactions.

### Behavior

- Hover changes border accent.
- Subtle 3D tilt or light tracking effect.
- Tags glow lightly.
- Card can reveal “View details” or repo links on hover.
- No excessive scaling.

Implementation options:

- Framer Motion hover animation
- CSS radial gradient following cursor inside each card

---

## 14.5 Section Transition Rhythm

Instead of basic scroll reveals, use:

- Sticky section headings
- Smooth opacity changes
- Animated underline movement
- Active section indicator
- Text mask reveal for headings
- Subtle parallax background grid

### Important

Animations must be tasteful. The site should feel smooth, not noisy.

---

## 15. Accessibility Requirements

The site must:

1. Use semantic HTML.
2. Have proper heading hierarchy.
3. Support keyboard navigation.
4. Maintain strong contrast.
5. Use visible focus states.
6. Respect `prefers-reduced-motion`.
7. Disable cursor trail on mobile/touch devices.
8. Provide accessible labels for social icons.
9. Ensure contact form errors are readable by screen readers.

---

## 16. Performance Requirements

The site should:

1. Load quickly.
2. Avoid heavy animation libraries beyond Framer Motion.
3. Avoid unnecessary images in v1.
4. Use optimized fonts.
5. Minimize client components where possible.
6. Keep animation logic isolated.
7. Avoid heavy particle effects.
8. Score well on Lighthouse.

### Target Lighthouse Scores

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

---

## 17. SEO Requirements

The site should include:

- Proper page title
- Meta description
- Open Graph image
- Twitter card metadata
- Structured page headings
- Sitemap
- Robots file
- Canonical URL
- Descriptive project content
- Social links

### Suggested Meta Title

```txt
Tolulope Obasan — Full-Stack Engineer
```

### Suggested Meta Description

```txt
Portfolio of Tolulope Obasan, a full-stack engineer building practical software systems across web, backend, mobile, and product-focused applications.
```

---

## 18. Tech Stack

### Core Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

### UI / Utility Libraries

- Lucide React
- React Hook Form
- Zod
- clsx
- tailwind-merge

### Optional

- next-themes, if light/dark theme toggle is added
- MDX, if case study pages are added later

---

## 19. Suggested Project Structure

```txt
portfolio/
├── public/
│   ├── tolulope-obasan-cv.pdf
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── StackSection.tsx
│   │   │   ├── PrinciplesSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── motion/
│   │   │   ├── CursorTrail.tsx
│   │   │   ├── RotatingText.tsx
│   │   │   ├── TypewriterText.tsx
│   │   │   └── MagneticButton.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── StackPill.tsx
│   │       └── SocialLink.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── stack.ts
│   │   ├── socials.ts
│   │   └── experience.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── whatsapp.ts
│   └── types/
│       └── index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 20. Data Structure

Use data files so the portfolio is easy to update.

### Example Project Object

```ts
export const projects = [
  {
    name: "JobTrackr",
    type: "Web + Mobile SaaS",
    role: "Full-stack Engineer",
    description:
      "A job board and application tracking platform for managing job searches, resumes, deadlines, and application progress.",
    stack: ["Next.js", "React Native", "NestJS", "PostgreSQL", "TypeScript"],
    highlights: [
      "Job search and tracking dashboard",
      "Resume parsing and review",
      "Job matching and application suggestions",
      "Mobile app and admin dashboard"
    ],
    links: {
      webRepo: "",
      mobileRepo: "",
      backendRepo: "",
      live: ""
    }
  }
];
```

---

## 21. Component Plan

### Core Components

#### `Navbar`

Responsibilities:

- Render navigation links.
- Handle mobile menu.
- Include CV download CTA.

#### `HeroSection`

Responsibilities:

- Render headline.
- Render animated role text.
- Render CTA buttons.
- Render social links.
- Render profile/system card.

#### `CursorTrail`

Responsibilities:

- Track cursor.
- Render soft brand-colored glow.
- Disable on mobile.
- Respect reduced motion.

#### `RotatingText`

Responsibilities:

- Rotate through role labels.
- Animate entry and exit.
- Loop infinitely.

#### `TypewriterText`

Responsibilities:

- Type one brand sentence.
- Loop or finish once depending on selected behavior.

#### `ProjectCard`

Responsibilities:

- Render project details.
- Render stack tags.
- Render links.
- Handle hover animation.

#### `ContactSection`

Responsibilities:

- Render form.
- Validate inputs.
- Build WhatsApp URL.
- Open WhatsApp with encoded message.

---

## 22. Implementation Plan

## Phase 1: Project Setup

### Tasks

1. Create Next.js project with TypeScript and Tailwind CSS.
2. Install required dependencies.
3. Configure Tailwind theme tokens.
4. Set up base layout.
5. Configure metadata.
6. Add global CSS variables.
7. Create project folder structure.

### Dependencies

```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge
```

Optional:

```bash
npm install next-themes
```

---

## Phase 2: Brand Foundation

### Tasks

1. Define color tokens.
2. Configure fonts.
3. Build reusable section wrapper.
4. Build reusable button component.
5. Build social link component.
6. Set page max-width and spacing rules.
7. Create background design system:
   - subtle grid
   - radial glow
   - accent highlights

### Output

A visually consistent foundation before sections are built.

---

## Phase 3: Motion System

### Tasks

1. Build `CursorTrail`.
2. Build `RotatingText`.
3. Build `TypewriterText`.
4. Build `MagneticButton`, if needed.
5. Add reduced motion support.
6. Test performance.

### Important

Motion should be implemented early so the design language is consistent across the site.

---

## Phase 4: Page Sections

### Tasks

1. Build Navbar.
2. Build Hero section.
3. Build About section.
4. Build Stack section.
5. Build Principles section.
6. Build Projects section.
7. Build Experience section.
8. Build Resume CTA section.
9. Build Contact section.
10. Build Footer.

---

## Phase 5: Project Content

### Tasks

1. Create `projects.ts`.
2. Add JobTrackr.
3. Add Travely.
4. Add CBM-EMR.
5. Add Ravebil/client websites.
6. Add correct links to repos/live sites.
7. Confirm project descriptions.
8. Confirm which projects are public/private.

---

## Phase 6: Contact Form

### Tasks

1. Build form with React Hook Form.
2. Add Zod schema.
3. Create WhatsApp message formatter.
4. Encode message.
5. Open WhatsApp in new tab.
6. Add fallback direct WhatsApp link.
7. Add form success state.

### WhatsApp Helper Example

```ts
export function createWhatsAppUrl({
  phoneNumber,
  name,
  email,
  message,
}: {
  phoneNumber: string;
  name: string;
  email: string;
  message: string;
}) {
  const text = `Hello Tolulope, my name is ${name}.\n\nEmail: ${email}\n\n${message}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
```

---

## Phase 7: Responsiveness

### Tasks

1. Optimize layout for mobile.
2. Test hero on small screens.
3. Ensure project cards stack properly.
4. Disable cursor trail on touch devices.
5. Test mobile menu.
6. Ensure contact form is easy to use on mobile.

---

## Phase 8: SEO & Metadata

### Tasks

1. Add title and meta description.
2. Add Open Graph metadata.
3. Add Twitter metadata.
4. Create OG image.
5. Add sitemap.
6. Add robots file.
7. Add canonical URL.
8. Add accessible alt text where needed.

---

## Phase 9: Testing

### Functional Tests

- Navigation links scroll to correct sections.
- CV download works.
- Social links open correctly.
- WhatsApp form opens WhatsApp with correct message.
- Mobile menu works.
- Project links work.
- No broken layout on mobile.

### Accessibility Tests

- Keyboard navigation works.
- Focus states are visible.
- Color contrast is strong.
- Form errors are readable.
- Reduced motion works.

### Performance Tests

- Run Lighthouse.
- Check animation smoothness.
- Check mobile performance.
- Remove unnecessary client-side code.

---

## Phase 10: Deployment

### Tasks

1. Push project to GitHub.
2. Deploy to Vercel.
3. Configure custom domain, if available.
4. Add environment variables if needed.
5. Upload CV PDF.
6. Test production build.
7. Check SEO preview.
8. Share portfolio link.

---

## 23. Acceptance Criteria

The v1 portfolio is complete when:

1. The homepage has all required sections.
2. The site has a distinct brand feel.
3. It does not look like a generic AI-generated portfolio.
4. Animations are smooth and purposeful.
5. Cursor trail works on desktop and is disabled on mobile.
6. Animated role text works.
7. Typewriter-style sentence works.
8. Projects are clearly presented.
9. CV can be downloaded.
10. Contact form opens WhatsApp with a formatted message.
11. Social links work.
12. The site is mobile responsive.
13. The site passes accessibility checks.
14. Lighthouse scores are strong.
15. The site is deployed publicly.

---

## 24. Content Checklist Needed Before Development

Before development starts, prepare:

1. Final CV PDF.
2. GitHub links for JobTrackr web, mobile, and backend repos.
3. GitHub/live link for Travely.
4. Public/private status for CBM-EMR.
5. Description of CBM-EMR responsibilities.
6. Links to Ravebil/client websites.
7. LinkedIn URL.
8. X/Twitter URL.
9. Instagram URL.
10. WhatsApp number in international format.
11. GitHub URL.
12. Preferred email address.
13. Final role title to display.
14. Domain name, if already owned.

---

## 25. Suggested Final Copy Draft

### Hero Headline

> I build practical software systems for real product and business problems.

### Hero Subtext

> I’m Tolulope Obasan, a full-stack engineer working across web, backend, mobile, and product-focused software development.

### About Copy

> I enjoy turning unclear product ideas into structured, usable software. My work cuts across frontend engineering, backend systems, mobile apps, and practical product execution. I care about clean interfaces, reliable systems, and software that makes sense to the people using it.

### Principles Intro

> I like building software with a clear sense of purpose, not just screens and features.

### Contact Copy

> Have a role, project, collaboration, or product idea worth discussing? Send me a message directly on WhatsApp.

---

## 26. Development Order Recommendation

Build in this order:

1. Brand foundation
2. Layout shell
3. Hero section
4. Motion system
5. Projects section
6. Stack section
7. About and principles sections
8. Experience section
9. Contact form
10. Footer
11. SEO
12. Testing and deployment

Reason:

The hero, motion system, and project section define the feel of the website. If those are weak, the whole site will feel weak. Build them early and refine before completing the rest.

---

## 27. v2 Ideas

After v1 launches, possible improvements include:

1. Dedicated project case study pages.
2. Blog/articles section.
3. Resume page instead of only PDF download.
4. Light/dark theme switcher.
5. Email backup for contact form.
6. Analytics dashboard.
7. CMS for project updates.
8. More advanced project filtering.
9. Interactive timeline.
10. Better project visuals and screenshots.

---

## 28. Final Direction

The v1 portfolio should be:

- Single-page
- Dark-first
- No personal picture
- Strong hero
- Smooth cursor trail
- Animated role text
- One tasteful typewriter effect
- Project-first
- Simple but premium
- Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
- Contact form that sends messages to WhatsApp
- CV download enabled

The final result should feel like a designed engineering brand, not a template.
