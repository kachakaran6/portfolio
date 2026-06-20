# UI FIX MASTER PROMPT — Theme, Responsiveness & Zoom Consistency

Paste this into the same Antigravity session as a new instruction pass. Do NOT touch content, copy, or section order — this pass is ONLY about: (1) a fully working light/dark mode, (2) full mobile responsiveness, (3) identical layout at 100% and 125% browser zoom on desktop. Nothing else should change.

---

## 1. LIGHT / DARK MODE — must be FULLY functional, not cosmetic

### 1.1 Implementation
- Use `next-themes` (or equivalent) with `class` strategy on `<html>`, default to **system preference**, with a manual toggle that persists in `localStorage`.
- Add a visible, accessible theme toggle in the nav (sun/moon icon, `lucide-react`), on both desktop and mobile nav.
- No flash-of-wrong-theme on load (use the standard `next-themes` script injection / `suppressHydrationWarning` pattern).

### 1.2 Define BOTH palettes as design tokens (Tailwind CSS variables), not hardcoded hex in components
Every component must reference theme variables (`bg-background`, `text-foreground`, `border-border`, `text-accent`, etc.) — **zero hardcoded `bg-white`, `bg-black`, `text-gray-900`, `#fff`, `#000` anywhere in components.**

**Light mode (current "paper" look) — keep as is:**
- Background: `#F7F6F2`
- Foreground/ink: `#0E0F12`
- Muted text: `#5A5A5A`
- Border/grid lines: `#E2E0D8`
- Accent: `#C8102E` (red)

**Dark mode — new, must feel like the same design system inverted, not a different site:**
- Background: `#0E0F12` (deep charcoal, not pure black)
- Foreground/ink: `#F2F1EC`
- Muted text: `#9A9A9A`
- Border/grid lines: `#23242A`
- Accent: keep `#C8102E` or shift slightly brighter (`#E0314A`) for contrast on dark — pick one and apply consistently
- Graph-paper grid texture background must also invert (faint light-on-dark lines instead of dark-on-light)

### 1.3 Things that are commonly forgotten — check every single one:
- [ ] Nav background, border, and logo/wordmark color
- [ ] Hero background grid texture
- [ ] Three.js node-network canvas: nodes/lines/background must swap color sets per theme (pass current theme into the R3F scene via context, don't hardcode line/point colors)
- [ ] Buttons: the solid "View Selected Work" button must remain readable in both themes (e.g. solid ink button in light mode → solid off-white/inverted button in dark mode, not a dark button invisible on a dark background)
- [ ] All section eyebrow labels, body text, muted captions
- [ ] Tech stack grid tiles, icons, borders, hover states
- [ ] Education timeline line/dots and card backgrounds
- [ ] Project card backgrounds, borders, image placeholder backgrounds, tag pills
- [ ] Contact form inputs, placeholder text, borders, focus rings
- [ ] Footer background, mono micro-copy, divider lines
- [ ] Scrollbar styling (if custom) for both themes
- [ ] Selection highlight color (`::selection`) for both themes
- [ ] Any drop shadows — shadows that look fine on light paper often disappear or look muddy on dark; adjust shadow opacity/color per theme

### 1.4 Toggle behavior
- Instant theme switch with a smooth ~200ms color-transition (`transition-colors`) on `body`/root — no jarring flash, no full white flash when switching to dark.
- Toggle state must be correct immediately on page load based on saved preference / system preference (no toggle showing the wrong icon for a split second).

---

## 2. MOBILE RESPONSIVENESS — must work properly on real phone widths, not just "doesn't overflow"

Test and fix at minimum these breakpoints: **375px, 390px, 412px, 768px (tablet), 1024px.**

### 2.1 Nav
- Collapses to a hamburger menu below `md` breakpoint (≈768px).
- Hamburger opens a full-screen or slide-in mobile menu with the same nav links, theme toggle, and socials — properly tappable (min 44px touch targets).
- Logo/wordmark shrinks or wraps gracefully, never overlaps the hamburger icon.

### 2.2 Hero
- Headline font size scales down properly (`clamp()` should hit a sane minimum, not just shrink linearly into illegibility) — must remain bold and impactful on mobile, not tiny.
- Three.js node-network canvas on mobile: either scale it down/reposition behind text without overlapping/obscuring the headline, or reduce node density for performance — must not cause horizontal scroll or overlap text illegibly.
- CTA buttons stack vertically full-width on mobile with proper spacing, not squished side-by-side.
- Social icons row wraps cleanly, doesn't overflow horizontally.

### 2.3 About / Skills sections
- Two-column layouts (label column + paragraph column) must stack into a single column on mobile, in a sensible reading order (label/heading first, then paragraph).
- Skills grid reflows from 6 columns → 2 columns on mobile (not 1 giant stretched column, not overflowing 6 tiny squished columns).

### 2.4 Education timeline
- Vertical timeline must remain vertical and readable on mobile — line and dots should not overlap text or get clipped at small widths.

### 2.5 Projects grid
- Reflows from multi-column grid → single column stack on mobile, cards full-width with proper padding, no text overflow, no broken tag-pill wrapping.

### 2.6 Contact form
- Inputs full-width, properly sized for mobile keyboards (correct `type=` attributes: `email`, `tel`, `text`), submit button full-width and easily tappable.

### 2.7 Footer
- Multi-column footer content stacks cleanly on mobile, no overlapping decorative coordinate text, no horizontal scrollbar.

### 2.8 General mobile rules
- [ ] No horizontal scroll/overflow anywhere, at any breakpoint, in any theme.
- [ ] All tap targets ≥ 44x44px.
- [ ] Reduce or pause heavier scroll/3D animations on mobile for performance (check via `window.matchMedia` or viewport width, not just `prefers-reduced-motion`).
- [ ] Test with mobile Safari's address-bar collapse behavior in mind (don't rely on `100vh` alone for the hero — use `100dvh` or a safe fallback).

---

## 3. DESKTOP ZOOM CONSISTENCY (100% vs 125%)

The layout must look the same — same proportions, same line-wrapping behavior, no overlapping elements, no broken grids — at both 100% and 125% browser zoom on a standard desktop viewport (e.g. 1440px and 1920px wide windows).

### Root causes to check and fix:
- [ ] **Never use fixed `px` for font sizes that are meant to scale with zoom** — use `rem`/`em` based Tailwind classes (default Tailwind already does this; audit for any raw `style={{fontSize: '18px'}}` or arbitrary `text-[18px]` that should be `rem`-based instead).
- [ ] Avoid fixed-height containers with `px` heights that don't accommodate slightly larger zoomed text — use `min-h` instead of `h` wherever text reflows, and test that zoomed text doesn't get clipped or overflow its container.
- [ ] Check that `clamp()` values for headline sizes don't produce awkward in-between sizes at 125% zoom that cause line-wrap changes that break the layout (e.g. headline wrapping to an extra line and overlapping the Three.js canvas).
- [ ] Three.js canvas: ensure it's sized via a responsive container (`ResizeObserver` on the canvas wrapper, not a fixed pixel width/height), so it correctly resizes when browser zoom changes the effective CSS pixel viewport.
- [ ] Test the nav at 125% zoom — confirm nav links don't wrap or overlap the logo/hamburger breakpoint earlier than expected (since zoom effectively shrinks the available CSS px viewport, it can trigger mobile-breakpoint behavior unexpectedly — this is fine and expected ONLY if it still looks intentional and clean, not broken).
- [ ] Verify grid/flex gap values use relative units consistently so spacing doesn't feel disproportionate at 125%.

### Test matrix to verify before calling this done:
| Viewport | Zoom | Check |
|---|---|---|
| 1920px | 100% | Layout baseline |
| 1920px | 125% | Identical proportions, no overlap/clipping |
| 1440px | 100% | Layout baseline |
| 1440px | 125% | Identical proportions, no overlap/clipping |
| 390px (mobile) | 100% | Full mobile layout from Section 2 |
| 768px (tablet) | 100% | Sensible intermediate layout, not just stretched mobile or squished desktop |

---

## 4. DEFINITION OF DONE FOR THIS PASS

- [ ] Toggling light/dark mode anywhere on the site instantly and correctly re-themes every single element listed in Section 1.3 — no missed hardcoded colors anywhere, including the Three.js canvas.
- [ ] Site is fully usable and visually polished at 375px, 390px, 768px, 1024px, 1440px, and 1920px widths.
- [ ] No horizontal overflow at any breakpoint in either theme.
- [ ] Layout is visually identical in proportion at 100% and 125% browser zoom at both 1440px and 1920px.
- [ ] Take and compare screenshots: light vs dark, desktop vs mobile, 100% vs 125% zoom — before reporting this pass complete.