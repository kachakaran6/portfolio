# MASTER BUILD PROMPT — Karan Kacha Portfolio
> Paste this entire file into Antigravity as the project brief. It is self-contained: goals, stack, content, design language, animation spec, and execution steps are all included.

---

## 0. HOW TO USE THIS FILE (for the agent)

1. Read this whole document before writing any code.
2. If the **Stitch MCP** tool is available in this environment, use it FIRST to generate/refine the high-fidelity visual design (layout, spacing, color, typography) for each section listed in Section 4, using the "Design Direction" below as the prompt input to Stitch. Treat Stitch's output as the visual source of truth, then implement it in real code (do not just leave it as a static mock).
3. After Stitch design pass (or if Stitch is unavailable, use the Design Direction directly), implement the site as real, production-grade code — not a template, not a generic AI-portfolio look. Every section must look like it was hand-crafted by a senior designer-developer.
4. Build incrementally: scaffold → static layout/content → typography & grid polish → GSAP/anime.js scroll choreography → Three.js background layer → micro-interactions → responsiveness → performance pass.
5. Do not stop after a "good enough" first draft. Iterate visually against the reference screenshot described in Section 3 until spacing, contrast, and rhythm match that level of polish.

---

## 1. PROJECT GOAL

Build a **professional, classic, human-crafted-feeling** personal portfolio website for **Karan Kacha**, a Full Stack Developer. The site must:

- Feel like a real design studio built it — not a generic Bootstrap/AI template.
- Be a **single smooth-scrolling experience** (no jarring section jumps), using **Lenis or Anime.js-driven smooth scroll**.
- Use **anime.js (v3/v4)** for scroll-triggered choreography (text reveals, stagger-ins, counters, line-draws).
- Use **Three.js** for a subtle ambient background layer (particle field / wireframe geometry / line network) — atmospheric, never distracting, never blocking text legibility.
- Be classic and professional in tone: dark/light editorial layout, strong typographic hierarchy, generous whitespace, restrained color (1 accent color + neutrals), NOT neon-cyberpunk, NOT glassmorphism overload.
- Be fully responsive, accessible (reduced-motion respected), and performant (60fps scroll, lazy-loaded 3D).

---

## 2. TECH STACK

- **Framework:** Next.js 14+ (App Router) + TypeScript
- **Styling:** Tailwind CSS (utility-first, custom design tokens in `tailwind.config.ts`)
- **Smooth scroll:** `lenis` (Studio Freight) wired to anime.js/GSAP-style scroll triggers
- **Scroll animation:** `animejs` (v4) for element choreography + custom `ScrollObserver` (IntersectionObserver-based) to trigger anime.js timelines on scroll — OR GSAP ScrollTrigger if anime.js scroll-binding proves limited (agent's judgment, but prefer anime.js per brief)
- **3D layer:** `three.js` + `@react-three/fiber` + `@react-three/drei` (for an ambient particle/line-network canvas pinned behind hero + section backgrounds)
- **Fonts:** A serif/display pairing for headlines (e.g. "Instrument Serif" or "Fraunces") + clean grotesk for body (e.g. "Inter" or "General Sans") — self-hosted via `next/font`
- **Icons:** `lucide-react`
- **Form:** Resend or Formspree for the contact form (agent picks one, document the API key placeholder)
- **Deployment target:** Vercel

---

## 3. DESIGN DIRECTION (visual reference + Stitch prompt)

The attached reference screenshot ("Engineering Excellence Journal") shows the **tone** to aim for: bold oversized serif/grotesk headline mixing weights and an italic accent word in the brand color, a small numbered eyebrow label ("01 // IDENTITY" style), a faint graph-paper/grid texture background, a minimal node-network diagram floating on the right as ambient decoration, monospace micro-labels (coordinates, timestamps, "DATA_LOAD: 87.2% COMPLETE"), and a stark black/white/red-accent palette with two pill/outline CTA buttons.

**Adapt this tone for Karan, do not copy it verbatim.** Direction:

- **Palette:** Off-white/paper background (`#F7F6F2`) OR deep charcoal (`#0E0F12`) as base — pick ONE primary mode (recommend light "paper" mode with dark ink text, like the reference) + one accent color (deep red `#C8102E` or an editorial blue `#1F3FBF`) used sparingly for italics, links, underlines, and the 3D line network.
- **Typography:** Massive headline type (clamp 56px–120px), tight line-height, mixed weight (e.g. "Karan Kacha —" in black sans, then an italicized accent word in the display serif and accent color, e.g. *Engineering*, then "Excellence." in black again) — mirrors the reference's rhythm without copying its words.
- **Eyebrow labels:** small uppercase tracked-out labels with a number prefix, e.g. `01 // IDENTITY`, `02 // CAPABILITIES`, `03 // PROJECTS`, `04 // EDUCATION`, `05 // CONTACT` — one per section, top-left, in accent color.
- **Texture:** faint 1px graph/grid background (CSS `background-image` linear-gradient grid, very low opacity) behind hero and footer.
- **Ambient diagram:** the Three.js layer should render a soft node-network / constellation that drifts slowly and reacts subtly to cursor parallax — positioned right side of hero, echoing the reference's "node graph," but built as real 3D (not a static image).
- **Monospace micro-copy:** small mono-font details in corners — scroll position indicator, a "STRUCTURAL_ANALYSIS" style status line in the footer, coordinate-style decorative text — to give that engineering-journal precision feel.
- **CTAs:** one solid filled button (`View Selected Work`) + one outline button (`Initiate Connection` → rename to `Get In Touch`).
- **Footer:** mirrors the reference's bottom bar — journal-style left label, nav links, X/Y coordinate decoration, all in mono caps.

Feed the above as the **Stitch design prompt**, per section, to get high-fidelity mockups before coding.

---

## 4. SITE STRUCTURE & CONTENT (use this real content verbatim — do not invent fake achievements)

### 4.1 Nav (sticky, shrinks on scroll)
`INDEX` `IDENTITY` `WORK` `EDUCATION` `CONTACT` — plus a hamburger on mobile. Include a live scroll-progress thin bar at the very top.

### 4.2 Hero — `01 // IDENTITY`
- Eyebrow: `01 // IDENTITY`
- Headline (split into staggered anime.js lines):
  - Line 1 (bold black/ink): **Karan Kacha —**
  - Line 2 (italic, accent color, display serif): **Full Stack**
  - Line 3 (bold black/ink): **Developer.**
- Subcopy: "I am an enthusiastic full stack developer eager to build robust and scalable web applications. Hands-on experience with React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB — focused on shipping innovative solutions and exceptional user experiences."
- CTAs: `View Selected Work` (scrolls to Work) · `Download Resume` → links to `https://www.kachakaran.me/assets/Karan_Resume-CCW6_wzY.pdf`
- Socials row: LinkedIn / GitHub / Twitter-X (use placeholder hrefs, agent should ask user for real URLs or leave `#`)
- Right side: Three.js ambient node-network canvas

### 4.3 About — `02 // OVERVIEW`
Use this text (lightly reflow into 2 columns: short label column + paragraph column):
> "I am an enthusiastic and adaptable full stack developer with a strong passion for building efficient and user-friendly web applications. Though I'm early in my career, I've gained practical experience with technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development started from a curiosity about how things work, and it has grown into a deep commitment to learning and tackling new challenges. I enjoy collaborating with teams and solving problems to create high-quality solutions. Outside of coding, I'm always eager to explore new technologies and contribute to open-source projects."

### 4.4 Technologies — `03 // STACK`
Render as an animated tag/grid wall (stagger fade/scale-in on scroll): React, Next.js, Node.js, MySQL, PostgreSQL, MongoDB, JavaScript, TypeScript (if applicable), Tailwind CSS, Java, Python, AI/ML basics.

### 4.5 Education — `04 // EDUCATION`
Vertical timeline, anime.js draws the connecting line as you scroll:

- **2024 – 2026 — Master of Computer Applications (MCA), Parul University**
  "Currently pursuing an MCA with a specialization in Artificial Intelligence at Parul University. Also learning Java, building a strong foundation in programming and software development — combining AI and Java skills to work on intelligent systems, data processing, and advanced software solutions."
  Tags: `Java` `Python` `AI` `ReactJS`

- **2021 – 2024 — Bachelor of Business Administration (BBA), Smt. J.J. Kundaliya College**
  "A BBA gave me a solid understanding of business concepts, management principles, and organizational operations — complementing my technical skills from the MCA program and helping bridge business and technology, especially in AI and data-driven decision-making."
  Tags: `Communication` `Management` `Problem Solving`

### 4.6 Projects — `05 // PROJECTS`
Grid/list of project cards (image placeholder + hover tilt via anime.js, stagger reveal on scroll). Each card: title, one-line description, tech-tag pills, link if available.

1. **Trust Tracker** — An advanced expense tracker. `React` `Supabase` `Tailwind`
2. **HMS Core Dashboard** — A sophisticated full-stack hospital management dashboard featuring real-time data tracking and Telegram integration for instant notifications/alerts. `React` `Node.js` `MongoDB` `Tailwind` `Telegram Bot API`
3. **PU Vault** — A simple website where students can easily access all study materials — a one-stop solution for educational resources. `HTML` `CSS` `JavaScript`
4. **Aditya Construction** — A professional landing page for a construction firm showcasing craftsmanship, completed projects, and core services. `Tailwind` `React`
5. **Sonal Krupa Travels** — A dynamic landing page for a tours and travels agency with organized packages, destination highlights, and intuitive UX. `React` `Tailwind`
6. **AK Photography** — A portfolio website for a photographer to showcase work and attract clients. `Tailwind` `React`
7. **Game QA Tester Portfolio** — A specialized portfolio highlighting bug reporting skills, testing methodology, and game-mechanics understanding. `React` `Tailwind` `Framer Motion`

### 4.7 Contact — `06 // CONTACT`
- Heading: "Get In Touch"
- Form fields: Your Name, Your Email, Your Message, Submit button (wire to Resend/Formspree)
- Direct contact: phone `+91 9157587671`, email `karankacha6@gmail.com`

### 4.8 Footer (journal-style, mirrors reference tone)
Left: `ENGINEERING EXCELLENCE JOURNAL` style line reworked to e.g. `KARAN KACHA — PORTFOLIO JOURNAL · ©2026 [REF_000]`
Center/right: nav links repeated + mono decorative coordinates + `STRUCTURAL_INDEX` link back to top.

---

## 5. ANIMATION SPEC (anime.js + smooth scroll)

1. **Global smooth scroll:** Initialize `Lenis` on mount; sync its `scroll` event to update a scroll-progress CSS variable and to drive any anime.js timelines bound to scroll position (use `lenis.on('scroll', ...)` to update progress-based animations).
2. **Hero entrance:** On load, anime.js timeline staggers: eyebrow label fade-up → headline lines split-by-line fade/translateY (~40px) with slight rotation easing `easeOutExpo` → subcopy fade → CTA buttons scale-in → social icons stagger.
3. **Section eyebrow + headline reveal:** Each section's eyebrow label and headline animate in via IntersectionObserver-triggered anime.js (`translateY` + opacity, stagger per word/line), replaying only once.
4. **Timeline draw (Education):** An SVG/line path's `stroke-dashoffset` animated via anime.js as the section scrolls into view, simulating a hand-drawn connecting line between the two timeline entries.
5. **Project cards:** Stagger fade/scale-in (`scale: [0.95,1]`, `opacity`) as the grid enters viewport; on hover, a subtle anime.js-driven tilt/lift (translateY -6px, shadow grow) — keep performant, use `transform` only.
6. **Tech tags wall:** Stagger pop-in with slight random delay offset for organic feel.
7. **Counters/micro-copy:** Footer "DATA_LOAD" style mono line can animate a percentage count-up once on first footer view, purely decorative.
8. **Cursor-reactive 3D parallax:** Three.js scene's camera or node-network rotation offsets slightly toward cursor position (lerped, not snapped).
9. **Reduced motion:** Wrap all anime.js/Three.js entrance effects in a `prefers-reduced-motion` check — fall back to instant opacity-only transitions and a static (non-animating) Three.js frame.
10. **Performance:** Cap Three.js particle count appropriately for mobile (detect viewport/GPU tier), throttle to `devicePixelRatio` max 2, pause the render loop when the canvas is out of viewport (IntersectionObserver).

---

## 6. THREE.JS BACKGROUND SPEC

- A single `<Canvas>` (react-three-fiber) fixed/absolute behind the hero (and optionally a fainter, slower version persisting behind later sections via a shared scroll-mapped camera).
- Content: a sparse **node-network** — points connected by thin lines (similar restrained feel to the reference's diagram), accent-color nodes pulsing very subtly, connecting lines at low opacity (`0.15–0.3`).
- Slow autonomous drift (continuous rotation, very slow, ~0.02 rad/s) + cursor-parallax offset.
- No bloom/heavy postprocessing — keep it crisp and "engineering blueprint" minimal, not gamer-RGB.

---

## 7. FOLDER STRUCTURE (suggested)

```
/app
  /layout.tsx
  /page.tsx
  /globals.css
/components
  /Nav.tsx
  /Hero.tsx
  /About.tsx
  /TechStack.tsx
  /Education.tsx
  /Projects.tsx
  /Contact.tsx
  /Footer.tsx
  /three/NodeNetwork.tsx
  /three/SceneCanvas.tsx
  /anim/useScrollReveal.ts
  /anim/useLenis.ts
/lib
  /content.ts        # all copy from Section 4 as typed objects, single source of truth
/public
  /fonts
  /resume
```

---

## 8. STITCH MCP INSTRUCTIONS (for the agent)

Since the Stitch MCP is already configured in this environment:

1. For each major section (Hero, About, Tech Stack, Education, Projects, Contact, Footer), call the Stitch design tool with a prompt assembled from **Section 3 (Design Direction)** + the specific section's content from **Section 4**.
2. Generate 2 variants per section, pick the one that best matches "classic, professional, human-made editorial" tone (reject anything generic/templated/glassmorphic).
3. Export the chosen layout's spacing, type scale, and color values, and translate them directly into the Tailwind config + component markup — Stitch is for visual direction, the actual implementation must be hand-written React/Tailwind/Three.js/anime.js code per Sections 5–7.
4. Do not let Stitch output replace the animation/3D requirements in Sections 5–6 — those must be implemented in code regardless of what Stitch produces statically.

---

## 9. DEFINITION OF DONE

- [ ] Lenis smooth scroll active site-wide, feels buttery, no scroll-jank
- [ ] All anime.js scroll-triggered animations in Section 5 implemented and replay-once correctly
- [ ] Three.js node-network renders behind hero, parallaxes with cursor, respects reduced-motion
- [ ] All real content from Section 4 present verbatim, no lorem ipsum, no placeholder achievements
- [ ] Fully responsive from 360px to 1920px+, nav collapses to hamburger on mobile, 3D layer degrades gracefully on low-power devices
- [ ] Lighthouse performance ≥ 85 on mobile, accessibility ≥ 95
- [ ] Contact form actually sends (Resend/Formspree wired, not a dummy alert)
- [ ] Resume link and email/phone are correct and clickable (`mailto:`, `tel:`)
- [ ] Visual polish reviewed against Section 3 reference tone — passes a "does this look hand-designed by a senior studio" gut check