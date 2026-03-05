import './globals.css';

export const metadata = {
  title: {
    default: 'GreenPoint Maintenance Services | Commercial Cleaning NY, NJ, CT, PA, FL',
    template: '%s | GreenPoint Maintenance Services',
  },
  description: 'MBE-certified commercial janitorial and facility maintenance for schools, healthcare, churches, daycare, government buildings, and offices across NY, NJ, CT, PA, and FL. Real-time cleaning verification with JaniTrack.',
  keywords: ['commercial cleaning', 'janitorial services', 'facility maintenance', 'MBE certified', 'school cleaning', 'medical office cleaning', 'church cleaning', 'New York', 'New Jersey', 'Connecticut', 'Pennsylvania', 'Florida'],
  openGraph: {
    title: 'GreenPoint Maintenance Services | Commercial Cleaning',
    description: 'MBE-certified commercial janitorial and facility maintenance with real-time cleaning verification.',
    url: 'https://greenpointms.com',
    siteName: 'GreenPoint Maintenance Services',
    type: 'website',
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GreenPoint Maintenance Services Corp",
  "description": "MBE-certified commercial janitorial and facility maintenance for schools, healthcare, churches, daycare, government buildings, and offices across NY, NJ, CT, PA, and FL.",
  "url": "https://greenpointms.com",
  "telephone": "+1-347-332-9348",
  "email": "info@greenpointms.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bronx",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "State", "name": "New York" },
    { "@type": "State", "name": "New Jersey" },
    { "@type": "State", "name": "Connecticut" },
    { "@type": "State", "name": "Pennsylvania" },
    { "@type": "State", "name": "Florida" }
  ],
  "priceRange": "$",
  "foundingDate": "2018",
  "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 80 },
  "naics": "561720",
  "knowsAbout": ["Commercial Janitorial", "Disinfection", "Floor Care", "Day Porter", "Facility Maintenance", "Post-Construction Cleanup"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Minority Business Enterprise (MBE) — NYC & NYS" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "MWBE Certified" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "registration", "name": "SAM.gov Registered Federal Contractor" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "NYC Department of Education (DOE) Approved Vendor" }
  ],
  "sameAs": []
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GreenPoint Maintenance Services Corp",
  "legalName": "GreenPoint Maintenance Services Corp",
  "url": "https://greenpointms.com",
  "logo": "https://greenpointms.com/favicon.ico",
  "description": "MBE-certified commercial janitorial and facility maintenance serving schools, healthcare, churches, daycare, government buildings, and offices across NY, NJ, CT, PA, and FL.",
  "telephone": "+1-347-332-9348",
  "email": "info@greenpointms.com",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1420 Outlook Ave",
    "addressLocality": "Bronx",
    "addressRegion": "NY",
    "postalCode": "10465",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "State", "name": "New York" },
    { "@type": "State", "name": "New Jersey" },
    { "@type": "State", "name": "Connecticut" },
    { "@type": "State", "name": "Pennsylvania" },
    { "@type": "State", "name": "Florida" }
  ],
  "knowsAbout": ["Commercial Janitorial", "Disinfection & Sanitization", "Floor Care", "Day Porter Services", "Facility Maintenance", "Post-Construction Cleanup"],
  "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 80 },
  "naics": "561720"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6378ZM1RKQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6378ZM1RKQ');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FFFFFF', color: '#1A2B1F' }}>
        {children}
      </body>
    </html>
  );
}
