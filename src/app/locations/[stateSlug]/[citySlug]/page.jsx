import { STATES, INDUSTRIES, getState, getCity, getAllLocationParams } from '../../../../data/seo-data';
import ProgrammaticPage from '../../../../components/ProgrammaticPage';

export function generateStaticParams() {
  return getAllLocationParams();
}

export function generateMetadata({ params }) {
  const state = getState(params.stateSlug);
  const city = getCity(params.stateSlug, params.citySlug);
  if (!state || !city) return {};
  const title = `Commercial Cleaning Services in ${city.name}, ${state.abbr}`;
  const description = `MBE-certified janitorial and facility maintenance in ${city.name}, ${state.name}. Schools, healthcare, churches, daycare, government, and office cleaning with JaniTrack verification.`;
  return { title, description, openGraph: { title, description }, alternates: { canonical: `https://greenpointms.com/locations/${params.stateSlug}/${params.citySlug}/` } };
}

export default function CityPage({ params }) {
  const state = getState(params.stateSlug);
  const city = getCity(params.stateSlug, params.citySlug);
  if (!state || !city) return <div>Page not found</div>;

  const title = (<>Commercial Cleaning in <span style={{ color: "#2ecc71" }}>{city.name}, {state.abbr}</span></>);
  const subtitle = `GreenPoint Maintenance Services provides MBE-certified commercial janitorial and facility maintenance across ${city.name} and ${city.county}. Real-time cleaning verification through JaniTrack for schools, medical offices, churches, daycare centers, government buildings, and commercial offices.`;
  const breadcrumbs = [
    { label: state.name, href: `/locations/${state.slug}/` },
    { label: city.name },
  ];

  const sections = [
    {
      label: `${city.name} Service Area`,
      heading: `Industries We Serve in ${city.name}`,
      body: `From K-12 schools to medical offices, our dedicated cleaning teams in ${city.name} specialize in the specific compliance and hygiene requirements of each facility type.`,
      features: INDUSTRIES.map(i => `${i.shortName}: ${i.description.split('.')[0]}.`),
    },
    {
      heading: `Why ${city.name} Facilities Trust GreenPoint`,
      body: `As a Certified Minority Business Enterprise headquartered in New York, we understand the unique demands of facilities in ${city.name}, ${state.abbr}. Our JaniTrack system provides real-time photo verification and ATP bioluminescence testing — giving you measurable proof that your facility meets clinical-grade cleanliness standards.`,
      stats: [
        { number: "98%", label: "Client Retention" },
        { number: "500+", label: "Facilities Served" },
        { number: "5", label: "States Covered" },
        { number: "MBE", label: "Certified" },
      ],
    },
  ];

  const relatedLinks = INDUSTRIES.map(i => ({
    href: `/locations/${state.slug}/${city.slug}/${i.slug}/`,
    label: `${i.shortName} in ${city.name}`,
    icon: i.icon,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `GreenPoint Maintenance Services - ${city.name}`,
    description: `Commercial cleaning services in ${city.name}, ${state.abbr}`,
    telephone: "+1-347-332-9348",
    email: "info@greenpointms.com",
    url: `https://greenpointms.com/locations/${state.slug}/${city.slug}/`,
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: state.name } },
    priceRange: "$",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://greenpointms.com" },
      { "@type": "ListItem", position: 2, name: state.name, item: `https://greenpointms.com/locations/${state.slug}/` },
      { "@type": "ListItem", position: 3, name: city.name },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProgrammaticPage title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} sections={sections} relatedLinks={relatedLinks} />
    </>
  );
}
