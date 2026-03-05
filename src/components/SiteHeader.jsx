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
  { label: "Blog", href: "/blog" },
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
        .header-nav-a { transition: color 0.2s ease; }
        .header-nav-a:hover { color: #1B7A3D !important; }
        .header-cta-btn { transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s !important; }
        .header-cta-btn:hover { transform: translateY(-1px) !important; box-shadow: 0 6px 24px rgba(27,122,61,0.3) !important; background: #16683A !important; }
        .header-cap-btn { transition: all 0.2s ease; }
        .header-cap-btn:hover { border-color: #C8A34D !important; color: #C8A34D !important; }
        .header-phone:hover { color: #1B7A3D !important; }
      `}</style>
      <header
        className="site-header"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #E2EBE5" : "1px solid transparent",
          transition: "all 0.4s ease",
          padding: scrolled ? "10px 0" : "16px 0",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{
              width: 42, height: 42, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
              background: "#1B7A3D", fontWeight: 800, fontSize: 19, color: "#fff",
              fontFamily: "'Syne', sans-serif",
            }}>G</div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 700, color: "#1A2B1F", letterSpacing: "-0.02em", lineHeight: 1.1 }}>GreenPoint</div>
              <div style={{ fontSize: 9, color: "#C8A34D", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>Maintenance Services Corp</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 20 }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="header-nav-a"
                style={{ color: "#4A5E52", textDecoration: "none", fontSize: 13, fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.01em" }}>
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="header-phone" style={{
              color: "#1A2B1F", textDecoration: "none", fontSize: 13, fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace", display: "flex", alignItems: "center", gap: 6,
              padding: "6px 10px", transition: "color 0.2s", whiteSpace: "nowrap",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B7A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {PHONE_NUMBER}
            </a>
            <a href="/capability-statement" className="header-cap-btn" style={{
              color: "#8A9B91", textDecoration: "none", fontSize: 11, fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace", border: "1px solid #E2EBE5",
              padding: "8px 14px", borderRadius: 6, letterSpacing: "0.05em", textTransform: "uppercase",
            }}>
              Capability Statement
            </a>
            <a href="/#schedule" className="header-cta-btn" style={{
              background: "#1B7A3D", color: "#fff",
              padding: "10px 22px", borderRadius: 8, fontWeight: 700, fontSize: 12,
              textDecoration: "none", fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}>
              Schedule Walkthrough
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "#1A2B1F", fontSize: 28, cursor: "pointer", padding: 8 }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(255,255,255,0.98)", padding: "20px 24px",
            display: "flex", flexDirection: "column", gap: 16,
            borderBottom: "1px solid #E2EBE5",
            backdropFilter: "blur(12px)",
          }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ color: "#4A5E52", textDecoration: "none", fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{link.label}</a>
            ))}
            <a href={PHONE_HREF} onClick={() => setMobileOpen(false)}
              style={{ color: "#1A2B1F", textDecoration: "none", fontSize: 15, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B7A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {PHONE_NUMBER}
            </a>
            <a href="/capability-statement" onClick={() => setMobileOpen(false)}
              style={{ color: "#8A9B91", textDecoration: "none", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Capability Statement
            </a>
            <a href="/#schedule" onClick={() => setMobileOpen(false)}
              style={{ background: "#1B7A3D", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 700, textDecoration: "none", textAlign: "center", fontFamily: "'Syne', sans-serif", fontSize: 13 }}>
              Schedule Walkthrough
            </a>
          </div>
        )}
      </header>
    </>
  );
}
