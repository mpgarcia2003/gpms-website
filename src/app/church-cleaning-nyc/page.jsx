import SeoLandingPage from "../../components/SeoLandingPage";

export const metadata = {
  title: "Church Cleaning Services NYC | Houses of Worship | GreenPoint Maintenance",
  description:
    "Professional cleaning for churches, temples, mosques, and synagogues across NYC. Sanctuary care, fellowship hall turnaround, nursery sanitization. MBE certified. Free walkthrough.",
  keywords: [
    "church cleaning services NYC",
    "house of worship cleaning",
    "church janitorial NYC",
    "temple cleaning services New York",
    "mosque cleaning NYC",
    "synagogue cleaning services",
    "fellowship hall cleaning",
    "sanctuary cleaning NYC",
  ],
  openGraph: {
    title: "Church Cleaning Services NYC | GreenPoint Maintenance",
    description:
      "Respectful, professional cleaning for houses of worship in NYC. Sanctuary care, event turnaround, nursery sanitization. MBE certified with JaniTrack verification.",
    url: "https://greenpointms.com/church-cleaning-nyc",
  },
  alternates: { canonical: "https://greenpointms.com/church-cleaning-nyc" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you clean around worship service schedules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. GreenPoint builds cleaning schedules around your worship calendar — services, Bible studies, choir rehearsals, youth programs, and special events. We offer early morning, evening, weekend, and holiday scheduling so your space is always ready when your congregation arrives.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you clean in a house of worship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide comprehensive cleaning for sanctuaries and worship halls, fellowship and banquet halls, nurseries and children's classrooms, administrative offices, restrooms, kitchens, lobbies, foyers, and outdoor entryways. Each area receives a customized cleaning protocol based on its use and traffic patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle event turnaround cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide same-day event turnaround for weddings, funerals, holiday services, fundraisers, and community events. Our team can reset fellowship halls, banquet spaces, and sanctuaries between events so your facility is ready for the next gathering.",
      },
    },
    {
      "@type": "Question",
      name: "Are your cleaning products safe for sanctuary furnishings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use only non-toxic, pH-neutral products that are safe for wood pews, fabric upholstery, stained glass surroundings, marble, and delicate fixtures. Our team is trained in the care of religious furnishings and sacred items.",
      },
    },
    {
      "@type": "Question",
      name: "Is GreenPoint qualified for church board procurement requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GreenPoint carries $2M+ commercial general liability insurance, full workers' compensation, and is bonded. We are MBE/MWBE certified and can provide W-9, Certificates of Insurance, references, and fixed-price proposals for board review. Our JaniTrack reports give boards ongoing accountability documentation.",
      },
    },
  ],
};

export default function ChurchCleaningNYC() {
  return (
    <SeoLandingPage
      headline="Church & House of Worship Cleaning in"
      highlightWord="New York City"
      subheadline="Respectful, professional janitorial for churches, temples, mosques, and synagogues. Flexible scheduling around services and events. MBE-certified with JaniTrack-verified quality."
      trustBadges={[
        "MBE / MWBE Certified",
        "Flexible Scheduling",
        "Non-Toxic Products",
        "Background-Checked Teams",
      ]}
      introParagraphs={[
        "Houses of worship are more than buildings — they are sacred spaces where communities gather for prayer, celebration, and support. GreenPoint Maintenance Services provides professional janitorial programs designed around the unique rhythms of religious life: worship services, fellowship events, youth programs, weddings, funerals, and holiday celebrations that can shift weekly.",
        "Our teams understand the care required for sanctuaries, pews, altars, fellowship halls, nurseries, and multipurpose spaces that serve different functions throughout the week. We use non-toxic, pH-neutral products safe for wood, fabric, stained glass surroundings, and delicate fixtures. Every visit is documented through JaniTrack with timestamped photos and ATP bioluminescence testing — giving your board and congregation measurable proof of cleanliness.",
        "As a certified Minority Business Enterprise, GreenPoint provides the insurance documentation, fixed pricing, and accountability that church boards and religious institution finance committees require. We serve over 80 facilities across five states with dedicated teams assigned to your facility — the same crew every visit, building familiarity and trust with your staff and congregation.",
      ]}
      services={[
        { iconKey: "church", title: "Sanctuary & Worship Hall Care", desc: "Pew dusting and sanitization, altar area care, aisle vacuuming, foyer maintenance, and careful treatment of religious furnishings and sacred items." },
        { iconKey: "building", title: "Fellowship Hall Turnaround", desc: "Same-day event setup and teardown cleaning for weddings, funerals, potlucks, fundraisers, and community gatherings. Reset between back-to-back events." },
        { iconKey: "baby", title: "Nursery & Classroom Sanitization", desc: "Non-toxic, child-safe sanitization for nurseries, Sunday school rooms, and youth activity areas. Surface disinfection and toy sanitization included." },
        { iconKey: "shield", title: "Restroom & Kitchen Disinfection", desc: "High-traffic restroom service with ATP verification. Kitchen and food prep area cleaning for fellowship meals and community programs." },
        { iconKey: "floor", title: "Floor Care & Restoration", desc: "Carpet extraction for high-traffic aisles, VCT and tile maintenance for fellowship halls, marble and stone care for lobbies and sanctuaries." },
        { iconKey: "wrench", title: "Facility Maintenance", desc: "Light plumbing, electrical, painting, and general repairs. One provider for both cleaning and building upkeep — simplified budgeting for church finance teams." },
      ]}
      whyChooseUs={[
        { iconKey: "church", title: "Sacred Space Expertise", desc: "Trained in the care of religious furnishings, altar areas, and sacred items. Non-toxic products safe for wood pews, fabric, and delicate fixtures." },
        { iconKey: "shield", title: "JaniTrack Verification", desc: "Real-time photo documentation and ATP bioluminescence testing after every service. Board-ready reports accessible through a live dashboard." },
        { iconKey: "award", title: "MBE Certified & Insured", desc: "$2M+ commercial general liability, workers' comp, bonded. W-9, COI, and references available for board approval within one business day." },
        { iconKey: "building", title: "Dedicated Teams", desc: "Same background-checked personnel every visit. Your team learns your facility, your schedule, and your congregation's expectations." },
      ]}
      faqItems={[
        { q: "Do you clean around worship service schedules?", a: "Absolutely. We build schedules around your worship calendar — services, studies, rehearsals, youth programs, and events. Early morning, evening, weekend, and holiday options available." },
        { q: "What areas do you clean in a house of worship?", a: "Sanctuaries, fellowship halls, nurseries, classrooms, offices, restrooms, kitchens, lobbies, and outdoor entryways. Each area gets a customized protocol based on use and traffic." },
        { q: "Can you handle event turnaround cleaning?", a: "Yes — same-day turnaround for weddings, funerals, holiday services, and community events. We reset fellowship halls and sanctuaries between back-to-back gatherings." },
        { q: "Are your products safe for sanctuary furnishings?", a: "We use non-toxic, pH-neutral products safe for wood pews, fabric, stained glass surroundings, marble, and delicate fixtures. Our team is trained in religious furnishing care." },
        { q: "What documentation do you provide for church boards?", a: "Fixed-price proposals, W-9, Certificate of Insurance, references, and ongoing JaniTrack verification reports. Everything a finance committee needs for vendor approval." },
      ]}
      ctaHeadline="Schedule a Free Walkthrough for Your House of Worship"
      ctaSubheadline="We'll assess your facility, build a cleaning program around your worship calendar, and deliver a fixed-price proposal within 48 hours. No obligation."
      schemaMarkup={faqSchema}
    />
  );
}
