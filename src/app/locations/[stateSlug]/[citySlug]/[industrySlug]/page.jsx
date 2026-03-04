import { STATES, INDUSTRIES, SERVICES_LIST, getState, getCity, getIndustry, getAllLocationIndustryParams } from '../../../../../data/seo-data';
import ProgrammaticPage from '../../../../../components/ProgrammaticPage';

export function generateStaticParams() {
  return getAllLocationIndustryParams();
}

export function generateMetadata({ params }) {
  const state = getState(params.stateSlug);
  const city = getCity(params.stateSlug, params.citySlug);
  const industry = getIndustry(params.industrySlug);
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
  const industry = getIndustry(params.industrySlug);

  if (!state || !city || !industry) return <div>Page not found</div>;

  const title = (<>{industry.shortName} Services in {city.name}, <span style={{ color: "#2ecc71" }}>{state.abbr}</span></>);
  const subtitle = `${industry.description} GreenPoint Maintenance Services provides MBE-certified ${industry.shortName.toLowerCase()} in ${city.name} and throughout ${state.name} with real-time cleaning verification through JaniTrack.`;

  const breadcrumbs = [
    { label: state.name, href: `/locations/${state.slug}/` },
    { label: city.name, href: `/locations/${state.slug}/${city.slug}/` },
    { label: industry.shortName },
  ];

  const sections = [
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
  ];

  // Related links: other industries in this city + this industry in nearby cities
  const otherIndustries = INDUSTRIES.filter(i => i.slug !== industry.slug).slice(0, 3).map(i => ({
    href: `/locations/${state.slug}/${city.slug}/${i.slug}/`,
    label: `${i.shortName} in ${city.name}`,
    icon: i.icon,
  }));

  const nearbyCities = state.cities.filter(c => c.slug !== city.slug).slice(0, 3).map(c => ({
    href: `/locations/${state.slug}/${c.slug}/${industry.slug}/`,
    label: `${industry.shortName} in ${c.name}`,
    icon: industry.icon,
  }));

  const relatedLinks = [...otherIndustries, ...nearbyCities];

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
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${industry.shortName} Services`,
      itemListElement: industry.features.map((f, i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: f } })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
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
