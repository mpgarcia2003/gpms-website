import { STATES, INDUSTRIES, SERVICES_LIST } from '../data/seo-data';

const BASE_URL = 'https://greenpointms.com';

export default function sitemap() {
  const pages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    // Static SEO pages
    { url: `${BASE_URL}/school-cleaning-nyc/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/church-cleaning-nyc/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/janitorial-services-nyc/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/commercial-cleaning-bronx/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/mbe-certified-cleaning-company-nyc/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/government-cleaning-services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/capability-statement/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/free-facility-inspection/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  // State pages
  for (const state of STATES) {
    pages.push({ url: `${BASE_URL}/locations/${state.slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });

    // City pages
    for (const city of state.cities) {
      pages.push({ url: `${BASE_URL}/locations/${state.slug}/${city.slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });

      // City + Industry pages (the money pages)
      for (const industry of INDUSTRIES) {
        pages.push({ url: `${BASE_URL}/locations/${state.slug}/${city.slug}/${industry.slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 });
      }

      // City + Service pages
      for (const service of SERVICES_LIST) {
        pages.push({ url: `${BASE_URL}/locations/${state.slug}/${city.slug}/${service.slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 });
      }
    }
  }

  // Industry pages
  for (const industry of INDUSTRIES) {
    pages.push({ url: `${BASE_URL}/industries/${industry.slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });
  }

  // Service pages
  for (const service of SERVICES_LIST) {
    pages.push({ url: `${BASE_URL}/services/${service.slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 });
  }

  return pages;
}
