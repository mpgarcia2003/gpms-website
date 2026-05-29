import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

// Lightweight blog listing — only import the metadata we need, not full article content
const BLOG_INDEX = [
  { slug: "commercial-cleaning-industry-statistics", title: "Commercial Cleaning Industry Statistics: 50+ Data Points for 2026", excerpt: "A comprehensive collection of commercial cleaning industry data — market size, growth rates, labor statistics, pricing benchmarks, and facility-specific metrics.", category: "Industry Data", date: "2025-04-01", readTime: "12 min" },
  { slug: "cleaning-frequency-standards-by-facility-type", title: "Cleaning Frequency Standards by Facility Type: The Definitive Reference", excerpt: "How often should each area of your facility be cleaned? Data-backed frequency recommendations for offices, schools, healthcare, daycare, churches, and government buildings.", category: "Standards", date: "2025-04-08", readTime: "10 min" },
  { slug: "issa-clean-standards-appearance-levels", title: "ISSA Clean Standards: Understanding the 5-Level Appearance Scale", excerpt: "A detailed explanation of ISSA's five cleaning appearance levels — what each level looks like, costs, and which level your facility actually needs.", category: "Standards", date: "2025-04-16", readTime: "8 min" },
  { slug: "indoor-air-quality-commercial-cleaning", title: "Indoor Air Quality and Commercial Cleaning: What the Research Shows", excerpt: "How cleaning practices directly impact indoor air quality — VOC emissions, particulate matter from vacuuming, and evidence-based IAQ strategies.", category: "Research", date: "2025-04-24", readTime: "9 min" },
  { slug: "healthcare-associated-infections-environmental-cleaning", title: "Healthcare-Associated Infections: The Critical Role of Environmental Cleaning", excerpt: "Research-backed analysis of how environmental cleaning prevents HAIs — transmission pathways, high-touch surface data, and cleaning intervention effectiveness.", category: "Research", date: "2025-05-02", readTime: "10 min" },
  { slug: "commercial-cleaning-cost-per-square-foot", title: "Commercial Cleaning Costs: What to Expect Per Square Foot in 2026", excerpt: "A transparent breakdown of commercial cleaning pricing by facility type, service frequency, and region.", category: "Pricing", date: "2025-05-10", readTime: "7 min" },
  { slug: "calculating-true-cleaning-cost-tco", title: "Calculating Your Facility's True Cleaning Cost: A Total Cost of Ownership Framework", excerpt: "Why the monthly invoice is only part of the story — a framework for calculating total cleaning cost including hidden expenses.", category: "Business", date: "2025-05-18", readTime: "8 min" },
  { slug: "janitorial-employee-turnover-impact", title: "The Hidden Cost of Janitorial Turnover: Why Your Cleaning Company's Retention Rate Matters", excerpt: "How the industry's 200-400% annual turnover rate impacts service quality and what to look for in a cleaning partner.", category: "Industry Data", date: "2025-05-26", readTime: "7 min" },
  { slug: "medical-office-cleaning-requirements-osha", title: "Medical Office Cleaning Requirements: OSHA Compliance Guide", excerpt: "OSHA cleaning requirements for medical offices, dental practices, and outpatient clinics — bloodborne pathogen standards and terminal cleaning protocols.", category: "Compliance", date: "2025-06-03", readTime: "9 min" },
  { slug: "osha-cleaning-chemical-safety-ghs-sds", title: "OSHA Cleaning Chemical Safety: GHS Labels, SDS Requirements, and Compliance", excerpt: "A complete guide to OSHA's Hazard Communication Standard for cleaning chemicals.", category: "Compliance", date: "2025-06-11", readTime: "8 min" },
  { slug: "ada-compliance-facility-maintenance", title: "ADA Compliance in Facility Maintenance: What Cleaning Companies Must Know", excerpt: "How ADA requirements apply to commercial cleaning — accessible restroom maintenance, equipment storage, and service delivery.", category: "Compliance", date: "2025-06-19", readTime: "7 min" },
  { slug: "epa-disinfectant-registration-guide", title: "EPA Disinfectant Registration: What Facility Managers Need to Know", excerpt: "How EPA registration works, what List N and List K mean, how to verify product claims, and why 'hospital-grade' isn't enough.", category: "Compliance", date: "2025-06-27", readTime: "8 min" },
  { slug: "daycare-cleaning-health-department-inspection", title: "How to Prepare Your Daycare for a Health Department Inspection", excerpt: "Ensuring your childcare facility passes health inspections — sanitization, documentation, and common citations.", category: "Compliance", date: "2025-07-05", readTime: "7 min" },
  { slug: "fire-code-cleaning-chemical-storage", title: "Fire Code Compliance: Cleaning Chemical Storage Requirements", excerpt: "How NFPA and local fire codes regulate cleaning chemical storage — flammability classifications, maximum quantities, and common violations.", category: "Compliance", date: "2025-07-13", readTime: "7 min" },
  { slug: "hipaa-considerations-medical-office-cleaning", title: "HIPAA and Medical Office Cleaning: What Your Cleaning Company Must Know", excerpt: "How HIPAA privacy and security rules apply to cleaning operations in healthcare facilities.", category: "Compliance", date: "2025-07-21", readTime: "7 min" },
  { slug: "prevailing-wage-government-cleaning-contracts", title: "Prevailing Wage Requirements for Government Cleaning Contracts", excerpt: "How federal and state prevailing wage laws affect government cleaning contracts — Davis-Bacon, Service Contract Act, and compliance.", category: "Compliance", date: "2025-07-29", readTime: "8 min" },
  { slug: "how-to-choose-commercial-cleaning-company", title: "How to Choose a Commercial Cleaning Company: The Complete Guide", excerpt: "A systematic framework for evaluating cleaning companies — certifications, quality verification, and scope comparison.", category: "Guides", date: "2025-08-06", readTime: "8 min" },
  { slug: "school-cleaning-checklist-custodial-staff", title: "School Cleaning Checklist: A Complete Guide for Custodial Staff", excerpt: "A room-by-room cleaning checklist for K-12 schools — classrooms, cafeterias, gyms, restrooms, and common areas.", category: "Checklists", date: "2025-08-14", readTime: "10 min" },
  { slug: "government-building-cleaning-gsa-standards", title: "The Complete Guide to Government Building Cleaning and GSA Standards", excerpt: "How GSA cleaning standards, security requirements, and diversity procurement goals shape government facility maintenance.", category: "Guides", date: "2025-08-22", readTime: "9 min" },
  { slug: "church-cleaning-tips-volunteers-vs-professionals", title: "Church Cleaning: When to Use Volunteers vs. Professional Services", excerpt: "A practical comparison including cost analysis and hybrid approaches that work.", category: "Guides", date: "2025-08-30", readTime: "6 min" },
  { slug: "assisted-living-nursing-home-cleaning-protocols", title: "Assisted Living and Nursing Home Cleaning: Protocols for Vulnerable Populations", excerpt: "Specialized cleaning requirements for senior care — infection control, fall prevention, and dementia-sensitive approaches.", category: "Guides", date: "2025-09-07", readTime: "8 min" },
  { slug: "coworking-space-cleaning-challenges", title: "Coworking Space Cleaning: Unique Challenges and Practical Solutions", excerpt: "How shared workspace models create distinct cleaning challenges — hot-desking, community kitchens, and member satisfaction.", category: "Guides", date: "2025-09-15", readTime: "6 min" },
  { slug: "warehouse-industrial-cleaning-best-practices", title: "Warehouse and Industrial Facility Cleaning: Best Practices and Safety Standards", excerpt: "How to maintain clean, safe, OSHA-compliant warehouse and industrial environments.", category: "Guides", date: "2025-09-23", readTime: "7 min" },
  { slug: "vct-floor-care-strip-seal-wax-guide", title: "VCT Floor Care: The Complete Guide to Strip, Seal, and Wax", excerpt: "Everything about maintaining VCT floors — stripping schedules, product selection, and maintenance programs.", category: "Services", date: "2025-10-01", readTime: "9 min" },
  { slug: "carpet-cleaning-methods-compared", title: "Commercial Carpet Cleaning Methods Compared: Extraction vs. Encapsulation vs. Bonnet", excerpt: "A technical comparison of commercial carpet cleaning methods — when to use each and expected results.", category: "Services", date: "2025-10-09", readTime: "8 min" },
  { slug: "electrostatic-disinfection-explained", title: "Electrostatic Disinfection: How It Works, When to Use It, and What It Costs", excerpt: "A comprehensive technical guide to electrostatic spraying — science, effectiveness data, applications, and limitations.", category: "Technology", date: "2025-10-16", readTime: "7 min" },
  { slug: "restroom-cleaning-best-practices-high-traffic", title: "Restroom Cleaning: Best Practices for High-Traffic Commercial Facilities", excerpt: "Why restrooms are the most critical area — comprehensive protocols for complaint-free restrooms.", category: "Services", date: "2025-10-24", readTime: "8 min" },
  { slug: "post-construction-cleaning-phases-explained", title: "The 3 Phases of Post-Construction Cleaning: What to Expect", excerpt: "A detailed walkthrough of rough clean, light clean, and final clean — what each includes and how long they take.", category: "Services", date: "2025-11-01", readTime: "6 min" },
  { slug: "what-is-atp-bioluminescence-testing-cleaning", title: "What Is ATP Bioluminescence Testing and Why It Matters", excerpt: "How ATP testing works, what the numbers mean, and why it's the gold standard for verifying cleaning quality.", category: "Technology", date: "2025-11-09", readTime: "6 min" },
  { slug: "color-coded-microfiber-systems-guide", title: "Color-Coded Microfiber Systems: The Science of Preventing Cross-Contamination", excerpt: "How color-coded microfiber systems prevent cross-contamination — the science, color assignments, and implementation.", category: "Technology", date: "2025-11-17", readTime: "6 min" },
  { slug: "digital-cleaning-verification-systems", title: "Digital Cleaning Verification Systems: Moving Beyond Paper Checklists", excerpt: "How GPS tracking, photo documentation, IoT sensors, and ATP integration transform cleaning accountability.", category: "Technology", date: "2025-11-25", readTime: "7 min" },
  { slug: "mbe-certified-cleaning-company-benefits", title: "Why Hiring an MBE-Certified Cleaning Company Matters", excerpt: "How MBE/MWBE vendors help meet diversity procurement goals, improve bid scores, and support community development.", category: "Business", date: "2025-12-03", readTime: "6 min" },
  { slug: "how-to-write-rfp-commercial-cleaning", title: "How to Write an RFP for Commercial Cleaning Services", excerpt: "A step-by-step guide — scope of work templates, evaluation criteria, and common mistakes.", category: "Business", date: "2025-12-11", readTime: "9 min" },
  { slug: "commercial-cleaning-contract-key-terms", title: "Commercial Cleaning Contract Negotiation: 12 Key Terms to Understand", excerpt: "Essential contract terms — performance guarantees, termination clauses, scope changes, and insurance.", category: "Business", date: "2025-12-19", readTime: "8 min" },
  { slug: "vendor-consolidation-one-cleaning-company", title: "Vendor Consolidation: The Case for One Cleaning Company for All Services", excerpt: "Why consolidating janitorial, floor care, disinfection, and maintenance under one vendor reduces costs.", category: "Business", date: "2025-12-27", readTime: "6 min" },
  { slug: "quality-assurance-commercial-cleaning-program", title: "Building a Quality Assurance Program for Commercial Cleaning", excerpt: "A framework for systematic QA — inspection methods, scoring systems, corrective action, and continuous improvement.", category: "Business", date: "2026-01-04", readTime: "8 min" },
  { slug: "green-cleaning-commercial-buildings-guide", title: "Green Cleaning for Commercial Buildings: What Actually Works", excerpt: "Separating facts from hype — certifications that matter, products that work, and sustainable programs.", category: "Sustainability", date: "2026-01-12", readTime: "7 min" },
  { slug: "hepa-filtration-commercial-cleaning", title: "HEPA Filtration in Commercial Cleaning: What Facility Managers Need to Know", excerpt: "Why HEPA vacuum filtration matters for indoor air quality — when required vs. recommended, and how to verify performance.", category: "Technology", date: "2026-01-20", readTime: "6 min" },
  { slug: "winter-facility-maintenance-checklist-northeast", title: "Winter Facility Maintenance Checklist for Northeast Commercial Buildings", excerpt: "Comprehensive winter prep — snow/ice management, interior protocols, plumbing, and slip-and-fall prevention.", category: "Seasonal", date: "2026-01-28", readTime: "7 min" },
  { slug: "summer-deep-cleaning-checklist-schools", title: "Summer Deep Cleaning Checklist for K-12 Schools", excerpt: "How to maximize summer break for school deep cleaning — task list, timeline, and fall reopening prep.", category: "Seasonal", date: "2026-02-05", readTime: "8 min" },
  { slug: "covid-cleaning-standards-permanent-changes", title: "Post-COVID Cleaning Standards: What's Permanent and What's Changed", excerpt: "Which pandemic-era cleaning practices are here to stay and which were temporary overreactions.", category: "Industry Data", date: "2026-02-13", readTime: "7 min" },
  { slug: "nyc-local-law-building-maintenance", title: "NYC Local Law Compliance for Commercial Building Maintenance", excerpt: "Key NYC local laws affecting building maintenance — Local Law 11, 97, 26, and how cleaning operations intersect.", category: "Compliance", date: "2026-02-21", readTime: "7 min" },
  { slug: "hurricane-preparedness-florida-commercial-facilities", title: "Hurricane Preparedness and Recovery Cleaning for Florida Facilities", excerpt: "Pre-storm preparation, emergency response, and post-hurricane cleanup protocols for Florida commercial buildings.", category: "Seasonal", date: "2026-03-01", readTime: "7 min" },
  { slug: "cleaning-company-insurance-requirements", title: "Cleaning Company Insurance Requirements: What to Verify Before Signing", excerpt: "Essential insurance coverages — general liability, workers' comp, commercial auto, and umbrella policies.", category: "Business", date: "2026-03-09", readTime: "7 min" },
  { slug: "cleaning-for-leed-certified-buildings", title: "Cleaning Requirements for LEED-Certified Buildings", excerpt: "How LEED certification affects your cleaning program — product certifications, documentation, and credit maintenance.", category: "Sustainability", date: "2026-03-17", readTime: "7 min" },
  { slug: "pressure-washing-commercial-properties", title: "Pressure Washing for Commercial Properties: Methods, Frequency, and Regulations", excerpt: "A complete guide — building exteriors, sidewalks, parking structures, water reclamation, and environmental regs.", category: "Services", date: "2026-03-25", readTime: "6 min" },
  { slug: "cleaning-audit-checklist-facility-managers", title: "How to Audit Your Current Cleaning Program: A 50-Point Checklist", excerpt: "A systematic framework for evaluating your cleaning vendor — quality, compliance, communication, staffing, and value.", category: "Checklists", date: "2026-04-02", readTime: "9 min" },
  { slug: "cleaning-staffing-ratios-square-footage", title: "Cleaning Staffing Ratios: How Many Cleaners Does Your Building Need?", excerpt: "Data-backed staffing formulas — square footage per cleaner ratios by facility type and workloading methodology.", category: "Industry Data", date: "2026-04-10", readTime: "7 min" },
  { slug: "commercial-cleaning-glossary-terms", title: "Commercial Cleaning Glossary: 100+ Industry Terms Defined", excerpt: "A comprehensive reference glossary — products, equipment, standards, methods, and compliance terms.", category: "Standards", date: "2026-04-18", readTime: "15 min" },
  { slug: "commercial-cleaning-vs-in-house-custodial", title: "Outsourced Cleaning vs. In-House Custodial Staff: A Complete Comparison", excerpt: "Pros, cons, and true cost comparison — financials, quality, flexibility, and risk.", category: "Business", date: "2026-04-26", readTime: "8 min" },
  { slug: "questions-to-ask-commercial-cleaning-company", image: "/blog/questions-to-ask-commercial-cleaning-company.jpg", title: "10 Questions to Ask Before Hiring a Commercial Cleaning Company", excerpt: "The 10 questions that separate professional cleaning companies from the rest — what to ask about staffing, verification, insurance, and accountability before you sign a contract.", category: "Buying Guide", date: "2026-04-27", readTime: "9 min" },
  { slug: "commercial-cleaning-manhattan-vendor-guide", image: "/blog/commercial-cleaning-manhattan-vendor-guide.jpg", title: "Commercial Cleaning in Manhattan: A Facility Manager's Vendor Guide", excerpt: "A proof-driven guide to selecting a Manhattan commercial cleaning vendor — specs, compliance, staffing, and verification for Class A to mixed-use buildings.", category: "Local SEO", date: "2026-04-28", readTime: "10 min" },
  { slug: "commercial-cleaning-bronx-facility-managers", image: "/blog/commercial-cleaning-bronx-facility-managers.jpg", title: "Commercial Cleaning in the Bronx: What Facility Managers Should Know", excerpt: "A Bronx-focused playbook for commercial cleaning: staffing, compliance, transit-heavy traffic patterns, and how to verify quality across offices, schools, and clinics.", category: "Local SEO", date: "2026-04-28", readTime: "9 min" },
  { slug: "commercial-cleaning-brooklyn-vendor-guide", image: "/blog/commercial-cleaning-brooklyn-vendor-guide.jpg", title: "Commercial Cleaning in Brooklyn: How to Choose the Right Vendor", excerpt: "A Brooklyn-focused vendor guide for facility managers: specs, staffing, compliance, and proof-based cleaning with JaniTrack verification for consistent results.", category: "Local SEO", date: "2026-04-29", readTime: "10 min" },
  { slug: "commercial-cleaning-queens-facility-guide", image: "/blog/commercial-cleaning-queens-facility-guide.jpg", title: "Commercial Cleaning in Queens: A Practical Guide for Facility Managers", excerpt: "A Queens facility manager guide to commercial cleaning: neighborhood realities, compliance, and how GreenPoint verifies quality with GPS-tagged photos and ATP testing.", category: "Local SEO", date: "2026-04-29", readTime: "10 min" },
  { slug: "commercial-cleaning-staten-island-guide", image: "/blog/commercial-cleaning-staten-island-guide.jpg", title: "Commercial Cleaning in Staten Island: Local Vendor Guide", excerpt: "A proof-driven Staten Island commercial cleaning guide for offices, medical, and retail—what to ask, what to verify, and how to price it right.", category: "Local SEO", date: "2026-04-30", readTime: "9 min" },
  { slug: "office-cleaning-midtown-manhattan-tenants", image: "/blog/office-cleaning-midtown-manhattan-tenants.jpg", title: "Office Building Cleaning in Midtown Manhattan: What Tenants Expect", excerpt: "Midtown Manhattan office cleaning is judged by tenants daily. Learn the service levels, proof points, and compliance basics that protect renewals and reputation.", category: "Local SEO", date: "2026-04-30", readTime: "9 min" },

  { slug: "commercial-cleaning-long-island-city-astoria", image: "/blog/commercial-cleaning-long-island-city-astoria.jpg", title: "Commercial Cleaning in Long Island City and Astoria: Vendor Guide", excerpt: "A proof-driven guide to hiring commercial cleaning in Long Island City and Astoria—scope, pricing drivers, local building needs, and how GreenPoint verifies results.", category: "Local SEO", date: "2026-05-01", readTime: "9 min" },
  { slug: "commercial-cleaning-downtown-brooklyn-dumbo", image: "/blog/commercial-cleaning-downtown-brooklyn-dumbo.jpg", title: "Commercial Cleaning in Downtown Brooklyn and DUMBO", excerpt: "Hiring a commercial cleaning vendor in Downtown Brooklyn or DUMBO? Compare scopes, compliance basics, and how GreenPoint proves outcomes with JaniTrack.", category: "Local SEO", date: "2026-05-01", readTime: "9 min" },
  { slug: "school-cleaning-nyc-doe-approved-vendor", image: "/blog/school-cleaning-nyc-doe-approved-vendor.jpg", title: "School Cleaning Services in NYC: Choosing a DOE-Approved Vendor", excerpt: "A proof-driven guide to selecting an NYC school cleaning partner that meets DOE expectations, documentation needs, and infection-control goals.", category: "Local SEO", date: "2026-05-02", readTime: "10 min" },
  { slug: "medical-office-cleaning-manhattan-hipaa", image: "/blog/medical-office-cleaning-manhattan-hipaa.jpg", title: "Medical Office Cleaning in Manhattan: HIPAA-Compliant Vendors", excerpt: "How Manhattan practices vet medical office cleaning vendors for HIPAA awareness, OSHA-aligned safety, and verifiable disinfection with documentation.", category: "Local SEO", date: "2026-05-02", readTime: "9 min" },
  { slug: "daycare-cleaning-brooklyn-health-department", image: "/blog/daycare-cleaning-brooklyn-health-department.jpg", title: "Daycare Cleaning in Brooklyn: Health Department Compliance Guide", excerpt: "A proof-driven Brooklyn daycare cleaning plan aligned to NYC health rules, disinfectant selection, documentation, and inspection-ready routines.", category: "Local SEO", date: "2026-05-03", readTime: "10 min" },
  { slug: "church-cleaning-bronx-local-options", image: "/blog/church-cleaning-bronx-local-options.jpg", title: "Church Cleaning in the Bronx: Affordable Local Options", excerpt: "A practical Bronx church cleaning plan with fixed pricing, volunteer support options, and proof-driven quality for sanctuaries and event spaces.", category: "Local SEO", date: "2026-05-03", readTime: "9 min" },
  { slug: "office-cleaning-westchester-county", image: "/blog/office-cleaning-westchester-county.jpg", title: "Office Building Cleaning in Westchester County: Fixed-Price Plans for Class A, Medical, and Municipal Tenants", excerpt: "A local, compliance-first guide to office cleaning in Westchester County—staffing, frequency, OSHA/ISSA standards, and a fixed-price walkthrough quote from GreenPoint.", category: "Local SEO", date: "2026-05-04", readTime: "9 min" },
  { slug: "medical-office-cleaning-new-jersey-hipaa", image: "/blog/medical-office-cleaning-new-jersey-hipaa.jpg", title: "Medical Office Cleaning in New Jersey: HIPAA-Aware Protocols, OSHA Chemical Safety, and Buyer Checklist", excerpt: "A compliance-first guide to medical office cleaning in New Jersey—HIPAA-aware practices, OSHA/GHS chemical safety, disinfection routines, and how GreenPoint proves results.", category: "Local SEO", date: "2026-05-04", readTime: "10 min" },
  { slug: "school-cleaning-new-jersey-district-approval", image: "/blog/school-cleaning-new-jersey-district-approval.jpg", title: "School Cleaning in New Jersey: District Vendor Approval Guide (Protocols, Proof, and Pricing)", excerpt: "A practical guide for NJ districts on approving a school cleaning vendor: compliance, proof of performance, staffing, and fixed pricing for predictable budgets.", category: "Local SEO", date: "2026-05-05", readTime: "10 min" },
  { slug: "daycare-cleaning-queens-nyc-health-code", image: "/blog/daycare-cleaning-queens-nyc-health-code.jpg", title: "Daycare Cleaning in Queens: NYC Health Code Compliance for Astoria, LIC, Flushing, and Jamaica", excerpt: "Queens childcare centers face strict NYC health expectations. Learn compliant cleaning routines, documentation, and fixed-price plans with verification and safe chemicals.", category: "Local SEO", date: "2026-05-05", readTime: "9 min" },
  {"slug": "government-building-cleaning-connecticut", "image": "/blog/government-building-cleaning-connecticut.jpg", "title": "Government Building Cleaning in Connecticut: Bid Vendor Guide", "excerpt": "A proof-driven guide to CT municipal and state facility cleaning: scope, compliance, staffing, and how to evaluate vendors for measurable outcomes.", "category": "Local SEO", "date": "2026-05-06", "readTime": "10 min"},
  {"slug": "coworking-cleaning-manhattan-vendor-selection", "image": "/blog/coworking-cleaning-manhattan-vendor-selection.jpg", "title": "Coworking Space Cleaning in Manhattan: Vendor Selection Guide", "excerpt": "How Manhattan coworking operators choose a janitorial partner: measurable QA, fast turnarounds, restroom hygiene, and predictable fixed pricing.", "category": "Local SEO", "date": "2026-05-06", "readTime": "9 min"},

  {
    slug: "restaurant-hospitality-cleaning-nyc-tri-state",
    image: "/blog/restaurant-hospitality-cleaning-nyc-tri-state.jpg",
    title: "Restaurant and Hospitality Cleaning in NYC Tri-State: A Proof-Driven Vendor Guide",
    excerpt: "A tri-state cleaning playbook for restaurants and hotels: health code readiness, ISSA-based standards, JaniTrack verification, and fixed pricing from GreenPoint.",
    category: "Local SEO",
    date: "2026-05-07",
    readTime: "10 min"
  },
  {
    slug: "warehouse-industrial-cleaning-nj-tri-state",
    image: "/blog/warehouse-industrial-cleaning-nj-tri-state.jpg",
    title: "Warehouse and Industrial Cleaning in NJ Tri-State: Safety-First, Audit-Ready Janitorial",
    excerpt: "A buyer guide for NJ warehouses: dust control, OSHA-aligned chemical handling, dock and aisle standards, and JaniTrack verification from GreenPoint Maintenance Services.",
    category: "Local SEO",
    date: "2026-05-07",
    readTime: "9 min"
  },
  { slug: "commercial-cleaning-westchester-yonkers-white-plains", image: "/blog/commercial-cleaning-westchester-yonkers-white-plains.jpg", title: "Commercial Cleaning in Westchester: Yonkers, White Plains, and Mount Vernon", excerpt: "Looking for commercial cleaning in Westchester? Here’s a proof-driven plan for Yonkers, White Plains, and Mount Vernon facilities—with verified results.", category: "Local SEO", date: "2026-05-08", readTime: "10 min" },
  { slug: "commercial-cleaning-nassau-county-long-island", image: "/blog/commercial-cleaning-nassau-county-long-island.jpg", title: "Commercial Cleaning in Nassau County, Long Island", excerpt: "Need commercial cleaning in Nassau County? A proof-driven, fixed-price program for Garden City, Hempstead, Mineola, and the South Shore—verified with JaniTrack.", category: "Local SEO", date: "2026-05-08", readTime: "9 min" },

  {
    slug: "commercial-cleaning-suffolk-county-long-island",
    image: "/blog/commercial-cleaning-suffolk-county-long-island.jpg",
    title: "Commercial Cleaning in Suffolk County, Long Island: A Proof-Driven Guide for Facilities",
    excerpt: "Need a reliable Suffolk County commercial cleaning partner? See scopes, local considerations, and how GreenPoint verifies results with JaniTrack.",
    category: "Local SEO",
    date: "2026-05-09",
    readTime: "10 min"
  },
  {
    slug: "commercial-cleaning-northern-new-jersey-newark-jersey-city",
    image: "/blog/commercial-cleaning-northern-new-jersey-newark-jersey-city.jpg",
    title: "Commercial Cleaning in Northern New Jersey (Newark, Jersey City, Hoboken): What Buyers Should Demand",
    excerpt: "Searching for commercial cleaning in Newark, Jersey City, or Hoboken? Learn scope, compliance, and how GreenPoint proves results with JaniTrack.",
    category: "Local SEO",
    date: "2026-05-09",
    readTime: "9 min"
  },
  { slug: "commercial-cleaning-fairfield-county-connecticut", image: "/blog/commercial-cleaning-fairfield-county-connecticut.jpg", title: "Commercial Cleaning in Fairfield County, Connecticut (Stamford & Greenwich)", excerpt: "Proof-driven commercial cleaning for Stamford and Greenwich offices. Learn pricing drivers, compliance basics, and how GreenPoint verifies results.", category: "Local SEO", date: "2026-05-10", readTime: "10 min" },
  { slug: "nyc-local-law-26-97-cleaning-impact", image: "/blog/nyc-local-law-26-97-cleaning-impact.jpg", title: "NYC Local Law 26 & 97: What They Change About Your Cleaning Vendor", excerpt: "Local Law 26 and 97 are building laws, but they influence janitorial specs, documentation, and green cleaning choices. Here’s what to demand from vendors.", category: "Compliance", date: "2026-05-10", readTime: "9 min" },
  { slug: "nj-doe-school-cleaning-requirements", image: "/blog/nj-doe-school-cleaning-requirements.jpg", title: "NJ Department of Education School Cleaning Requirements (Practical Compliance Guide)", excerpt: "A practical NJ school cleaning compliance guide: schedules, disinfecting rules, OSHA-safe chemicals, documentation, and how to verify results campus-wide.", category: "Compliance", date: "2026-05-11", readTime: "10 min" },
  { slug: "nyc-mwbe-cleaning-vendors-procurement", image: "/blog/nyc-mwbe-cleaning-vendors-procurement.jpg", title: "NYC MWBE Cleaning Vendors: A Procurement Guide for Facilities and Agencies", excerpt: "How to source MWBE cleaning vendors in NYC: compliance, scopes, verification, and how to evaluate minority-owned janitorial bids without sacrificing quality.", category: "Business", date: "2026-05-11", readTime: "9 min" },
  {"slug": "nyc-building-class-cleaning-standards", "image": "/blog/nyc-building-class-cleaning-standards.jpg", "title": "NYC Building Class Cleaning Standards: Class A vs B vs C (What Tenants Expect)", "excerpt": "Class A, B, and C buildings have different cleaning expectations, audit routines, and risk exposure. A practical NYC guide for owners and tenants.", "category": "Standards", "date": "2026-05-12", "readTime": "10 min"},
  {"slug": "ct-ny-daycare-cleaning-compliance-differences", "image": "/blog/ct-ny-daycare-cleaning-compliance-differences.jpg", "title": "CT vs NY Daycare Cleaning Compliance: What Changes Across the Tri-State Line", "excerpt": "Operating child care in NY and CT? Here’s how cleaning, disinfection, documentation, and inspection readiness differ—and how to standardize your janitorial program.", "category": "Compliance", "date": "2026-05-12", "readTime": "9 min"},
  { slug: "commercial-cleaning-bergen-county-nj", image: "/blog/commercial-cleaning-bergen-county-nj.jpg", title: "Commercial Cleaning in Bergen County, NJ: Facility Manager’s Local Vendor Guide", excerpt: "A Bergen County vendor guide for offices, medical, retail, and industrial sites—what to ask for, what it should cost, and how to verify results.", category: "Local SEO", date: "2026-05-15", readTime: "9 min" },
  { slug: "commercial-cleaning-hudson-county-jersey-city-hoboken", image: "/blog/commercial-cleaning-hudson-county-jersey-city-hoboken.jpg", title: "Commercial Cleaning in Hudson County: Jersey City, Hoboken & Bayonne Vendor Guide", excerpt: "A proof-driven vendor guide for Hudson County facilities—how to scope cleaning for waterfront towers, transit hubs, and industrial sites without surprises.", category: "Local SEO", date: "2026-05-15", readTime: "10 min" },
  { slug: "commercial-cleaning-essex-county-newark-montclair", image: "/blog/commercial-cleaning-essex-county-newark-montclair.jpg", title: "Commercial Cleaning in Essex County, NJ: Newark, Montclair & Livingston", excerpt: "A proof-driven vendor guide for Essex County facilities: Newark CBD, Montclair offices, Livingston corporate parks—with JaniTrack verification and fixed pricing.", category: "Local SEO", date: "2026-05-16", readTime: "10 min" },
  { slug: "commercial-cleaning-middlesex-county-edison-new-brunswick", image: "/blog/commercial-cleaning-middlesex-county-edison-new-brunswick.jpg", title: "Commercial Cleaning in Middlesex County, NJ: Edison, New Brunswick & Woodbridge", excerpt: "A buyer-focused vendor guide for Edison corporate parks, New Brunswick medical corridors, and Woodbridge logistics—with JaniTrack proof and fixed pricing.", category: "Local SEO", date: "2026-05-16", readTime: "10 min" },
  { slug: "commercial-cleaning-union-county-elizabeth-summit", image: "/blog/commercial-cleaning-union-county-elizabeth-summit.jpg", title: "Commercial Cleaning in Union County, NJ: Elizabeth, Summit & Westfield", excerpt: "Need reliable janitorial in Union County? A proof-driven vendor guide for Elizabeth, Summit, and Westfield facilities—QA, compliance, and fixed pricing.", category: "Local SEO", date: "2026-05-17", readTime: "10 min" },
  { slug: "commercial-cleaning-morris-county-parsippany-morristown", image: "/blog/commercial-cleaning-morris-county-parsippany-morristown.jpg", title: "Commercial Cleaning in Morris County, NJ: Parsippany, Morristown & Whippany Corporate Parks", excerpt: "A Morris County vendor guide for Parsippany, Morristown, and Whippany corporate parks—fixed pricing, compliance-ready cleaning, and proof-driven QA.", category: "Local SEO", date: "2026-05-17", readTime: "9 min" },
  { slug: "commercial-cleaning-hartford-county-ct", image: "/blog/commercial-cleaning-hartford-county-ct.jpg", title: "Commercial Cleaning in Hartford County, CT: Vendor Guide for Insurance & Government Tenants", excerpt: "A proof-driven vendor guide for Hartford County facilities: frequencies, compliance, and how GreenPoint verifies results with JaniTrack and ATP testing.", category: "Local SEO", date: "2026-05-18", readTime: "10 min" },
  { slug: "commercial-cleaning-new-haven-county-ct", image: "/blog/commercial-cleaning-new-haven-county-ct.jpg", title: "Commercial Cleaning in New Haven County, CT: Yale, Bio, and Downtown Vendor Guide", excerpt: "A New Haven County cleaning vendor guide for Yale-adjacent offices and bio/life-science spaces—standards, compliance, and proof-driven QA from GreenPoint.", category: "Local SEO", date: "2026-05-18", readTime: "10 min" },
  { slug: "commercial-cleaning-philadelphia-center-city", image: "/blog/commercial-cleaning-philadelphia-center-city.jpg", title: "Commercial Cleaning in Center City Philadelphia: Class A Tower Vendor Guide", excerpt: "A proof-driven vendor guide to Center City commercial cleaning: pricing drivers, compliance needs, and how GreenPoint verifies results with JaniTrack.", category: "Local SEO", date: "2026-05-19", readTime: "9 min" },
  { slug: "commercial-cleaning-king-of-prussia-philadelphia-suburbs", image: "/blog/commercial-cleaning-king-of-prussia-philadelphia-suburbs.jpg", title: "Commercial Cleaning in King of Prussia & Philadelphia Suburbs", excerpt: "A facilities-ready guide to commercial cleaning in King of Prussia and the Philadelphia suburbs, with fixed pricing and verifiable results from GreenPoint.", category: "Local SEO", date: "2026-05-19", readTime: "10 min" },
  { slug: "commercial-cleaning-miami-dade-county-florida", image: "/blog/commercial-cleaning-miami-dade-county-florida.jpg", title: "Commercial Cleaning in Miami-Dade County, FL: Brickell, Downtown & Doral Vendor Guide", excerpt: "A proof-driven vendor guide for Miami-Dade facilities—Brickell, Downtown, and Doral. Scope, pricing, verification, and how to hire the right crew.", category: "Local SEO", date: "2026-05-20", readTime: "10 min" },
  { slug: "commercial-cleaning-broward-fort-lauderdale", image: "/blog/commercial-cleaning-broward-fort-lauderdale.jpg", title: "Commercial Cleaning in Broward County, FL: Fort Lauderdale, Plantation & Sunrise", excerpt: "A local vendor guide for Broward County facilities—Fort Lauderdale, Plantation, and Sunrise—covering scopes, verification, pricing, and compliance for buyers.", category: "Local SEO", date: "2026-05-20", readTime: "9 min" },
  {
    slug: "gym-fitness-center-cleaning-nyc",
    image: "/blog/gym-fitness-center-cleaning-nyc.jpg",
    title: "Gym and Fitness Center Cleaning in NYC: Member Safety, Mold, and Equipment Protocols",
    excerpt:
      "A proof-driven playbook for NYC gym cleaning: equipment disinfection, locker-room mold control, and audit-ready verification that protects members and staff.",
    category: "Industry Verticals",
    date: "2026-05-21",
    readTime: "10 min",
  },
  {
    slug: "law-firm-office-cleaning-manhattan",
    image: "/blog/law-firm-office-cleaning-manhattan.jpg",
    title: "Law Firm Cleaning in Manhattan: Confidentiality, After-Hours, and White-Glove Service",
    excerpt:
      "A Manhattan law firm cleaning plan must protect confidentiality, support after-hours access, and deliver measurable quality with documented verification.",
    category: "Industry Verticals",
    date: "2026-05-21",
    readTime: "9 min",
  },
  {
    slug: "financial-services-office-cleaning-nyc",
    image: "/blog/financial-services-office-cleaning-nyc.jpg",
    title: "Financial Services Office Cleaning in NYC: Trading Floors, Banks & Confidential Workspaces",
    excerpt: "A proof-driven cleaning playbook for NYC banks and trading floors: audit trails, confidentiality, opening-ready details, and fixed-price service that passes vendor due diligence.",
    category: "Industry Verticals",
    date: "2026-05-22",
    readTime: "10 min"
  },
  {
    slug: "post-construction-cleaning-nyc-doh-co",
    image: "/blog/post-construction-cleaning-nyc-doh-co.jpg",
    title: "Post-Construction Cleaning in NYC: 3 Phases, DOB Compliance & Certificate of Occupancy Readiness",
    excerpt: "A NYC post-construction cleaning playbook for owners and GCs: rough, light, and final clean phases, OSHA dust control, DSNY debris rules, and CO walkthrough readiness.",
    category: "Industry Verticals",
    date: "2026-05-22",
    readTime: "11 min"
  },
  {"slug": "retail-store-cleaning-nyc-tri-state", "image": "/blog/retail-store-cleaning-nyc-tri-state.jpg", "title": "Retail Store Cleaning in NYC and the Tri-State: Sales-Floor Standards, Fitting Rooms & Window Care", "excerpt": "Proof-driven retail store cleaning for NYC and the tri-state: sales-floor shine, fitting-room sanitation, glass care, and verified opening readiness with JaniTrack.", "category": "Industry Verticals", "date": "2026-05-23", "readTime": "10 min"},
  {"slug": "salon-spa-cleaning-nyc-health-code", "image": "/blog/salon-spa-cleaning-nyc-health-code.jpg", "title": "Salon and Spa Cleaning in NYC: Health-Code Compliance, Tool Disinfection & Mold Prevention", "excerpt": "Salon and spa cleaning built for NYC compliance: disinfectant dwell times, wash-bowl sanitation, laundry control, and documented verification with JaniTrack.", "category": "Industry Verticals", "date": "2026-05-23", "readTime": "9 min"},
  {"slug": "auto-dealership-showroom-cleaning-tri-state", "image": "/blog/auto-dealership-showroom-cleaning-tri-state.jpg", "title": "Auto Dealership and Showroom Cleaning in the Tri-State: Floors, Glass & Service Bays", "excerpt": "A proof-driven playbook for spotless showrooms and safe service bays across NY, NJ, and CT—floor care, streak-free glass, oil/grease control, and audit-ready QA.", "category": "Industry Verticals", "date": "2026-05-24", "readTime": "10 min"},
  {"slug": "veterinary-clinic-cleaning-protocols", "image": "/blog/veterinary-clinic-cleaning-protocols.jpg", "title": "Veterinary Clinic Cleaning in NYC and Long Island: Biosecurity and Odor Control", "excerpt": "A practical cleaning protocol for veterinary clinics—biosecurity by zone, parvo-ready disinfection, odor control, OSHA-aligned safety, and proof-driven verification.", "category": "Industry Verticals", "date": "2026-05-24", "readTime": "9 min"},
  {"slug": "house-of-worship-cleaning-nyc-tri-state", "image": "/blog/house-of-worship-cleaning-nyc-tri-state.jpg", "title": "Cleaning for Churches, Synagogues, and Mosques in the Tri-State Area", "excerpt": "A proof-driven cleaning plan for churches, synagogues, and mosques across NYC, NJ, CT, and PA—respectful scheduling, safer products, and verified results.", "category": "Industry Verticals", "date": "2026-05-25", "readTime": "10 min"},
  {"slug": "private-school-cleaning-nyc-westchester", "image": "/blog/private-school-cleaning-nyc-westchester.jpg", "title": "Private and Charter School Cleaning in NYC and Westchester: Standards Beyond DOE", "excerpt": "Private and charter schools need parent-visible cleanliness, safer chemistry, and documented results. Learn how to set standards beyond NYC DOE baselines.", "category": "Industry Verticals", "date": "2026-05-25", "readTime": "10 min"},
  {"slug": "university-college-cleaning-nyc-metro", "image": "/blog/university-college-cleaning-nyc-metro.jpg", "title": "University and College Cleaning in the NYC Metro: Dorms, Classrooms & Common Areas", "excerpt": "Buyer-focused guide to campus cleaning in NYC metro: dorm turnover, multi-shift coverage, lab-adjacent rules, and proof-driven QA for facilities teams.", "category": "Industry Verticals", "date": "2026-05-26", "readTime": "9 min"},
  {"slug": "biotech-lab-cleaning-nj-bsl1-bsl2", "image": "/blog/biotech-lab-cleaning-nj-bsl1-bsl2.jpg", "title": "Biotech and Pharmaceutical Lab Cleaning in NJ: BSL-1 and BSL-2 Considerations", "excerpt": "Facility-focused guide to biotech lab cleaning in New Jersey: BSL-1 vs BSL-2 boundaries, color-coded tools, documentation, and proof-driven QA for audits.", "category": "Industry Verticals", "date": "2026-05-26", "readTime": "10 min"},
  {"slug": "commercial-cleaning-rfp-evaluation-criteria", "image": "/blog/commercial-cleaning-rfp-evaluation-criteria.jpg", "title": "How to Evaluate Commercial Cleaning RFP Responses: A Scoring Framework", "excerpt": "Use a weighted scoring model to compare janitorial bids apples-to-apples—price, QA proof, compliance, references, and MBE value—without costly surprises.", "category": "Buyer Guides", "date": "2026-05-27", "readTime": "10 min"},
  {"slug": "switching-cleaning-vendors-transition-plan", "image": "/blog/switching-cleaning-vendors-transition-plan.jpg", "title": "Switching Commercial Cleaning Vendors: A 30-Day Transition Plan That Avoids Service Gaps", "excerpt": "A step-by-step 30-day changeover plan for tri-state facilities—audits, kickoff deep clean, staffing alignment, and proof-driven QA—so quality improves on day one.", "category": "Buyer Guides", "date": "2026-05-27", "readTime": "9 min"},
  { slug: "cleaning-vendor-red-flags-warning-signs", image: "/blog/cleaning-vendor-red-flags-warning-signs.jpg", title: "10 Red Flags to Watch For When Hiring a Commercial Cleaning Vendor", excerpt: "Avoid hidden fees, compliance gaps, and quality failures. Here are 10 proof-based red flags to spot before you sign a janitorial contract in NY/NJ/CT.", category: "Buyer Guides", date: "2026-05-28", readTime: "9 min" },
  { slug: "commercial-cleaning-cost-breakdown-nyc", image: "/blog/commercial-cleaning-cost-breakdown-nyc.jpg", title: "Commercial Cleaning Cost Breakdown in NYC: What You're Actually Paying For", excerpt: "NYC janitorial pricing is more than labor. Here’s a transparent breakdown of cost drivers, compliance requirements, and how to compare fixed-price bids.", category: "Buyer Guides", date: "2026-05-28", readTime: "10 min" },
  {"slug": "tenant-improvement-cleaning-nyc", "image": "/blog/tenant-improvement-cleaning-nyc.jpg", "title": "Tenant Improvement Cleaning in NYC: Move-In Ready Standards for Class A Tenants", "excerpt": "A TI space can look finished and still fail a broker walk. Here’s the move-in ready cleaning scope NYC Class A tenants expect—plus proof controls.", "category": "Industry Verticals", "date": "2026-05-29", "readTime": "9 min"},
  {"slug": "co-op-condo-cleaning-nyc-board", "image": "/blog/co-op-condo-cleaning-nyc-board.jpg", "title": "Co-op and Condo Common Area Cleaning in NYC: What Boards Should Demand", "excerpt": "NYC boards can’t manage what they can’t verify. Here’s a common-area cleaning standard for co-ops/condos—plus proof controls that stop recurring complaints.", "category": "Industry Verticals", "date": "2026-05-29", "readTime": "10 min"},
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
  'Industry Data': { bg: '#EEF2FF', text: '#4338CA' },
  Standards: { bg: '#F0FDF4', text: '#15803D' },
  Research: { bg: '#FDF4FF', text: '#A21CAF' },
  Pricing: { bg: '#FFF7ED', text: '#EA580C' },
  Business: { bg: '#FFFBEB', text: '#B45309' },
  Compliance: { bg: '#FEF2F2', text: '#DC2626' },
  Guides: { bg: '#F0F9FF', text: '#0369A1' },
  Checklists: { bg: '#ECFDF5', text: '#059669' },
  Services: { bg: '#F8FAFC', text: '#475569' },
  Technology: { bg: '#FAF5FF', text: '#7C3AED' },
  Sustainability: { bg: '#F0FDF4', text: '#059669' },
  Seasonal: { bg: '#FFF1F2', text: '#BE123C' },
  'Local SEO': { bg: '#EFF6FF', text: '#1D4ED8' },
  'Industry Verticals': { bg: '#F5F3FF', text: '#6D28D9' },
  'Buyer Guides': { bg: '#F0F9FF', text: '#0369A1' },
  'Specialty Services': { bg: '#F8FAFC', text: '#0F172A' },
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
                display: "flex", flexDirection: post.image ? "row" : "column", gap: post.image ? 20 : 0, textDecoration: "none",
                background: "#FFFFFF", borderRadius: 12, border: "1px solid #E2EBE5", padding: 24, alignItems: "flex-start",
              }}>
                {post.image && (
                  <div style={{ flexShrink: 0, width: 180, height: 120, borderRadius: 8, overflow: "hidden", background: "#F7FAF8" }}>
                    <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
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
                </div>
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
