import { BLOG_POSTS, getBlogPost, getAllBlogParams } from '../../../data/blog-data';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export function generateStaticParams() {
  return getAllBlogParams();
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://greenpointms.com/blog/${post.slug}/`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    alternates: { canonical: `https://greenpointms.com/blog/${post.slug}/` },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return <div>Post not found</div>;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "GreenPoint Maintenance Services Corp",
      url: "https://greenpointms.com",
    },
    publisher: {
      "@type": "Organization",
      name: "GreenPoint Maintenance Services Corp",
      url: "https://greenpointms.com",
    },
    mainEntityOfPage: `https://greenpointms.com/blog/${post.slug}/`,
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://greenpointms.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://greenpointms.com/blog/" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  // Get related posts (same category, excluding current)
  const related = BLOG_POSTS
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF" }}>
      <style>{`
        .blog-link { color: #1B7A3D; text-decoration: underline; text-underline-offset: 2px; }
        .blog-link:hover { color: #16683A; }
        .blog-related:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />

      {/* Hero */}
      <section style={{ background: "#0A2A16", paddingTop: 140, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <a href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}>Home</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>›</span>
            <a href="/blog/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 600, letterSpacing: "0.05em" }}>Blog</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>›</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C8A34D", fontWeight: 600, letterSpacing: "0.05em" }}>{post.category}</span>
          </nav>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(200,163,77,0.15)", color: "#C8A34D", padding: "4px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
              {post.category}
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
              · {post.readTime}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 0, letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 64px" }}>
        {post.content.map((block, i) => {
          if (block.type === "intro") {
            return (
              <p key={i} style={{ fontSize: 18, color: "#1A2B1F", lineHeight: 1.8, marginBottom: 32, fontWeight: 500 }}>
                {block.text}
              </p>
            );
          }
          if (block.type === "heading") {
            return (
              <h2 key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#1A2B1F", lineHeight: 1.25, marginTop: 40, marginBottom: 16, letterSpacing: "-0.01em" }}>
                {block.text}
              </h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <p key={i} style={{ fontSize: 16, color: "#4A5E52", lineHeight: 1.8, marginBottom: 20 }}>
                {block.text}
              </p>
            );
          }
          if (block.type === "callout") {
            return (
              <div key={i} style={{ background: "#F0F7F2", borderLeft: "3px solid #1B7A3D", padding: "20px 24px", borderRadius: "0 8px 8px 0", margin: "32px 0" }}>
                <p style={{ fontSize: 15, color: "#1A2B1F", lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                  {block.text}
                </p>
              </div>
            );
          }
          return null;
        })}

        {/* Author / CTA */}
        <div style={{ borderTop: "1px solid #E2EBE5", marginTop: 48, paddingTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: "#1B7A3D", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontFamily: "'Syne', sans-serif", fontSize: 20 }}>G</div>
            <div>
              <div style={{ fontWeight: 600, color: "#1A2B1F", fontSize: 15 }}>GreenPoint Maintenance Services</div>
              <div style={{ fontSize: 13, color: "#8A9B91" }}>MBE-Certified Commercial Cleaning · NY, NJ, CT, PA, FL</div>
            </div>
          </div>
          <a href="/#schedule" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1B7A3D", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em", alignSelf: "flex-start" }}>
            Schedule a Free Walkthrough →
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ background: "#F7FAF8", padding: "64px 24px", borderTop: "1px solid #E2EBE5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ height: 1, width: 32, background: "rgba(200,163,77,0.3)" }} />
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#C8A34D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>Related Articles</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {related.map(r => (
                <a key={r.slug} href={`/blog/${r.slug}/`} className="blog-related" style={{
                  display: "block", textDecoration: "none", background: "#FFFFFF", borderRadius: 10,
                  border: "1px solid #E2EBE5", padding: 20, transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}>
                  <span style={{ fontSize: 11, color: "#8A9B91", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{r.category}</span>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#1A2B1F", lineHeight: 1.3, margin: "8px 0 8px", letterSpacing: "-0.01em" }}>{r.title}</h4>
                  <span style={{ fontSize: 12, color: "#1B7A3D", fontWeight: 600 }}>Read →</span>
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
