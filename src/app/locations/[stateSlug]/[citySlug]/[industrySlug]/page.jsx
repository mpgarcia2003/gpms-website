import { STATES, INDUSTRIES, SERVICES_LIST, getState, getCity, getIndustry, getService, getAllLocationIndustryParams, getAllLocationServiceParams } from '../../../../../data/seo-data';
import ProgrammaticPage from '../../../../../components/ProgrammaticPage';

export function generateStaticParams() {
  return [...getAllLocationIndustryParams(), ...getAllLocationServiceParams()];
}

export function generateMetadata({ params }) {
  const state = getState(params.stateSlug);
  const city = getCity(params.stateSlug, params.citySlug);
  const industry = getIndustry(params.industrySlug) || getService(params.industrySlug);
  if (!state || !city || !industry) return {};

  const title = `${industry.shortName} Services in ${city.name}, ${state.abbr}`;
  const description = `Professional ${industry.shortName.toLowerCase()} services in ${city.name}, ${state.name}. MBE-certified commercial cleaning with real-time JaniTrack verification. Free facility walkthrough.`;

  return {
    title,
    description,
    openGraph: { title, description, url: `https://greenpointms.com/locations/${params.stateSlug}/${params.citySlug}/${params.industrySlug}/` },
    alternates: { canonical: `https://greenpointms.com/locations/${params.stateSlug}/${params.citySlug}/${params.industrySlug}/` },
  };
}

export default function CityIndustryPage({ params }) {
  const state = getState(params.stateSlug);
  const city = getCity(params.stateSlug, params.citySlug);
  const industry = getIndustry(params.industrySlug) || getService(params.industrySlug);
  const isService = !getIndustry(params.industrySlug) && !!getService(params.industrySlug);

  if (!state || !city || !industry) return <div>Page not found</div>;

  const title = (<>{industry.shortName} Services in {city.name}, <span style={{ color: "#2ecc71" }}>{state.abbr}</span></>);
  const subtitle = `${industry.description} GreenPoint Maintenance Services provides MBE-certified ${industry.shortName.toLowerCase()} in ${city.name} and throughout ${state.name} with real-time cleaning verification through JaniTrack.`;

  const breadcrumbs = [
    { label: state.name, href: `/locations/${state.slug}/` },
    { label: city.name, href: `/locations/${state.slug}/${city.slug}/` },
    { label: industry.shortName },
  ];

  // Build FAQ section if available
  const faqSection = industry.faqs && industry.faqs.length > 0 ? {
    label: "FAQ",
    heading: `${industry.shortName} FAQ — ${city.name}, ${state.abbr}`,
    body: `Common questions about ${industry.shortName.toLowerCase()} services in ${city.name}.`,
    faqs: industry.faqs,
  } : null;

  const sections = isService ? [
    {
      label: `${industry.shortName} in ${city.name}`,
      heading: `Professional ${industry.shortName} Services in ${city.name}, ${state.abbr}`,
      body: `${industry.description} GreenPoint provides expert ${industry.shortName.toLowerCase()} services throughout ${city.name} and ${city.county || state.name}, backed by our proprietary JaniTrack verification system.`,
      features: industry.includes || [],
    },
    {
      label: "Why GreenPoint",
      heading: `Why ${city.name} Facilities Trust GreenPoint`,
      body: `As a Certified Minority Business Enterprise headquartered in New York, we understand the unique demands of facilities in ${city.name}, ${state.abbr}. Our JaniTrack system provides real-time photo verification and ATP bioluminescence testing.`,
      stats: [
        { number: "98%", label: "Client Retention" },
        { number: "500+", label: "Facilities Served" },
        { number: "5", label: "States Covered" },
        { number: "MBE", label: "Certified" },
      ],
    },
    {
      label: "Industries We Serve",
      heading: `${industry.shortName} for Every Facility Type in ${city.name}`,
      body: `We deliver ${industry.shortName.toLowerCase()} services across all commercial and institutional facility types in ${city.name}.`,
      features: INDUSTRIES.map(i => `${i.shortName}: ${i.description.split('.')[0]}.`),
    },
    ...(faqSection ? [faqSection] : []),
  ] : [
    {
      label: `${industry.shortName} in ${city.name}`,
      heading: `Why ${city.name} Facilities Choose GreenPoint for ${industry.shortName}`,
      body: `Facilities in ${city.name}, ${state.abbr} face unique challenges when it comes to maintaining clean, safe, and compliant environments. Whether you manage a ${industry.name.toLowerCase().split('&')[0].trim()} in ${city.county || city.name} or oversee multiple locations across ${state.name}, GreenPoint delivers consistent, verifiable cleaning backed by our proprietary JaniTrack system.`,
      features: industry.features,
    },
    {
      label: "Compliance & Standards",
      heading: `Compliance Standards for ${industry.shortName} in ${state.name}`,
      body: `Every ${industry.name.toLowerCase()} in ${state.name} must meet specific health, safety, and regulatory requirements. Our cleaning protocols are designed specifically for ${industry.shortName.toLowerCase()} environments and exceed all applicable standards.`,
      badges: industry.compliance,
      stats: [
        { number: "98%", label: "Client Retention Rate" },
        { number: "500+", label: "Facilities Maintained" },
        { number: "24/7", label: "Emergency Response" },
        { number: "MBE", label: "Certified Enterprise" },
      ],
    },
    {
      label: "Common Challenges",
      heading: `${industry.shortName} Challenges We Solve in ${city.name}`,
      body: `Facility managers in ${city.name} consistently tell us about the same pain points with their previous cleaning providers. Here's how GreenPoint addresses each one.`,
      features: industry.painPoints.map(p => `${p} — GreenPoint's JaniTrack verification system ensures accountability and transparency, eliminating this issue entirely.`),
    },
    {
      label: "Our Services",
      heading: `Complete Facility Services Available in ${city.name}, ${state.abbr}`,
      body: `In addition to ${industry.shortName.toLowerCase()}, we offer a full suite of commercial cleaning and facility maintenance services throughout ${city.name} and ${state.name}.`,
      features: SERVICES_LIST.map(s => `${s.shortName}: ${s.description.split('.')[0]}.`),
    },
    ...(faqSection ? [faqSection] : []),
  ];

  // Related links
  const otherItems = isService
    ? SERVICES_LIST.filter(s => s.slug !== industry.slug).slice(0, 3).map(s => ({
        href: `/locations/${state.slug}/${city.slug}/${s.slug}/`,
        label: `${s.shortName} in ${city.name}`,
        icon: s.icon,
      }))
    : INDUSTRIES.filter(i => i.slug !== industry.slug).slice(0, 3).map(i => ({
        href: `/locations/${state.slug}/${city.slug}/${i.slug}/`,
        label: `${i.shortName} in ${city.name}`,
        icon: i.icon,
      }));

  const nearbyCities = state.cities.filter(c => c.slug !== city.slug).slice(0, 3).map(c => ({
    href: `/locations/${state.slug}/${c.slug}/${industry.slug}/`,
    label: `${industry.shortName} in ${c.name}`,
    icon: industry.icon,
  }));

  const relatedLinks = [...otherItems, ...nearbyCities];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `GreenPoint Maintenance Services - ${city.name}`,
    description: subtitle,
    url: `https://greenpointms.com/locations/${state.slug}/${city.slug}/${industry.slug}/`,
    telephone: "+1-347-332-9348",
    email: "info@greenpointms.com",
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: state.name } },
    serviceType: industry.name,
    priceRange: "$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${industry.shortName} Services`,
      itemListElement: (industry.features || industry.includes || []).map((f, i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: f } })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://greenpointms.com" },
      { "@type": "ListItem", position: 2, name: state.name, item: `https://greenpointms.com/locations/${state.slug}/` },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://greenpointms.com/locations/${state.slug}/${city.slug}/` },
      { "@type": "ListItem", position: 4, name: `${industry.shortName}` },
    ],
  };

  const faqSchema = industry.faqs && industry.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.shortName} in ${city.name}, ${state.abbr}`,
    description: industry.description,
    provider: {
      "@type": "LocalBusiness",
      name: "GreenPoint Maintenance Services Corp",
      telephone: "+1-347-332-9348",
      url: "https://greenpointms.com",
    },
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: state.name } },
    serviceType: industry.name,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ProgrammaticPage
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        heroIcon={industry.icon}
        sections={sections}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
