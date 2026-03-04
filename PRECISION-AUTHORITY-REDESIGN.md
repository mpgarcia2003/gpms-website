# GPMS Website — "Precision Authority" Full Redesign

## CRITICAL: Read This First
This is a COMPLETE visual overhaul of the GreenPoint Maintenance Services website. The reference artifact is at the bottom of this file showing the exact target aesthetic. Every file listed below must be modified. **Do NOT skip any file.** Preserve all data arrays, quote calculator logic, SEO metadata, Acuity scheduling embed, and schema markup. This is a VISUAL redesign, not a content rewrite.

---

## Design Direction: "Precision Authority"

**Concept:** Industrial-editorial luxury. This should look like a high-end architecture firm or defense contractor — NOT a cleaning company. Confident, authoritative, precise.

**Typography (MANDATORY — replace ALL existing fonts):**
- Display/Headings: `Syne` (angular, geometric, confident) — weights 400, 600, 700, 800
- Body text: `Plus Jakarta Sans` — weights 400, 500, 600, 700
- Labels/Data/Mono: `JetBrains Mono` — weights 400, 500
- **REMOVE** all references to `Playfair Display`, `DM Sans`, `Inter`, `Roboto`

**Color Palette (CSS Variables):**
```css
:root {
  --black: #060A07;
  --dark: #0A0F0B;
  --card: #0D1310;
  --green: #00E676;
  --green-dim: rgba(0,230,118,0.08);
  --green-glow: rgba(0,230,118,0.15);
  --heading: 'Syne', sans-serif;
  --body: 'Plus Jakarta Sans', sans-serif;
  --mono: 'JetBrains Mono', monospace;
}
```
- **REMOVE** all references to `#2ecc71`, `#27ae60`, `#0a1a12`, `#0d2818`, `#122d1c`
- Replace ALL old greens with `var(--green)` or `#00E676`
- Replace ALL old dark backgrounds with `var(--black)`, `var(--dark)`, or `var(--card)`

**Visual Rules:**
- NO rounded corners on cards. Use sharp edges (border-radius: 0) — exception: buttons can have border-radius: 4px max
- NO glass-morphism (no backdrop-filter: blur on cards). Only use blur on the header.
- NO SVG wave dividers. Use DIAGONAL HARD CUTS between sections: `background: linear-gradient(to bottom right, var(--black) 49.5%, var(--card) 50.5%)`
- Corner accent marks: small L-shaped green lines (24px) on card corners instead of rounded borders
- Section labels: `font-family: var(--mono); font-size: 10px; color: var(--green); letter-spacing: 0.2em; text-transform: uppercase;` with a 24px horizontal green line before the text
- Headings: `font-family: var(--heading); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;`
- Body text color: `rgba(255,255,255,0.4)` — NOT `#666` or `rgba(255,255,255,0.6)`
- Film grain overlay on the entire page (CSS pseudo-element using feTurbulence SVG)

---

## File-by-File Implementation

### 1. `src/app/layout.jsx`

**Replace the Google Fonts link:**
```jsx
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

**Replace body style:**
```jsx
<body style={{ margin: 0, padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#060A07', color: '#fff' }}>
```

**Remove** the old Playfair Display + DM Sans link entirely.

---

### 2. `src/app/globals.css`

**Replace entire file with:**
```css
:root {
  --black: #060A07;
  --dark: #0A0F0B;
  --card: #0D1310;
  --green: #00E676;
  --green-dim: rgba(0,230,118,0.08);
  --green-glow: rgba(0,230,118,0.15);
  --heading: 'Syne', sans-serif;
  --body: 'Plus Jakarta Sans', sans-serif;
  --mono: 'JetBrains Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

/* Film grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--black); }
::-webkit-scrollbar-thumb { background: rgba(0,230,118,0.2); border-radius: 3px; }

/* Animations */
@keyframes heroSlide { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
@keyframes tagline { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: none; } }
@keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
@keyframes dash { to { stroke-dashoffset: 0; } }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes gridPulse { 0%,100% { opacity: 0.03; } 50% { opacity: 0.06; } }

/* Button styles */
.btn-primary {
  background: var(--green); color: var(--black); padding: 16px 40px; border-radius: 4px;
  font-weight: 700; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase;
  font-family: var(--heading); cursor: pointer; border: none; display: inline-flex; align-items: center; gap: 10px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(0,230,118,0.3); }

.btn-ghost {
  background: transparent; color: #fff; padding: 16px 40px; border-radius: 4px;
  font-weight: 600; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase;
  font-family: var(--heading); cursor: pointer; border: 1px solid rgba(255,255,255,0.15);
  transition: border-color 0.3s, color 0.3s;
}
.btn-ghost:hover { border-color: var(--green); color: var(--green); }

/* Card hover */
.service-card { transition: transform 0.5s cubic-bezier(.16,1,.3,1), border-color 0.4s; }
.service-card:hover { transform: translateY(-12px); border-color: rgba(0,230,118,0.25); }
.service-card:hover .svc-icon { color: var(--green); }
.service-card:hover .svc-line { width: 100%; }

.why-card { transition: transform 0.4s cubic-bezier(.16,1,.3,1), border-color 0.4s; }
.why-card:hover { transform: translateY(-6px); border-color: rgba(0,230,118,0.2); }
```

---

### 3. `src/components/HomePage.jsx` — FULL REWRITE

This is the main file. Rewrite it using the reference artifact below as the EXACT blueprint. Key structural changes:

**HEADER (built into HomePage since it's a single-page component):**
- Fixed header, transparent until scrolled, then `rgba(6,10,7,0.95)` + `backdrop-filter: blur(20px)`
- Square green "G" logo (no border-radius), `font-family: var(--heading)`
- Nav links: 13px, weight 600, `rgba(255,255,255,0.55)`, hover to `#fff`
- Phone number in `var(--mono)` green
- "Free Walkthrough" button using `.btn-primary` styles

**HERO:**
- Grid background pattern (80px cells, green lines at 0.04 opacity, pulsing)
- Diagonal accent line through the section (1px, 15deg rotation)
- Floating geometric shapes (rotating square 300px, circle 150px, both with `float` animation)
- Green radial glow (600px, blur 80px)
- Left column: tag line with horizontal green line + mono text → HUGE h1 (clamp 44–76px, weight 800, line-height 0.95) with SVG animated underline on "inspection" → subtext → two buttons → badge row
- Right column: Lead capture form with SHARP corners, corner L-accent marks (green), dark card background

**STATS BAR:**
- Bordered top and bottom with `rgba(0,230,118,0.08)`
- 4-column grid, vertical dividers `rgba(255,255,255,0.05)`
- Numbers: `var(--heading)`, clamp 36–56px, weight 800, animated counter on scroll
- Labels: `var(--mono)`, 11px, `rgba(255,255,255,0.3)`, uppercase

**GREEN TRUST MARQUEE:**
- Full-width green (`var(--green)`) background
- Infinitely scrolling text with industry names + state codes
- `animation: marquee 30s linear infinite`
- Text in `var(--heading)`, 12px, weight 700, black text

**SERVICES (id="services"):**
- ASYMMETRIC LAYOUT: `grid-template-columns: 1fr 2fr` with gap 80px
- Left column: STICKY (`position: sticky; top: 120px`) with section label, heading, description, button
- Right column: 2-column grid of service cards
- Cards: `background: var(--card)`, 1px border `rgba(255,255,255,0.04)`, SHARP corners (no radius), green top line that expands on hover, geometric icon shapes (◼ ◆ ▲ ● ◻ ⬡), tag in `var(--mono)` green
- Hover: translateY(-12px), border-color change, icon turns green, top line expands to 100%

**DIAGONAL CUT (between services and industries):**
```jsx
<div style={{ height: 120, background: 'linear-gradient(to bottom right, var(--black) 49.5%, var(--card) 50.5%)' }} />
```

**INDUSTRIES (id="industries"):**
- Background: `var(--card)`
- Vertical tab layout: `grid-template-columns: 280px 1fr`
- Left: clickable list with active state (green left border, green-dim background)
- Right: detail panel with `var(--black)` background, corner glow, features as bullet list with square green bullets (8px), "Learn More" button

**DIAGONAL CUT REVERSE:**
```jsx
<div style={{ height: 120, background: 'linear-gradient(to bottom left, var(--card) 49.5%, var(--black) 50.5%)' }} />
```

**PROCESS TIMELINE (id="process"):**
- Vertical green line on the left (2px, gradient from green to transparent)
- Square numbered nodes (50px, border: 2px solid var(--green), `var(--mono)` text)
- Step title + description to the right

**JANITRACK FEATURE (id="janitrack"):**
- 2-column grid, left = text description with square checkbox features, right = mock dashboard
- Dashboard: sharp-cornered container with corner frame accents (32px L-shapes in green), 4-stat grid inside

**TESTIMONIALS:**
- Header row: left-aligned title + right-aligned 5 green stars
- 3-column card grid
- Cards: `var(--card)`, sharp corners, green top-left line (48px × 2px), oversized quote mark (100px, `rgba(0,230,118,0.06)`), quote text, divider, attribution with mono tag badge

**WHY US:**
- 4-column grid
- Cards: `var(--black)` on `var(--card)` section, numbered 01–04 in huge ghost text (`rgba(0,230,118,0.08)`), mono edge badge at bottom
- Hover: translateY(-6px)

**ACUITY SCHEDULING (id="quote"):**
- Centered section, max-width 1000px
- Embed the Acuity iframe: `https://app.acuityscheduling.com/schedule.php?owner=15345029&ref=embedded_csp`
- Below the embed: phone and email links in `var(--mono)`
- The iframe should be wrapped in a sharp-cornered container with 1px green border

**FAQ:**
- `var(--card)` background
- Max-width 800px centered
- Accordion: click to expand, `+` rotates to `×` (45deg), green text when open
- Smooth max-height transition
- **Include ALL 8 FAQ items from the current data**

**FINAL CTA:**
- Full green background block
- Diagonal hatch pattern overlay (repeating-linear-gradient 45deg)
- Corner frame marks (40px L-shapes)
- "Your facility deserves better." headline in `var(--heading)`, black text
- Two buttons: dark primary + phone ghost

**FOOTER:**
- 5-column grid: brand + 4 link columns (Services, Industries, Company, Contact)
- Brand column: square G logo + mono badges
- Contact column: 347-332-9348, info@greenpointms.com, Bronx NY, Schedule Walkthrough
- Copyright bar at bottom with Privacy/Terms/Accessibility links

**PRESERVE from current file:**
- ALL data arrays: SERVICES, INDUSTRIES, TRUST_STATS, TESTIMONIALS, AREAS, BLOG_POSTS, PROCESS_STEPS, FAQ_ITEMS, WHY_US, QUOTE_INDUSTRIES, PRESET_ROOMS
- ALL quote calculator logic and state management
- ALL icon components (keep the SVG icon system)
- The Acuity scheduling section with iframe
- All scroll-to-section functionality
- `export default function GreenPointWebsite()` (same export name)
- `"use client"` directive at top

**Scroll-reveal pattern to implement:**
Use IntersectionObserver to fade+slide elements on scroll entry. Every section heading and card group should animate in. Use the pattern from the reference artifact:
```jsx
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, delay = 0, y = 50, style = {} }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : `translateY(${y}px)`, transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`, ...style }}>{children}</div>
  );
}
```

---

### 4. `src/components/SiteHeader.jsx`

Update to match the new design system:
- Replace `Playfair Display` with `var(--heading)` / `'Syne'`
- Replace `DM Sans` with `var(--body)` / `'Plus Jakarta Sans'`
- Replace ALL color values: `#2ecc71` → `var(--green)`, `rgba(46,204,113,...)` → `rgba(0,230,118,...)`
- Replace backgrounds: `rgba(10, 26, 18, ...)` → `rgba(6,10,7,...)`
- Square logo (border-radius: 0), not rounded
- Add `var(--mono)` subtext under brand name: `MAINTENANCE SERVICES` in 9px
- Phone CTA in `var(--mono)` green, no animation glow
- Primary button: `.btn-primary` style (sharp corners, uppercase, Syne font)
- Nav links: 13px, weight 600, `rgba(255,255,255,0.55)`

---

### 5. `src/components/SiteFooter.jsx`

Update to match redesign footer:
- 5-column grid layout
- `var(--mono)` for section titles (green, 10px, uppercase, letter-spacing 0.15em)
- Link items: 13px, `rgba(255,255,255,0.3)`, hover to 0.7
- Brand: square G logo + "GREENPOINT" in `var(--heading)` + mono badges (MBE, SAM.gov, Bonded, Insured)
- Copyright: `var(--mono)`, 11px, `rgba(255,255,255,0.2)`
- All sharp corners, no rounded elements
- Contact: 347-332-9348, info@greenpointms.com, Bronx NY

---

### 6. `src/components/SeoLandingPage.jsx`

Apply the same design system:
- Replace ALL fonts (Playfair → Syne, DM Sans → Plus Jakarta Sans)
- Replace ALL colors (#2ecc71 → #00E676 or var(--green))
- Replace ALL backgrounds to use var(--black), var(--dark), var(--card)
- Sharp corners on all cards (border-radius: 0)
- Section labels: mono green uppercase pattern
- Card hover: translateY(-12px) with border-color change
- Diagonal cuts between sections
- Add Reveal animations
- Phone: 347-332-9348 throughout
- Email: info@greenpointms.com

---

### 7. `src/components/ProgrammaticPage.jsx`

Same treatment as SeoLandingPage:
- Replace ALL fonts, colors, backgrounds
- Sharp corners, mono labels, diagonal cuts
- Add Reveal scroll animations
- Phone: 347-332-9348
- Email: info@greenpointms.com

---

## Implementation Order

1. `globals.css` — set up variables, animations, global styles
2. `layout.jsx` — swap fonts, body styles
3. `HomePage.jsx` — FULL rewrite (this is the big one, ~2500-3000 lines)
4. `SiteHeader.jsx` — update design system
5. `SiteFooter.jsx` — update design system
6. `SeoLandingPage.jsx` — apply visual language
7. `ProgrammaticPage.jsx` — apply visual language

## Verification Checklist

After implementation, verify:
- [ ] No references to `Playfair Display`, `DM Sans`, `Inter`, `Roboto` anywhere
- [ ] No references to `#2ecc71`, `#27ae60`, `#0a1a12`, `#0d2818`, `#122d1c` anywhere
- [ ] No `border-radius` values above 4px on any element (except circular elements like bullets)
- [ ] No `backdrop-filter: blur` on cards (only on header)
- [ ] All section labels use the mono green uppercase pattern
- [ ] Acuity iframe is present: `https://app.acuityscheduling.com/schedule.php?owner=15345029&ref=embedded_csp`
- [ ] Phone is 347-332-9348 everywhere
- [ ] Email is info@greenpointms.com everywhere
- [ ] Quote calculator still works (all logic preserved)
- [ ] All SEO metadata and schema markup preserved
- [ ] Film grain overlay present
- [ ] Diagonal cuts between sections (not SVG waves)
- [ ] Stats have animated counters
- [ ] Green trust marquee scrolls infinitely
- [ ] All cards hover with translateY(-12px) or translateY(-6px)
- [ ] FAQ accordion works (click to open/close, smooth transitions)

---

## REFERENCE ARTIFACT — Target Visual

The React artifact `gpms-redesign.jsx` was created showing the exact target aesthetic. Use it as the PRECISE visual reference for:
- All spacing values
- All font sizes and weights
- All color values
- All hover states
- All animation timings
- All layout structures
- All section ordering

The artifact is a simplified preview — the actual implementation should include the full quote calculator, all 8 FAQ items, all 6 industries with full data, and the Acuity scheduling iframe.
