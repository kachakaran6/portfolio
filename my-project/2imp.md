# FIX-IT PASS — Portfolio Refinement

The Hero section is good and close to the reference — keep its structure. Everything after it needs work. Apply these fixes across the whole site.

## 1. Replace all cryptic/technical labels with normal, professional, human-readable labels

Remove every "engineering journal / system" style decorative label. A normal visitor (recruiter, client) must understand every label at a glance — no slang, no fake-data, no coordinates.

Replace like this:
- `01 // IDENTITY` → `About Me` (or just remove the number-slash style entirely, keep a simple small uppercase tag like `INTRODUCTION`)
- `02 // OVERVIEW` → `About`
- `03 // STACK` → `Skills & Technologies`
- `04 // EDUCATION` → `Education`
- `05 // PROJECTS` → `Selected Work` / `Projects`
- `06 // CONTACT` → `Get In Touch`
- Remove entirely: `X: 23.02 // Y: 72.57`, `SYSTEM ACTIVE`, `[SECTION_01] IDENTITY_ROOT`, `STRUCTURAL_ANALYSIS`, `DATA_LOAD: 87.2% COMPLETE`, any coordinate/mono "hacker terminal" decoration. This reads as gimmicky, not professional, to a normal viewer.
- Keep ONE small consistent section-tag style (e.g. small uppercase letter-spaced label in the accent red) but in plain English only — no slashes, no numbers, no brackets, no fake telemetry text.

## 2. Fix the About section (currently looks like a static empty box)

- It's just a paragraph floating in whitespace right now — no visual interest, no animation played.
- Add a real two-column layout: left column = short label/stat strip (e.g. "2+ years learning", "MCA — AI specialization", a small headshot or initials avatar), right column = the paragraph, animated in with a word-by-word or line-by-line reveal on scroll (this is the anime.js choreography from the brief — it is not firing here).
- Add subtle scroll-triggered fade/slide so it doesn't look like a static screenshot.

## 3. Fix the Skills/Stack section (currently a flat empty grid)

- Right now it's just bordered boxes with plain text — looks like a wireframe, not a finished design.
- Add: a small icon per technology (use `react-icons` or `simple-icons` logos — React logo, Node logo, etc.), not just plain text.
- Animate: stagger-scale-in each tile on scroll (anime.js), and a hover effect (slight lift + border color shift to accent red) — currently nothing happens on hover.
- Tighten the grid: reduce excess empty cell height, add subtle background tint or 1px hover border highlight so it doesn't look like unstyled HTML table cells.

## 4. General rule going forward

Before marking any section "done," check it against this test: **"Would a non-technical visitor immediately understand every label and feel like a designer built this, or does it look like raw scaffolding?"** If it looks like raw scaffolding (empty grid, plain paragraph, unstyled boxes), it is not done — add the missing icons, imagery, spacing, and scroll animation per the original master prompt's Section 5 (Animation Spec) before moving to the next section.

## 5. Take a screenshot after fixing each section

After fixing About and Skills, take a screenshot of each and compare against the Hero's polish level. Do not proceed to Education/Projects/Contact until About and Skills visually match the Hero's quality bar.