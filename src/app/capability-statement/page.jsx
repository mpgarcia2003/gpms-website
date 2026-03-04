import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Capability Statement | GreenPoint Maintenance Services Corp',
  description: 'Download our capability statement. MBE-certified commercial janitorial and facility maintenance provider. SAM.gov registered, CAGE code, UEI, and NAICS codes for government procurement.',
  keywords: ['capability statement', 'MBE certified cleaning company', 'SAM.gov registered janitorial', 'government cleaning contractor', 'NAICS 561720'],
};

export default function CapabilityStatementPage() {
  const PHONE_NUMBER = "(347) 332-9348";
  const PHONE_HREF = "tel:3473329348";

  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 80, fontFamily: "'DM Sans', sans-serif" }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 30%, #122d1c 60%, #0a1a12 100%)',
          padding: '80px 24px 60px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -200, right: -200, width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(46,204,113,0.06) 0%, transparent 70%)', borderRadius: '50%',
          }} />
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(46,204,113,0.1)',
              border: '1px solid rgba(46,204,113,0.25)', borderRadius: 100, padding: '6px 16px', marginBottom: 24,
            }}>
              <span style={{ fontSize: 12, color: '#2ecc71', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                Government & Procurement Resources
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em',
            }}>
              Capability Statement
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 32px' }}>
              Everything procurement officers need to evaluate GreenPoint Maintenance Services Corp as a qualified vendor for your facility.
            </p>
            <a href="/greenpoint-capability-statement.pdf" download style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: '#fff',
              padding: '16px 36px', borderRadius: 10, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 4px 24px rgba(46,204,113,0.3)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF
            </a>
          </div>
        </section>

        {/* Capability Statement Content */}
        <section style={{ background: '#fff', padding: '80px 24px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>

            {/* Company Overview Card */}
            <div style={{
              background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 48, marginBottom: 40,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'linear-gradient(135deg, #2ecc71, #27ae60)', fontWeight: 800, fontSize: 24, color: '#fff',
                }}>G</div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#0d2818', margin: 0 }}>
                    GreenPoint Maintenance Services Corp
                  </h2>
                  <p style={{ fontSize: 14, color: '#888', margin: '4px 0 0', fontWeight: 500 }}>
                    MBE-Certified Facility Services Provider • Est. 2018
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 0 }}>
                GreenPoint Maintenance Services Corp is a Minority Business Enterprise (MBE) certified commercial janitorial and facility maintenance provider headquartered in the Bronx, New York. We deliver verified cleaning services to institutional, government, healthcare, and educational facilities across New York, New Jersey, Connecticut, Pennsylvania, and Florida.
              </p>
            </div>

            {/* Registration & Certification Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>

              <div style={{ background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 36 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#0d2818', marginBottom: 20 }}>
                  Registrations & Certifications
                </h3>
                {[
                  { label: 'MBE Certified', value: 'NYC & NYS' },
                  { label: 'MWBE Certified', value: 'NYC & NYS' },
                  { label: 'SAM.gov Status', value: 'Active Registration' },
                  { label: 'CAGE Code', value: 'Available upon request' },
                  { label: 'UEI Number', value: 'Available upon request' },
                  { label: 'EIN', value: '83-3561154' },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex', justifyContent: 'space-between', padding: '12px 0',
                    borderBottom: '1px solid #eee',
                  }}>
                    <span style={{ fontSize: 14, color: '#555', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ fontSize: 14, color: '#0d2818', fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 36 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#0d2818', marginBottom: 20 }}>
                  NAICS Codes
                </h3>
                {[
                  { code: '561720', desc: 'Janitorial Services' },
                  { code: '238210', desc: 'Electrical Contractors & Other Wiring' },
                  { code: '561790', desc: 'Other Services to Buildings & Dwellings' },
                ].map((item) => (
                  <div key={item.code} style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0',
                    borderBottom: '1px solid #eee',
                  }}>
                    <span style={{
                      background: 'rgba(46,204,113,0.1)', color: '#27ae60', padding: '4px 12px',
                      borderRadius: 6, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
                      flexShrink: 0,
                    }}>{item.code}</span>
                    <span style={{ fontSize: 14, color: '#555' }}>{item.desc}</span>
                  </div>
                ))}

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#0d2818', marginTop: 32, marginBottom: 20 }}>
                  Insurance & Bonding
                </h3>
                {[
                  '$2M+ Commercial General Liability',
                  'Full Workers Compensation Coverage',
                  'Bonded & Insured',
                  'Certificate of Insurance available on request',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ color: '#2ecc71', fontWeight: 700, fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 14, color: '#555' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div style={{ background: 'linear-gradient(135deg, #0d2818, #1a4d2e)', borderRadius: 16, padding: 48, marginBottom: 40, color: '#fff' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 28 }}>
                Core Competencies
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  {
                    title: 'Commercial Janitorial Programs',
                    desc: 'Daily, weekly, and monthly cleaning programs for institutional and commercial facilities. Green Seal certified products.',
                  },
                  {
                    title: 'Real-Time Cleaning Verification',
                    desc: 'Proprietary JaniTrack system with timestamped photo documentation, GPS-tagged task completion, and ATP bioluminescence testing.',
                  },
                  {
                    title: 'Healthcare & Education Compliance',
                    desc: 'CDC-compliant sanitization for schools and medical offices. OSHA-aware protocols. Green cleaning products safe for children.',
                  },
                  {
                    title: 'Multi-State Service Delivery',
                    desc: 'Operational across NY, NJ, CT, PA, and FL. Background-checked and trained workforce. Scalable from single-site to multi-location contracts.',
                  },
                ].map((item) => (
                  <div key={item.title} style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12, padding: 24,
                  }}>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators */}
            <div style={{ background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 48, marginBottom: 40 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#0d2818', marginBottom: 24 }}>
                Key Differentiators
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                {[
                  { title: 'JaniTrack Verification', desc: 'Real-time photo documentation and ATP bioluminescence testing after every service. No other local provider offers this.' },
                  { title: 'MBE Certification', desc: 'Registered Minority Business Enterprise. Qualifies for diversity procurement programs and MWBE set-aside contracts.' },
                  { title: 'Fixed Pricing', desc: 'Transparent per-facility pricing. No hourly billing, no surprise fees. Custom proposals within 48 hours of walkthrough.' },
                  { title: 'Vertical Specialization', desc: 'Dedicated protocols for schools, healthcare, houses of worship, daycare, and government. Not one-size-fits-all.' },
                  { title: 'Background-Checked Teams', desc: 'Every field worker undergoes comprehensive background checks, drug testing, and facility-specific training.' },
                  { title: '5-State Coverage', desc: 'Serving NY, NJ, CT, PA, and FL with a workforce of 80+ trained professionals. Scalable for multi-location contracts.' },
                ].map((item) => (
                  <div key={item.title} style={{ padding: '16px 0' }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0d2818', marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Performance */}
            <div style={{ background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 48, marginBottom: 40 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#0d2818', marginBottom: 24 }}>
                Past Performance
              </h3>
              {[
                {
                  facility: 'NYC Charter School Network',
                  type: 'Educational — K-12',
                  scope: 'Full janitorial program including daily classroom cleaning, cafeteria sanitization, restroom maintenance, and seasonal deep cleans across multiple locations.',
                  outcome: 'Maintained 100% attendance on scheduled cleanings. School passed all health department inspections.',
                },
                {
                  facility: 'Westchester Medical Office Complex',
                  type: 'Healthcare — Outpatient',
                  scope: 'OSHA-compliant sanitization for exam rooms, waiting areas, and common spaces. ATP bioluminescence verification at every visit.',
                  outcome: 'Achieved consistently low ATP readings (under 30 RLU). Zero compliance issues during audit period.',
                },
                {
                  facility: 'Multi-Site Religious Institution',
                  type: 'Houses of Worship',
                  scope: 'Sanctuary, fellowship hall, nursery, and administrative office cleaning for 300+ seat congregation. Flexible scheduling around services and events.',
                  outcome: 'Reduced cleaning spend by 22% vs. previous provider while improving quality documentation.',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '24px 0', borderBottom: i < 2 ? '1px solid #eee' : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <h4 style={{ fontSize: 17, fontWeight: 700, color: '#0d2818', margin: 0 }}>{item.facility}</h4>
                    <span style={{
                      background: 'rgba(46,204,113,0.1)', color: '#27ae60', padding: '3px 10px',
                      borderRadius: 4, fontSize: 12, fontWeight: 600,
                    }}>{item.type}</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 6 }}>
                    <strong style={{ color: '#333' }}>Scope:</strong> {item.scope}
                  </p>
                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: '#27ae60' }}>Outcome:</strong> {item.outcome}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Data */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 40 }}>
              {[
                { label: 'Years in Business', value: '8+', sub: 'Est. 2018' },
                { label: 'Workforce', value: '80+', sub: 'Background-checked' },
                { label: 'States Covered', value: '5', sub: 'NY, NJ, CT, PA, FL' },
              ].map((item) => (
                <div key={item.label} style={{
                  background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 32, textAlign: 'center',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: '#0d2818' }}>{item.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#333', marginTop: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: '#888', marginTop: 2 }}>{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Contact & CTA */}
            <div style={{
              background: 'linear-gradient(135deg, #0d2818, #1a4d2e)', borderRadius: 16, padding: 48, textAlign: 'center',
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                Request W-9, COI, or Additional Documentation
              </h3>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>
                Contact us for a complete vendor package including W-9, Certificate of Insurance, and any additional procurement documentation.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/greenpoint-capability-statement.pdf" download style={{
                  background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: '#fff', padding: '14px 32px',
                  borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(46,204,113,0.3)', display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download PDF
                </a>
                <a href="mailto:Hello@GreenPointMS.com?subject=Request%20for%20W-9%20and%20COI%20-%20GreenPoint%20Maintenance%20Services" style={{
                  background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px',
                  borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}>
                  Request W-9 & COI
                </a>
                <a href={PHONE_HREF} style={{
                  background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '14px 32px',
                  borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  Call {PHONE_NUMBER}
                </a>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 24 }}>
                GreenPoint Maintenance Services Corp • Bronx, NY • Hello@GreenPointMS.com
              </p>
            </div>

          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
            section > div > div[style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>

      </main>
      <SiteFooter />
    </>
  );
}
