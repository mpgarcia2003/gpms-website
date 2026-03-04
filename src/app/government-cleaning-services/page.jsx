import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Government Cleaning Services | MBE Certified Janitorial Contractor',
  description: 'MBE/MWBE-certified government cleaning contractor registered on SAM.gov. Janitorial services for municipal buildings, schools, courthouses, and public facilities across NY, NJ, CT, PA. NAICS 561720. Request our Capability Statement.',
  keywords: ['government cleaning services', 'MBE certified cleaning', 'janitorial contractor SAM.gov', 'government building cleaning NYC', 'MWBE janitorial services', 'municipal cleaning contractor'],
  openGraph: {
    title: 'Government Cleaning Services | GreenPoint Maintenance Services Corp',
    description: 'MBE/MWBE-certified janitorial contractor for government and municipal facilities. SAM.gov registered. NAICS 561720.',
  },
};

const PHONE_NUMBER = "(347) 332-9348";
const PHONE_HREF = "tel:3473329348";

const CAPABILITIES = [
  { title: "Daily Janitorial Maintenance", desc: "Scheduled cleaning of offices, restrooms, lobbies, hallways, and common areas per contract specifications." },
  { title: "Floor Care & Restoration", desc: "Strip, seal, wax, and refinish hard floors. Carpet extraction. VCT, marble, and terrazzo maintenance programs." },
  { title: "Disinfection & Sanitization", desc: "CDC-compliant electrostatic disinfection with hospital-grade products. ATP bioluminescence verification included." },
  { title: "Day Porter Services", desc: "On-site daytime staff for continuous facility upkeep, restroom monitoring, and supply replenishment." },
  { title: "Post-Construction Cleanup", desc: "Three-stage professional cleanup for renovated or newly constructed government facilities." },
  { title: "Emergency Response", desc: "24/7 emergency cleaning for biohazard, water damage, or post-incident decontamination." },
];

const COMPLIANCE_ITEMS = [
  { label: "MBE / MWBE Certified", detail: "New York State & City of New York" },
  { label: "SAM.gov Registered", detail: "Valid CAGE Code & UEI" },
  { label: "NAICS 561720", detail: "Janitorial Services" },
  { label: "NAICS 238210", detail: "Electrical Contractors" },
  { label: "NAICS 561790", detail: "Other Services to Buildings & Dwellings" },
  { label: "$2M+ General Liability", detail: "Certificate of Insurance on request" },
  { label: "Workers' Compensation", detail: "Full coverage for all field staff" },
  { label: "Bonded", detail: "Surety bond available" },
  { label: "OSHA Compliant", detail: "All staff OSHA-trained" },
  { label: "Background Checks", detail: "All personnel screened" },
];

const PAST_PERFORMANCE = [
  { client: "NYC Charter Schools Network", scope: "Daily janitorial for 3 facilities totaling 45,000+ sq ft", result: "Zero missed cleanings in 12 months; passed all DOH inspections" },
  { client: "Westchester Educational Institutions", scope: "After-hours cleaning, floor care, and summer deep-clean programs", result: "98% on-time rate; ATP readings consistently below clinical thresholds" },
  { client: "Tri-State Houses of Worship", scope: "Weekly sanctuary care, fellowship hall turnaround, and nursery sanitization", result: "5+ year retention; expanded from 1 to 4 locations" },
];

const s = {
  section: (bg = '#fff') => ({ background: bg, padding: '80px 24px' }),
  container: { maxWidth: 1100, margin: '0 auto' },
  h: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1.15, color: '#0d2818', letterSpacing: '-0.02em' },
  p: { fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#555', lineHeight: 1.8 },
  label: { fontSize: 12, color: '#2ecc71', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'DM Sans', sans-serif" },
};

export default function GovernmentCleaningPage() {
  return (
    <>
      <SiteHeader />
      <style>{`
        @media (max-width: 768px) {
          .gov-hero-trust { gap: 12px !important; }
          .gov-compliance-grid { grid-template-columns: 1fr !important; }
          .gov-cap-grid { grid-template-columns: 1fr !important; }
          .gov-pp-grid { grid-template-columns: 1fr !important; }
          .gov-doc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 40%, #122d1c 70%, #0a1a12 100%)',
        padding: '160px 24px 100px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -200, right: -200, width: 500, height: 500, background: 'radial-gradient(circle, rgba(46,204,113,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ ...s.container, position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(46,204,113,0.1)', border: '1px solid rgba(46,204,113,0.25)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2ecc71' }} />
            <span style={{ fontSize: 12, color: '#2ecc71', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
              MBE Certified &bull; SAM.gov Registered &bull; NAICS 561720
            </span>
          </div>

          <h1 style={{ ...s.h, fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', marginBottom: 24, maxWidth: 700 }}>
            Government Facility Cleaning.<br /><span style={{ color: '#2ecc71' }}>Procurement-Ready.</span>
          </h1>

          <p style={{ ...s.p, color: 'rgba(255,255,255,0.65)', fontSize: 18, maxWidth: 620, marginBottom: 36 }}>
            GreenPoint Maintenance Services Corp is an MBE/MWBE-certified facility services provider registered on SAM.gov. We deliver verified janitorial services to government buildings, schools, courthouses, and municipal facilities across the Tri-State area.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/capability-statement" style={{ background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: '#fff', padding: '16px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(46,204,113,0.3)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Download Capability Statement →
            </a>
            <a href="/#contact" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '16px 32px', borderRadius: 10, fontWeight: 600, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", border: '1px solid rgba(255,255,255,0.15)' }}>
              Request a Facility Assessment
            </a>
          </div>

          <div className="gov-hero-trust" style={{ display: 'flex', gap: 20, marginTop: 48, flexWrap: 'wrap' }}>
            {['MBE / MWBE Certified', 'SAM.gov Registered', '$2M+ Insurance', 'OSHA Compliant', 'Background-Checked'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.2)', borderRadius: 100, padding: '5px 14px' }}>
                <span style={{ color: '#2ecc71', fontWeight: 700, fontSize: 12 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Grid */}
      <section style={s.section('#fafbfa')}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={s.label}>Compliance &amp; Registrations</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)', marginBottom: 12 }}>
              RFP-Ready. <span style={{ color: '#2ecc71' }}>Audit-Proof.</span>
            </h2>
            <p style={{ ...s.p, maxWidth: 560, margin: '0 auto' }}>Everything procurement officers need to qualify GreenPoint as an approved vendor.</p>
          </div>
          <div className="gov-compliance-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {COMPLIANCE_ITEMS.map((item) => (
              <div key={item.label} style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(46,204,113,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#2ecc71', fontWeight: 700, fontSize: 14 }}>✓</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#0d2818' }}>{item.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#888' }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Government Agencies Choose GreenPoint */}
      <section style={s.section('#fff')}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={s.label}>Why Agencies Choose GreenPoint</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Procurement-Aligned. <span style={{ color: '#2ecc71' }}>Performance-Verified.</span>
            </h2>
            <p style={{ ...s.p, maxWidth: 560, margin: '12px auto 0' }}>
              Government buyers require more than a clean facility. They require documentation, compliance, and accountability at every step.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'MBE/MWBE Certified', desc: 'Certified through NYC SBS and New York State. Satisfies diversity procurement goals and MWBE set-aside requirements for city, state, and federal contracts.' },
              { title: 'SAM.gov Active & Current', desc: 'Active federal vendor registration with valid CAGE code and UEI. Eligible for federal, state, and municipal contract vehicles without additional vetting.' },
              { title: 'Background-Checked Workforce', desc: 'Every field technician passes comprehensive criminal background checks, drug screening, and facility-specific clearance. No subcontractor opacity.' },
              { title: '$2M+ Insurance Coverage', desc: "Commercial General Liability, Workers' Compensation, and surety bond available. Certificate of Insurance provided within one business day." },
              { title: 'JaniTrack Real-Time Verification', desc: "Every cleaning session documented with timestamped GPS-verified photos and ATP bioluminescence test results. Audit-ready records on demand — not just a vendor's word." },
              { title: 'Fixed Pricing, No Change Orders', desc: 'Government contracts require budget predictability. GreenPoint provides fixed-price proposals with no hidden fees, no change order surprises, and transparent scope of work.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fafbfa', borderRadius: 14, padding: '28px 28px', border: '1px solid #eee', borderLeft: '3px solid #2ecc71' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#0d2818', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ ...s.p, fontSize: 14, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section style={s.section('#fff')}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={s.label}>Core Competencies</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Services We Deliver to <span style={{ color: '#2ecc71' }}>Government Facilities</span>
            </h2>
          </div>
          <div className="gov-cap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} style={{ background: '#fafbfa', borderRadius: 16, padding: 32, border: '1px solid #eee' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#0d2818', marginBottom: 10 }}>{cap.title}</h3>
                <p style={{ ...s.p, fontSize: 14 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section style={s.section('linear-gradient(135deg, #0d2818, #1a4d2e)')}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={s.label}>Past Performance</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#fff' }}>
              Proven Track Record with <span style={{ color: '#2ecc71' }}>Institutional Clients</span>
            </h2>
          </div>
          <div className="gov-pp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {PAST_PERFORMANCE.map((pp) => (
              <div key={pp.client} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 32 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{pp.client}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>
                  <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Scope:</strong> {pp.scope}
                </div>
                <div style={{ background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.15)', borderRadius: 8, padding: '12px 16px' }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#2ecc71', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Result</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{pp.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Documents */}
      <section style={s.section('#fafbfa')}>
        <div style={{ ...s.container, maxWidth: 800, textAlign: 'center' }}>
          <div style={s.label}>Procurement Documents</div>
          <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 34px)', marginBottom: 16 }}>
            Request Our <span style={{ color: '#2ecc71' }}>RFP-Ready Materials</span>
          </h2>
          <p style={{ ...s.p, maxWidth: 560, margin: '0 auto 36px' }}>All documents available upon request. Contact us directly or use the form below.</p>
          <div className="gov-doc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 600, margin: '0 auto' }}>
            {['Capability Statement (PDF)', 'W-9 Form', 'Certificate of Insurance', 'References & Past Performance', 'SAM.gov Entity Profile', 'MBE/MWBE Certification'].map((doc) => (
              <div key={doc} style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: '#0d2818' }}>{doc}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/greenpoint-capability-statement.pdf" download style={{ background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(46,204,113,0.3)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Capability Statement
            </a>
            <a href="mailto:Hello@GreenPointMS.com?subject=Request%20for%20W-9%20and%20Certificate%20of%20Insurance%20-%20GreenPoint%20Maintenance%20Services" style={{ border: '1px solid #2ecc71', color: '#0d2818', padding: '14px 32px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d2818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Request W-9 &amp; COI
            </a>
            <a href={PHONE_HREF} style={{ border: '1px solid #0d2818', color: '#0d2818', padding: '14px 32px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d2818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={s.section('#fff')}>
        <div style={{ ...s.container, maxWidth: 700, textAlign: 'center' }}>
          <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: 16 }}>
            Ready to Add GreenPoint to<br />Your <span style={{ color: '#2ecc71' }}>Approved Vendor List?</span>
          </h2>
          <p style={{ ...s.p, maxWidth: 520, margin: '0 auto 32px' }}>
            Schedule a complimentary facility walkthrough. We&apos;ll assess your space, provide a fixed-price proposal within 48 hours, and deliver all procurement documentation you need.
          </p>
          <a href="/#contact" style={{ background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: '#fff', padding: '16px 40px', borderRadius: 10, fontWeight: 700, fontSize: 17, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(46,204,113,0.3)', display: 'inline-block' }}>
            Schedule Walkthrough →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
