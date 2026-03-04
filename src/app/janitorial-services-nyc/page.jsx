import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata = {
  title: "Janitorial Services NYC | Commercial Cleaning Company | GreenPoint",
  description:
    "MBE-certified commercial janitorial services in New York City. Daily, weekly, and monthly cleaning for offices, schools, medical facilities, churches, and government buildings. Real-time JaniTrack verification. Free facility walkthrough.",
  keywords: [
    "janitorial services NYC",
    "commercial cleaning company New York",
    "office cleaning NYC",
    "janitorial company near me",
    "commercial janitorial New York City",
    "building cleaning services NYC",
    "facility cleaning company NYC",
  ],
  openGraph: {
    title: "Janitorial Services NYC | GreenPoint Maintenance Services",
    description:
      "MBE-certified commercial janitorial with real-time verification. Schools, offices, medical, churches, and government buildings across NYC.",
    url: "https://greenpointms.com/janitorial-services-nyc",
  },
  alternates: { canonical: "https://greenpointms.com/janitorial-services-nyc" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of facilities does GreenPoint clean in NYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenPoint provides commercial janitorial services for six core facility types in NYC: K-12 schools and charter schools, churches and houses of worship, healthcare and medical offices, daycare and childcare centers, government and municipal buildings, and commercial office buildings. Each facility type has dedicated cleaning protocols designed for its specific compliance and safety requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How much do janitorial services cost in NYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial janitorial pricing in NYC depends on facility type, square footage, cleaning frequency, and scope of work. GreenPoint provides fixed-price proposals with no hidden fees or hourly billing. Use our online instant quote calculator for a preliminary estimate, then schedule a free facility walkthrough for exact pricing.",
      },
    },
    {
      "@type": "Question",
      name: "What makes GreenPoint different from other NYC cleaning companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenPoint is the only local janitorial provider offering JaniTrack real-time cleaning verification with timestamped photo documentation, GPS-tagged task completion, and ATP bioluminescence testing. We are also MBE/MWBE certified, SAM.gov registered, and carry $2M+ in commercial general liability insurance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency cleaning services in NYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In addition to scheduled cleaning programs, GreenPoint offers 24/7 emergency cleaning services for water damage, biohazard incidents, post-event cleanup, and post-construction debris removal anywhere in NYC. Contact us at (347) 332-9348 for immediate dispatch.",
      },
    },
  ],
};

export default function JanitorialServicesNYC() {
  return (
    <SeoLandingPage
      headline="Commercial Janitorial Services in"
      highlightWord="New York City"
      subheadline="Full-service facility cleaning for offices, schools, medical facilities, churches, and government buildings. MBE-certified. Every cleaning verified in real-time through JaniTrack."
      trustBadges={[
        "MBE / MWBE Certified",
        "SAM.gov Registered",
        "$2M+ Insurance",
        "24/7 Emergency Service",
      ]}
      introParagraphs={[
        "Finding a reliable janitorial company in New York City shouldn't be this hard. Missed cleanings, inconsistent quality, surprise charges, and zero accountability — that's what most facility managers deal with. GreenPoint Maintenance Services Corp exists to end that cycle.",
        "We provide commercial janitorial and facility maintenance programs tailored to the specific compliance, safety, and quality standards your facility requires. Whether you manage a school with CDC-compliant sanitization requirements, a medical office with OSHA protocols, or a government building with procurement compliance standards — we build a custom cleaning program around your facility's needs, not a one-size-fits-all package.",
        "Every cleaning session is documented and verified in real-time through JaniTrack, our proprietary system that provides timestamped photo evidence, GPS-tagged task completion, and ATP bioluminescence readings that scientifically measure surface cleanliness. Your board, tenants, or regulatory bodies get measurable proof — not promises.",
      ]}
      services={[
        { iconKey: "building", title: "Daily & Nightly Janitorial", desc: "Scheduled cleaning programs for lobbies, restrooms, offices, classrooms, and common areas. Customized checklists for your facility type and traffic patterns." },
        { iconKey: "shield", title: "Disinfection & Sanitization", desc: "Electrostatic disinfection with hospital-grade sanitizers. ATP bioluminescence testing verifies pathogen elimination on high-touch surfaces." },
        { iconKey: "building", title: "Floor Care & Restoration", desc: "Strip, seal, and refinish hard floors. Carpet extraction and encapsulation. Marble, stone, and VCT maintenance programs for high-traffic commercial spaces." },
        { iconKey: "office", title: "Day Porter Services", desc: "On-site daytime staff for continuous upkeep — restroom monitoring, lobby presentation, conference room readiness, and supply replenishment." },
        { iconKey: "building", title: "Facility Maintenance", desc: "Light plumbing, electrical, HVAC filter changes, painting touch-ups, and general handyman services under one contract and one invoice." },
        { iconKey: "building", title: "Post-Construction Cleanup", desc: "Three-stage professional cleanup: rough clean, light clean, and final touch. Debris removal, dust elimination, and final inspection. Move-in ready in 48 hours." },
      ]}
      whyChooseUs={[
        { iconKey: "shield", title: "JaniTrack Verification", desc: "The only local provider with real-time photo documentation, GPS tracking, and ATP bioluminescence testing. See proof of every cleaning session." },
        { iconKey: "award", title: "MBE / MWBE Certified", desc: "Registered with NYC & NYS. Qualifies for diversity procurement programs and MWBE set-aside contracts at city, state, and federal level." },
        { iconKey: "building", title: "Fixed-Price Proposals", desc: "Transparent, per-facility pricing. No hourly billing, no surprise fees, no hidden charges. Know exactly what you'll pay every month." },
        { iconKey: "medical", title: "Vertical-Specific Protocols", desc: "Dedicated cleaning protocols for schools, churches, medical, daycare, government, and commercial offices. Not a one-size-fits-all approach." },
      ]}
      faqItems={[
        { q: "What types of facilities does GreenPoint clean in NYC?", a: "We serve six core verticals: K-12 schools and charter schools, churches and houses of worship, healthcare and medical offices, daycare and childcare centers, government and municipal buildings, and commercial office spaces. Each has dedicated protocols for its compliance and safety requirements." },
        { q: "How much do janitorial services cost in NYC?", a: "Pricing depends on facility type, square footage, frequency, and scope. We provide fixed-price proposals with no hidden fees after a complimentary walkthrough. Try our instant quote calculator for a preliminary estimate." },
        { q: "What makes GreenPoint different from other NYC cleaning companies?", a: "JaniTrack real-time cleaning verification with timestamped photos, GPS-tagged task completion, and ATP bioluminescence testing. Plus MBE/MWBE certification, SAM.gov registration, and $2M+ insurance coverage." },
        { q: "Do you offer emergency cleaning services?", a: "Yes — 24/7 emergency response for water damage, biohazard incidents, post-event cleanup, and post-construction work. Call (347) 332-9348 for immediate dispatch." },
        { q: "What areas of NYC do you serve?", a: "We cover all five boroughs — Bronx, Manhattan, Brooklyn, Queens, and Staten Island — plus Westchester County, and the broader tri-state region including NJ, CT, PA, and FL." },
        { q: "Are your cleaning teams background-checked?", a: "Every GreenPoint team member undergoes a comprehensive background check before assignment. We carry full commercial general liability insurance, workers' compensation, and bonding." },
      ]}
      ctaHeadline="Get a Free Facility Walkthrough"
      ctaSubheadline="We'll assess your space, identify compliance gaps, and deliver a fixed-price janitorial proposal within 48 hours. No obligation."
      schemaMarkup={faqSchema}
    />
  );
}
