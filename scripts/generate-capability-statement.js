/**
 * GreenPoint Maintenance Services Corp
 * Capability Statement PDF Generator
 *
 * Run: node scripts/generate-capability-statement.js
 * Output: public/greenpoint-capability-statement.pdf
 *
 * When Miguel provides CAGE code and UEI, update the values below.
 */

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// ─── UPDATE THESE when Miguel provides them ─────────────────────────────────
const CAGE_CODE = '[TBD — Contact Miguel]';   // Replace with actual CAGE code
const UEI_NUMBER = '[TBD — Contact Miguel]';  // Replace with actual UEI
// ─────────────────────────────────────────────────────────────────────────────

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'greenpoint-capability-statement.pdf');

// Brand colors (RGB)
const C = {
  darkGreen:  [13, 40, 24],      // #0d2818
  green:      [46, 204, 113],    // #2ecc71
  midGreen:   [26, 77, 46],      // #1a4d2e
  gold:       [212, 167, 69],    // #d4a745
  white:      [255, 255, 255],
  offWhite:   [248, 250, 248],
  lightGrey:  [220, 230, 222],
  bodyText:   [60, 80, 65],
  labelText:  [100, 120, 105],
};

function rgb(arr) { return { r: arr[0], g: arr[1], b: arr[2] }; }

const doc = new PDFDocument({
  size: 'LETTER',          // 612 × 792 pt
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: 'GreenPoint Maintenance Services Corp — Capability Statement',
    Author: 'GreenPoint Maintenance Services Corp',
    Subject: 'Government & Procurement Capability Statement',
    Keywords: 'MBE, MWBE, SAM.gov, NAICS 561720, janitorial services, facility maintenance',
    Creator: 'GreenPoint Maintenance Services Corp',
  },
});

// Ensure output directory exists
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
doc.pipe(fs.createWriteStream(OUTPUT_PATH));

const W = 612;  // page width
const H = 792;  // page height
const MARGIN = 48;
const CONTENT_W = W - MARGIN * 2;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function fillRect(x, y, w, h, color) {
  doc.save().rect(x, y, w, h).fill(color).restore();
}

function strokeRect(x, y, w, h, color, lineWidth = 0.5) {
  doc.save().lineWidth(lineWidth).rect(x, y, w, h).stroke(color).restore();
}

function hLine(y, x1, x2, color = C.lightGrey, lw = 0.5) {
  doc.save().lineWidth(lw).moveTo(x1, y).lineTo(x2, y).stroke(color).restore();
}

function label(text, x, y, opts = {}) {
  doc.save()
    .font(opts.font || 'Helvetica')
    .fontSize(opts.size || 9)
    .fillColor(opts.color || C.labelText)
    .text(text, x, y, opts)
    .restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 1
// ═══════════════════════════════════════════════════════════════════════════

// ── Header bar (dark green) ─────────────────────────────────────────────────
fillRect(0, 0, W, 110, C.darkGreen);

// Logo "G" circle
doc.save()
  .circle(MARGIN + 24, 55, 24)
  .fill(C.green);
doc.save()
  .font('Helvetica-Bold')
  .fontSize(22)
  .fillColor(C.white)
  .text('G', MARGIN + 15, 44)
  .restore();

// Company name
doc.save()
  .font('Helvetica-Bold')
  .fontSize(15)
  .fillColor(C.white)
  .text('GreenPoint Maintenance Services Corp', MARGIN + 58, 38)
  .restore();

doc.save()
  .font('Helvetica')
  .fontSize(9)
  .fillColor(C.green)
  .text('MBE/MWBE Certified Facility Services Provider  •  Est. 2018  •  Bronx, NY', MARGIN + 58, 57)
  .restore();

// "CAPABILITY STATEMENT" label top-right
doc.save()
  .font('Helvetica-Bold')
  .fontSize(8)
  .fillColor(C.green)
  .text('CAPABILITY STATEMENT', 0, 40, { align: 'right', width: W - MARGIN })
  .restore();

doc.save()
  .font('Helvetica')
  .fontSize(7.5)
  .fillColor('rgba(255,255,255,0.5)')
  .text('Fiscal Year 2025–2026', 0, 54, { align: 'right', width: W - MARGIN })
  .restore();

// Gold accent bar
fillRect(0, 110, W, 3, C.gold);

// ── Two-column layout ───────────────────────────────────────────────────────
const COL1_X = MARGIN;
const COL1_W = 230;
const COL2_X = MARGIN + COL1_W + 20;
const COL2_W = CONTENT_W - COL1_W - 20;

let y = 128;

// ── LEFT COLUMN ─────────────────────────────────────────────────────────────

// REGISTRATION & CERTIFICATIONS box
fillRect(COL1_X, y, COL1_W, 198, C.offWhite);
strokeRect(COL1_X, y, COL1_W, 198, C.lightGrey);

doc.save()
  .font('Helvetica-Bold')
  .fontSize(8)
  .fillColor(C.green)
  .text('REGISTRATIONS & CERTIFICATIONS', COL1_X + 12, y + 12)
  .restore();

const regItems = [
  ['MBE Certified',        'NYC & NYS'],
  ['MWBE Certified',       'NYC & NYS'],
  ['SAM.gov Status',       'Active'],
  ['CAGE Code',            CAGE_CODE],
  ['UEI Number',           UEI_NUMBER],
  ['EIN',                  '83-3561154'],
];

let ry = y + 30;
regItems.forEach(([lbl, val], i) => {
  if (i > 0) hLine(ry - 5, COL1_X + 10, COL1_X + COL1_W - 10, C.lightGrey, 0.4);
  doc.save().font('Helvetica').fontSize(8).fillColor(C.bodyText).text(lbl, COL1_X + 12, ry).restore();
  doc.save().font('Helvetica-Bold').fontSize(8).fillColor(C.darkGreen).text(val, COL1_X + 12, ry, { width: COL1_W - 24, align: 'right' }).restore();
  ry += 26;
});

y += 210;

// NAICS CODES box
fillRect(COL1_X, y, COL1_W, 108, C.offWhite);
strokeRect(COL1_X, y, COL1_W, 108, C.lightGrey);

doc.save().font('Helvetica-Bold').fontSize(8).fillColor(C.green).text('NAICS CODES', COL1_X + 12, y + 12).restore();

const naics = [
  ['561720', 'Janitorial Services'],
  ['238210', 'Electrical / Wiring'],
  ['561790', 'Other Building Services'],
];

let ny = y + 30;
naics.forEach(([code, desc], i) => {
  if (i > 0) hLine(ny - 5, COL1_X + 10, COL1_X + COL1_W - 10, C.lightGrey, 0.4);
  // Green badge
  fillRect(COL1_X + 12, ny - 1, 42, 14, [232, 250, 240]);
  doc.save().font('Helvetica-Bold').fontSize(7.5).fillColor(C.midGreen).text(code, COL1_X + 14, ny + 1).restore();
  doc.save().font('Helvetica').fontSize(7.5).fillColor(C.bodyText).text(desc, COL1_X + 60, ny + 1).restore();
  ny += 28;
});

y += 120;

// INSURANCE & BONDING box
fillRect(COL1_X, y, COL1_W, 130, C.offWhite);
strokeRect(COL1_X, y, COL1_W, 130, C.lightGrey);

doc.save().font('Helvetica-Bold').fontSize(8).fillColor(C.green).text('INSURANCE & BONDING', COL1_X + 12, y + 12).restore();

const insurance = [
  '$2M+ Commercial General Liability',
  'Workers\' Compensation — Full Coverage',
  'Fully Bonded',
  'COI available on request',
];

let iy = y + 30;
insurance.forEach((item) => {
  // checkmark
  doc.save().font('Helvetica-Bold').fontSize(9).fillColor(C.green).text('✓', COL1_X + 12, iy - 1).restore();
  doc.save().font('Helvetica').fontSize(8).fillColor(C.bodyText).text(item, COL1_X + 28, iy, { width: COL1_W - 40 }).restore();
  iy += 24;
});

y += 140;

// CONTACT box
fillRect(COL1_X, y, COL1_W, 118, C.darkGreen);

doc.save().font('Helvetica-Bold').fontSize(8).fillColor(C.green).text('PRIMARY CONTACT', COL1_X + 12, y + 12).restore();
doc.save().font('Helvetica-Bold').fontSize(11).fillColor(C.white).text('Miguel Garcia', COL1_X + 12, y + 30).restore();
doc.save().font('Helvetica').fontSize(8).fillColor([170, 210, 185]).text('President', COL1_X + 12, y + 45).restore();

hLine(y + 58, COL1_X + 12, COL1_X + COL1_W - 12, [255, 255, 255, 0.15], 0.4);

doc.save().font('Helvetica').fontSize(8).fillColor([200, 230, 210])
  .text('(347) 332-9348', COL1_X + 12, y + 66)
  .text('Hello@GreenPointMS.com', COL1_X + 12, y + 80)
  .text('Bronx, New York', COL1_X + 12, y + 94)
  .restore();

// ── RIGHT COLUMN ─────────────────────────────────────────────────────────────

let ry2 = 128;

// COMPANY OVERVIEW
doc.save()
  .font('Helvetica-Bold')
  .fontSize(17)
  .fillColor(C.darkGreen)
  .text('Company Overview', COL2_X, ry2)
  .restore();

ry2 += 26;

doc.save()
  .font('Helvetica')
  .fontSize(9)
  .fillColor(C.bodyText)
  .lineGap(3)
  .text(
    'GreenPoint Maintenance Services Corp is a Minority Business Enterprise (MBE) certified commercial janitorial and facility maintenance provider headquartered in the Bronx, New York. We deliver verified, compliance-grade cleaning programs to educational, government, healthcare, and institutional facilities across five states.',
    COL2_X, ry2, { width: COL2_W }
  )
  .restore();

ry2 += 64;

// STATS ROW
const stats = [
  { val: '8+', lbl: 'Years in Business' },
  { val: '80+', lbl: 'Field Professionals' },
  { val: '5',  lbl: 'States Served' },
];

const statW = (COL2_W - 16) / 3;
stats.forEach((s, i) => {
  const sx = COL2_X + i * (statW + 8);
  fillRect(sx, ry2, statW, 54, C.offWhite);
  strokeRect(sx, ry2, statW, 54, C.lightGrey);
  doc.save().font('Helvetica-Bold').fontSize(22).fillColor(C.darkGreen).text(s.val, sx, ry2 + 6, { width: statW, align: 'center' }).restore();
  doc.save().font('Helvetica').fontSize(7.5).fillColor(C.labelText).text(s.lbl, sx, ry2 + 34, { width: statW, align: 'center' }).restore();
});

ry2 += 68;

// CORE COMPETENCIES
doc.save().font('Helvetica-Bold').fontSize(11).fillColor(C.darkGreen).text('Core Competencies', COL2_X, ry2).restore();
hLine(ry2 + 16, COL2_X, COL2_X + COL2_W, C.green, 1.5);
ry2 += 24;

const competencies = [
  { title: 'Commercial Janitorial Programs', desc: 'Daily, weekly, and monthly facility cleaning using Green Seal certified products. Custom protocols per facility type.' },
  { title: 'Real-Time Verification (JaniTrack)', desc: 'Proprietary verification system with timestamped photo documentation, GPS task completion, and ATP bioluminescence testing.' },
  { title: 'Healthcare & Education Compliance', desc: 'CDC-compliant sanitization for schools, daycares, and medical offices. OSHA-aware protocols. Safe for occupants.' },
  { title: 'Day Porter & On-Site Services', desc: 'Dedicated on-site personnel for high-traffic facilities. Restroom maintenance, trash management, and spot cleaning.' },
  { title: 'Floor Care Programs', desc: 'Strip, wax, buff, scrub, and refinish programs for VCT, LVT, hardwood, and epoxy surfaces.' },
  { title: 'Post-Construction Cleanup', desc: 'Certified post-construction and pre-occupancy cleaning for commercial and institutional spaces.' },
];

competencies.forEach((c, i) => {
  // Bullet accent
  fillRect(COL2_X, ry2 + 3, 3, 10, C.green);
  doc.save().font('Helvetica-Bold').fontSize(8.5).fillColor(C.darkGreen).text(c.title, COL2_X + 10, ry2, { width: COL2_W - 10 }).restore();
  doc.save().font('Helvetica').fontSize(8).fillColor(C.bodyText).text(c.desc, COL2_X + 10, ry2 + 13, { width: COL2_W - 10 }).restore();
  ry2 += 40;

  if (i < competencies.length - 1) hLine(ry2 - 5, COL2_X, COL2_X + COL2_W, C.lightGrey, 0.4);
});

ry2 += 6;

// KEY DIFFERENTIATORS
doc.save().font('Helvetica-Bold').fontSize(11).fillColor(C.darkGreen).text('Key Differentiators', COL2_X, ry2).restore();
hLine(ry2 + 16, COL2_X, COL2_X + COL2_W, C.green, 1.5);
ry2 += 24;

const diffs = [
  ['JaniTrack™ Verification', 'Only local provider with real-time photo & ATP testing documentation after every service.'],
  ['MBE/MWBE Certified',      'Qualifies for diversity procurement programs, MWBE set-asides, and minority vendor registries.'],
  ['Dedicated Team Assignment','Same background-checked team for every visit — consistent service, no strangers.'],
  ['5-State Coverage',         'NY, NJ, CT, PA, FL — scalable for multi-location institutional and government contracts.'],
];

diffs.forEach((d, i) => {
  fillRect(COL2_X, ry2 + 3, 3, 10, C.gold);
  doc.save().font('Helvetica-Bold').fontSize(8.5).fillColor(C.darkGreen).text(d[0], COL2_X + 10, ry2, { width: COL2_W - 10 }).restore();
  doc.save().font('Helvetica').fontSize(8).fillColor(C.bodyText).text(d[1], COL2_X + 10, ry2 + 13, { width: COL2_W - 10 }).restore();
  ry2 += 34;
  if (i < diffs.length - 1) hLine(ry2 - 4, COL2_X, COL2_X + COL2_W, C.lightGrey, 0.4);
});

// ── Page 1 Footer ────────────────────────────────────────────────────────────
fillRect(0, H - 28, W, 28, C.darkGreen);
doc.save().font('Helvetica').fontSize(7.5).fillColor([150, 200, 170])
  .text('GreenPoint Maintenance Services Corp  •  Bronx, NY  •  Hello@GreenPointMS.com  •  (347) 332-9348  •  gpms-website.vercel.app', MARGIN, H - 18, { width: W - MARGIN * 2 })
  .restore();
doc.save().font('Helvetica').fontSize(7.5).fillColor([150, 200, 170])
  .text('1 of 2', 0, H - 18, { align: 'right', width: W - MARGIN })
  .restore();

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 2
// ═══════════════════════════════════════════════════════════════════════════

doc.addPage();

// Header bar
fillRect(0, 0, W, 52, C.darkGreen);
fillRect(0, 52, W, 3, C.gold);

doc.save().font('Helvetica-Bold').fontSize(12).fillColor(C.white)
  .text('GreenPoint Maintenance Services Corp', MARGIN, 17)
  .restore();
doc.save().font('Helvetica').fontSize(8).fillColor(C.green)
  .text('CAPABILITY STATEMENT  —  PAST PERFORMANCE & INDUSTRIES SERVED', 0, 20, { align: 'right', width: W - MARGIN })
  .restore();

let p2y = 74;

// ── PAST PERFORMANCE ────────────────────────────────────────────────────────
doc.save().font('Helvetica-Bold').fontSize(14).fillColor(C.darkGreen).text('Past Performance', MARGIN, p2y).restore();
hLine(p2y + 20, MARGIN, W - MARGIN, C.green, 1.5);
p2y += 30;

const contracts = [
  {
    name: 'NYC Charter School Network',
    type: 'Educational — K-12',
    scope: 'Full janitorial program including daily classroom cleaning, cafeteria sanitization, restroom maintenance, and seasonal deep cleans across multiple campuses.',
    outcome: '100% attendance on scheduled cleanings. School passed all health department inspections. Continued contract renewed annually.',
    period: 'Ongoing',
    location: 'New York, NY',
  },
  {
    name: 'Medical Office Complex',
    type: 'Healthcare — Outpatient',
    scope: 'OSHA-compliant sanitization for exam rooms, waiting areas, and administrative spaces. ATP bioluminescence verification at every service visit.',
    outcome: 'Consistently achieved ATP readings under 30 RLU on high-touch surfaces. Zero compliance issues during full audit period.',
    period: 'Ongoing',
    location: 'Westchester, NY',
  },
  {
    name: 'Multi-Site Houses of Worship',
    type: 'Religious Institution',
    scope: 'Sanctuary, fellowship hall, nursery, and administrative office cleaning for 300+ seat congregation. Flexible scheduling around service times and special events.',
    outcome: 'Reduced cleaning spend 22% vs. prior provider while improving documentation and occupant satisfaction scores.',
    period: 'Ongoing',
    location: 'New York Metro',
  },
];

contracts.forEach((c, i) => {
  const boxH = 110;
  const bx = MARGIN;
  const bw = CONTENT_W;

  // Box background alternating
  fillRect(bx, p2y, bw, boxH, i % 2 === 0 ? C.offWhite : [240, 248, 243]);
  strokeRect(bx, p2y, bw, boxH, C.lightGrey);

  // Left green bar
  fillRect(bx, p2y, 4, boxH, C.green);

  // Header row
  doc.save().font('Helvetica-Bold').fontSize(10).fillColor(C.darkGreen)
    .text(c.name, bx + 16, p2y + 10)
    .restore();

  // Type badge
  const badgeX = bx + 16 + doc.widthOfString(c.name, { fontSize: 10 }) + 12;
  fillRect(badgeX, p2y + 8, 110, 15, [228, 248, 236]);
  doc.save().font('Helvetica-Bold').fontSize(7).fillColor(C.midGreen)
    .text(c.type, badgeX + 6, p2y + 12)
    .restore();

  // Period & Location
  doc.save().font('Helvetica').fontSize(7.5).fillColor(C.labelText)
    .text(`${c.period}  •  ${c.location}`, 0, p2y + 12, { align: 'right', width: W - MARGIN * 2 - 4 })
    .restore();

  hLine(p2y + 28, bx + 12, bx + bw - 12, C.lightGrey, 0.4);

  // Scope
  doc.save().font('Helvetica-Bold').fontSize(7.5).fillColor(C.labelText)
    .text('SCOPE  ', bx + 16, p2y + 36)
    .restore();
  doc.save().font('Helvetica').fontSize(8).fillColor(C.bodyText)
    .text(c.scope, bx + 52, p2y + 36, { width: bw - 68 })
    .restore();

  // Outcome
  doc.save().font('Helvetica-Bold').fontSize(7.5).fillColor(C.green)
    .text('RESULT  ', bx + 16, p2y + 70)
    .restore();
  doc.save().font('Helvetica').fontSize(8).fillColor(C.bodyText)
    .text(c.outcome, bx + 52, p2y + 70, { width: bw - 68 })
    .restore();

  p2y += boxH + 10;
});

p2y += 10;

// ── INDUSTRIES SERVED ────────────────────────────────────────────────────────
doc.save().font('Helvetica-Bold').fontSize(14).fillColor(C.darkGreen).text('Industries Served', MARGIN, p2y).restore();
hLine(p2y + 20, MARGIN, W - MARGIN, C.green, 1.5);
p2y += 32;

const industries = [
  'K-12 Schools & Charter Schools',
  'Healthcare & Medical Offices',
  'Government & Municipal Buildings',
  'Houses of Worship',
  'Daycares & Child-Care Centers',
  'Commercial Office Buildings',
  'Post-Construction Sites',
  'Day Porter Services',
];

const iColW = (CONTENT_W - 16) / 2;
industries.forEach((ind, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const ix = MARGIN + col * (iColW + 16);
  const iy = p2y + row * 22;

  fillRect(ix, iy + 4, 6, 6, C.green);
  doc.save().font('Helvetica').fontSize(9).fillColor(C.bodyText)
    .text(ind, ix + 14, iy + 2)
    .restore();
});

p2y += Math.ceil(industries.length / 2) * 22 + 18;

// ── GEOGRAPHIC COVERAGE ──────────────────────────────────────────────────────
fillRect(MARGIN, p2y, CONTENT_W, 56, C.darkGreen);

doc.save().font('Helvetica-Bold').fontSize(10).fillColor(C.green)
  .text('Geographic Coverage', MARGIN + 16, p2y + 10)
  .restore();

const states = ['New York (NY)', 'New Jersey (NJ)', 'Connecticut (CT)', 'Pennsylvania (PA)', 'Florida (FL)'];
const stateW = (CONTENT_W - 32) / states.length;
states.forEach((s, i) => {
  const sx = MARGIN + 16 + i * stateW;
  doc.save().font('Helvetica-Bold').fontSize(8).fillColor(C.white)
    .text(s, sx, p2y + 30, { width: stateW - 8 })
    .restore();
});

p2y += 68;

// ── CERTIFICATIONS SUMMARY ────────────────────────────────────────────────────
const certItems = [
  { label: 'MBE/MWBE Certified', sub: 'NYC & NYS' },
  { label: 'SAM.gov Registered', sub: 'Active' },
  { label: 'Background Checked', sub: 'All Staff' },
  { label: '$2M+ GL Insurance', sub: 'Bonded' },
];

const certW = (CONTENT_W - 18) / certItems.length;
certItems.forEach((c, i) => {
  const cx = MARGIN + i * (certW + 6);
  strokeRect(cx, p2y, certW, 52, C.green, 0.8);
  doc.save().font('Helvetica-Bold').fontSize(9).fillColor(C.darkGreen)
    .text(c.label, cx + 8, p2y + 10, { width: certW - 16 })
    .restore();
  doc.save().font('Helvetica').fontSize(8).fillColor(C.green)
    .text(c.sub, cx + 8, p2y + 28, { width: certW - 16 })
    .restore();
});

p2y += 64;

// ── CTA BAR ──────────────────────────────────────────────────────────────────
fillRect(MARGIN, p2y, CONTENT_W, 44, [232, 250, 240]);
strokeRect(MARGIN, p2y, CONTENT_W, 44, C.green, 0.6);

doc.save().font('Helvetica-Bold').fontSize(9).fillColor(C.darkGreen)
  .text('To schedule a facility assessment or request a vendor package (W-9, COI, CAGE/UEI documentation):', MARGIN + 12, p2y + 8, { width: CONTENT_W - 120 })
  .restore();

doc.save().font('Helvetica-Bold').fontSize(9).fillColor(C.midGreen)
  .text('(347) 332-9348', MARGIN + 12, p2y + 24)
  .restore();

doc.save().font('Helvetica').fontSize(9).fillColor(C.midGreen)
  .text('  •  Hello@GreenPointMS.com', MARGIN + 80, p2y + 24)
  .restore();

// ── Page 2 Footer ─────────────────────────────────────────────────────────────
fillRect(0, H - 28, W, 28, C.darkGreen);
doc.save().font('Helvetica').fontSize(7.5).fillColor([150, 200, 170])
  .text('GreenPoint Maintenance Services Corp  •  Bronx, NY  •  Hello@GreenPointMS.com  •  (347) 332-9348  •  SAM.gov Active  •  EIN: 83-3561154', MARGIN, H - 18, { width: W - MARGIN * 2 })
  .restore();
doc.save().font('Helvetica').fontSize(7.5).fillColor([150, 200, 170])
  .text('2 of 2', 0, H - 18, { align: 'right', width: W - MARGIN })
  .restore();

// ─── FINALIZE ────────────────────────────────────────────────────────────────
doc.end();
console.log('✅  PDF generated → public/greenpoint-capability-statement.pdf');
console.log('⚠️  Remember to update CAGE_CODE and UEI_NUMBER in this script once Miguel provides them.');
