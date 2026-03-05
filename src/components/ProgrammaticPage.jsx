"use client";
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { STATES, INDUSTRIES, SERVICES_LIST } from '../data/seo-data';
import {
  BuildingIcon, SchoolIcon, ChurchIcon, HeartPulseIcon, BabyIcon,
  LandmarkIcon, BriefcaseIcon, SparklesIcon, WrenchIcon, HardHatIcon,
  MapPinIcon,
} from './Icons';

function getPageIcon(key, size = 28, color = '#1B7A3D') {
  const map = {
    school: <SchoolIcon size={size} color={color} />,
    church: <ChurchIcon size={size} color={color} />,
    medical: <HeartPulseIcon size={size} color={color} />,
    baby: <BabyIcon size={size} color={color} />,
    landmark: <LandmarkIcon size={size} color={color} />,
    building: <BuildingIcon size={size} color={color} />,
    office: <BriefcaseIcon size={size} color={color} />,
    sparkles: <SparklesIcon size={size} color={color} />,
    wrench: <WrenchIcon size={size} color={color} />,
    hardhat: <HardHatIcon size={size} color={color} />,
    'map-pin': <MapPinIcon size={size} color={color} />,
  };
  return map[key] || <BuildingIcon size={size} color={color} />;
}

export default function ProgrammaticPage({ title, subtitle, breadcrumbs, heroIcon, sections, relatedLinks, schemaMarkup }) {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF" }}>
      <style>{`
        @keyframes ppFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .pp-hero-el { animation:ppFadeUp 0.65s ease forwards; opacity:0; }
        .pp-related-card { transition:transform 0.25s ease, box-shadow 0.25s ease; }
        .pp-related-card:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.08) !important; }
        .pp-feature-card { transition:box-shadow 0.2s ease; }
        .pp-feature-card:hover { box-shadow:0 4px 16px rgba(0,0,0,0.06) !important; }
        .pp-cta-primary { transition:transform 0.3s ease, box-shadow 0.3s ease; }
        .pp-cta-primary:hover { transform:translateY(-2px) !important; box-shadow:0 8px 40px rgba(27,122,61,0.3) !important; }
        .pp-cta-ghost { transition:background 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
        .pp-cta-ghost:hover { background:#1B7A3D !important; color:#fff !important; border-color:#1B7A3D !important; }
        details summary::-webkit-details-marker { display:none; }
        details[open] summary span:last-child { transform:rotate(45deg); }
      `}</style>
      <SiteHeader />

      {/* Hero — dark green */}
      <section style={{ background: "#0A2A16", paddingTop: 140, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {breadcrumbs && (
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
          )}
          {heroIcon && <div className="pp-hero-el" style={{ marginBottom: 16, animationDelay: "0s" }}>{getPageIcon(heroIcon, 48, "#C8A34D")}</div>}
          <h1 className="pp-hero-el" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em", animationDelay: heroIcon ? "0.1s" : "0s" }}>{title}</h1>
          {subtitle && <p className="pp-hero-el" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 680, animationDelay: "0.25s" }}>{subtitle}</p>}
          <div className="pp-hero-el" style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap", animationDelay: "0.4s" }}>
            <a href="/#schedule" className="pp-cta-primary" style={{ background: "#1B7A3D", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: 8 }}>Schedule a Walkthrough →</a>
            <a href="/#quote" className="pp-cta-ghost" style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", border: "1px solid rgba(255,255,255,0.2)", letterSpacing: "0.02em" }}>Get an Instant Quote</a>
          </div>
        </div>
      </section>

      {/* Sections — alternating white/off-white */}
      {sections && sections.map((section, idx) => (
        <section key={idx} style={{ background: idx % 2 === 0 ? "#FFFFFF" : "#F7FAF8", padding: "80px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {section.label && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>{section.label}</span>
              </div>
            )}
            {section.heading && <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A2B1F", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.02em" }}>{section.heading}</h2>}
            {section.body && <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "#4A5E52", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>{section.body}</p>}
            {section.features && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginTop: 24 }}>
                {section.features.map((feat, fi) => (
                  <div key={fi} className="pp-feature-card" style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "#FFFFFF", borderRadius: 10, padding: "18px 20px", border: "1px solid #E2EBE5", boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}>
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(27,122,61,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#1B7A3D", fontSize: 12, fontWeight: 700 }}>✓</span>
                    </div>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4A5E52", lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>
            )}
            {section.badges && (
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                {section.badges.map((badge, bi) => (
                  <span key={bi} style={{ background: "rgba(200,163,77,0.08)", color: "#C8A34D", padding: "6px 14px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", border: "1px solid rgba(200,163,77,0.2)", letterSpacing: "0.05em" }}>{badge}</span>
                ))}
              </div>
            )}
            {section.faqs && (
              <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
                {section.faqs.map((faq, fi) => (
                  <details key={fi} style={{ background: "#FFFFFF", borderRadius: 10, border: "1px solid #E2EBE5", overflow: "hidden" }}>
                    <summary style={{ padding: "18px 20px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "#1A2B1F", lineHeight: 1.5, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      {faq.q}
                      <span style={{ color: "#1B7A3D", fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
                    </summary>
                    <div style={{ padding: "0 20px 18px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#4A5E52", lineHeight: 1.7 }}>{faq.a}</div>
                  </details>
                ))}
              </div>
            )}
            {section.stats && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 20, marginTop: 28 }}>
                {section.stats.map((stat, si) => (
                  <div key={si} style={{ textAlign: "center", padding: 20, background: "#FFFFFF", border: "1px solid #E2EBE5", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: "#1B7A3D" }}>{stat.number}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#6A7D72", marginTop: 6 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA — dark green */}
      <section style={{ background: "#0A2A16", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Get Started</span>
            <div style={{ height: 1, width: 48, background: "rgba(200,163,77,0.3)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>Ready for a Cleaner Facility?</h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>Get a complimentary facility walkthrough and customized cleaning proposal. No obligation.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#schedule" className="pp-cta-primary" style={{ background: "#1B7A3D", color: "#fff", padding: "16px 36px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: 8 }}>Schedule a Walkthrough →</a>
            <a href="tel:+13473329348" className="pp-cta-ghost" style={{ background: "transparent", color: "#fff", padding: "16px 36px", borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", border: "1px solid rgba(255,255,255,0.2)", letterSpacing: "0.02em" }}>Call 347-332-9348</a>
          </div>
          <div style={{ marginTop: 20 }}>
            <a href="/#schedule" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Or schedule a consultation online →</a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ background: "#F7FAF8", padding: "64px 24px", borderTop: "1px solid #E2EBE5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Related Pages</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {relatedLinks.map((link, i) => (
                <a key={i} href={link.href} className="pp-related-card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderRadius: 10, border: "1px solid #E2EBE5", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}>
                  {link.icon && <span style={{ display: 'flex', flexShrink: 0, width: 32, height: 32, borderRadius: 6, background: "rgba(27,122,61,0.08)", alignItems: "center", justifyContent: "center" }}>{getPageIcon(link.icon, 16, '#1B7A3D')}</span>}
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1A2B1F", lineHeight: 1.4 }}>{link.label}</span>
                  <span style={{ marginLeft: "auto", color: "#1B7A3D", fontSize: 16, flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
