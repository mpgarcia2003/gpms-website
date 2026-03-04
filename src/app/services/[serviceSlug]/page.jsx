import { STATES, SERVICES_LIST, getService, getAllServiceParams } from '../../../data/seo-data';
import ProgrammaticPage from '../../../components/ProgrammaticPage';

export function generateStaticParams() {
  return getAllServiceParams();
}

export function generateMetadata({ params }) {
  const service = getService(params.serviceSlug);
  if (!service) return {};
  const title = `${service.name} — GreenPoint Maintenance Services`;
  const description = `${service.description} MBE-certified provider serving NY, NJ, CT, PA, and FL with real-time JaniTrack verification.`;
  return { title, description, alternates: { canonical: `https://greenpointms.com/services/${params.serviceSlug}/` } };
}

export default function ServicePage({ params }) {
  const service = getService(params.serviceSlug);
  if (!service) return <div>Page not found</div>;

  const title = (<>{service.name.split('—')[0].trim()} <span style={{ color: "#2ecc71" }}>Services</span></>);
  const subtitle = `${service.description} GreenPoint Maintenance Services delivers ${service.shortName.toLowerCase()} services across NY, NJ, CT, PA, and FL — backed by our proprietary JaniTrack real-time verification system.`;
  const breadcrumbs = [{ label: "Services", href: "/#services" }, { label: service.shortName }];

  const sections = [
    {
      label: service.shortName,
      heading: `What's Included in Our ${service.shortName} Services`,
      body: `Our ${service.shortName.toLowerCase()} program is built around reliability, consistency, and verifiable results. Every engagement includes a customized scope of work and JaniTrack photo verification.`,
      features: service.includes,
    },
    {
      heading: `Why Choose GreenPoint for ${service.shortName}`,
      body: `As an MBE-certified commercial cleaning provider, GreenPoint brings accountability and transparency to every engagement. Our JaniTrack system gives you real-time GPS-verified photo proof that every task is completed to standard.`,
      stats: [
        { number: "98%", label: "Client Retention Rate" },
        { number: "500+", label: "Facilities Maintained" },
        { number: "5", label: "States Served" },
        { number: "24/7", label: "Emergency Response" },
      ],
    },
    {
      heading: `${service.shortName} Service Areas`,
      body: `We provide ${service.shortName.toLowerCase()} services across five states with dedicated regional teams. Select a location to learn about availability in your area.`,
      features: STATES.map(s => `${s.name} (${s.abbr}): Serving ${s.cities.map(c => c.name).join(', ')} and surrounding areas.`),
    },
  ];

  const relatedLinks = [
    ...SERVICES_LIST.filter(s => s.slug !== service.slug).slice(0, 4).map(s => ({
      href: `/services/${s.slug}/`,
      label: s.name,
      icon: s.icon, // string key — rendered via getPageIcon() in ProgrammaticPage
    })),
    ...STATES.slice(0, 3).map(s => ({
      href: `/locations/${s.slug}/`,
      label: `${service.shortName} in ${s.name}`,
      icon: "map-pin",
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "GreenPoint Maintenance Services Corp",
      telephone: "+1-347-332-9348",
      email: "info@greenpointms.com",
    },
    areaServed: STATES.map(s => ({ "@type": "State", name: s.name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.includes.map(item => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item } })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProgrammaticPage title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} heroIcon={service.icon} sections={sections} relatedLinks={relatedLinks} />
    </>
  );
}
