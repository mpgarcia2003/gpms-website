import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { BuildingIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <SiteHeader />
      <section style={{ background: "linear-gradient(165deg, #0a1a12, #0d2818)", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "140px 24px 80px" }}>
        <div style={{ textAlign: "center", maxWidth: 500 }}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', opacity: 0.4 }}>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Page Not Found</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 32 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a href="/" style={{ background: "#2ecc71", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
            Back to Home →
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
