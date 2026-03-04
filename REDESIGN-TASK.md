# REDESIGN PASS — Apply DESIGN-SKILL.md to All Pages

**IMPORTANT:** Read `DESIGN-SKILL.md` in the project root FIRST. Every instruction below must follow those guidelines.

## Goal

Elevate every page and shared component in this site from "functional" to "striking, premium, enterprise-grade." This is a B2B facility services company targeting procurement officers, facility managers, and school administrators. The site should feel like a $10M+ operation — industrial-luxury, not small business template.

## What to Fix Across the Board

### 1. Font Consistency
- **Headings:** `'Playfair Display', Georgia, serif` — EVERYWHERE
- **Body/UI:** `'DM Sans', sans-serif` — EVERYWHERE
- **REMOVE** all instances of `'Inter', sans-serif` and replace with `'DM Sans', sans-serif`
- Check: HomePage.jsx, SeoLandingPage.jsx, ProgrammaticPage.jsx, SiteHeader.jsx, SiteFooter.jsx, and all page.jsx files

### 2. Motion & Scroll Animations
Add CSS-only entrance animations to major sections. Use `@keyframes` in a `<style>` tag within each component. Examples:
- Staggered fade-up on section load (use `animation-delay` on child elements)
- Subtle scale-in on trust badge cards
- Smooth reveal on scroll for stats/numbers (use IntersectionObserver if needed)
- Hover states on all cards and CTAs: lift with shadow, border glow, or subtle color shift
- Do NOT overdo it — 2-3 high-impact animations per page, not every element bouncing

### 3. Visual Depth & Texture
Current pages use flat dark backgrounds. Add:
- Subtle grid pattern overlays (already on some sections — make consistent)
- Radial gradient glows behind key sections (green glow behind hero, gold glow behind trust section)
- Very subtle noise/grain texture on dark sections (CSS `background-image: url("data:image/svg+xml,...")` or similar)
- Layered card depth: cards should have subtle border glow on hover, not just color change

### 4. Spatial Composition
- Break the "everything centered, evenly spaced" pattern where appropriate
- Hero sections: consider asymmetric layouts (text left, visual element right)
- Stats/trust sections: vary card sizes or use an offset grid
- Section transitions: use angled dividers or gradient fades between sections instead of hard cuts

### 5. CTA Buttons
Every CTA should feel premium:
- Primary: green gradient `linear-gradient(135deg, #2ecc71, #27ae60)` with `box-shadow: 0 4px 20px rgba(46,204,113,0.3)`
- On hover: slight lift (`transform: translateY(-2px)`) + stronger shadow
- Secondary: glass-morphism style (transparent bg, white/green border, backdrop blur)
- All buttons need `transition: all 0.3s ease`

## Files to Redesign

### Shared Components (highest impact — affects all pages)

**`src/components/SeoLandingPage.jsx`** — Used by church, MBE, Bronx, school, janitorial pages
- Replace all `'Inter'` with `'DM Sans'`
- Add entrance animations to hero, services grid, FAQ section
- Make the FAQ accordion more premium (animated expand, subtle border glow on open item)
- Service cards: add hover lift + shadow animation
- Trust badges section: staggered fade-in
- CTA section at bottom: add a radial green glow behind it

**`src/components/ProgrammaticPage.jsx`** — Used by 326 location/industry pages
- Already uses DM Sans — verify consistency
- Add entrance animations to hero and sections
- Related links section: make cards more visually interesting (not just plain links)
- Add hover states to all interactive elements

**`src/components/SiteHeader.jsx`** — Global nav
- Verify it feels premium on scroll (backdrop blur, subtle shadow)
- Phone number CTA in header should have a gentle pulse or glow

**`src/components/SiteFooter.jsx`** — Global footer
- Should feel substantial, not an afterthought
- NAICS codes, SAM.gov, insurance info should be clearly organized
- Add subtle divider lines or card treatment to footer sections

### Individual Pages

**`src/components/HomePage.jsx`** — The most important page
- Hero section: verify entrance animation on headline + form
- Trust stats bar: staggered counter animation or fade-in
- Services section: cards should have premium hover states
- Testimonials: add subtle slide or fade transitions
- Quote calculator: already solid — just verify hover states and transitions are premium
- Overall: check section transitions, verify nothing feels flat

**`src/app/government-cleaning-services/page.jsx`**
- This page targets government procurement — must feel extremely professional
- Capability statement download button should be prominent with a document icon
- NAICS code grid should look like an official government document section
- Add appropriate entrance animations

**`src/app/capability-statement/page.jsx`**
- Download CTA should be unmissable
- Page should feel like a procurement portal

**`src/app/mbe-certified-cleaning-company-nyc/page.jsx`**
**`src/app/church-cleaning-nyc/page.jsx`**
**`src/app/commercial-cleaning-bronx/page.jsx`**
**`src/app/school-cleaning-nyc/page.jsx`**
**`src/app/janitorial-services-nyc/page.jsx`**
- These all use SeoLandingPage — fixing that component fixes these
- Verify each page's unique content and metadata is intact after changes

**`src/app/not-found.jsx`** — Even the 404 should look premium

## Rules

- ALL inline React styles — no Tailwind, no CSS modules, no external stylesheets
- For CSS animations, use `<style>` tags embedded in the component JSX via dangerouslySetInnerHTML or inline in a style element
- Do NOT change any content, copy, data, or business logic — only visual design and animations
- Do NOT break the quote calculator logic
- Do NOT remove or change any SEO metadata, schema markup, or structured data
- Do NOT change any form functionality
- Test that the build still compiles after changes: `npm run build`
- SVG icons from `src/components/Icons.jsx` only — no emoji, no icon libraries
