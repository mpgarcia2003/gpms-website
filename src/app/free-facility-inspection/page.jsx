"use client";
import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import {
  ShieldCheckIcon, ClipboardCheckIcon, FileCheckIcon, BuildingIcon,
  SchoolIcon, HeartPulseIcon, LandmarkIcon, ChurchIcon, CheckCircleIcon,
  PhoneIcon, CalendarIcon,
} from '../../components/Icons';


const PHONE_NUMBER = '(347) 332-9348';
const PHONE_HREF = 'tel:3473329348';

const s = {
  h: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em' },
  label: { fontSize: 11, color: '#2ecc71', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'DM Sans', sans-serif" },
  p: { fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#555', lineHeight: 1.8 },
};

const INCLUDED = [
  {
    icon: <BuildingIcon size={28} color="#2ecc71" />,
    title: 'On-Site Walkthrough',
    desc: 'A trained GreenPoint facility assessor physically walks every area of your building — offices, restrooms, common areas, cafeteria, stairwells — documenting current conditions.',
  },
  {
    icon: <ShieldCheckIcon size={28} color="#2ecc71" />,
    title: 'ATP Bioluminescence Testing',
    desc: 'We test high-touch surfaces (door handles, light switches, countertops, fixtures) using the same ATP testing technology hospitals use to verify clinical cleanliness. Every reading is recorded.',
  },
  {
    icon: <ClipboardCheckIcon size={28} color="#2ecc71" />,
    title: 'Photographic Documentation',
    desc: 'Timestamped photos of all findings — areas of concern, surface conditions, and equipment observed — organized in a systematic report.',
  },
  {
    icon: <FileCheckIcon size={28} color="#2ecc71" />,
    title: 'Professional PDF Report',
    desc: 'Within 48 hours of the inspection, you receive a formal report with all ATP readings, photographs, findings, and specific cleaning recommendations. No vague assessments — data-driven results.',
  },
];

const STEPS = [
  { number: '01', title: 'Book Your Inspection', desc: 'Fill out the form below with your facility details and preferred date. We confirm within one business day.' },
  { number: '02', title: 'We Inspect', desc: 'Our assessor visits your facility, conducts ATP testing on high-touch surfaces, and photographs current conditions throughout.' },
  { number: '03', title: 'You Get a Report', desc: 'Within 48 hours, you receive a professional PDF with ATP readings, photos, findings, and actionable recommendations — no obligation.' },
];

const FACILITY_TYPES = [
  { icon: <SchoolIcon size={18} color="#2ecc71" />, label: 'K-12 School or Charter School' },
  { icon: <HeartPulseIcon size={18} color="#2ecc71" />, label: 'Healthcare / Medical Office' },
  { icon: <LandmarkIcon size={18} color="#2ecc71" />, label: 'Government / Municipal Building' },
  { icon: <ChurchIcon size={18} color="#2ecc71" />, label: 'House of Worship' },
  { icon: <BuildingIcon size={18} color="#2ecc71" />, label: 'Commercial Office Building' },
  { icon: <BuildingIcon size={18} color="#2ecc71" />, label: 'Daycare / Childcare Center' },
];

export default function FreeFacilityInspectionPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', facilityType: '', address: '', preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('[GreenPoint] Free inspection booking:', formData);
    setSubmitted(true);
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px', background: '#fafbfa', border: '1px solid #e5e5e5',
    borderRadius: 9, fontSize: 15, fontFamily: "'DM Sans', sans-serif", color: '#222',
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 700, color: '#888',
    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 7,
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <SiteHeader />

      {/* Breadcrumbs */}
      <div style={{ background: '#0d2818', padding: '14px 24px', paddingTop: 96 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Home</a>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>›</span>
          <span style={{ fontSize: 12, color: '#2ecc71', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Free Facility Inspection</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 40%, #122d1c 100%)',
        padding: '72px 24px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(46,204,113,0.07) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Trust signal */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(46,204,113,0.1)', border: '1px solid rgba(46,204,113,0.25)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2ecc71' }} />
            <span style={{ fontSize: 12, color: '#2ecc71', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
              No Obligation · No Cost · MBE Certified Team
            </span>
          </div>

          <h1 style={{ ...s.h, fontSize: 'clamp(30px, 5vw, 58px)', color: '#fff', marginBottom: 22 }}>
            Free Facility Cleaning Audit —<br />
            <span style={{ color: '#2ecc71' }}>Know Exactly Where You Stand</span>
          </h1>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 36, maxWidth: 640, margin: '0 auto 36px' }}>
            GreenPoint visits your facility, performs ATP bioluminescence testing on high-touch surfaces, documents conditions with photographs, and delivers a professional report — completely free, no strings attached.
          </p>

          <a
            href="#inspection-form"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: '#fff',
              padding: '16px 36px', borderRadius: 10, fontWeight: 700, fontSize: 16,
              textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 4px 24px rgba(46,204,113,0.3)',
            }}
          >
            <CalendarIcon size={18} color="#fff" />
            Book Your Free Inspection
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={s.label}>What's Included</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#0d2818', marginBottom: 12 }}>
              A Real Audit. <span style={{ color: '#2ecc71' }}>Not a Sales Pitch.</span>
            </h2>
            <p style={{ ...s.p, maxWidth: 560, margin: '0 auto' }}>
              Every free inspection follows the same protocol we use when onboarding new clients — rigorous, documented, and data-driven.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {INCLUDED.map((item, i) => (
              <div key={i} style={{ background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: 32 }}>
                <div style={{ marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#0d2818', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ ...s.p, fontSize: 14, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: 'linear-gradient(135deg, #0d2818, #1a4d2e)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ ...s.label, color: '#2ecc71' }}>Simple Process</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#fff', marginBottom: 12 }}>
              How It Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {STEPS.map((step) => (
              <div key={step.number} style={{ textAlign: 'center', padding: '32px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 800, color: '#2ecc71', lineHeight: 1, marginBottom: 12, opacity: 0.8 }}>{step.number}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section style={{ background: '#fafbfa', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={s.label}>Who Benefits</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#0d2818' }}>
              The Free Inspection Is Designed For
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {[
              { icon: <LandmarkIcon size={20} color="#2ecc71" />, title: 'Government Facility Managers', desc: 'Audit your current vendor\'s performance with objective ATP data before your next contract renewal.' },
              { icon: <SchoolIcon size={20} color="#2ecc71" />, title: 'School Administrators', desc: 'Know your facility\'s cleanliness scores before the DOH or state inspection arrives.' },
              { icon: <HeartPulseIcon size={20} color="#2ecc71" />, title: 'Medical Office Directors', desc: 'Verify that high-touch surfaces in exam rooms and waiting areas meet clinical cleanliness standards.' },
              { icon: <ChurchIcon size={20} color="#2ecc71" />, title: 'Houses of Worship', desc: 'Evaluate your nursery, fellowship hall, and sanctuary cleanliness with documented results for your board.' },
              { icon: <BuildingIcon size={20} color="#2ecc71" />, title: 'Commercial Facility Directors', desc: 'Evaluate your current cleaning provider\'s performance with data, not impressions.' },
              { icon: <BuildingIcon size={20} color="#2ecc71" />, title: 'Any Facility Evaluating Vendors', desc: 'Use our independent report to establish a baseline and set expectations for any cleaning provider.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#0d2818', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ ...s.p, fontSize: 13, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="inspection-form" style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={s.label}>Book Your Inspection</div>
            <h2 style={{ ...s.h, fontSize: 'clamp(24px, 3.5vw, 34px)', color: '#0d2818', marginBottom: 10 }}>
              Schedule Your Free Facility Audit
            </h2>
            <p style={{ ...s.p, maxWidth: 480, margin: '0 auto' }}>
              We confirm within one business day and coordinate a time that works around your facility schedule.
            </p>
          </div>

          {submitted ? (
            <div style={{ background: 'linear-gradient(135deg, #0d2818, #1a4d2e)', borderRadius: 16, padding: 48, textAlign: 'center' }}>
              <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}><CheckCircleIcon size={52} color="#2ecc71" /></div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: '#fff', marginBottom: 12 }}>Inspection Requested</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 24 }}>
                Thank you! We'll confirm your inspection within one business day and coordinate a time that works for your facility.
              </p>
              <a href={PHONE_HREF} style={{ color: '#2ecc71', fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, textDecoration: 'none' }}>{PHONE_NUMBER}</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fafbfa', border: '1px solid #eee', borderRadius: 16, padding: '40px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    required type="text" placeholder="Jane Smith"
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#2ecc71')}
                    onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Work Email *</label>
                  <input
                    required type="email" placeholder="jane@facility.org"
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#2ecc71')}
                    onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  required type="tel" placeholder="(347) 555-0100"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#2ecc71')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Facility Type *</label>
                <select
                  required value={formData.facilityType}
                  onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                  style={{ ...inputStyle, color: formData.facilityType ? '#222' : '#aaa', appearance: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = '#2ecc71')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                >
                  <option value="">Select your facility type...</option>
                  <option value="school">K-12 School or Charter School</option>
                  <option value="healthcare">Healthcare / Medical Office</option>
                  <option value="government">Government / Municipal Building</option>
                  <option value="worship">House of Worship</option>
                  <option value="daycare">Daycare / Childcare Center</option>
                  <option value="office">Commercial Office Building</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Facility Address *</label>
                <input
                  required type="text" placeholder="123 Grand Concourse, Bronx, NY 10451"
                  value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#2ecc71')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Preferred Inspection Date <span style={{ color: '#bbb', textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>(optional)</span></label>
                <input
                  type="date" min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#2ecc71')}
                  onBlur={(e) => (e.target.style.borderColor = '#e5e5e5')}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', padding: '15px', background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
                  border: 'none', borderRadius: 9, color: '#fff', fontSize: 16, fontWeight: 700,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  boxShadow: '0 4px 20px rgba(46,204,113,0.3)',
                }}
              >
                Book My Free Inspection →
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: '#aaa', marginTop: 14, fontFamily: "'DM Sans', sans-serif" }}>
                No obligation. No cost. We'll confirm within one business day.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: '#0d2818', padding: '40px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['MBE / MWBE Certified', '$2M+ Insured & Bonded', 'Background-Checked Team', 'JaniTrack Verified', 'No Obligation'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.2)', borderRadius: 100, padding: '6px 14px' }}>
              <span style={{ color: '#2ecc71', fontWeight: 700, fontSize: 12 }}>✓</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 24, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
          Questions? Call us directly: <a href={PHONE_HREF} style={{ color: '#2ecc71', fontWeight: 700, textDecoration: 'none' }}>{PHONE_NUMBER}</a>
        </p>
      </section>

      <SiteFooter />

      <style>{`
        @media (max-width: 600px) {
          form > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
