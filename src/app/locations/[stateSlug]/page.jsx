import { STATES, INDUSTRIES, getState, getAllStateParams } from '../../../data/seo-data';
import ProgrammaticPage from '../../../components/ProgrammaticPage';

export function generateStaticParams() {
  return getAllStateParams();
}

export function generateMetadata({ params }) {
  const state = getState(params.stateSlug);
  if (!state) return {};
  const title = `Commercial Cleaning Services in ${state.name} (${state.abbr})`;
  const description = `MBE-certified commercial janitorial and facility maintenance across ${state.name}. Serving ${state.cities.map(c => c.name).join(', ')} and surrounding areas.`;
  return { title, description, alternates: { canonical: `https://greenpointms.com/locations/${params.stateSlug}/` } };
}

export default function StatePage({ params }) {
  const state = getState(params.stateSlug);
  if (!state) return <div>Page not found</div>;

  const title = (<>Commercial Cleaning in <span style={{ color: "#2ecc71" }}>{state.name}</span></>);
  const subtitle = `GreenPoint Maintenance Services provides MBE-certified commercial janitorial and facility maintenance across ${state.name}. We serve ${state.cities.length} cities and surrounding areas with real-time JaniTrack cleaning verification.`;
  const breadcrumbs = [{ label: state.name }];

  const sections = [
    {
      label: `${state.abbr} Service Areas`,
      heading: `Cities We Serve in ${state.name}`,
      body: `Our dedicated teams provide consistent, verifiable cleaning services throughout ${state.name}. Select a city below to learn about our services in your area.`,
      features: state.cities.map(c => `${c.name} — ${c.county}: Full commercial janitorial, disinfection, floor care, and facility maintenance services.`),
    },
    {
      heading: `Industries We Serve in ${state.name}`,
      body: `We specialize in six core verticals across ${state.name}, each with dedicated cleaning protocols designed for its specific compliance and safety requirements.`,
      features: INDUSTRIES.map(i => `${i.name}: ${i.description.split('.')[0]}.`),
    },
  ];

  const relatedLinks = state.cities.map(c => ({
    href: `/locations/${state.slug}/${c.slug}/`,
    label: `Cleaning Services in ${c.name}`,
    icon: "map-pin",
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://greenpointms.com" },
      { "@type": "ListItem", position: 2, name: state.name },
    ],
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Commercial Cleaning Services in ${state.name}`,
    provider: { "@type": "LocalBusiness", name: "GreenPoint Maintenance Services Corp", url: "https://greenpointms.com" },
    areaServed: state.cities.map(c => ({ "@type": "City", name: c.name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      <ProgrammaticPage title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} sections={sections} relatedLinks={relatedLinks} />
    </>
  );
}
