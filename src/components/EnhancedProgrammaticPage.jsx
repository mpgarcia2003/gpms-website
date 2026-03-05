"use client";
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function EnhancedProgrammaticPage({
  serviceName, serviceShortName, cityName, stateName, stateAbbr,
  stateSlug, citySlug, serviceSlug, county,
  richContent, includes, breadcrumbs,
  otherServices, nearbyCities, allIndustries,
}) {
  const BASE = "https://greenpointms.com";

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF" }}>
      <style>{`
        .ep-card { transition: box-shadow 0.2s ease; }
        .ep-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .ep-link { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .ep-link:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .ep-cta { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .ep-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(27,122,61,0.3); }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary .faq-icon { transform: rotate(45deg); }
      `}</style>
      <SiteHeader />

      {/* ── HERO ── */}
      <section style={{ background: "#0A2A16", paddingTop: 140, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <a href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}>Home</a>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>›</span>
                {crumb.href ? (
                  <a href={crumb.href} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}>{crumb.label}</a>
                ) : (
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C8A34D", fontWeight: 600, letterSpacing: "0.05em" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
            {serviceName} Services in {cityName}, <span style={{ color: "#2ecc71" }}>{stateAbbr}</span>
          </h1>

          {/* Definition paragraph — LLM-extractable */}
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 720 }}>
            {richContent.definition}
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <a href="/#schedule" className="ep-cta" style={{ background: "#1B7A3D", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em" }}>Schedule a Walkthrough →</a>
            <a href="tel:+13473329348" style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", border: "1px solid rgba(255,255,255,0.2)" }}>Call 347-332-9348</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Why Businesses Need This ── */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Why It Matters</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 24 }}>
            Why Businesses in {cityName} Need Professional {serviceShortName}
          </h2>
          {richContent.whyNeeded.map((para, i) => (
            <p key={i} style={{ fontSize: 16, color: "#4A5E52", lineHeight: 1.8, marginBottom: 20, maxWidth: 780 }}>
              {para.replace(/\{city\}/g, cityName).replace(/\{state\}/g, stateName)}
            </p>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: How It Works (Process Steps) ── */}
      <section style={{ padding: "80px 24px", background: "#F7FAF8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Our Process</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 32 }}>
            How Professional {serviceName} Works
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {richContent.processSteps.map((step, i) => (
              <div key={i} className="ep-card" style={{ display: "flex", gap: 20, background: "#FFFFFF", borderRadius: 12, padding: "24px 28px", border: "1px solid #E2EBE5" }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(27,122,61,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: "#1B7A3D" }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: "#1A2B1F", marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Industries That Require This ── */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Industry Applications</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 32 }}>
            Industries That Require {serviceShortName} in {cityName}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {richContent.industryApplications.map((app, i) => (
              <div key={i} className="ep-card" style={{ background: "#F7FAF8", borderRadius: 10, padding: "22px 24px", border: "1px solid #E2EBE5" }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: "#1A2B1F", marginBottom: 8 }}>{app.industry}</h3>
                <p style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.65, margin: 0 }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Key Benefits ── */}
      <section style={{ padding: "80px 24px", background: "#F7FAF8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Key Benefits</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 24 }}>
            Benefits of Professional {serviceName}
          </h2>
          <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
            {richContent.benefits.map((benefit, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "#FFFFFF", borderRadius: 10, padding: "16px 20px", border: "1px solid #E2EBE5" }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(27,122,61,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#1B7A3D", fontSize: 12, fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.55 }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ (LLM-Optimized) ── */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Frequently Asked Questions</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 32 }}>
            {serviceName} FAQ — {cityName}, {stateAbbr}
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {richContent.extendedFaqs.map((faq, i) => (
              <details key={i} style={{ background: "#F7FAF8", borderRadius: 10, border: "1px solid #E2EBE5", overflow: "hidden" }}>
                <summary style={{ padding: "18px 20px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "#1A2B1F", lineHeight: 1.5, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span className="faq-icon" style={{ color: "#1B7A3D", fontSize: 18, flexShrink: 0, marginLeft: 12, transition: "transform 0.2s" }}>+</span>
                </summary>
                <div style={{ padding: "0 20px 18px", fontSize: 14, color: "#4A5E52", lineHeight: 1.75 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Facilities We Serve ── */}
      <section style={{ padding: "80px 24px", background: "#F7FAF8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Facilities We Serve</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 24 }}>
            Businesses We Serve in {cityName}
          </h2>
          <p style={{ fontSize: 16, color: "#4A5E52", lineHeight: 1.8, marginBottom: 20, maxWidth: 720 }}>
            GreenPoint provides professional {serviceShortName.toLowerCase()} services to a wide range of commercial and institutional facilities in {cityName} and throughout {county || stateName}.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {richContent.facilitiesServed.map((facility, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: "#FFFFFF", borderRadius: 8, padding: "14px 18px", border: "1px solid #E2EBE5" }}>
                <span style={{ color: "#1B7A3D", fontSize: 14, fontWeight: 700 }}>•</span>
                <span style={{ fontSize: 14, color: "#4A5E52" }}>{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Nearby Areas + Other Services ── */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Service Areas</span>
          </div>

          {/* Nearby cities for same service */}
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#1A2B1F", lineHeight: 1.2, marginBottom: 16 }}>
            {serviceShortName} in Nearby {stateAbbr} Cities
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {nearbyCities.map((c, i) => (
              <a key={i} href={c.href} className="ep-link" style={{
                display: "inline-block", padding: "10px 18px", borderRadius: 8,
                border: "1px solid #E2EBE5", textDecoration: "none", fontSize: 13,
                fontWeight: 600, color: "#1A2B1F", background: "#FFFFFF",
              }}>
                {c.label} →
              </a>
            ))}
          </div>

          {/* Other services in same city */}
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#1A2B1F", lineHeight: 1.2, marginBottom: 16 }}>
            Other Cleaning Services in {cityName}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {otherServices.map((s, i) => (
              <a key={i} href={s.href} className="ep-link" style={{
                display: "inline-block", padding: "10px 18px", borderRadius: 8,
                border: "1px solid #E2EBE5", textDecoration: "none", fontSize: 13,
                fontWeight: 600, color: "#1A2B1F", background: "#FFFFFF",
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA ── */}
      <section style={{ background: "#0A2A16", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Get Started</span>
            <div style={{ height: 1, width: 48, background: "rgba(200,163,77,0.3)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Request a {serviceShortName} Quote for Your {cityName} Facility
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>
            Get a complimentary facility walkthrough and customized {serviceShortName.toLowerCase()} proposal. MBE-certified. No obligation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#schedule" className="ep-cta" style={{ background: "#1B7A3D", color: "#fff", padding: "16px 36px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em" }}>Schedule a Walkthrough →</a>
            <a href="tel:+13473329348" style={{ background: "transparent", color: "#fff", padding: "16px 36px", borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", border: "1px solid rgba(255,255,255,0.2)" }}>Call 347-332-9348</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
