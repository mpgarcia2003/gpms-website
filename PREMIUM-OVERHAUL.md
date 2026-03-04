# Task 11: Premium Visual Overhaul — Industrial Luxury Redesign

## Project Path
`C:\Users\mpgar\Projects\gpms-website`

## Read First
Read `DESIGN-SKILL.md` in the project root before making any changes.

## Design Direction
**Aesthetic**: Industrial-luxury — think high-end architectural firm meets Fortune 500 facility services.
**Differentiation**: The ONE thing people should remember — this doesn't look like any other cleaning company. It looks like a premium SaaS or a government contractor's showcase.
**Tone**: Confident authority. Not flashy — POWERFUL.

## CRITICAL RULES
- All inline React styles + `<style>` tags in JSX (NO external CSS files)
- Preserve ALL existing data, logic, form handlers, quote calculator math, SEO, schema
- Must pass `npm run build`
- Keep Playfair Display for headings, DM Sans for body (these are good)
- Keep #2ecc71 green, #0a1a12 / #0d2818 dark greens
- SVG icons from Icons.jsx only

---

## 1. ANGLED SECTION DIVIDERS (Biggest Visual Impact)

The current site has FLAT transitions between sections (dark → white → dark). This is the #1 thing making it look generic. Add SVG angle dividers between every section.

### Add this reusable component:

```jsx
function SectionDivider({ from = "#0d2818", to = "#fff", flip = false, height = 80 }) {
  return (
    <div style={{ marginTop: -1, marginBottom: -1, lineHeight: 0, overflow: "hidden", transform: flip ? "rotate(180deg)" : "none" }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height, display: "block" }}>
        <path d={`M0,0 L1440,${height} L1440,${height} L0,${height} Z`} fill={to} />
      </svg>
    </div>
  );
}
```

### Place dividers between EVERY section transition:
- After Hero → before StatsBar: `<SectionDivider from="#0d2818" to="#fff" />`
- After AuthorityBar → before Services: (already white-to-white, skip)
- After Services → before Industries: `<SectionDivider from="#fff" to="#0d2818" flip />`
- After Industries → before JaniTrack: (dark to dark, skip)
- After JaniTrack → before QuoteCalculator: `<SectionDivider from="#0d2818" to="#f8faf9" />`
- After QuoteCalculator → before AcuitySection: `<SectionDivider from="#f8faf9" to="#0d2818" flip />`
- After AcuitySection → before Testimonials: `<SectionDivider from="#0d2818" to="#fff" />`
- Before/after ComplianceSection, ProcessSection, etc — use as needed

---

## 2. SERVICE CARDS — Glass Morphism + Dramatic Hover

Current: Flat `#fafbfa` cards with barely visible border. Boring.

### Replace the service card styling:

```jsx
<div
  style={{
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: 20,
    padding: 40,
    border: "1px solid rgba(46,204,113,0.08)",
    cursor: "default",
    height: "100%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease",
    position: "relative",
    overflow: "hidden",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(46,204,113,0.15)";
    e.currentTarget.style.borderColor = "rgba(46,204,113,0.2)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)";
    e.currentTarget.style.borderColor = "rgba(46,204,113,0.08)";
  }}
>
  {/* Green accent line at top of card */}
  <div style={{
    position: "absolute", top: 0, left: 32, right: 32, height: 3,
    background: "linear-gradient(90deg, transparent, #2ecc71, transparent)",
    opacity: 0.5, borderRadius: "0 0 3px 3px",
  }} />
  {/* ... existing card content ... */}
</div>
```

Apply the same hover-lift pattern to ALL cards: industry cards, testimonial cards, FAQ items, blog cards, contact form.

---

## 3. WHITE SECTIONS — Add Subtle Texture

Current white sections (#fff) are completely flat. Add depth:

### For ALL white/light background sections (Services, StatsBar, AuthorityBar, Testimonials, Contact, Process):

```jsx
style={{
  background: "#fff",
  position: "relative",
  // Add these:
  backgroundImage: "radial-gradient(circle at 20% 50%, rgba(46,204,113,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46,204,113,0.02) 0%, transparent 40%)",
}}
```

And add a subtle dot grid pattern to at least 2 white sections:
```jsx
<div style={{
  position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none",
  backgroundImage: "radial-gradient(circle, #0d2818 0.5px, transparent 0.5px)",
  backgroundSize: "24px 24px",
}} />
```

---

## 4. STATS BAR — Make It a Showpiece

Current: Plain white with green gradient numbers. Too simple.

### Redesign StatsBar as dark section:

```jsx
function StatsBar() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0d2818, #1a4d2e)",
      padding: "64px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Horizontal glowing line top */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(46,204,113,0.4), transparent)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(46,204,113,0.4), transparent)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }} className="stats-grid">
        {TRUST_STATS.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.12}>
            <div style={{ position: "relative" }}>
              {i > 0 && (
                <div style={{
                  position: "absolute", left: -16, top: "10%", bottom: "10%", width: 1,
                  background: "rgba(46,204,113,0.2)",
                }} />
              )}
              <div style={{
                fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800,
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#fff", lineHeight: 1, marginBottom: 8,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em",
              }}>
                {stat.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
```

---

## 5. INDUSTRY TABS — Add Decorative Glow

For the active industry detail panel, add a corner glow:
```jsx
<div style={{
  position: "absolute", top: -60, right: -60, width: 200, height: 200,
  background: "radial-gradient(circle, rgba(46,204,113,0.1), transparent 70%)",
  borderRadius: "50%", pointerEvents: "none",
}} />
```

---

## 6. QUOTE CALCULATOR — Premium Container

Wrap calculator in:
```jsx
<div style={{
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(46,204,113,0.1)",
  borderRadius: 24,
  padding: "48px 40px",
  boxShadow: "0 0 80px rgba(46,204,113,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
  position: "relative",
  overflow: "hidden",
}}>
  <div style={{
    position: "absolute", top: 0, left: 0, width: 120, height: 120,
    background: "radial-gradient(circle at top left, rgba(46,204,113,0.12), transparent 70%)",
    pointerEvents: "none",
  }} />
</div>
```

---

## 7. TESTIMONIAL CARDS — Quote Marks + Green Border

```jsx
<div style={{
  background: "#fff", borderRadius: 20, padding: "40px 36px",
  border: "1px solid #eee", borderLeft: "4px solid #2ecc71",
  position: "relative", boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
}}>
  <div style={{
    position: "absolute", top: 16, right: 24,
    fontSize: 80, lineHeight: 1, color: "rgba(46,204,113,0.08)",
    fontFamily: "Georgia, serif", fontWeight: 700,
  }}>"</div>
</div>
```

---

## 8. PRE-FOOTER CTA BLOCK

Add before the Footer component inside the render:

```jsx
{/* Pre-footer CTA */}
<section style={{ background: "#0a1a12", padding: "0 24px 80px" }}>
  <div style={{ maxWidth: 1000, margin: "0 auto" }}>
    <div style={{
      background: "linear-gradient(135deg, #2ecc71, #27ae60)",
      borderRadius: 24, padding: "64px 48px", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.1,
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)",
        fontWeight: 700, color: "#fff", marginBottom: 16, position: "relative",
      }}>
        Your Facility Deserves Better.
      </h2>
      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, marginBottom: 32, fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
        Schedule a free walkthrough and see the GreenPoint difference.
      </p>
      <a href="#schedule" style={{
        background: "#fff", color: "#0d2818", padding: "18px 48px", borderRadius: 12,
        fontWeight: 700, fontSize: 17, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)", display: "inline-block", position: "relative",
      }}>
        Schedule Your Free Walkthrough →
      </a>
    </div>
  </div>
</section>
```

---

## 9. ADD CSS ANIMATIONS

Add to the main `<style>` tag:

```css
.premium-card {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
}
.premium-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(46,204,113,0.15) !important;
  border-color: rgba(46,204,113,0.2) !important;
}
@keyframes staggerReveal {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

---

## 10. ACUITY SECTION — Verify It Renders

The AcuitySection component exists at line ~2180 in HomePage.jsx. Ensure:
- It's included in the render between `<QuoteCalculator />` and `<TestimonialsSection />`
- The iframe src is: `https://app.acuityscheduling.com/schedule.php?owner=15345029&ref=embedded_csp`
- It has `id="schedule"` for anchor links

---

## 11. SEO PAGES — Apply Same Visual Language

### SeoLandingPage.jsx and ProgrammaticPage.jsx:
- Add angled SVG dividers between dark/light sections
- Apply glass-morphism card styles
- Add subtle textures to white sections
- Ensure phone number is 347-332-9348 throughout
- Font: ALL DM Sans body text (replace any 'Inter' references)

---

## Execution Order
1. Add `SectionDivider` component
2. Redesign `StatsBar` (dark background version)
3. Apply glass-morphism to ALL cards
4. Add section dividers between every dark↔light transition
5. Add subtle textures to white sections
6. Upgrade testimonial cards
7. Add pre-footer CTA block
8. Add CSS animations
9. Apply to SeoLandingPage.jsx and ProgrammaticPage.jsx
10. Verify AcuitySection renders
11. Run `npm run build` — must succeed with 339 pages
