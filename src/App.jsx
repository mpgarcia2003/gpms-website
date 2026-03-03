import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Industries", target: "industries" },
  { label: "JaniTrack", target: "janitrack" },
  { label: "Service Areas", target: "areas" },
  { label: "Learning Center", target: "learning" },
  { label: "Careers", target: "careers" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SERVICES = [
  {
    icon: "🏢",
    title: "Commercial Janitorial",
    desc: "Daily, weekly, and monthly cleaning programs for offices, lobbies, restrooms, and common areas. Customized schedules that work around your operations.",
  },
  {
    icon: "🧬",
    title: "Disinfection & Sanitization",
    desc: "CDC-compliant electrostatic disinfection, hospital-grade sanitizers, and ATP bioluminescence testing for verifiable pathogen elimination.",
  },
  {
    icon: "🪟",
    title: "Floor Care & Restoration",
    desc: "Strip, seal, and refinish hard floors. Carpet extraction and encapsulation. Marble and stone restoration. VCT maintenance programs.",
  },
  {
    icon: "🚿",
    title: "Day Porter Services",
    desc: "On-site daytime staff for continuous upkeep of high-traffic areas, restroom monitoring, supply replenishment, and lobby presentation.",
  },
  {
    icon: "🔧",
    title: "Facility Maintenance",
    desc: "Light plumbing, electrical, HVAC filter changes, painting touch-ups, and general handyman services — one vendor for everything.",
  },
  {
    icon: "🏗️",
    title: "Post-Construction Cleanup",
    desc: "Three-stage professional cleanup: rough clean, light clean, and final touch. Debris removal, dust elimination, and move-in ready preparation.",
  },
];

const INDUSTRIES = [
  {
    icon: "🏫",
    title: "Schools & Educational Facilities",
    slug: "schools",
    desc: "K-12, charter schools, daycares, and universities. Green cleaning products safe for children. Allergy and asthma-friendly protocols. Summer deep-clean programs.",
    features: ["CDC-compliant classroom sanitization", "Cafeteria & gymnasium deep cleaning", "Green products — no toxic fumes", "Flexible after-hours scheduling"],
  },
  {
    icon: "⛪",
    title: "Churches & Houses of Worship",
    slug: "churches",
    desc: "Sanctuary, fellowship hall, nursery, and office cleaning for congregations of all sizes. We respect your sacred spaces with meticulous care.",
    features: ["Sanctuary & pew care", "Fellowship hall event turnaround", "Nursery sanitization protocols", "Flexible scheduling around services"],
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical Offices",
    slug: "medical",
    desc: "OSHA-compliant cleaning for medical offices, dental practices, outpatient clinics, surgery centers, and long-term care facilities.",
    features: ["OSHA & HIPAA-aware protocols", "Exam room & waiting area sanitization", "Biohazard-safe waste handling", "ATP testing verification"],
  },
  {
    icon: "👶",
    title: "Daycare & Childcare Centers",
    slug: "daycare",
    desc: "Specialized cleaning for infant rooms, toddler areas, and play spaces using only non-toxic, eco-friendly products approved for environments with children.",
    features: ["Non-toxic, child-safe products only", "Toy & surface sanitization", "Nap room & diaper station protocols", "Health department compliance"],
  },
  {
    icon: "🏛️",
    title: "Government & Municipal Buildings",
    slug: "government",
    desc: "Secure, reliable cleaning for government offices, courthouses, community centers, and public facilities. MBE-certified for diversity procurement compliance.",
    features: ["MBE certification for procurement", "Background-checked staff", "Secure facility protocols", "ADA-compliant service delivery"],
  },
  {
    icon: "🏢",
    title: "Commercial Office Buildings",
    slug: "offices",
    desc: "Comprehensive programs for single-tenant offices to multi-floor commercial properties. Conference rooms, reception areas, executive suites, and shared spaces.",
    features: ["Customized cleaning checklists", "After-hours & weekend service", "Conference room ready service", "Tenant satisfaction programs"],
  },
];

const TRUST_STATS = [
  { number: "2018", label: "Incorporated in New York" },
  { number: "5", label: "States Served" },
  { number: "500+", label: "Facilities Maintained" },
  { number: "98%", label: "Client Retention Rate" },
];

const TESTIMONIALS = [
  {
    quote: "GreenPoint transformed our school's cleanliness standards. Their team works around our schedule perfectly, and the JaniTrack reports give our board complete confidence in the quality of service.",
    name: "Dr. Patricia Hernandez",
    role: "Principal, Achievement First Charter School",
    vertical: "Education",
  },
  {
    quote: "After three different cleaning companies, GreenPoint is the first one that actually shows up consistently and delivers what they promise. The real-time verification photos are a game changer.",
    name: "Rev. James Crawford",
    role: "Senior Pastor, New Life Community Church",
    vertical: "House of Worship",
  },
  {
    quote: "As a medical office, we can't compromise on sanitization. GreenPoint's ATP testing gives us measurable proof that our exam rooms meet clinical-grade standards every single day.",
    name: "Dr. Michael Torres",
    role: "Director, Bronx Family Medical Center",
    vertical: "Healthcare",
  },
];

const AREAS = [
  {
    state: "New York",
    abbr: "NY",
    regions: ["Bronx", "Manhattan", "Brooklyn", "Queens", "Westchester", "Yonkers", "New Rochelle", "Mount Vernon"],
  },
  {
    state: "New Jersey",
    abbr: "NJ",
    regions: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Hackensack", "Fort Lee", "Bergen County"],
  },
  {
    state: "Connecticut",
    abbr: "CT",
    regions: ["Stamford", "Bridgeport", "New Haven", "Hartford", "Norwalk", "Danbury", "Fairfield County"],
  },
  {
    state: "Pennsylvania",
    abbr: "PA",
    regions: ["Philadelphia", "Allentown", "Scranton", "Bethlehem", "Reading", "King of Prussia"],
  },
  {
    state: "Florida",
    abbr: "FL",
    regions: ["Orlando", "Miami", "Fort Lauderdale", "Kissimmee", "Miami Beach", "Coral Gables", "Hialeah"],
  },
];

const BLOG_POSTS = [
  {
    title: "Why ATP Testing Is the Future of Commercial Cleaning Verification",
    excerpt: "How bioluminescence technology gives facility managers measurable proof of clean — and why your cleaning company should be using it.",
    category: "Technology",
    date: "Feb 2026",
  },
  {
    title: "CDC Guidelines for School Cleaning: What Administrators Need to Know",
    excerpt: "A comprehensive breakdown of current CDC recommendations for K-12 cleaning protocols, including high-touch surfaces and ventilation.",
    category: "Education",
    date: "Jan 2026",
  },
  {
    title: "The Hidden Cost of Unreliable Cleaning Services",
    excerpt: "No-shows, inconsistent quality, and communication gaps cost facilities more than just dirty floors. Here's how to calculate the true impact.",
    category: "Insights",
    date: "Jan 2026",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Facility Walkthrough",
    desc: "We visit your site, assess square footage, traffic patterns, surfaces, and compliance requirements — at no cost.",
  },
  {
    step: "02",
    title: "Custom Cleaning Plan",
    desc: "You receive a detailed proposal with scope, frequency, products, and fixed pricing — no hidden fees, no hourly billing.",
  },
  {
    step: "03",
    title: "Dedicated Team Assignment",
    desc: "We assign a background-checked, trained team specifically to your facility. Same faces every visit — consistency you can count on.",
  },
  {
    step: "04",
    title: "JaniTrack Verification",
    desc: "Every cleaning session is documented with timestamped photos, task checklists, and ATP readings — accessible from your dashboard.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What areas does GreenPoint Maintenance Services serve?",
    a: "We provide commercial janitorial and facility maintenance services across five states: New York (Bronx, Manhattan, Brooklyn, Queens, Westchester), New Jersey, Connecticut, Pennsylvania, and Florida (Orlando and Miami metro areas).",
  },
  {
    q: "What is JaniTrack and how does it work?",
    a: "JaniTrack is our proprietary real-time cleaning verification system. After every cleaning session, your team uploads timestamped, GPS-tagged photos and completes digital checklists. We also conduct ATP bioluminescence testing — the same technology hospitals use — to give you measurable proof that surfaces meet clinical-grade cleanliness standards. You access everything through a live dashboard.",
  },
  {
    q: "Is GreenPoint a Minority Business Enterprise (MBE)?",
    a: "Yes. GreenPoint Maintenance Services Corp is a Certified Minority Business Enterprise registered with New York State and the City of New York. We are also registered on SAM.gov for federal contracting. Our MBE certification qualifies us for diversity procurement programs and MWBE set-aside contracts at the city, state, and federal level.",
  },
  {
    q: "What types of facilities do you clean?",
    a: "We specialize in six core verticals: K-12 schools and educational facilities, churches and houses of worship, healthcare and medical offices, daycare and childcare centers, government and municipal buildings, and commercial office spaces. Each vertical has dedicated cleaning protocols designed for its specific compliance and safety requirements.",
  },
  {
    q: "Do you use eco-friendly cleaning products?",
    a: "Yes. We use Green Seal certified, EPA-registered cleaning products across all facilities. Our products are non-toxic, allergy-safe, and free from harsh chemical fumes — which is especially important in schools, daycares, and healthcare environments where vulnerable populations are present.",
  },
  {
    q: "How is pricing structured?",
    a: "We provide fixed-price proposals based on your facility's square footage, cleaning frequency, and scope of work. There are no hourly rates, no surprise charges, and no hidden fees. Every quote includes a complimentary facility walkthrough and is customized to your specific needs and budget.",
  },
  {
    q: "Are your employees background-checked and insured?",
    a: "Every GreenPoint team member undergoes a comprehensive background check before being assigned to any facility. We carry full commercial general liability insurance and are bonded. We also provide workers' compensation coverage for all employees.",
  },
  {
    q: "Can you handle emergency or one-time cleaning requests?",
    a: "Absolutely. In addition to scheduled cleaning programs, we offer 24/7 emergency cleaning services for situations like water damage, biohazard incidents, post-event cleanup, and post-construction debris removal. Contact us anytime and we'll dispatch a team.",
  },
];

const WHY_US = [
  {
    icon: "📱",
    title: "JaniTrack Verification",
    desc: "The only local operator with real-time photo verification and ATP bioluminescence testing. See proof, not promises.",
    competitor: "Zero local competitors offer this",
  },
  {
    icon: "🏆",
    title: "MBE Certified",
    desc: "Registered Minority Business Enterprise with NYS & NYC. Qualifies for diversity procurement and MWBE set-aside contracts.",
    competitor: "Only 2 of 17 competitors hold this",
  },
  {
    icon: "💰",
    title: "Fixed Pricing",
    desc: "Transparent, per-facility pricing with no hourly billing, no surprise fees, and no hidden charges. Know exactly what you'll pay.",
    competitor: "Most competitors hide pricing entirely",
  },
  {
    icon: "🎯",
    title: "Vertical Specialists",
    desc: "Dedicated protocols for schools, churches, medical, daycare, and government — not a one-size-fits-all approach.",
    competitor: "No local competitor has dedicated vertical pages",
  },
];
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Header({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(10, 26, 18, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(46, 204, 113, 0.15)" : "none",
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #2ecc71, #27ae60)", fontWeight: 800, fontSize: 20, color: "#fff",
            boxShadow: "0 2px 12px rgba(46,204,113,0.3)",
          }}>
            G
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              GreenPoint
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
              Maintenance Services
            </div>
          </div>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo(item.target); }}
              style={{
                color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#2ecc71")}
              onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.8)")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            style={{
              background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "10px 24px",
              borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", boxShadow: "0 2px 12px rgba(46,204,113,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 4px 20px rgba(46,204,113,0.4)"; }}
            onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 12px rgba(46,204,113,0.3)"; }}
          >
            Get a Free Quote
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none", background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: 8,
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(10, 26, 18, 0.98)",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
          borderBottom: "1px solid rgba(46, 204, 113, 0.2)",
        }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(item.target); }}
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 16, fontFamily: "'DM Sans', sans-serif" }}>
              {item.label}
            </a>
          ))}
          <a href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo("contact"); }}
            style={{ background: "#2ecc71", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 600, textDecoration: "none", textAlign: "center", fontFamily: "'DM Sans', sans-serif" }}>
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(165deg, #0a1a12 0%, #0d2818 30%, #122d1c 60%, #0a1a12 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600,
        background: "radial-gradient(circle, rgba(46,204,113,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100, width: 400, height: 400,
        background: "radial-gradient(circle, rgba(46,204,113,0.05) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "140px 24px 80px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,204,113,0.1)",
              border: "1px solid rgba(46,204,113,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 28,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2ecc71", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 12, color: "#2ecc71", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                MBE Certified • Licensed & Insured
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.02em",
            }}>
              Facility Cleaning<br />
              <span style={{ color: "#2ecc71" }}>You Can Verify.</span>
            </h1>

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7, marginBottom: 36, maxWidth: 520,
            }}>
              Commercial janitorial and facility maintenance for schools, healthcare facilities, houses of worship, and office buildings across NY, NJ, CT, PA, and FL — with real-time cleaning verification through JaniTrack.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
                background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "16px 36px",
                borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 24px rgba(46,204,113,0.3)", transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(46,204,113,0.45)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(46,204,113,0.3)"; }}
              >
                Get a Free Quote
                <span style={{ fontSize: 20 }}>→</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("janitrack"); }} style={{
                background: "rgba(255,255,255,0.05)", color: "#fff", padding: "16px 36px",
                borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.2s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(46,204,113,0.4)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              >
                See JaniTrack in Action
              </a>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
              {[
                { icon: "✓", text: "Licensed & Bonded" },
                { icon: "✓", text: "Background-Checked Staff" },
                { icon: "✓", text: "Eco-Friendly Products" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#2ecc71", fontWeight: 700, fontSize: 14 }}>{item.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20, padding: 40, backdropFilter: "blur(10px)",
          }} className="hero-form">
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, color: "#fff", marginBottom: 6 }}>
              Request a Free Estimate
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>
              We'll respond within 24 hours with a customized proposal.
            </p>

            {[
              { label: "Full Name", type: "text", placeholder: "John Smith" },
              { label: "Email", type: "email", placeholder: "john@facility.com" },
              { label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
            ].map((field) => (
              <div key={field.label} style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8, color: "#fff", fontSize: 15, outline: "none", fontFamily: "'DM Sans', sans-serif",
                    boxSizing: "border-box", transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(46,204,113,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                />
              </div>
            ))}

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                Facility Type
              </label>
              <select style={{
                width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8, color: "rgba(255,255,255,0.7)", fontSize: 15, outline: "none", fontFamily: "'DM Sans', sans-serif",
                boxSizing: "border-box", appearance: "none",
              }}>
                <option value="">Select facility type...</option>
                <option>School / Educational Facility</option>
                <option>Church / House of Worship</option>
                <option>Medical Office / Healthcare</option>
                <option>Daycare / Childcare Center</option>
                <option>Government / Municipal Building</option>
                <option>Commercial Office</option>
                <option>Other</option>
              </select>
            </div>

            <button style={{
              width: "100%", padding: "14px 24px", background: "linear-gradient(135deg, #2ecc71, #27ae60)",
              border: "none", borderRadius: 8, color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 20px rgba(46,204,113,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s", marginTop: 4,
            }}
              onMouseOver={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 28px rgba(46,204,113,0.45)"; }}
              onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(46,204,113,0.3)"; }}
            >
              Get My Free Estimate →
            </button>

            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 14, textAlign: "center", fontFamily: "'DM Sans', sans-serif" }}>
              No obligation. Includes complimentary site walkthrough.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }} className="stats-grid">
        {TRUST_STATS.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <div style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#0d2818", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>
              {stat.number}
            </div>
            <div style={{ fontSize: 14, color: "#666", marginTop: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              {stat.label}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#fafbfa", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
            <div>
              <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                About GreenPoint
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 24 }}>
                Built for Facilities That<br />Can't Afford Inconsistency
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
                GreenPoint Maintenance Services Corp was founded in New York in 2018 with a simple premise: facilities that serve the public — schools, hospitals, churches, government buildings — deserve cleaning services that are verifiable, consistent, and accountable.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
                As a Certified Minority Business Enterprise (MBE), we bring diversity procurement compliance to every contract. As operators, we bring JaniTrack — our proprietary real-time cleaning verification system that gives facility managers proof, not promises.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { label: "MBE Certified", sub: "NYS & NYC" },
                  { label: "Fully Insured", sub: "$2M+ Coverage" },
                  { label: "Background Checked", sub: "Every Employee" },
                  { label: "Eco-Friendly", sub: "Green Seal Products" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(46,204,113,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#2ecc71", fontWeight: 700, fontSize: 16 }}>✓</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#0d2818" }}>{item.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#888" }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{
                background: "linear-gradient(135deg, #0d2818, #1a4d2e)", borderRadius: 20, padding: 48,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: "radial-gradient(circle, rgba(46,204,113,0.15), transparent)", borderRadius: "50%" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>🏆</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#fff", marginBottom: 12 }}>
                    Certified Minority Business Enterprise
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 24 }}>
                    Registered with New York State and the City of New York. Eligible for all diversity procurement programs and MWBE set-aside contracts.
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>Also registered with:</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      {["SAM.gov", "OSHA Compliant", "EPA Standards"].map((badge) => (
                        <span key={badge} style={{
                          background: "rgba(46,204,113,0.15)", color: "#2ecc71", padding: "4px 12px",
                          borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                        }}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Our Services
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 16 }}>
              Complete Facility Care.<br />One Vendor. One Invoice.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#666", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              From daily janitorial to specialized floor care and facility maintenance — we handle everything so you can focus on your mission.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-grid">
          {SERVICES.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.08}>
              <div
                style={{
                  background: "#fafbfa", borderRadius: 16, padding: 36, border: "1px solid #eee",
                  transition: "all 0.3s ease", cursor: "default", height: "100%",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(46,204,113,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 18 }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0d2818", marginBottom: 10 }}>
                  {svc.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7 }}>
                  {svc.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" style={{ background: "linear-gradient(165deg, #0a1a12, #0d2818, #122d1c)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Industries We Serve
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              Specialized Cleaning for<br />
              <span style={{ color: "#2ecc71" }}>Every Facility Type</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Each industry has unique requirements. We've built dedicated protocols for every vertical we serve.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.slug}
                onClick={() => setActive(i)}
                style={{
                  padding: "10px 20px", borderRadius: 100, border: "1px solid",
                  borderColor: active === i ? "#2ecc71" : "rgba(255,255,255,0.15)",
                  background: active === i ? "rgba(46,204,113,0.15)" : "transparent",
                  color: active === i ? "#2ecc71" : "rgba(255,255,255,0.6)",
                  fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <span>{ind.icon}</span> {ind.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
          }} className="industry-detail">
            <div>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{INDUSTRIES[active].icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 14 }}>
                {INDUSTRIES[active].title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
                {INDUSTRIES[active].desc}
              </p>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#2ecc71", color: "#fff", padding: "12px 28px", borderRadius: 8,
                fontWeight: 600, fontSize: 14, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              }}>
                Get a {INDUSTRIES[active].title.split("&")[0].trim()} Cleaning Quote →
              </a>
            </div>
            <div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18, fontFamily: "'DM Sans', sans-serif" }}>
                What's Included
              </div>
              {INDUSTRIES[active].features.map((feat, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 0",
                  borderBottom: i < INDUSTRIES[active].features.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 7, background: "rgba(46,204,113,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ color: "#2ecc71", fontSize: 13, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function JaniTrack() {
  return (
    <section id="janitrack" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="janitrack-grid">
            <div style={{ position: "relative" }}>
              <div style={{
                background: "#0d2818", borderRadius: 24, padding: 32, overflow: "hidden",
                border: "1px solid rgba(46,204,113,0.2)", boxShadow: "0 24px 80px rgba(0,0,0,0.15)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>JaniTrack</div>
                    <div style={{ fontSize: 18, color: "#fff", fontWeight: 700, fontFamily: "'Playfair Display', serif", marginTop: 2 }}>Live Dashboard</div>
                  </div>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2ecc71", boxShadow: "0 0 12px rgba(46,204,113,0.6)", animation: "pulse 2s infinite" }} />
                </div>

                {[
                  { time: "8:42 AM", area: "2nd Floor Restrooms", status: "Verified ✓", score: "98%" },
                  { time: "9:15 AM", area: "Main Lobby & Reception", status: "Verified ✓", score: "100%" },
                  { time: "9:38 AM", area: "Conference Room B", status: "In Progress", score: "—" },
                ].map((entry, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "16px 18px",
                    marginBottom: 10, border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#fff", fontWeight: 600 }}>{entry.area}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{entry.time}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: entry.status.includes("✓") ? "#2ecc71" : "#f39c12", fontWeight: 600 }}>{entry.status}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "#fff", fontWeight: 800, marginTop: 2 }}>{entry.score}</div>
                    </div>
                  </div>
                ))}

                <div style={{
                  marginTop: 16, background: "rgba(46,204,113,0.08)", borderRadius: 12,
                  padding: "18px", border: "1px solid rgba(46,204,113,0.15)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#2ecc71", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>ATP Bioluminescence</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>High-touch surface reading</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 28, color: "#2ecc71", fontWeight: 800 }}>12</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>RLU (Pass &lt;30)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                Proprietary Technology
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 24 }}>
                JaniTrack:<br />Proof, Not Promises
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
                Most cleaning companies ask you to trust that the work was done. JaniTrack gives you verifiable proof — with real-time photo documentation, timestamped task completion, and ATP bioluminescence readings that quantify surface cleanliness.
              </p>

              {[
                { title: "Real-Time Photo Verification", desc: "Every task documented with timestamped, GPS-tagged photos accessible through your dashboard." },
                { title: "ATP Bioluminescence Testing", desc: "Scientific measurement of surface cleanliness using the same technology hospitals use. Measurable. Reportable." },
                { title: "Digital Quality Reports", desc: "Weekly and monthly reports delivered automatically. Share with your board, tenants, or regulatory bodies." },
                { title: "Direct Communication", desc: "Message your cleaning team directly. Request re-cleans, schedule changes, or supply orders in real-time." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 22 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, background: "rgba(46,204,113,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
                  }}>
                    <span style={{ color: "#2ecc71", fontWeight: 800, fontSize: 14 }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#0d2818", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section style={{ background: "#fafbfa", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Client Testimonials
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15 }}>
              Trusted by Facilities<br />Across the Tri-State
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
          {TESTIMONIALS.map((test, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                background: "#fff", borderRadius: 16, padding: 36, border: "1px solid #eee",
                height: "100%", display: "flex", flexDirection: "column",
              }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: "#f39c12", fontSize: 18 }}>★</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#444", lineHeight: 1.75, flex: 1, fontStyle: "italic" }}>
                  "{test.quote}"
                </p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #eee" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#0d2818" }}>{test.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#888", marginTop: 2 }}>{test.role}</div>
                  <span style={{
                    display: "inline-block", marginTop: 8, background: "rgba(46,204,113,0.1)",
                    color: "#27ae60", padding: "3px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {test.vertical}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Service Areas
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 16 }}>
              Serving Five States.<br />
              <span style={{ color: "#2ecc71" }}>Rooted in New York.</span>
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }} className="areas-grid">
          {AREAS.map((area, i) => (
            <AnimatedSection key={area.state} delay={i * 0.1}>
              <div style={{
                background: i === 0 ? "linear-gradient(135deg, #0d2818, #1a4d2e)" : "#fafbfa",
                borderRadius: 16, padding: 32, border: i === 0 ? "none" : "1px solid #eee", height: "100%",
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 900, fontFamily: "'Playfair Display', serif",
                  color: i === 0 ? "#2ecc71" : "#0d2818", marginBottom: 4,
                }}>
                  {area.abbr}
                </div>
                <div style={{
                  fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
                  color: i === 0 ? "#fff" : "#0d2818", marginBottom: 16,
                }}>
                  {area.state}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {area.regions.map((region) => (
                    <span key={region} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                      color: i === 0 ? "rgba(255,255,255,0.6)" : "#777",
                    }}>
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningCenter() {
  return (
    <section id="learning" style={{ background: "linear-gradient(165deg, #0a1a12, #0d2818)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                Learning Center
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
                Insights for Facility Managers
              </h2>
            </div>
            <a href="#" style={{
              color: "#2ecc71", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
            }}>
              View All Articles →
            </a>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="blog-grid">
          {BLOG_POSTS.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: 32, height: "100%", display: "flex", flexDirection: "column",
                transition: "all 0.3s", cursor: "pointer",
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(46,204,113,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
                  <span style={{
                    background: "rgba(46,204,113,0.12)", color: "#2ecc71", padding: "3px 10px",
                    borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", alignSelf: "center" }}>
                    {post.date}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.35, flex: 0 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, flex: 1 }}>
                  {post.excerpt}
                </p>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#2ecc71", fontWeight: 600, marginTop: 16 }}>
                  Read Article →
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section id="careers" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{
            background: "linear-gradient(135deg, #0d2818, #1a4d2e)", borderRadius: 24, padding: "64px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", overflow: "hidden", position: "relative",
          }} className="careers-card">
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, background: "radial-gradient(circle, rgba(46,204,113,0.1), transparent)", borderRadius: "50%" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                Join Our Team
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>
                Build a Career in Facility Services
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28 }}>
                We invest in our people with competitive wages, advancement opportunities, and a culture of respect. Every team member is background-checked, trained, and valued.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Competitive Pay", "Benefits", "Paid Training", "Growth Path"].map((perk) => (
                  <span key={perk} style={{
                    background: "rgba(46,204,113,0.12)", color: "#2ecc71", padding: "6px 14px",
                    borderRadius: 6, fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {perk}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#2ecc71", color: "#fff", padding: "16px 36px", borderRadius: 10,
                fontWeight: 700, fontSize: 16, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 24px rgba(46,204,113,0.3)",
              }}>
                View Open Positions →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ background: "#fafbfa", padding: "100px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <AnimatedSection>
          <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
            Get Started
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 16 }}>
            Ready for a Cleaner Facility?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#666", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Every quote includes a complimentary facility walkthrough and customized cleaning plan. No obligation, no pressure.
          </p>

          <div style={{
            background: "#fff", borderRadius: 20, padding: 48, border: "1px solid #eee",
            boxShadow: "0 8px 40px rgba(0,0,0,0.04)", textAlign: "left",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="contact-form-grid">
              {[
                { label: "Full Name", type: "text", placeholder: "John Smith" },
                { label: "Email", type: "email", placeholder: "john@facility.com" },
                { label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
                { label: "Facility Type", type: "select" },
              ].map((field) => (
                <div key={field.label}>
                  <label style={{ display: "block", fontSize: 12, color: "#555", marginBottom: 6, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select style={{
                      width: "100%", padding: "12px 16px", background: "#fafbfa", border: "1px solid #ddd",
                      borderRadius: 8, color: "#333", fontSize: 15, outline: "none", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box",
                    }}>
                      <option value="">Select type...</option>
                      <option>School / Educational</option>
                      <option>Church / House of Worship</option>
                      <option>Medical / Healthcare</option>
                      <option>Daycare / Childcare</option>
                      <option>Government</option>
                      <option>Commercial Office</option>
                      <option>Other</option>
                    </select>
                  ) : (
                    <input type={field.type} placeholder={field.placeholder} style={{
                      width: "100%", padding: "12px 16px", background: "#fafbfa", border: "1px solid #ddd",
                      borderRadius: 8, color: "#333", fontSize: 15, outline: "none", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box",
                    }} />
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <label style={{ display: "block", fontSize: 12, color: "#555", marginBottom: 6, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                Tell Us About Your Facility
              </label>
              <textarea rows={4} placeholder="Approximate square footage, number of floors, current cleaning schedule, any special requirements..."
                style={{
                  width: "100%", padding: "12px 16px", background: "#fafbfa", border: "1px solid #ddd",
                  borderRadius: 8, color: "#333", fontSize: 15, outline: "none", fontFamily: "'DM Sans', sans-serif",
                  resize: "vertical", boxSizing: "border-box",
                }} />
            </div>
            <button style={{
              width: "100%", marginTop: 24, padding: "16px 24px", background: "linear-gradient(135deg, #2ecc71, #27ae60)",
              border: "none", borderRadius: 10, color: "#fff", fontSize: 17, fontWeight: 700, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 24px rgba(46,204,113,0.3)",
              transition: "transform 0.2s",
            }}
              onMouseOver={(e) => e.target.style.transform = "translateY(-1px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            >
              Submit Request for Free Quote →
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 48, flexWrap: "wrap" }}>
            {[
              { label: "Phone", value: "(347) 555-0198", icon: "📞" },
              { label: "Email", value: "info@greenpointmaintenance.com", icon: "✉️" },
              { label: "Hours", value: "Mon–Sat 7AM–8PM • 24/7 Emergency", icon: "🕐" },
            ].map((info) => (
              <div key={info.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{info.icon}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{info.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#0d2818", fontWeight: 600, marginTop: 4 }}>{info.value}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              How It Works
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 16 }}>
              From First Call to<br />
              <span style={{ color: "#2ecc71" }}>Verifiably Clean</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Getting started is simple. Here's what happens when you reach out.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }} className="process-grid">
          <div style={{
            position: "absolute", top: 44, left: "12.5%", right: "12.5%", height: 2,
            background: "linear-gradient(90deg, #2ecc71, rgba(46,204,113,0.3))", zIndex: 0,
          }} className="process-line" />
          {PROCESS_STEPS.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.12}>
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%", margin: "0 auto 24px",
                  background: i === PROCESS_STEPS.length - 1 ? "linear-gradient(135deg, #2ecc71, #27ae60)" : "#fff",
                  border: i === PROCESS_STEPS.length - 1 ? "none" : "2px solid #2ecc71",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 20,
                    color: i === PROCESS_STEPS.length - 1 ? "#fff" : "#2ecc71",
                  }}>
                    {step.step}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0d2818", marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyGreenPoint() {
  return (
    <section id="why" style={{ background: "#fafbfa", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Why GreenPoint
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15, marginBottom: 16 }}>
              What Sets Us Apart From<br />Every Other Cleaning Company
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="why-grid">
          {WHY_US.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div style={{
                background: "#fff", borderRadius: 16, padding: 36, border: "1px solid #eee",
                display: "flex", gap: 24, alignItems: "flex-start", height: "100%",
                transition: "all 0.3s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(46,204,113,0.3)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.05)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 14, background: "rgba(46,204,113,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 28,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0d2818", marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 12 }}>
                    {item.desc}
                  </p>
                  <span style={{
                    display: "inline-block", background: "rgba(46,204,113,0.08)", color: "#27ae60",
                    padding: "4px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {item.competitor}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: "#2ecc71", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
              Frequently Asked Questions
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#0d2818", lineHeight: 1.15 }}>
              Everything You Need to Know
            </h2>
          </div>
        </AnimatedSection>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div style={{
                borderBottom: "1px solid #eee",
                transition: "all 0.2s",
              }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    gap: 20,
                  }}
                >
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
                    color: openIndex === i ? "#2ecc71" : "#0d2818", transition: "color 0.2s", lineHeight: 1.4,
                  }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: 22, color: openIndex === i ? "#2ecc71" : "#aaa", flexShrink: 0,
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s, color 0.2s", lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: openIndex === i ? 400 : 0, overflow: "hidden",
                  transition: "max-height 0.4s ease, padding 0.3s ease",
                  paddingBottom: openIndex === i ? 22 : 0,
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#555",
                    lineHeight: 1.8, paddingRight: 48,
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#0a1a12", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                background: "linear-gradient(135deg, #2ecc71, #27ae60)", fontWeight: 800, fontSize: 18, color: "#fff",
              }}>G</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>GreenPoint</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Maintenance Services Corp</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 320 }}>
              Certified Minority Business Enterprise providing commercial janitorial and facility maintenance services across NY, NJ, CT, PA, and FL since 2018.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
              {["MBE Certified", "Licensed & Insured", "SAM.gov"].map((badge) => (
                <span key={badge} style={{
                  background: "rgba(46,204,113,0.1)", color: "#2ecc71", padding: "3px 10px",
                  borderRadius: 4, fontSize: 10, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Services</div>
            {["Commercial Janitorial", "Disinfection", "Floor Care", "Day Porter", "Facility Maintenance", "Post-Construction"].map((link) => (
              <a key={link} href="#" onClick={(e) => { e.preventDefault(); scrollTo("services"); }} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#2ecc71"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>
                {link}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Industries</div>
            {["Schools & Education", "Churches & Worship", "Healthcare & Medical", "Daycare Centers", "Government", "Commercial Offices"].map((link) => (
              <a key={link} href="#" onClick={(e) => { e.preventDefault(); scrollTo("industries"); }} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#2ecc71"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>
                {link}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Company</div>
            {[
              { label: "About", target: "about" },
              { label: "JaniTrack", target: "janitrack" },
              { label: "Service Areas", target: "areas" },
              { label: "Learning Center", target: "learning" },
              { label: "Careers", target: "careers" },
              { label: "Contact", target: "contact" },
            ].map((link) => (
              <a key={link.label} href="#" onClick={(e) => { e.preventDefault(); scrollTo(link.target); }} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseOver={(e) => e.target.style.color = "#2ecc71"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.55)"}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2026 GreenPoint Maintenance Services Corp. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function GreenPointWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", margin: 0, padding: 0 }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .mobile-toggle { display: none !important; }
        @media (max-width: 1024px) {
          .hero-grid, .about-grid, .janitrack-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-form { order: -1; }
          .services-grid, .testimonials-grid, .blog-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .areas-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .industry-detail { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .careers-card { grid-template-columns: 1fr !important; padding: 40px !important; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .services-grid, .testimonials-grid, .blog-grid { grid-template-columns: 1fr !important; }
          .stats-grid, .areas-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        [id] { scroll-margin-top: 80px; }
      `}</style>

      <Header scrolled={scrolled} />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <IndustriesSection />
      <ProcessSection />
      <JaniTrack />
      <WhyGreenPoint />
      <TestimonialsSection />
      <ServiceAreas />
      <LearningCenter />
      <FAQSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
