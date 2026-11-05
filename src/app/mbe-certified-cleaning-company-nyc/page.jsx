import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata = {
  title: "MBE/MWBE Certified Cleaning Company NYC | GreenPoint Maintenance Services",
  description:
    "GreenPoint Maintenance Services Corp is an MBE/MWBE-certified company providing commercial janitorial and facility maintenance across NYC. SAM.gov registered. NAICS 561720. Free facility assessment.",
  keywords: [
    "MBE/MWBE certified cleaning company NYC",
    "MBE/MWBE janitorial",
    "MWBE cleaning services New York",
    "MBE janitorial contractor NYC",
    "diversity procurement cleaning",
    "SAM.gov registered cleaning company",
    "NAICS 561720 NYC",
  ],
  openGraph: {
    title: "MBE/MWBE Certified Cleaning Company NYC | GreenPoint Maintenance",
    description:
      "NYS MBE/MWBE-certified company serving New York City. Commercial janitorial, facility maintenance, and sanitization. SAM.gov registered with NAICS 561720, 238210, 561790.",
    url: "https://greenpointms.com/mbe-certified-cleaning-company-nyc",
  },
  alternates: { canonical: "https://greenpointms.com/mbe-certified-cleaning-company-nyc" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does MBE certification mean for a cleaning company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MBE (Minority Business Enterprise) certification verifies that a company is at least 51% owned, operated, and controlled by a minority individual. For procurement officers, GreenPoint's NYS MBE/MWBE certification supports New York State diversity spending goals, MWBE set-aside contracts, and supplier diversity programs.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does GreenPoint hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenPoint is NYS MBE/MWBE certified and is actively registered on SAM.gov for federal procurement. Our NAICS codes are 561720 (Janitorial Services), 238210 (Electrical Contractors and Other Wiring Installation), and 561790 (Other Services to Buildings and Dwellings).",
      },
    },
    {
      "@type": "Question",
      name: "Can GreenPoint fulfill diversity procurement requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GreenPoint is an NYS-certified MBE/MWBE and a Port Authority of NY & NJ certified MBE. Our NYS MBE/MWBE certification supports New York State diversity procurement requirements. We are registered on SAM.gov for federal contracting. We provide all required documentation including capability statements, W-9, Certificates of Insurance, and compliance letters upon request.",
      },
    },
    {
      "@type": "Question",
      name: "What NAICS codes does GreenPoint operate under?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenPoint operates under three NAICS codes: 561720 (Janitorial Services) for commercial cleaning programs, 238210 (Electrical Contractors and Other Wiring Installation) for facility electrical maintenance, and 561790 (Other Services to Buildings and Dwellings) for comprehensive facility maintenance services.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a capability statement or W-9 from GreenPoint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can download our capability statement directly from greenpointms.com/capability-statement. For W-9, Certificate of Insurance, or additional procurement documentation, email info@greenpointms.com or call 844-814-0810. We typically fulfill documentation requests within one business day.",
      },
    },
  ],
};

export default function MBECertifiedCleaningCompanyNYC() {
  return (
    <SeoLandingPage
      headline="MBE/MWBE-Certified Commercial Cleaning in"
      highlightWord="New York City"
      subheadline="GreenPoint Maintenance Services Corp is an MBE/MWBE-certified company delivering verified janitorial and facility maintenance. SAM.gov registered. NAICS 561720. 5-state coverage."
      trustBadges={[
        "MBE / MWBE Certified",
        "SAM.gov Registered",
        "NAICS 561720",
        "$2M+ Insured & Bonded",
      ]}
      introParagraphs={[
        "Procurement officers and facility managers seeking MBE-certified cleaning vendors in New York City need a provider that delivers both compliance documentation and measurable cleaning performance. GreenPoint Maintenance Services Corp is NYS MBE/MWBE certified — a verified credential that supports New York State diversity spending goals.",
        "Beyond certification, GreenPoint brings operational rigor that separates us from checkbox vendors. Every cleaning session is documented through StockPoint, our proprietary verification system with timestamped photos and GPS-tagged task completion. ATP bioluminescence testing is available on request. When auditors or board members ask for proof of service, you have a real-time dashboard — not a cleaning crew's word.",
        "We serve over 80 facilities across five states with a workforce of 80+ background-checked professionals. Our NAICS codes — 561720 (Janitorial), 238210 (Electrical/Wiring), and 561790 (Building Services) — cover the full spectrum of facility maintenance. One vendor, one invoice, one point of accountability.",
      ]}
      services={[
        { iconKey: "building", title: "Commercial Janitorial Programs", desc: "Daily, weekly, and monthly cleaning for offices, lobbies, restrooms, and common areas. Customized scope of work with fixed pricing and no hidden fees." },
        { iconKey: "shield", title: "Disinfection & Sanitization", desc: "CDC-compliant electrostatic disinfection for schools, healthcare, and high-traffic environments. ATP bioluminescence testing available on request." },
        { iconKey: "floor", title: "Floor Care & Restoration", desc: "VCT stripping and refinishing, carpet extraction, marble and stone maintenance, and hardwood care. Scheduled or one-time deep clean programs." },
        { iconKey: "user-check", title: "Day Porter Services", desc: "Dedicated on-site daytime staff for continuous upkeep of lobbies, restrooms, conference rooms, and high-traffic zones during business hours." },
        { iconKey: "wrench", title: "Facility Maintenance", desc: "Light plumbing, electrical, painting, and general repairs under NAICS 238210 and 561790. Consolidate vendors and reduce administrative overhead." },
        { iconKey: "hardhat", title: "Post-Construction Cleanup", desc: "Three-stage rough, light, and final construction cleanup. Dust removal, window cleaning, floor preparation. Move-in ready within 48 hours." },
      ]}
      whyChooseUs={[
        { iconKey: "award", title: "MBE / MWBE Certified", desc: "NYS MBE/MWBE certified. Qualifies for New York State diversity procurement, set-aside contracts, and supplier diversity programs." },
        { iconKey: "shield", title: "StockPoint Verification", desc: "Proprietary real-time cleaning verification with timestamped photos and GPS tagging. ATP bioluminescence testing available on request. Audit-ready documentation on demand." },
        { iconKey: "landmark", title: "SAM.gov & Federal Ready", desc: "Actively registered on SAM.gov with valid CAGE code and UEI. NAICS 561720, 238210, 561790. Capability statement and full vendor package available." },
        { iconKey: "building", title: "5-State, 80+ Workforce", desc: "Operational across NY, NJ, CT, PA, and FL with 80+ background-checked professionals. Scalable from single-site to multi-location contracts." },
      ]}
      faqItems={[
        { q: "What does MBE certification mean for a cleaning company?", a: "MBE certification verifies that a company is at least 51% minority-owned, operated, and controlled. For procurement, GreenPoint's NYS MBE/MWBE certification supports New York State diversity spending goals, MWBE set-aside contracts, and supplier diversity programs." },
        { q: "What certifications does GreenPoint hold?", a: "NYS MBE/MWBE certified, and active SAM.gov registration for federal contracting. NAICS codes: 561720, 238210, and 561790." },
        { q: "Can GreenPoint fulfill diversity procurement requirements?", a: "Yes. GreenPoint is an NYS-certified MBE/MWBE and a Port Authority of NY & NJ certified MBE. Our NYS MBE/MWBE certification supports New York State diversity procurement. We are registered on SAM.gov for federal contracting. We provide capability statements, W-9, COI, and compliance letters within one business day." },
        { q: "What NAICS codes does GreenPoint operate under?", a: "561720 (Janitorial Services), 238210 (Electrical Contractors and Other Wiring Installation), and 561790 (Other Services to Buildings and Dwellings)." },
        { q: "How do I get a capability statement or W-9?", a: "Download our capability statement at greenpointms.com/capability-statement. For W-9, COI, or other procurement documents, email info@greenpointms.com or call 844-814-0810." },
      ]}
      ctaHeadline="Request a Facility Assessment"
      ctaSubheadline="Download our capability statement, schedule a walkthrough, or request vendor documentation. MBE/MWBE-certified, SAM.gov registered, fully insured."
      schemaMarkup={faqSchema}
    />
  );
}
