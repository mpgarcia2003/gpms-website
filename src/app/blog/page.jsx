import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

// Lightweight blog listing — only import the metadata we need, not full article content
const BLOG_INDEX = [
  { slug: "commercial-cleaning-industry-statistics", title: "Commercial Cleaning Industry Statistics: 50+ Data Points for 2026", excerpt: "A comprehensive collection of commercial cleaning industry data — market size, growth rates, labor statistics, pricing benchmarks, and facility-specific metrics.", category: "Industry Data", date: "2026-01-05", readTime: "12 min" },
  { slug: "cleaning-frequency-standards-by-facility-type", title: "Cleaning Frequency Standards by Facility Type: The Definitive Reference", excerpt: "How often should each area of your facility be cleaned? Data-backed frequency recommendations for offices, schools, healthcare, daycare, churches, and government buildings.", category: "Standards", date: "2026-01-12", readTime: "10 min" },
  { slug: "issa-clean-standards-appearance-levels", title: "ISSA Clean Standards: Understanding the 5-Level Appearance Scale", excerpt: "A detailed explanation of ISSA's five cleaning appearance levels — what each level looks like, costs, and which level your facility actually needs.", category: "Standards", date: "2026-01-20", readTime: "8 min" },
  { slug: "indoor-air-quality-commercial-cleaning", title: "Indoor Air Quality and Commercial Cleaning: What the Research Shows", excerpt: "How cleaning practices directly impact indoor air quality — VOC emissions, particulate matter from vacuuming, and evidence-based IAQ strategies.", category: "Research", date: "2026-01-28", readTime: "9 min" },
  { slug: "healthcare-associated-infections-environmental-cleaning", title: "Healthcare-Associated Infections: The Critical Role of Environmental Cleaning", excerpt: "Research-backed analysis of how environmental cleaning prevents HAIs — transmission pathways, high-touch surface data, and cleaning intervention effectiveness.", category: "Research", date: "2026-02-02", readTime: "10 min" },
  { slug: "commercial-cleaning-cost-per-square-foot", title: "Commercial Cleaning Costs: What to Expect Per Square Foot in 2026", excerpt: "A transparent breakdown of commercial cleaning pricing by facility type, service frequency, and region.", category: "Pricing", date: "2026-02-08", readTime: "7 min" },
  { slug: "calculating-true-cleaning-cost-tco", title: "Calculating Your Facility's True Cleaning Cost: A Total Cost of Ownership Framework", excerpt: "Why the monthly invoice is only part of the story — a framework for calculating total cleaning cost including hidden expenses.", category: "Business", date: "2026-02-12", readTime: "8 min" },
  { slug: "janitorial-employee-turnover-impact", title: "The Hidden Cost of Janitorial Turnover: Why Your Cleaning Company's Retention Rate Matters", excerpt: "How the industry's 200-400% annual turnover rate impacts service quality and what to look for in a cleaning partner.", category: "Industry Data", date: "2026-02-18", readTime: "7 min" },
  { slug: "medical-office-cleaning-requirements-osha", title: "Medical Office Cleaning Requirements: OSHA Compliance Guide", excerpt: "OSHA cleaning requirements for medical offices, dental practices, and outpatient clinics — bloodborne pathogen standards and terminal cleaning protocols.", category: "Compliance", date: "2026-02-22", readTime: "9 min" },
  { slug: "osha-cleaning-chemical-safety-ghs-sds", title: "OSHA Cleaning Chemical Safety: GHS Labels, SDS Requirements, and Compliance", excerpt: "A complete guide to OSHA's Hazard Communication Standard for cleaning chemicals.", category: "Compliance", date: "2026-02-26", readTime: "8 min" },
  { slug: "ada-compliance-facility-maintenance", title: "ADA Compliance in Facility Maintenance: What Cleaning Companies Must Know", excerpt: "How ADA requirements apply to commercial cleaning — accessible restroom maintenance, equipment storage, and service delivery.", category: "Compliance", date: "2026-03-01", readTime: "7 min" },
  { slug: "epa-disinfectant-registration-guide", title: "EPA Disinfectant Registration: What Facility Managers Need to Know", excerpt: "How EPA registration works, what List N and List K mean, how to verify product claims, and why 'hospital-grade' isn't enough.", category: "Compliance", date: "2026-03-05", readTime: "8 min" },
  { slug: "daycare-cleaning-health-department-inspection", title: "How to Prepare Your Daycare for a Health Department Inspection", excerpt: "Ensuring your childcare facility passes health inspections — sanitization, documentation, and common citations.", category: "Compliance", date: "2026-03-08", readTime: "7 min" },
  { slug: "fire-code-cleaning-chemical-storage", title: "Fire Code Compliance: Cleaning Chemical Storage Requirements", excerpt: "How NFPA and local fire codes regulate cleaning chemical storage — flammability classifications, maximum quantities, and common violations.", category: "Compliance", date: "2026-03-10", readTime: "7 min" },
  { slug: "hipaa-considerations-medical-office-cleaning", title: "HIPAA and Medical Office Cleaning: What Your Cleaning Company Must Know", excerpt: "How HIPAA privacy and security rules apply to cleaning operations in healthcare facilities.", category: "Compliance", date: "2026-03-12", readTime: "7 min" },
  { slug: "prevailing-wage-government-cleaning-contracts", title: "Prevailing Wage Requirements for Government Cleaning Contracts", excerpt: "How federal and state prevailing wage laws affect government cleaning contracts — Davis-Bacon, Service Contract Act, and compliance.", category: "Compliance", date: "2026-03-14", readTime: "8 min" },
  { slug: "how-to-choose-commercial-cleaning-company", title: "How to Choose a Commercial Cleaning Company: The Complete Guide", excerpt: "A systematic framework for evaluating cleaning companies — certifications, quality verification, and scope comparison.", category: "Guides", date: "2026-03-16", readTime: "8 min" },
  { slug: "school-cleaning-checklist-custodial-staff", title: "School Cleaning Checklist: A Complete Guide for Custodial Staff", excerpt: "A room-by-room cleaning checklist for K-12 schools — classrooms, cafeterias, gyms, restrooms, and common areas.", category: "Checklists", date: "2026-03-18", readTime: "10 min" },
  { slug: "government-building-cleaning-gsa-standards", title: "The Complete Guide to Government Building Cleaning and GSA Standards", excerpt: "How GSA cleaning standards, security requirements, and diversity procurement goals shape government facility maintenance.", category: "Guides", date: "2026-03-20", readTime: "9 min" },
  { slug: "church-cleaning-tips-volunteers-vs-professionals", title: "Church Cleaning: When to Use Volunteers vs. Professional Services", excerpt: "A practical comparison including cost analysis and hybrid approaches that work.", category: "Guides", date: "2026-03-22", readTime: "6 min" },
  { slug: "assisted-living-nursing-home-cleaning-protocols", title: "Assisted Living and Nursing Home Cleaning: Protocols for Vulnerable Populations", excerpt: "Specialized cleaning requirements for senior care — infection control, fall prevention, and dementia-sensitive approaches.", category: "Guides", date: "2026-03-24", readTime: "8 min" },
  { slug: "coworking-space-cleaning-challenges", title: "Coworking Space Cleaning: Unique Challenges and Practical Solutions", excerpt: "How shared workspace models create distinct cleaning challenges — hot-desking, community kitchens, and member satisfaction.", category: "Guides", date: "2026-03-26", readTime: "6 min" },
  { slug: "warehouse-industrial-cleaning-best-practices", title: "Warehouse and Industrial Facility Cleaning: Best Practices and Safety Standards", excerpt: "How to maintain clean, safe, OSHA-compliant warehouse and industrial environments.", category: "Guides", date: "2026-03-28", readTime: "7 min" },
  { slug: "vct-floor-care-strip-seal-wax-guide", title: "VCT Floor Care: The Complete Guide to Strip, Seal, and Wax", excerpt: "Everything about maintaining VCT floors — stripping schedules, product selection, and maintenance programs.", category: "Services", date: "2026-04-01", readTime: "9 min" },
  { slug: "carpet-cleaning-methods-compared", title: "Commercial Carpet Cleaning Methods Compared: Extraction vs. Encapsulation vs. Bonnet", excerpt: "A technical comparison of commercial carpet cleaning methods — when to use each and expected results.", category: "Services", date: "2026-04-05", readTime: "8 min" },
  { slug: "electrostatic-disinfection-explained", title: "Electrostatic Disinfection: How It Works, When to Use It, and What It Costs", excerpt: "A comprehensive technical guide to electrostatic spraying — science, effectiveness data, applications, and limitations.", category: "Technology", date: "2026-04-08", readTime: "7 min" },
  { slug: "restroom-cleaning-best-practices-high-traffic", title: "Restroom Cleaning: Best Practices for High-Traffic Commercial Facilities", excerpt: "Why restrooms are the most critical area — comprehensive protocols for complaint-free restrooms.", category: "Services", date: "2026-04-12", readTime: "8 min" },
  { slug: "post-construction-cleaning-phases-explained", title: "The 3 Phases of Post-Construction Cleaning: What to Expect", excerpt: "A detailed walkthrough of rough clean, light clean, and final clean — what each includes and how long they take.", category: "Services", date: "2026-04-15", readTime: "6 min" },
  { slug: "what-is-atp-bioluminescence-testing-cleaning", title: "What Is ATP Bioluminescence Testing and Why It Matters", excerpt: "How ATP testing works, what the numbers mean, and why it's the gold standard for verifying cleaning quality.", category: "Technology", date: "2026-04-18", readTime: "6 min" },
  { slug: "color-coded-microfiber-systems-guide", title: "Color-Coded Microfiber Systems: The Science of Preventing Cross-Contamination", excerpt: "How color-coded microfiber systems prevent cross-contamination — the science, color assignments, and implementation.", category: "Technology", date: "2026-04-22", readTime: "6 min" },
  { slug: "digital-cleaning-verification-systems", title: "Digital Cleaning Verification Systems: Moving Beyond Paper Checklists", excerpt: "How GPS tracking, photo documentation, IoT sensors, and ATP integration transform cleaning accountability.", category: "Technology", date: "2026-04-25", readTime: "7 min" },
  { slug: "mbe-certified-cleaning-company-benefits", title: "Why Hiring an MBE-Certified Cleaning Company Matters", excerpt: "How MBE/MWBE vendors help meet diversity procurement goals, improve bid scores, and support community development.", category: "Business", date: "2026-04-28", readTime: "6 min" },
  { slug: "how-to-write-rfp-commercial-cleaning", title: "How to Write an RFP for Commercial Cleaning Services", excerpt: "A step-by-step guide — scope of work templates, evaluation criteria, and common mistakes.", category: "Business", date: "2026-05-01", readTime: "9 min" },
  { slug: "commercial-cleaning-contract-key-terms", title: "Commercial Cleaning Contract Negotiation: 12 Key Terms to Understand", excerpt: "Essential contract terms — performance guarantees, termination clauses, scope changes, and insurance.", category: "Business", date: "2026-05-05", readTime: "8 min" },
  { slug: "vendor-consolidation-one-cleaning-company", title: "Vendor Consolidation: The Case for One Cleaning Company for All Services", excerpt: "Why consolidating janitorial, floor care, disinfection, and maintenance under one vendor reduces costs.", category: "Business", date: "2026-05-08", readTime: "6 min" },
  { slug: "quality-assurance-commercial-cleaning-program", title: "Building a Quality Assurance Program for Commercial Cleaning", excerpt: "A framework for systematic QA — inspection methods, scoring systems, corrective action, and continuous improvement.", category: "Business", date: "2026-05-12", readTime: "8 min" },
  { slug: "green-cleaning-commercial-buildings-guide", title: "Green Cleaning for Commercial Buildings: What Actually Works", excerpt: "Separating facts from hype — certifications that matter, products that work, and sustainable programs.", category: "Sustainability", date: "2026-05-15", readTime: "7 min" },
  { slug: "hepa-filtration-commercial-cleaning", title: "HEPA Filtration in Commercial Cleaning: What Facility Managers Need to Know", excerpt: "Why HEPA vacuum filtration matters for indoor air quality — when required vs. recommended, and how to verify performance.", category: "Technology", date: "2026-05-18", readTime: "6 min" },
  { slug: "winter-facility-maintenance-checklist-northeast", title: "Winter Facility Maintenance Checklist for Northeast Commercial Buildings", excerpt: "Comprehensive winter prep — snow/ice management, interior protocols, plumbing, and slip-and-fall prevention.", category: "Seasonal", date: "2026-05-22", readTime: "7 min" },
  { slug: "summer-deep-cleaning-checklist-schools", title: "Summer Deep Cleaning Checklist for K-12 Schools", excerpt: "How to maximize summer break for school deep cleaning — task list, timeline, and fall reopening prep.", category: "Seasonal", date: "2026-05-25", readTime: "8 min" },
  { slug: "covid-cleaning-standards-permanent-changes", title: "Post-COVID Cleaning Standards: What's Permanent and What's Changed", excerpt: "Which pandemic-era cleaning practices are here to stay and which were temporary overreactions.", category: "Industry Data", date: "2026-05-28", readTime: "7 min" },
  { slug: "nyc-local-law-building-maintenance", title: "NYC Local Law Compliance for Commercial Building Maintenance", excerpt: "Key NYC local laws affecting building maintenance — Local Law 11, 97, 26, and how cleaning operations intersect.", category: "Compliance", date: "2026-06-01", readTime: "7 min" },
  { slug: "hurricane-preparedness-florida-commercial-facilities", title: "Hurricane Preparedness and Recovery Cleaning for Florida Facilities", excerpt: "Pre-storm preparation, emergency response, and post-hurricane cleanup protocols for Florida commercial buildings.", category: "Seasonal", date: "2026-06-05", readTime: "7 min" },
  { slug: "cleaning-company-insurance-requirements", title: "Cleaning Company Insurance Requirements: What to Verify Before Signing", excerpt: "Essential insurance coverages — general liability, workers' comp, commercial auto, and umbrella policies.", category: "Business", date: "2026-06-08", readTime: "7 min" },
  { slug: "cleaning-for-leed-certified-buildings", title: "Cleaning Requirements for LEED-Certified Buildings", excerpt: "How LEED certification affects your cleaning program — product certifications, documentation, and credit maintenance.", category: "Sustainability", date: "2026-06-12", readTime: "7 min" },
  { slug: "pressure-washing-commercial-properties", title: "Pressure Washing for Commercial Properties: Methods, Frequency, and Regulations", excerpt: "A complete guide — building exteriors, sidewalks, parking structures, water reclamation, and environmental regs.", category: "Services", date: "2026-06-15", readTime: "6 min" },
  { slug: "cleaning-audit-checklist-facility-managers", title: "How to Audit Your Current Cleaning Program: A 50-Point Checklist", excerpt: "A systematic framework for evaluating your cleaning vendor — quality, compliance, communication, staffing, and value.", category: "Checklists", date: "2026-06-18", readTime: "9 min" },
  { slug: "cleaning-staffing-ratios-square-footage", title: "Cleaning Staffing Ratios: How Many Cleaners Does Your Building Need?", excerpt: "Data-backed staffing formulas — square footage per cleaner ratios by facility type and workloading methodology.", category: "Industry Data", date: "2026-06-22", readTime: "7 min" },
  { slug: "commercial-cleaning-glossary-terms", title: "Commercial Cleaning Glossary: 100+ Industry Terms Defined", excerpt: "A comprehensive reference glossary — products, equipment, standards, methods, and compliance terms.", category: "Standards", date: "2026-06-25", readTime: "15 min" },
  { slug: "commercial-cleaning-vs-in-house-custodial", title: "Outsourced Cleaning vs. In-House Custodial Staff: A Complete Comparison", excerpt: "Pros, cons, and true cost comparison — financials, quality, flexibility, and risk.", category: "Business", date: "2026-06-28", readTime: "8 min" },
];

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

const CAT_COLORS = {
  "Industry Data": { bg: "#EEF2FF", text: "#4338CA" },
  Standards: { bg: "#F0FDF4", text: "#15803D" },
  Research: { bg: "#FDF4FF", text: "#A21CAF" },
  Pricing: { bg: "#FFF7ED", text: "#EA580C" },
  Business: { bg: "#FFFBEB", text: "#B45309" },
  Compliance: { bg: "#FEF2F2", text: "#DC2626" },
  Guides: { bg: "#F0F9FF", text: "#0369A1" },
  Checklists: { bg: "#ECFDF5", text: "#059669" },
  Services: { bg: "#F8FAFC", text: "#475569" },
  Technology: { bg: "#FAF5FF", text: "#7C3AED" },
  Sustainability: { bg: "#F0FDF4", text: "#059669" },
  Seasonal: { bg: "#FFF1F2", text: "#BE123C" },
};

export default function BlogIndex() {
  const sorted = [...BLOG_INDEX].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#FFFFFF" }}>
      <style>{`
        .blog-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .blog-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
      `}</style>
      <SiteHeader />

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

      <section style={{ padding: "64px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 20 }}>
          {sorted.map((post) => {
            const cat = CAT_COLORS[post.category] || CAT_COLORS.Guides;
            return (
              <a key={post.slug} href={`/blog/${post.slug}/`} className="blog-card" style={{
                display: "block", textDecoration: "none",
                background: "#FFFFFF", borderRadius: 12, border: "1px solid #E2EBE5", padding: 24,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                  <span style={{ background: cat.bg, color: cat.text, padding: "3px 9px", borderRadius: 4, fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: "#8A9B91", fontFamily: "'JetBrains Mono', monospace" }}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span style={{ fontSize: 12, color: "#8A9B91", fontFamily: "'JetBrains Mono', monospace" }}>· {post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 700, color: "#1A2B1F", lineHeight: 1.25, marginBottom: 8 }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
                <span style={{ display: "inline-block", marginTop: 12, fontSize: 13, fontWeight: 600, color: "#1B7A3D" }}>Read article →</span>
              </a>
            );
          })}
        </div>
      </section>

      <section style={{ background: "#F7FAF8", padding: "64px 24px", borderTop: "1px solid #E2EBE5" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, color: "#1A2B1F", marginBottom: 12 }}>Need Help With Your Facility?</h2>
          <p style={{ fontSize: 15, color: "#4A5E52", lineHeight: 1.7, marginBottom: 24 }}>Get a complimentary facility walkthrough and customized cleaning proposal.</p>
          <a href="/#schedule" style={{ background: "#1B7A3D", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", fontFamily: "'Syne', sans-serif", letterSpacing: "0.04em" }}>Schedule a Walkthrough →</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
