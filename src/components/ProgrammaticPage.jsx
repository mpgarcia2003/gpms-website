"use client";
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { STATES, INDUSTRIES, SERVICES_LIST } from '../data/seo-data';
import {
  BuildingIcon, SchoolIcon, ChurchIcon, HeartPulseIcon, BabyIcon,
  LandmarkIcon, BriefcaseIcon, SparklesIcon, WrenchIcon, HardHatIcon,
  MapPinIcon,
} from './Icons';

function getPageIcon(key, size = 28, color = '#2ecc71') {
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
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @keyframes ppFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ppScaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        .pp-hero-el { animation: ppFadeUp 0.65s ease forwards; opacity: 0; }
        .pp-related-card { transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease; }
        .pp-related-card:hover { border-color: rgba(46,204,113,0.4) !important; box-shadow: 0 6px 24px rgba(0,0,0,0.06) !important; transform: translateY(-2px); }
        .pp-feature-card { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .pp-feature-card:hover { border-color: rgba(46,204,113,0.25) !important; box-shadow: 0 4px 16px rgba(0,0,0,0.04) !important; }
      `}</style>
      <SiteHeader />

      {/* Hero */}
      <section style={{ background: "linear-gradient(165deg, #0a1a12 0%, #0d2818 30%, #122d1c 60%, #0a1a12 100%)", paddingTop: 140, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(46,204,113,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <nav style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
              <a href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600 }}>Home</a>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>›</span>
                  {crumb.href ? (
                    <a href={crumb.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600 }}>{crumb.label}</a>
                  ) : (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#2ecc71", fontWeight: 600 }}>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {heroIcon && <div className="pp-hero-el" style={{ marginBottom: 16, animationDelay: "0s" }}>{getPageIcon(heroIcon, 48)}</div>}

          <h1 className="pp-hero-el" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.12, marginBottom: 20, letterSpacing: "-0.02em", animationDelay: heroIcon ? "0.1s" : "0s" }}>
            {title}
          </h1>

          {subtitle && (
            <p className="pp-hero-el" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 680, animationDelay: "0.25s" }}>
              {subtitle}
            </p>
          )}

          <div className="pp-hero-el" style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap", animationDelay: "0.4s" }}>
            <a href="/#quote" style={{ background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 24px rgba(46,204,113,0.35)", display: "inline-flex", alignItems: "center", gap: 8, transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(46,204,113,0.5)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(46,204,113,0.35)"; }}>
              Get an Instant Quote →
            </a>
            <a href="/#contact" style={{ background: "rgba(255,255,255,0.05)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", border: "1px solid rgba(255,255,255,0.15)", transition: "background 0.3s ease, border-color 0.3s ease" }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}>
              Schedule Walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections && sections.map((section, idx) => (
        <section key={idx} style={{ background: idx % 2 === 0 ? "#fff" : "#fafbfa", padding: "80px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {section.label && (
              <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'DM Sans', sans-serif" }}>{section.label}</div>
            )}
            {section.heading && (
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.2, marginBottom: 20 }}>{section.heading}</h2>
            )}
            {section.body && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>{section.body}</p>
            )}

            {section.features && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginTop: 24 }}>
                {section.features.map((feat, fi) => (
                  <div key={fi} className="pp-feature-card" style={{ display: "flex", alignItems: "flex-start", gap: 14, background: idx % 2 === 0 ? "#fafbfa" : "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid #eee" }}>
                    <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(46,204,113,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(46,204,113,0.12)", flexShrink: 0 }}>
                      <span style={{ color: "#2ecc71", fontSize: 13, fontWeight: 700 }}>✓</span>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#444", lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {section.badges && (
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                {section.badges.map((badge, bi) => (
                  <span key={bi} style={{ background: "rgba(46,204,113,0.08)", color: "#27ae60", padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{badge}</span>
                ))}
              </div>
            )}

            {section.stats && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 20, marginTop: 28 }}>
                {section.stats.map((stat, si) => (
                  <div key={si} style={{ textAlign: "center", padding: 20 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: "#0d2818" }}>{stat.number}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#888", marginTop: 6 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0d2818, #1a4d2e)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Ready for a Cleaner Facility?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>
            Get a complimentary facility walkthrough and customized cleaning proposal. No obligation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#quote" style={{ background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "16px 36px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 24px rgba(46,204,113,0.3)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 36px rgba(46,204,113,0.5)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(46,204,113,0.3)"; }}>
              Get Instant Quote →
            </a>
            <a href="tel:+13473329348" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "16px 36px", borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", border: "1px solid rgba(255,255,255,0.2)", transition: "background 0.3s ease" }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}>
              Call 347-332-9348
            </a>
          </div>
          <div style={{ marginTop: 20 }}>
            <a href="/#schedule" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => e.target.style.color = "#2ecc71"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.5)"}>
              Or schedule a consultation online →
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ background: "#fafbfa", padding: "64px 24px", borderTop: "1px solid #f0f0f0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#0d2818", marginBottom: 24 }}>Related Pages</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {relatedLinks.map((link, i) => (
                <a key={i} href={link.href} className="pp-related-card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderRadius: 12, border: "1px solid #e8e8e8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", background: "#fff" }}>
                  {link.icon && <span style={{ display: 'flex', flexShrink: 0, width: 32, height: 32, borderRadius: 8, background: "rgba(46,204,113,0.08)", alignItems: "center", justifyContent: "center" }}>{getPageIcon(link.icon, 16, '#2ecc71')}</span>}
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0d2818", lineHeight: 1.4 }}>{link.label}</span>
                  <span style={{ marginLeft: "auto", color: "#2ecc71", fontSize: 16, flexShrink: 0 }}>→</span>
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
