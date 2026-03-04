import { STATES, INDUSTRIES, getIndustry, getAllIndustryParams } from '../../../data/seo-data';
import ProgrammaticPage from '../../../components/ProgrammaticPage';

export function generateStaticParams() {
  return getAllIndustryParams();
}

export function generateMetadata({ params }) {
  const industry = getIndustry(params.industrySlug);
  if (!industry) return {};
  const title = `${industry.name} — Commercial Cleaning`;
  const description = `${industry.description} Serving NY, NJ, CT, PA, and FL with MBE-certified cleaning and JaniTrack verification.`;
  return { title, description, alternates: { canonical: `https://greenpointms.com/industries/${params.industrySlug}/` } };
}

export default function IndustryPage({ params }) {
  const industry = getIndustry(params.industrySlug);
  if (!industry) return <div>Page not found</div>;

  const title = (<>{industry.name.split('&')[0].trim()} <span style={{ color: "#2ecc71" }}>Cleaning Services</span></>);
  const subtitle = `${industry.description} GreenPoint Maintenance Services is an MBE-certified provider serving facilities across NY, NJ, CT, PA, and FL with real-time cleaning verification through JaniTrack.`;
  const breadcrumbs = [{ label: "Industries", href: "/#industries" }, { label: industry.shortName }];

  const sections = [
    {
      label: industry.shortName,
      heading: `What's Included in Our ${industry.shortName} Program`,
      body: `Every ${industry.shortName.toLowerCase()} engagement includes a customized cleaning plan built around your facility's specific needs, schedule, and compliance requirements.`,
      features: industry.features,
      badges: industry.compliance,
    },
    {
      heading: `Common ${industry.shortName} Challenges We Solve`,
      body: `Facility managers consistently tell us about the same frustrations with their previous cleaning providers. Here's how GreenPoint addresses each one.`,
      features: industry.painPoints,
    },
    {
      heading: `Service Areas for ${industry.shortName}`,
      body: `We provide ${industry.shortName.toLowerCase()} services across five states. Select your location to learn more.`,
      features: STATES.map(s => `${s.name} (${s.abbr}): ${s.cities.map(c => c.name).join(', ')}`),
    },
  ];

  const relatedLinks = STATES.flatMap(s => s.cities.slice(0, 2).map(c => ({
    href: `/locations/${s.slug}/${c.slug}/${industry.slug}/`,
    label: `${industry.shortName} in ${c.name}, ${s.abbr}`,
    icon: "map-pin",
  }))).slice(0, 10);

  return <ProgrammaticPage title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} heroIcon={industry.icon} sections={sections} relatedLinks={relatedLinks} />;
}
