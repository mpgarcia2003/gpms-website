"use client";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "347-332-9348";
const PHONE_HREF = "tel:+13473329348";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "JaniTrack", href: "/#janitrack" },
  { label: "Government", href: "/government-cleaning-services" },
  { label: "Instant Quote", href: "/#quote" },
  { label: "Resources", href: "/capability-statement" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .site-header .desktop-nav { display: flex !important; }
        .site-header .mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .site-header .desktop-nav { display: none !important; }
          .site-header .mobile-toggle { display: block !important; }
        }
        @keyframes phoneGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,230,118,0); }
          50% { box-shadow: 0 0 0 6px rgba(0,230,118,0.15); }
        }
        .header-phone-cta { animation: phoneGlow 3s ease infinite; border-radius: 0; }
        .header-phone-cta:hover { color: #00E676 !important; }
        .header-nav-link { transition: color 0.2s ease; }
        .header-cta-btn { transition: transform 0.25s ease, box-shadow 0.25s ease !important; }
        .header-cta-btn:hover { transform: translateY(-1px) !important; box-shadow: 0 6px 24px rgba(0,230,118,0.45) !important; }
        .header-cap-btn:hover { border-color: rgba(0,230,118,0.4) !important; color: #00E676 !important; }
        .header-nav-a:hover { color: #00E676 !important; }
      `}</style>
      <header
        className="site-header"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? "rgba(6,10,7,0.97)" : "rgba(6,10,7,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(0,230,118,0.12)" : "1px solid rgba(255,255,255,0.04)",
          transition: "all 0.4s ease",
          padding: scrolled ? "10px 0" : "16px 0",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{
              width: 42, height: 42, borderRadius: 0, display: "flex", alignItems: "center", justifyContent: "center",
              background: "#00E676", fontWeight: 800, fontSize: 19, color: "#060A07",
              fontFamily: "'Syne', sans-serif",
            }}>G</div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>GreenPoint</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Maintenance Services Corp</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 20 }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="header-nav-a"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s", letterSpacing: "0.01em" }}>
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="header-phone-cta" style={{
              color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace", display: "flex", alignItems: "center", gap: 6,
              padding: "6px 10px",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {PHONE_NUMBER}
            </a>
            <a href="/capability-statement" className="header-cap-btn" style={{
              color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 11, fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace", border: "1px solid rgba(255,255,255,0.12)",
              padding: "8px 14px", borderRadius: 0, transition: "all 0.2s", letterSpacing: "0.05em", textTransform: "uppercase",
            }}>
              Capability Statement
            </a>
            <a href="/#contact" className="header-cta-btn" style={{
              background: "#00E676", color: "#060A07",
              padding: "10px 22px", borderRadius: 4, fontWeight: 700, fontSize: 12,
              textDecoration: "none", fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.06em", textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              Schedule Walkthrough
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: 8 }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(6,10,7,0.98)", padding: "20px 24px",
            display: "flex", flexDirection: "column", gap: 16,
            borderBottom: "1px solid rgba(0,230,118,0.12)",
          }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{link.label}</a>
            ))}
            <a href={PHONE_HREF} onClick={() => setMobileOpen(false)}
              style={{ color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {PHONE_NUMBER}
            </a>
            <a href="/capability-statement" onClick={() => setMobileOpen(false)}
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Capability Statement
            </a>
            <a href="/#contact" onClick={() => setMobileOpen(false)}
              style={{ background: "#00E676", color: "#060A07", padding: "12px 24px", borderRadius: 4, fontWeight: 700, textDecoration: "none", textAlign: "center", fontFamily: "'Syne', sans-serif", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Schedule Walkthrough
            </a>
          </div>
        )}
      </header>
    </>
  );
}
