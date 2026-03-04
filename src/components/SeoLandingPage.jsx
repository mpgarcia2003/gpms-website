"use client";
import { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import {
  PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon,
  ShieldCheckIcon, AwardIcon, BuildingIcon, SchoolIcon, ChurchIcon,
  HeartPulseIcon, BabyIcon, LandmarkIcon, BriefcaseIcon,
} from "./Icons";

const PHONE_NUMBER = "347-332-9348";
const PHONE_HREF = "tel:+13473329348";

function getIndustryIcon(key, size = 20, color = "#00E676") {
  const map = {
    school: <SchoolIcon size={size} color={color} />,
    church: <ChurchIcon size={size} color={color} />,
    medical: <HeartPulseIcon size={size} color={color} />,
    daycare: <BabyIcon size={size} color={color} />,
    government: <LandmarkIcon size={size} color={color} />,
    office: <BriefcaseIcon size={size} color={color} />,
    building: <BuildingIcon size={size} color={color} />,
    shield: <ShieldCheckIcon size={size} color={color} />,
    award: <AwardIcon size={size} color={color} />,
  };
  return map[key] || <BuildingIcon size={size} color={color} />;
}

export default function SeoLandingPage({
  headline,
  highlightWord,
  subheadline,
  introParagraphs = [],
  trustBadges = [],
  services = [],
  whyChooseUs = [],
  faqItems = [],
  ctaHeadline = "Request a Free Facility Assessment",
  ctaSubheadline = "Schedule a walkthrough and receive a custom proposal within 48 hours. No obligation.",
  schemaMarkup = null,
}) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0, padding: 0, background: "#060A07" }}>
      <style>{`
        @keyframes seoFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes seoScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes seoPulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,230,118,0.5); }
          60% { box-shadow: 0 0 0 8px rgba(0,230,118,0); }
        }
        .seo-fade-up { animation: seoFadeUp 0.7s ease forwards; opacity: 0; }
        .seo-scale-in { animation: seoScaleIn 0.5s ease forwards; opacity: 0; }
        .seo-live-dot { animation: seoPulseDot 2.5s ease infinite; }
        .seo-svc-card { transition: transform 0.3s ease, border-color 0.3s ease; }
        .seo-svc-card:hover { transform: translateY(-4px) !important; border-color: rgba(0,230,118,0.3) !important; }
        .seo-why-card { transition: border-color 0.25s ease, transform 0.25s ease; }
        .seo-why-card:hover { border-color: rgba(0,230,118,0.25) !important; transform: translateY(-2px); }
        .seo-cta-primary { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .seo-cta-primary:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 40px rgba(0,230,118,0.35) !important; }
        .seo-cta-ghost { transition: border-color 0.3s ease; }
        .seo-cta-ghost:hover { border-color: rgba(0,230,118,0.4) !important; color: #00E676 !important; }
        .seo-faq-row { transition: border-left-color 0.3s ease; border-left: 2px solid transparent; }
        .seo-faq-row.faq-open { border-left-color: #00E676; }
        @media (max-width: 640px) { .why-grid-seo { grid-template-columns: 1fr !important; } }
      `}</style>

      {schemaMarkup && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      )}
      <SiteHeader />

      {/* Hero */}
      <section style={{
        position: "relative", background: "#060A07",
        padding: "140px 24px 80px", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          {/* Credential badge */}
          <div className="seo-fade-up" style={{ animationDelay: "0s" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,230,118,0.08)",
              border: "1px solid rgba(0,230,118,0.15)", borderRadius: 0, padding: "6px 16px", marginBottom: 28,
            }}>
              <div className="seo-live-dot" style={{ width: 6, height: 6, borderRadius: 0, background: "#00E676" }} />
              <span style={{ fontSize: 10, color: "#00E676", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                MBE Certified · Licensed & Insured · SAM.gov Registered
              </span>
            </div>
          </div>

          <h1 className="seo-fade-up" style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.03em",
            animationDelay: "0.15s",
          }}>
            {headline} <span style={{ color: "#00E676" }}>{highlightWord}</span>
          </h1>

          <p className="seo-fade-up" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7, marginBottom: 36, maxWidth: 640, margin: "0 auto 36px",
            animationDelay: "0.3s",
          }}>
            {subheadline}
          </p>

          <div className="seo-fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.45s" }}>
            <a href="/#contact" className="seo-cta-primary" style={{
              background: "#00E676", color: "#060A07", padding: "16px 36px",
              borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.06em", textTransform: "uppercase",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Schedule a Free Walkthrough →
            </a>
            <a href={PHONE_HREF} className="seo-cta-ghost" style={{
              background: "transparent", color: "#fff", padding: "16px 36px",
              borderRadius: 4, fontWeight: 600, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif",
              border: "1px solid rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", gap: 8,
              letterSpacing: "0.04em", textTransform: "uppercase",
            }}>
              <PhoneIcon size={16} color="#00E676" /> {PHONE_NUMBER}
            </a>
          </div>

          {trustBadges.length > 0 && (
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
              {trustBadges.map((badge, bi) => (
                <div key={badge} className="seo-scale-in" style={{
                  display: "flex", alignItems: "center", gap: 6, background: "rgba(0,230,118,0.06)",
                  border: "1px solid rgba(0,230,118,0.15)", borderRadius: 0, padding: "5px 14px",
                  animationDelay: `${0.6 + bi * 0.1}s`,
                }}>
                  <span style={{ color: "#00E676", fontWeight: 700, fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: "0.05em" }}>{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Diagonal cut */}
      <div style={{ height: 60, marginTop: -1, background: "linear-gradient(to bottom right, #060A07 49.5%, #0A0F0B 50.5%)" }} />

      {/* Intro Content */}
      {introParagraphs.length > 0 && (
        <section style={{ background: "#0A0F0B", padding: "80px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {introParagraphs.map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.85,
                marginBottom: i < introParagraphs.length - 1 ? 24 : 0,
              }}>
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Services Grid */}
      {services.length > 0 && (
        <section style={{ background: "#060A07", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
              <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Services Included</span>
              <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
              What&apos;s Included
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {services.map((svc, i) => (
                <div key={i} className="seo-svc-card" style={{
                  background: "#0D1310", borderRadius: 0, padding: 32, border: "1px solid rgba(0,230,118,0.08)",
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: 0, background: "rgba(0,230,118,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, border: "1px solid rgba(0,230,118,0.12)" }}>
                    {getIndustryIcon(svc.iconKey || "building", 24)}
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diagonal cut */}
      <div style={{ height: 60, marginTop: -1, background: "linear-gradient(to bottom left, #060A07 49.5%, #0A0F0B 50.5%)" }} />

      {/* Why Choose Us */}
      {whyChooseUs.length > 0 && (
        <section style={{ background: "#0A0F0B", padding: "80px 24px", position: "relative" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
              <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Why GreenPoint</span>
              <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
              Why Facility Managers Choose <span style={{ color: "#00E676" }}>GreenPoint</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="why-grid-seo">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="seo-why-card" style={{
                  background: "#0D1310", border: "1px solid rgba(0,230,118,0.08)",
                  borderRadius: 0, padding: 28, display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <div style={{ width: 40, height: 40, borderRadius: 0, background: "rgba(0,230,118,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(0,230,118,0.12)" }}>
                    {getIndustryIcon(item.iconKey || "shield", 20)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diagonal cut */}
      <div style={{ height: 60, marginTop: -1, background: "linear-gradient(to bottom right, #0A0F0B 49.5%, #060A07 50.5%)" }} />

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section style={{ background: "#060A07", padding: "80px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
              <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>FAQ</span>
              <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
            {faqItems.map((item, i) => (
              <div key={i} className={`seo-faq-row${openFaq === i ? " faq-open" : ""}`} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <button className="seo-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 0 20px 16px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 20,
                  }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 600, color: openFaq === i ? "#00E676" : "#fff", transition: "color 0.2s", lineHeight: 1.4 }}>{item.q}</span>
                  <span style={{ fontSize: 22, color: openFaq === i ? "#00E676" : "rgba(255,255,255,0.3)", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s, color 0.2s" }}>+</span>
                </button>
                <div style={{ maxHeight: openFaq === i ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s ease", paddingBottom: openFaq === i ? 20 : 0, paddingLeft: 16 }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, paddingRight: 48 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "#0A0F0B", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Get Started</span>
            <div style={{ height: 1, width: 48, background: "rgba(0,230,118,0.3)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {ctaHeadline}
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 40 }}>
            {ctaSubheadline}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" className="seo-cta-primary" style={{
              background: "#00E676", color: "#060A07", padding: "18px 40px",
              borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.06em", textTransform: "uppercase",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Schedule My Walkthrough →
            </a>
            <a href={PHONE_HREF} className="seo-cta-ghost" style={{
              background: "transparent", color: "#fff", padding: "18px 40px",
              borderRadius: 4, fontWeight: 600, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif",
              border: "1px solid rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", gap: 8,
              letterSpacing: "0.04em", textTransform: "uppercase", transition: "border-color 0.3s, color 0.3s",
            }}>
              <PhoneIcon size={16} color="#00E676" /> {PHONE_NUMBER}
            </a>
          </div>
          <div style={{ marginTop: 20 }}>
            <a href="/#schedule" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => e.target.style.color = "#00E676"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.4)"}>
              Or schedule a consultation online →
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
            {[
              { label: "Phone", value: PHONE_NUMBER, href: PHONE_HREF },
              { label: "Email", value: "info@greenpointms.com", href: "mailto:info@greenpointms.com" },
              { label: "Hours", value: "Mon–Sat 7AM–8PM · 24/7 Emergency" },
            ].map((info) => (
              <div key={info.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{info.label}</div>
                {info.href ? (
                  <a href={info.href} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.8)", fontWeight: 600, textDecoration: "none", display: "block" }}>{info.value}</a>
                ) : (
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{info.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
