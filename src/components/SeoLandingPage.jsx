"use client";
import { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import {
  PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon,
  ShieldCheckIcon, AwardIcon, BuildingIcon, SchoolIcon, ChurchIcon,
  HeartPulseIcon, BabyIcon, LandmarkIcon, BriefcaseIcon,
} from "./Icons";

const PHONE_NUMBER = "(347) 332-9348";
const PHONE_HREF = "tel:3473329348";

function getIndustryIcon(key, size = 20, color = "#2ecc71") {
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", margin: 0, padding: 0 }}>
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
          0%, 100% { box-shadow: 0 0 0 0 rgba(46,204,113,0.5); }
          60% { box-shadow: 0 0 0 8px rgba(46,204,113,0); }
        }
        .seo-fade-up { animation: seoFadeUp 0.7s ease forwards; opacity: 0; }
        .seo-scale-in { animation: seoScaleIn 0.5s ease forwards; opacity: 0; }
        .seo-live-dot { animation: seoPulseDot 2.5s ease infinite; }
        .seo-svc-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .seo-svc-card:hover { transform: translateY(-4px) !important; box-shadow: 0 16px 48px rgba(0,0,0,0.09) !important; border-color: rgba(46,204,113,0.4) !important; }
        .seo-why-card { transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease; }
        .seo-why-card:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(46,204,113,0.3) !important; transform: translateY(-2px); }
        .seo-cta-primary { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .seo-cta-primary:hover { transform: translateY(-3px) !important; box-shadow: 0 12px 40px rgba(46,204,113,0.55) !important; }
        .seo-cta-ghost { transition: background 0.3s ease, border-color 0.3s ease; }
        .seo-cta-ghost:hover { background: rgba(255,255,255,0.12) !important; border-color: rgba(255,255,255,0.35) !important; }
        .seo-faq-row { transition: border-left-color 0.3s ease; border-left: 3px solid transparent; }
        .seo-faq-row.faq-open { border-left-color: #2ecc71; }
        .seo-faq-btn:hover span:first-child { color: #2ecc71 !important; }
        @media (max-width: 640px) { .why-grid-seo { grid-template-columns: 1fr !important; } }
      `}</style>

      {schemaMarkup && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      )}
      <SiteHeader />

      {/* Hero */}
      <section style={{
        position: "relative", background: "linear-gradient(165deg, #0a1a12 0%, #0d2818 40%, #122d1c 100%)",
        padding: "140px 24px 80px", overflow: "hidden",
      }}>
        {/* Background depth */}
        <div style={{ position: "absolute", top: -200, right: -200, width: 700, height: 700, background: "radial-gradient(circle, rgba(46,204,113,0.1) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(46,204,113,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          {/* Credential badge */}
          <div className="seo-fade-up" style={{ animationDelay: "0s" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,204,113,0.1)",
              border: "1px solid rgba(46,204,113,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 28,
            }}>
              <div className="seo-live-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2ecc71" }} />
              <span style={{ fontSize: 12, color: "#2ecc71", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                MBE Certified · Licensed & Insured · SAM.gov Registered
              </span>
            </div>
          </div>

          <h1 className="seo-fade-up" style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em",
            animationDelay: "0.15s",
          }}>
            {headline} <span style={{ color: "#2ecc71" }}>{highlightWord}</span>
          </h1>

          <p className="seo-fade-up" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7, marginBottom: 36, maxWidth: 640, margin: "0 auto 36px",
            animationDelay: "0.3s",
          }}>
            {subheadline}
          </p>

          <div className="seo-fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.45s" }}>
            <a href="/#contact" className="seo-cta-primary" style={{
              background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "16px 36px",
              borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 4px 28px rgba(46,204,113,0.4)", display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Schedule a Free Walkthrough →
            </a>
            <a href={PHONE_HREF} className="seo-cta-ghost" style={{
              background: "rgba(255,255,255,0.05)", color: "#fff", padding: "16px 36px",
              borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              border: "1px solid rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <PhoneIcon size={18} color="#2ecc71" /> {PHONE_NUMBER}
            </a>
          </div>

          {trustBadges.length > 0 && (
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
              {trustBadges.map((badge, bi) => (
                <div key={badge} className="seo-scale-in" style={{
                  display: "flex", alignItems: "center", gap: 6, background: "rgba(46,204,113,0.08)",
                  border: "1px solid rgba(46,204,113,0.2)", borderRadius: 100, padding: "5px 14px",
                  animationDelay: `${0.6 + bi * 0.1}s`,
                }}>
                  <span style={{ color: "#2ecc71", fontWeight: 700, fontSize: 12 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Intro Content */}
      {introParagraphs.length > 0 && (
        <section style={{ background: "#fff", padding: "80px 24px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {introParagraphs.map((para, i) => (
              <p key={i} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#444", lineHeight: 1.85,
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
        <section style={{ background: "#fafbfa", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#0d2818", textAlign: "center", marginBottom: 48 }}>
              What's Included
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {services.map((svc, i) => (
                <div key={i} className="seo-svc-card" style={{
                  background: "#fff", borderRadius: 16, padding: 32, border: "1px solid #eee",
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(46,204,113,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, border: "1px solid rgba(46,204,113,0.12)" }}>
                    {getIndustryIcon(svc.iconKey || "building", 24)}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0d2818", marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChooseUs.length > 0 && (
        <section style={{ background: "linear-gradient(165deg, #0a1a12 0%, #0d2818 50%, #122d1c 100%)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: "radial-gradient(circle, rgba(46,204,113,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 48 }}>
              Why Facility Managers Choose <span style={{ color: "#2ecc71" }}>GreenPoint</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="why-grid-seo">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="seo-why-card" style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, padding: 28, display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(46,204,113,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(46,204,113,0.15)" }}>
                    {getIndustryIcon(item.iconKey || "shield", 20)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section style={{ background: "#fff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#0d2818", textAlign: "center", marginBottom: 48 }}>
              Frequently Asked Questions
            </h2>
            {faqItems.map((item, i) => (
              <div key={i} className={`seo-faq-row${openFaq === i ? " faq-open" : ""}`} style={{ borderBottom: "1px solid #eee" }}>
                <button className="seo-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 0 20px 16px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 20,
                  }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: openFaq === i ? "#2ecc71" : "#0d2818", transition: "color 0.2s", lineHeight: 1.4 }}>{item.q}</span>
                  <span style={{ fontSize: 22, color: openFaq === i ? "#2ecc71" : "#aaa", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s, color 0.2s" }}>+</span>
                </button>
                <div style={{ maxHeight: openFaq === i ? 400 : 0, overflow: "hidden", transition: "max-height 0.4s ease", paddingBottom: openFaq === i ? 20 : 0, paddingLeft: 16 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#555", lineHeight: 1.8, paddingRight: 48 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "linear-gradient(165deg, #0a1a12 0%, #0d2818 50%, #122d1c 100%)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 700, background: "radial-gradient(circle, rgba(46,204,113,0.12) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.15 }}>
            {ctaHeadline}
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 40 }}>
            {ctaSubheadline}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" className="seo-cta-primary" style={{
              background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "18px 40px",
              borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 4px 28px rgba(46,204,113,0.4)", display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Schedule My Walkthrough →
            </a>
            <a href={PHONE_HREF} className="seo-cta-ghost" style={{
              background: "rgba(255,255,255,0.07)", color: "#fff", padding: "18px 40px",
              borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              border: "1px solid rgba(255,255,255,0.2)", display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <PhoneIcon size={18} color="#2ecc71" /> {PHONE_NUMBER}
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
            {[
              { label: "Phone", value: PHONE_NUMBER, href: PHONE_HREF },
              { label: "Email", value: "Hello@GreenPointMS.com", href: "mailto:Hello@GreenPointMS.com" },
              { label: "Hours", value: "Mon–Sat 7AM–8PM · 24/7 Emergency" },
            ].map((info) => (
              <div key={info.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{info.label}</div>
                {info.href ? (
                  <a href={info.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", fontWeight: 600, textDecoration: "none", display: "block" }}>{info.value}</a>
                ) : (
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{info.value}</div>
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
