"use client";
import { useState } from "react";
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export default function IncidentReportPage() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    name: "",
    reporter_email: "",
    reporter_phone: "",
    workplace_address: "",
    incident_date: "",
    incident_time: "",
    incident_type: "",
    description: "",
    witnesses: "",
    injury_occurred: "no",
    medical_attention: "no",
    // honeypot
    company_website: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    // Client-side honeypot check
    if (form.company_website) {
      setError("Submission failed. Please try again.");
      return;
    }
    // Basic required validation
    if (!form.name || !form.workplace_address || !form.incident_date || !form.description) {
      setError("Please complete all required fields marked with *.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/incident-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again or call 347-332-9348.");
      }
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 80, fontFamily: "'DM Sans', sans-serif", background: '#fafbfa', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 30%, #122d1c 60%, #0a1a12 100%)',
          padding: '64px 24px 48px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(231, 90, 90, 0.12)',
              border: '1px solid rgba(231, 90, 90, 0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 20,
            }}>
              <span style={{ fontSize: 12, color: '#ff8a8a', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
                Company Incident Report
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(30px, 4.5vw, 46px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em',
            }}>
              Report an Incident
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto' }}>
              Submit this form as soon as possible after any incident, injury, near-miss, or accident at any GreenPoint work site. For life-threatening emergencies, <strong style={{ color: '#fff' }}>call 911 first</strong>, then call Miguel Garcia at <strong style={{ color: '#fff' }}>347-332-9348</strong>.
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            {result ? (
              <SuccessView data={result} />
            ) : (
              <form onSubmit={handleSubmit} style={{
                background: '#fff', borderRadius: 16, padding: 'clamp(28px, 5vw, 48px)', border: '1px solid #eee',
              }}>

                <div style={{
                  background: 'rgba(27,122,61,0.06)', border: '1px solid rgba(27,122,61,0.2)',
                  borderLeft: '3px solid #1B7A3D', borderRadius: 4, padding: '14px 18px', marginBottom: 28,
                  fontSize: 13, color: '#1a4d2e', lineHeight: 1.7,
                }}>
                  <strong>This form sends your report directly to Miguel Garcia at info@greenpointms.com.</strong> If you provide your email, you will receive a timestamped acknowledgment copy for your records.
                </div>

                <FieldGroup title="Reporter Information">
                  <Field label="Your Full Name" required>
                    <input type="text" required value={form.name} onChange={update("name")} style={inputStyle} placeholder="First and last name" />
                  </Field>
                  <div style={twoCol}>
                    <Field label="Your Email">
                      <input type="email" value={form.reporter_email} onChange={update("reporter_email")} style={inputStyle} placeholder="optional — for acknowledgment copy" />
                    </Field>
                    <Field label="Your Phone">
                      <input type="tel" value={form.reporter_phone} onChange={update("reporter_phone")} style={inputStyle} placeholder="optional" />
                    </Field>
                  </div>
                </FieldGroup>

                <FieldGroup title="Incident Details">
                  <Field label="Workplace Address" required helper="Where did the incident occur?">
                    <input type="text" required value={form.workplace_address} onChange={update("workplace_address")} style={inputStyle} placeholder="Full address including city, state, zip" />
                  </Field>
                  <div style={twoCol}>
                    <Field label="Date of Incident" required>
                      <input type="date" required value={form.incident_date} onChange={update("incident_date")} style={inputStyle} max={new Date().toISOString().split("T")[0]} />
                    </Field>
                    <Field label="Approximate Time">
                      <input type="time" value={form.incident_time} onChange={update("incident_time")} style={inputStyle} />
                    </Field>
                  </div>
                  <Field label="Type of Incident">
                    <select value={form.incident_type} onChange={update("incident_type")} style={inputStyle}>
                      <option value="">Select one…</option>
                      <option value="slip_trip_fall">Slip, trip, or fall</option>
                      <option value="lifting_strain">Lifting / strain injury</option>
                      <option value="cut_laceration">Cut or laceration</option>
                      <option value="chemical_exposure">Chemical exposure</option>
                      <option value="ladder_incident">Ladder incident</option>
                      <option value="equipment_incident">Equipment / machinery incident</option>
                      <option value="vehicle_accident">Vehicle accident</option>
                      <option value="property_damage">Property damage</option>
                      <option value="near_miss">Near-miss (no injury)</option>
                      <option value="other">Other</option>
                    </select>
                  </Field>
                </FieldGroup>

                <FieldGroup title="What Happened">
                  <Field label="Describe the incident in detail" required helper="Include what you were doing, how it happened, what equipment or materials were involved, and any conditions that contributed.">
                    <textarea required value={form.description} onChange={update("description")} rows={7} style={{ ...inputStyle, resize: 'vertical', minHeight: 140, fontFamily: "'DM Sans', sans-serif" }} placeholder="Describe what happened as clearly and completely as you can..." />
                  </Field>
                  <Field label="Witnesses (if any)" helper="Name(s) of anyone who saw what happened.">
                    <input type="text" value={form.witnesses} onChange={update("witnesses")} style={inputStyle} placeholder="optional" />
                  </Field>
                </FieldGroup>

                <FieldGroup title="Injury & Medical">
                  <div style={twoCol}>
                    <Field label="Did an injury occur?">
                      <select value={form.injury_occurred} onChange={update("injury_occurred")} style={inputStyle}>
                        <option value="no">No injury</option>
                        <option value="yes_minor">Yes — minor</option>
                        <option value="yes_significant">Yes — significant</option>
                        <option value="unsure">Unsure / possible delayed symptoms</option>
                      </select>
                    </Field>
                    <Field label="Was medical attention received?">
                      <select value={form.medical_attention} onChange={update("medical_attention")} style={inputStyle}>
                        <option value="no">No</option>
                        <option value="self_care">Self-care only</option>
                        <option value="urgent_care">Urgent care / clinic</option>
                        <option value="er">Emergency room</option>
                        <option value="pending">Planned but not yet received</option>
                      </select>
                    </Field>
                  </div>
                </FieldGroup>

                {/* Honeypot — hidden from users, visible to bots */}
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
                  <label>
                    Company website (leave blank):
                    <input type="text" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={update("company_website")} />
                  </label>
                </div>

                {error && (
                  <div style={{
                    background: 'rgba(231,90,90,0.08)', border: '1px solid rgba(231,90,90,0.3)',
                    borderLeft: '3px solid #e75a5a', borderRadius: 4, padding: '14px 18px', marginBottom: 20,
                    fontSize: 14, color: '#a83a3a',
                  }}>
                    {error}
                  </div>
                )}

                <div style={{
                  marginTop: 32, paddingTop: 24, borderTop: '1px solid #eee',
                  display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap',
                }}>
                  <button type="submit" disabled={submitting} style={{
                    background: submitting ? '#999' : 'linear-gradient(135deg, #1B7A3D, #16683A)',
                    color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15,
                    border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                    fontFamily: "'Syne', sans-serif", letterSpacing: '0.02em',
                    boxShadow: submitting ? 'none' : '0 4px 20px rgba(27,122,61,0.25)',
                    transition: 'all 0.2s',
                  }}>
                    {submitting ? "Submitting…" : "Submit Incident Report"}
                  </button>
                  <p style={{ fontSize: 12, color: '#888', margin: 0, maxWidth: 320 }}>
                    By submitting, you confirm the information is accurate to the best of your knowledge.
                  </p>
                </div>

                <div style={{
                  marginTop: 32, padding: 20, background: '#f5f7f5', borderRadius: 8,
                  fontSize: 13, color: '#555', lineHeight: 1.7,
                }}>
                  <strong>Emergency?</strong> For life-threatening injuries, call <a href="tel:911" style={{ color: '#1B7A3D', fontWeight: 700 }}>911</a> first, then Miguel Garcia at <a href="tel:+13473329348" style={{ color: '#1B7A3D', fontWeight: 700 }}>347-332-9348</a>.
                  <br />
                  <strong>Prefer to report another way?</strong> Email <a href="mailto:info@greenpointms.com" style={{ color: '#1B7A3D', fontWeight: 700 }}>info@greenpointms.com</a> or call/text <a href="tel:+13473329348" style={{ color: '#1B7A3D', fontWeight: 700 }}>347-332-9348</a>.
                </div>

              </form>
            )}
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}

/* ============================================================
   Helper components
   ============================================================ */

const inputStyle = {
  width: '100%', padding: '12px 14px', fontSize: 15, color: '#222',
  fontFamily: "'DM Sans', sans-serif", border: '1px solid #d6ddd8',
  borderRadius: 8, background: '#fff', outline: 'none',
  transition: 'border 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
};

const twoCol = {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
};

function FieldGroup({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#1B7A3D', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16, paddingBottom: 10,
        borderBottom: '1px solid #eee',
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Field({ label, required, helper, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6,
      }}>
        {label} {required && <span style={{ color: '#e75a5a' }}>*</span>}
      </label>
      {children}
      {helper && (
        <div style={{ fontSize: 12, color: '#888', marginTop: 6, lineHeight: 1.5 }}>
          {helper}
        </div>
      )}
    </div>
  );
}

function SuccessView({ data }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: 'clamp(32px, 6vw, 56px)', border: '1px solid #eee', textAlign: 'center',
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%', background: 'rgba(27,122,61,0.1)',
        margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1B7A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, color: '#0d2818', marginBottom: 10,
      }}>
        Report Submitted
      </h2>
      <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 24px' }}>
        Thank you for reporting this incident. Miguel Garcia has been notified and will follow up with you shortly.
      </p>
      {data?.reference_id && (
        <div style={{
          display: 'inline-block', padding: '12px 24px', background: '#f5f7f5', borderRadius: 8,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: '#333', marginBottom: 20,
        }}>
          <span style={{ color: '#888', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reference ID:</span>{' '}
          <strong>{data.reference_id}</strong>
        </div>
      )}
      <div style={{ fontSize: 13, color: '#666', marginTop: 16 }}>
        Keep this reference number for your records. If you need to follow up, email <a href="mailto:info@greenpointms.com" style={{ color: '#1B7A3D', fontWeight: 600 }}>info@greenpointms.com</a>.
      </div>
    </div>
  );
}
