"use client";
import { STATES, INDUSTRIES, SERVICES_LIST } from '../data/seo-data';

const PHONE_NUMBER = "347-332-9348";
const PHONE_HREF = "tel:+13473329348";

export default function SiteFooter() {
  return (
    <footer style={{ background: "#060A07", padding: "72px 24px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.2), transparent)" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }} className="footer-grid">
          {/* Company Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#00E676", fontWeight: 800, fontSize: 18, color: "#060A07", fontFamily: "'Syne', sans-serif" }}>G</div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>GreenPoint</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Maintenance Services Corp</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 340 }}>
              MBE-certified facility services provider. Commercial janitorial and facility maintenance across NY, NJ, CT, PA &amp; FL. Serving institutional and commercial clients since 2018.
            </p>
            {/* Certifications */}
            <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
              {["MBE / MWBE", "SAM.gov Registered", "Bonded & Insured"].map((badge) => (
                <span key={badge} style={{ background: "rgba(0,230,118,0.08)", color: "#00E676", padding: "4px 10px", borderRadius: 0, fontSize: 10, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", border: "1px solid rgba(0,230,118,0.15)", letterSpacing: "0.05em" }}>{badge}</span>
              ))}
            </div>
            {/* Contact */}
            <div style={{ marginTop: 20 }}>
              <a href={PHONE_HREF} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 600, display: "block" }}>{PHONE_NUMBER}</a>
              <a href="mailto:info@greenpointms.com" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none", display: "block", marginTop: 4 }}>info@greenpointms.com</a>
            </div>
            {/* Compliance Data */}
            <div style={{ marginTop: 18, padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", lineHeight: 1.8 }}>
                NAICS: 561720 (Janitorial Services) · 238210 (Electrical Contractors) · 561790 (Other Services to Buildings)
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", lineHeight: 1.8 }}>
                $2M+ Commercial General Liability · Workers&rsquo; Compensation · Fully Bonded
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid rgba(0,230,118,0.08)" }}>Services</div>
            {SERVICES_LIST.map((s) => (
              <a key={s.slug} href={`/services/${s.slug}/`} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"}
                onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.45)"}>
                {s.shortName}
              </a>
            ))}
          </div>

          {/* Industries */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid rgba(0,230,118,0.08)" }}>Industries</div>
            {INDUSTRIES.map((i) => (
              <a key={i.slug} href={`/industries/${i.slug}/`} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"}
                onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.45)"}>
                {i.shortName}
              </a>
            ))}
          </div>

          {/* Company Links + Service Areas */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18, paddingBottom: 12, borderBottom: "1px solid rgba(0,230,118,0.08)" }}>Company</div>
            {[
              { label: "Schedule a Consultation", href: "/#schedule" },
              { label: "Government Services", href: "/government-cleaning-services" },
              { label: "Capability Statement", href: "/capability-statement" },
              { label: "School Cleaning NYC", href: "/school-cleaning-nyc" },
              { label: "Janitorial Services NYC", href: "/janitorial-services-nyc" },
            ].map((link) => (
              <a key={link.label} href={link.href} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"}
                onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.45)"}>
                {link.label}
              </a>
            ))}
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#00E676", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 28, marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid rgba(0,230,118,0.08)" }}>Service Areas</div>
            {STATES.map((s) => (
              <a key={s.slug} href={`/locations/${s.slug}/`} style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#00E676"}
                onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.45)"}>
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            © 2026 GreenPoint Maintenance Services Corp. All rights reserved. Est. 2018.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/sitemap.xml" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>Sitemap</a>
            <a href="/#contact" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
