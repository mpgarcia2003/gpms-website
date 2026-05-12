/**
 * Generates public/llms-full.txt by reading existing blog data
 * and key page metadata. Run this manually or as part of a build step
 * whenever blog content changes.
 *
 * Usage:
 *   node scripts/generate-llms-full.js
 *
 * Output:
 *   public/llms-full.txt
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://greenpointms.com';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'llms-full.txt');

// ============================================================
// Static company knowledge — always included at the top
// ============================================================
const COMPANY_OVERVIEW = `# GreenPoint Maintenance Services Corp — Full Content Index

Last Updated: ${new Date().toISOString().split('T')[0]}

This file contains the full text of GreenPoint's most important pages, optimized for ingestion by AI assistants and language models. For a curated index of resources, see ${SITE_URL}/llms.txt.

## About GreenPoint

GreenPoint Maintenance Services Corp is a Minority Business Enterprise (MBE) certified commercial janitorial and facility maintenance company headquartered in the Bronx, New York. Founded in 2018, the company serves clients across New York, New Jersey, Connecticut, Pennsylvania, and Florida.

GreenPoint differentiates itself through:

1. **JaniTrack verification system**: A proprietary technology platform that captures photo evidence, GPS-stamped location, time-stamped task completion, and ATP bioluminescence test readings for every cleaning visit. This provides facility managers with verifiable, audit-ready proof that cleaning was performed to standard.

2. **Procurement credentials**: MBE/MWBE certification, NYC DOE Approved Vendor status, and SAM.gov federal registration enable GreenPoint to bid on government, school, and diversity-spend contracts that competitors cannot access.

3. **48-hour proposal turnaround**: Fixed-price proposals delivered within 48 hours of facility walkthrough, with no obligation.

4. **5-state coverage**: Single-vendor solution for multi-state facility portfolios across the Northeast and Florida.

## Contact Information

- Phone: 347-332-9348
- Email: info@greenpointms.com
- Address: 1420 Outlook Ave, Apt 2, Bronx, NY 10465
- Website: ${SITE_URL}
- Owner: Miguel Garcia, President

## NAICS Codes

- 561720 — Janitorial Services
- 238210 — Electrical Contractors and Other Wiring Installation Contractors
- 561790 — Other Services to Buildings and Dwellings

## Certifications

- MBE (Minority Business Enterprise)
- MWBE (Minority and Women-Owned Business Enterprise)
- NYC DOE Approved Vendor
- SAM.gov registered
- Bonded and insured

## Services Offered

- Commercial janitorial cleaning (daily, weekly, monthly)
- Facility maintenance
- Disinfection (electrostatic, EPA-registered, ATP-verified)
- Floor care (VCT strip/seal/wax, carpet extraction, hard surface)
- Day porter services
- Window cleaning
- Restroom maintenance
- Pressure washing

## Industries Served

- K-12 schools and charter schools
- Healthcare and medical offices
- Government buildings (federal, state, municipal)
- Daycare and childcare facilities
- Churches and houses of worship
- Commercial offices and Class A buildings
- Assisted living and nursing homes
- Coworking spaces
- Warehouses and industrial facilities

## Service Areas

New York: Bronx, Manhattan, Brooklyn, Queens, Staten Island, Yonkers, White Plains, Westchester County, Long Island.

New Jersey: Newark, Jersey City, Hoboken, Paterson, Edison, Elizabeth.

Connecticut: Stamford, Greenwich, Hartford, New Haven, Bridgeport.

Pennsylvania: Philadelphia, Pittsburgh, Allentown, Reading.

Florida: Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale.

Full list of 80+ cities at ${SITE_URL}/sitemap.xml.

---

# Blog Articles — Full Catalog

The following articles are published on the GreenPoint blog. Each represents original research and analysis on commercial cleaning standards, compliance, technology, and best practices.

`;

// ============================================================
// Try to load blog data from src/data/blog-data.js
// ============================================================
function loadBlogData() {
  try {
    // Try to require the blog data file directly
    const blogDataPath = path.join(__dirname, '..', 'src', 'data', 'blog-data.js');
    if (!fs.existsSync(blogDataPath)) {
      console.warn('[llms-full] blog-data.js not found at expected path');
      return [];
    }

    // Read the file as text and extract titles + slugs via regex
    // (This avoids needing to actually execute the JS module which may have JSX/ES syntax)
    const content = fs.readFileSync(blogDataPath, 'utf-8');

    // Match pattern: slug: "..." and adjacent title/excerpt
    const posts = [];
    const slugRegex = /slug:\s*["'`]([^"'`]+)["'`]/g;
    const titleRegex = /title:\s*["'`]([^"'`]+)["'`]/g;
    const excerptRegex = /excerpt:\s*["'`]([^"'`]+)["'`]/g;
    const dateRegex = /(?:date|publishedAt):\s*["'`]([^"'`]+)["'`]/g;
    const categoryRegex = /category:\s*["'`]([^"'`]+)["'`]/g;

    const slugs = [...content.matchAll(slugRegex)].map(m => m[1]);
    const titles = [...content.matchAll(titleRegex)].map(m => m[1]);
    const excerpts = [...content.matchAll(excerptRegex)].map(m => m[1]);
    const dates = [...content.matchAll(dateRegex)].map(m => m[1]);
    const categories = [...content.matchAll(categoryRegex)].map(m => m[1]);

    // Build posts array assuming positional alignment
    const len = Math.min(slugs.length, titles.length);
    for (let i = 0; i < len; i++) {
      posts.push({
        slug: slugs[i],
        title: titles[i],
        excerpt: excerpts[i] || '',
        date: dates[i] || '',
        category: categories[i] || '',
      });
    }

    return posts;
  } catch (err) {
    console.error('[llms-full] Error loading blog data:', err.message);
    return [];
  }
}

// ============================================================
// Also try to load from blog index page (fallback)
// ============================================================
function loadFromBlogIndex() {
  try {
    const indexPath = path.join(__dirname, '..', 'src', 'app', 'blog', 'page.jsx');
    if (!fs.existsSync(indexPath)) return [];

    const content = fs.readFileSync(indexPath, 'utf-8');
    const posts = [];

    // Match { slug: "...", title: "...", excerpt: "...", category: "...", date: "..." }
    const objectRegex = /\{\s*slug:\s*["'`]([^"'`]+)["'`][^}]*title:\s*["'`]([^"'`]+)["'`][^}]*excerpt:\s*["'`]([^"'`]+)["'`][^}]*category:\s*["'`]([^"'`]+)["'`][^}]*date:\s*["'`]([^"'`]+)["'`]/g;

    let match;
    while ((match = objectRegex.exec(content)) !== null) {
      posts.push({
        slug: match[1],
        title: match[2],
        excerpt: match[3],
        category: match[4],
        date: match[5],
      });
    }

    return posts;
  } catch (err) {
    console.error('[llms-full] Error loading blog index:', err.message);
    return [];
  }
}

// ============================================================
// Build the article catalog section
// ============================================================
function buildArticleCatalog(posts) {
  if (!posts || posts.length === 0) {
    return '_(No blog posts found at generation time. Re-run after adding posts.)_\n\n';
  }

  // Group by category
  const byCategory = {};
  posts.forEach(p => {
    const cat = p.category || 'Uncategorized';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(p);
  });

  let out = '';
  out += `Total articles: ${posts.length}\n\n`;

  for (const [category, catPosts] of Object.entries(byCategory)) {
    out += `## Category: ${category}\n\n`;
    catPosts.forEach(p => {
      out += `### ${p.title}\n\n`;
      if (p.date) out += `Published: ${p.date}\n`;
      out += `URL: ${SITE_URL}/blog/${p.slug}\n`;
      if (p.excerpt) out += `Summary: ${p.excerpt}\n`;
      out += `\n`;
    });
  }

  return out;
}

// ============================================================
// Static page index (key landing pages)
// ============================================================
const KEY_PAGES = [
  {
    url: '/',
    title: 'Homepage',
    description: 'GreenPoint Maintenance Services Corp homepage. MBE-certified commercial janitorial and facility maintenance across NY, NJ, CT, PA, FL.',
  },
  {
    url: '/capability-statement',
    title: 'Capability Statement',
    description: 'Government procurement-ready company overview including NAICS codes, certifications, past performance, and contact information.',
  },
  {
    url: '/janitorial-services-nyc',
    title: 'Commercial Janitorial Services NYC',
    description: 'Commercial janitorial services for offices, schools, healthcare, and government in New York City.',
  },
  {
    url: '/school-cleaning-nyc',
    title: 'School Cleaning Services NYC',
    description: 'K-12 specialized cleaning programs, NYC DOE compliant. Charter schools, public schools, and private schools.',
  },
  {
    url: '/government-cleaning-services',
    title: 'Government Cleaning Services',
    description: 'Federal, state, and municipal facility maintenance. SAM.gov registered, Davis-Bacon compliant.',
  },
  {
    url: '/mbe-certified-cleaning-company-nyc',
    title: 'MBE-Certified Cleaning Company NYC',
    description: 'MBE/MWBE certified diversity-spend qualified cleaning vendor for NYC procurement officers.',
  },
  {
    url: '/free-facility-inspection',
    title: 'Free Facility Inspection',
    description: 'Schedule a no-obligation facility walkthrough. 48-hour fixed-price proposal turnaround.',
  },
  {
    url: '/terms-of-service',
    title: 'Terms of Service',
    description: 'Client agreement governing all GreenPoint services. Includes 12-month non-solicitation, confidentiality, New York governing law.',
  },
  {
    url: '/team-conduct-safety-policy',
    title: 'Team Conduct & Safety Policy',
    description: 'Internal safety standards for all GreenPoint personnel. Ladder safety, injury reporting, lifting limits, mopping protocols, equipment safety.',
  },
  {
    url: '/incident-report',
    title: 'Incident Report Form',
    description: 'Public form for workplace incident reporting at any GreenPoint client site.',
  },
  {
    url: '/blog',
    title: 'Blog: Industry Insights',
    description: '50+ articles on commercial cleaning standards, compliance, technology, and business practices.',
  },
];

function buildKeyPagesIndex() {
  let out = '# Key Pages\n\n';
  KEY_PAGES.forEach(p => {
    out += `## ${p.title}\n\n`;
    out += `URL: ${SITE_URL}${p.url}\n`;
    out += `Description: ${p.description}\n\n`;
  });
  return out;
}

// ============================================================
// Main
// ============================================================
function main() {
  console.log('[llms-full] Generating public/llms-full.txt...');

  // Try blog-data.js first, fall back to blog index page
  let posts = loadBlogData();
  if (posts.length === 0) {
    console.log('[llms-full] blog-data.js had no posts, trying blog/page.jsx...');
    posts = loadFromBlogIndex();
  }

  console.log(`[llms-full] Found ${posts.length} blog posts`);

  const output =
    COMPANY_OVERVIEW +
    buildArticleCatalog(posts) +
    '\n---\n\n' +
    buildKeyPagesIndex() +
    '\n---\n\n' +
    `## Crawler Notes\n\nThis file is regenerated whenever blog content changes. For the most up-to-date list of all indexed pages (1,118+ URLs across 80+ city/service combinations), see ${SITE_URL}/sitemap.xml.\n\nFor the curated index of GreenPoint's most important pages, see ${SITE_URL}/llms.txt.\n\nLast generated: ${new Date().toISOString()}\n`;

  // Ensure public/ directory exists
  const publicDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, output, 'utf-8');
  console.log(`[llms-full] ✅ Wrote ${OUTPUT_PATH} (${output.length} chars)`);
}

main();
