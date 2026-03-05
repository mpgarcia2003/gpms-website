import { BLOG_POSTS } from '../../data/blog-data';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Blog | GreenPoint Maintenance Services',
  description: 'Expert insights on commercial cleaning, facility maintenance, compliance, and industry best practices from GreenPoint Maintenance Services.',
  alternates: { canonical: 'https://greenpointms.com/blog/' },
  openGraph: {
    title: 'Blog | GreenPoint Maintenance Services',
    description: 'Expert insights on commercial cleaning, facility maintenance, compliance, and industry best practices.',
    url: 'https://greenpointms.com/blog/',
  },
};

const CATEGORY_COLORS = {
  Guides: { bg: "rgba(27,122,61,0.08)", text: "#1B7A3D" },
  Checklists: { bg: "rgba(59,130,246,0.08)", text: "#3B82F6" },
  Compliance: { bg: "rgba(239,68,68,0.08)", text: "#DC2626" },
  Business: { bg: "rgba(200,163,77,0.08)", text: "#C8A34D" },
  Technology: { bg: "rgba(139,92,246,0.08)", text: "#8B5CF6" },
  Pricing: { bg: "rgba(234,88,12,0.08)", text: "#EA580C" },
  Sustainability: { bg: "rgba(5,150,105,0.08)", text: "#059669" },
  Services: { bg: "rgba(100,116,139,0.08)", text: "#64748B" },
};

export default function BlogIndex() {
  const sorted = [...BLOG_POSTS].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF" }}>
      <style>{`
        .blog-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .blog-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
      `}</style>
      <SiteHeader />

      {/* Hero */}
      <section style={{ background: "#0A2A16", paddingTop: 140, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Resources & Insights</span>
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The GreenPoint <span style={{ color: "#2ecc71" }}>Blog</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 600 }}>
            Expert guides, compliance checklists, and industry insights for facility managers, school administrators, and property operators.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: "64px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 24 }}>
          {sorted.map((post, i) => {
            const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;
            return (
              <a key={post.slug} href={`/blog/${post.slug}/`} className="blog-card" style={{
                display: "block", textDecoration: "none",
                background: "#FFFFFF", borderRadius: 12, border: "1px solid #E2EBE5",
                padding: 28,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ background: cat.bg, color: cat.text, padding: "4px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: 12, color: "#8A9B91", fontFamily: "'JetBrains Mono', monospace" }}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span style={{ fontSize: 12, color: "#8A9B91", fontFamily: "'JetBrains Mono', monospace" }}>
                    · {post.readTime}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: i === 0 ? 24 : 20, fontWeight: 700, color: "#1A2B1F", lineHeight: 1.25, marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 15, color: "#4A5E52", lineHeight: 1.6, margin: 0 }}>
                  {post.excerpt}
                </p>
                <span style={{ display: "inline-block", marginTop: 14, fontSize: 13, fontWeight: 600, color: "#1B7A3D", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Read article →
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F7FAF8", padding: "64px 24px", borderTop: "1px solid #E2EBE5" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, color: "#1A2B1F", marginBottom: 12 }}>Need Help With Your Facility?</h2>
          <p style={{ fontSize: 15, color: "#4A5E52", lineHeight: 1.7, marginBottom: 24 }}>Get a complimentary facility walkthrough and customized cleaning proposal.</p>
          <a href="/#schedule" style={{ background: "#1B7A3D", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: 8 }}>Schedule a Walkthrough →</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
