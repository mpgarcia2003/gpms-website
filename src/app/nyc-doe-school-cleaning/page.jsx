import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata = {
  title: "NYC DOE Approved Vendor | School Cleaning Services | GreenPoint Maintenance",
  description:
    "GreenPoint Maintenance is an NYC DOE Approved Vendor providing professional cleaning services to New York City public schools. MBE-certified, Green Seal products, JaniTrack verified. Free facility walkthrough.",
  keywords: [
    "NYC DOE approved vendor",
    "NYC DOE cleaning vendor",
    "DOE approved cleaning company",
    "NYC public school cleaning",
    "Department of Education vendor",
    "NYC school janitorial vendor",
    "DOE vendor cleaning services",
    "New York City public school janitorial",
  ],
  openGraph: {
    title: "NYC DOE Approved Vendor | School Cleaning | GreenPoint Maintenance",
    description:
      "NYC DOE Approved Vendor providing MBE-certified school cleaning with CDC-compliant protocols, Green Seal products, and real-time JaniTrack verification.",
    url: "https://greenpointms.com/nyc-doe-school-cleaning",
  },
  alternates: { canonical: "https://greenpointms.com/nyc-doe-school-cleaning" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GreenPoint an NYC DOE Approved Vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GreenPoint Maintenance Services Corp is an approved vendor with the New York City Department of Education, authorized to provide cleaning products and services to NYC public schools. We are also MBE/MWBE certified and SAM.gov registered.",
      },
    },
    {
      "@type": "Question",
      name: "What services can GreenPoint provide to NYC public schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide daily janitorial service, restroom sanitization, cafeteria and kitchen cleaning, floor care (stripping, sealing, carpet extraction), gymnasium and auditorium maintenance, nurse's office OSHA-compliant cleaning, disinfection and sanitization services, summer deep cleaning programs, and day porter services during school hours.",
      },
    },
    {
      "@type": "Question",
      name: "Does GreenPoint meet NYC DOE cleaning product requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We exclusively use Green Seal certified, EPA Safer Choice, and EPA-registered products that meet NYC DOE and NYC Department of Health standards. All products are non-toxic, fragrance-free, and allergy-safe — specifically chosen for environments where children are present.",
      },
    },
    {
      "@type": "Question",
      name: "How does GreenPoint verify cleaning quality for NYC schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our proprietary JaniTrack system provides timestamped, GPS-tagged photo documentation of every cleaning session, digital task completion checklists, and ATP bioluminescence surface testing. School administrators access results through a live dashboard, providing the documentation trail that DOE oversight requires.",
      },
    },
    {
      "@type": "Question",
      name: "Does GreenPoint qualify for NYC diversity procurement programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GreenPoint is a Certified Minority Business Enterprise (MBE) registered with both NYC SBS and New York State. We are also MWBE certified and SAM.gov registered. Contracts with GreenPoint count toward your school's or district's diversity procurement targets.",
      },
    },
  ],
};

export default function NYCDOESchoolCleaning() {
  return (
    <SeoLandingPage
      headline="NYC DOE Approved Vendor for"
      highlightWord="Public School Cleaning"
      subheadline="GreenPoint Maintenance is an approved New York City Department of Education vendor providing MBE-certified janitorial and facility maintenance to NYC public schools. CDC-compliant protocols, Green Seal products, and every cleaning session verified through JaniTrack."
      trustBadges={[
        "NYC DOE Approved Vendor",
        "MBE / MWBE Certified",
        "CDC-Compliant Protocols",
        "Green Seal Products",
      ]}
      introParagraphs={[
        "GreenPoint Maintenance Services Corp is an approved vendor with the New York City Department of Education, authorized to provide professional cleaning products and services to NYC public schools. Our DOE vendor status, combined with MBE/MWBE certification and SAM.gov registration, makes us a fully qualified partner for schools seeking compliant, high-quality janitorial services that satisfy procurement requirements.",
        "NYC public schools serve over one million students daily across more than 1,800 buildings — making school cleaning a matter of public health, not just appearance. Our protocols follow CDC guidelines for K-12 environments, use exclusively non-toxic Green Seal certified products safe for children, and provide verifiable proof of cleaning quality through our JaniTrack documentation system. Principals and custodial supervisors access real-time reports that demonstrate compliance to DOE oversight.",
        "As an MBE-certified enterprise, every dollar spent with GreenPoint counts toward your school's or district's diversity procurement targets. We combine the procurement compliance that DOE contracts require with the operational excellence that school administrators demand — background-checked crews, dedicated facility teams, flexible scheduling around the academic calendar, and the accountability of digital verification.",
      ]}
      services={[
        { iconKey: "school", title: "Daily Classroom Janitorial", desc: "Desk, chair, and surface sanitization. Floor care, trash removal, whiteboard cleaning, and high-touch disinfection using non-toxic, child-safe products meeting DOE standards." },
        { iconKey: "building", title: "Cafeteria & Kitchen Deep Cleaning", desc: "After-meal sanitization of tables, food prep areas, serving lines, and floors. Health department compliance documentation included with every service visit." },
        { iconKey: "shield", title: "Restroom Monitoring & Disinfection", desc: "Multi-daily restroom service with ATP verification, supply replenishment, fixture sanitization, and odor control. Day porter options for continuous monitoring during school hours." },
        { iconKey: "sparkles", title: "Disinfection & Sanitization", desc: "CDC-compliant electrostatic disinfection, EPA N-List products, and targeted high-touch treatment. Outbreak response protocols for flu season and infectious disease events." },
        { iconKey: "building", title: "Floor Care & Restoration", desc: "VCT strip and refinish, carpet extraction, gymnasium floor maintenance, and concrete sealing. Summer deep clean programs designed for the academic calendar." },
        { iconKey: "wrench", title: "Facility Maintenance", desc: "Light plumbing, electrical, HVAC filter replacement, painting touch-ups, and general handyman services — one vendor for both cleaning and maintenance needs." },
      ]}
      whyChooseUs={[
        { iconKey: "school", title: "NYC DOE Approved Vendor", desc: "Authorized to provide cleaning services to New York City public schools. Full procurement compliance with DOE vendor requirements and documentation standards." },
        { iconKey: "award", title: "MBE / MWBE Certified", desc: "Certified Minority Business Enterprise with NYC SBS and NYS. Every contract dollar counts toward your diversity procurement goals." },
        { iconKey: "shield", title: "JaniTrack Verification", desc: "Real-time photo documentation, GPS-tagged task completion, and ATP bioluminescence testing. Administrators access everything through a live dashboard." },
        { iconKey: "medical", title: "Child-Safe Products Only", desc: "Exclusively Green Seal certified, EPA Safer Choice products. Non-toxic, fragrance-free, and allergy-safe — meeting the strictest standards for environments with children." },
      ]}
      faqItems={[
        { q: "Is GreenPoint an NYC DOE Approved Vendor?", a: "Yes. GreenPoint Maintenance Services Corp is an approved vendor with the NYC Department of Education, authorized to provide cleaning products and services to NYC public schools. We are also MBE/MWBE certified and SAM.gov registered." },
        { q: "What services can you provide to NYC public schools?", a: "We provide daily janitorial service, restroom sanitization, cafeteria cleaning, floor care (stripping, sealing, carpet extraction), gymnasium maintenance, nurse's office cleaning, disinfection services, summer deep cleaning, and day porter services." },
        { q: "Do your products meet NYC DOE requirements?", a: "Yes. We exclusively use Green Seal certified, EPA Safer Choice, and EPA-registered products that meet NYC DOE and NYC Department of Health standards. All products are non-toxic, fragrance-free, and allergy-safe for children." },
        { q: "How do you verify cleaning quality?", a: "Our JaniTrack system provides timestamped, GPS-tagged photo documentation, digital task checklists, and ATP bioluminescence surface testing. Administrators access results through a live dashboard." },
        { q: "Does hiring GreenPoint count toward diversity procurement goals?", a: "Yes. GreenPoint is MBE/MWBE certified with NYC and NYS. Every contract dollar counts toward your school's or district's diversity procurement targets." },
        { q: "Can you work around the school schedule?", a: "Absolutely. We offer after-hours, evening, weekend, and holiday scheduling. Our teams work around the academic calendar including early-morning cleaning, event turnaround, and comprehensive summer deep cleaning programs." },
      ]}
      ctaHeadline="Get a Free School Cleaning Assessment"
      ctaSubheadline="NYC DOE Approved Vendor. We'll walk your facility, assess your needs, and deliver a fixed-price proposal within 48 hours. MBE-certified. No obligation."
      schemaMarkup={faqSchema}
    />
  );
}
