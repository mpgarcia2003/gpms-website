"use client";
import { useState } from "react";

const emptyEmployer = { company_name: "", phone: "", supervisor_name: "", job_title: "", start_date: "", end_date: "", reason_for_leaving: "", may_contact: true, duties: "" };
const emptyReference = { name: "", phone: "", relationship: "", years_known: "" };
const skillOptions = ["Floor care (stripping, waxing, buffing)", "Carpet cleaning / extraction", "Restroom sanitation", "Window cleaning", "Trash removal / recycling", "Light maintenance / handyman", "Snow removal", "Healthcare cleaning protocols", "Floor machines / auto-scrubbers", "OSHA certified", "Supervisory experience", "Bilingual"];
const ackList = [
  { key: "ack_independent_company", text: "I understand that GreenPoint is an independent company and is not a successor to any other employer. No prior seniority, pay rate, or benefits carry over." },
  { key: "ack_at_will", text: "I understand employment with GreenPoint is at-will. Either party may end the relationship at any time." },
  { key: "ack_wages_by_greenpoint", text: "My wages, benefits, schedule, and all employment terms will be determined exclusively by GreenPoint." },
  { key: "ack_truthfulness", text: "All information in this application is true. False statements may result in rejection or termination." },
  { key: "ack_authorize_verification", text: "I authorize GreenPoint to verify information and contact previous employers and references." },
  { key: "ack_not_a_contract", text: "This application is not a contract of employment or guarantee of any position." },
  { key: "ack_i9_compliance", text: "If hired, I will provide work authorization documents (Form I-9) within 3 business days." },
  { key: "ack_site_requirements", text: "If hired, I may need to complete background checks, health screenings, and drug testing." },
];

const S = {
  input: { width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, fontFamily: "var(--body)", outline: "none", boxSizing: "border-box" },
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "var(--dark-text)", marginBottom: 6, fontFamily: "var(--body)" },
  section: { background: "var(--green)", color: "#fff", padding: "10px 18px", borderRadius: 8, fontSize: 17, fontWeight: 700, fontFamily: "var(--heading)", marginBottom: 20 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  card: { border: "1px solid var(--border)", borderRadius: 10, padding: 20, marginBottom: 16 },
};

export default function ApplicationForm({ positions }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [f, setF] = useState({ full_name: "", street_address: "", city: "", state: "", zip_code: "", phone: "", email: "", date_available: "", desired_position: "", desired_wage: "" });
  const [authWork, setAuthWork] = useState(null);
  const [is18, setIs18] = useState(null);
  const [avail, setAvail] = useState([]);
  const [employers, setEmployers] = useState([{ ...emptyEmployer }]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState("");
  const [extraSkills, setExtraSkills] = useState("");
  const [refs, setRefs] = useState([{ ...emptyReference }]);
  const [ec, setEc] = useState({ name: "", phone: "", relationship: "" });
  const [acks, setAcks] = useState({});
  const [sig, setSig] = useState({ name: "", date: "" });

  const set = (k, v) => setF(p => ({ ...p, [k]: v }));
  const toggle = (arr, v, fn) => fn(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);
  const updEmp = (i, k, v) => setEmployers(p => { const u = [...p]; u[i] = { ...u[i], [k]: v }; return u; });
  const updRef = (i, k, v) => setRefs(p => { const u = [...p]; u[i] = { ...u[i], [k]: v }; return u; });

  const submit = async () => {
    setError("");
    if (!f.full_name || !f.street_address || !f.city || !f.state || !f.zip_code || !f.phone || !f.email) { setError("Please fill all required fields."); return; }
    if (!f.date_available || !f.desired_position) { setError("Select position and start date."); return; }
    if (authWork !== true) { setError("Must be authorized to work in the US."); return; }
    if (is18 !== true) { setError("Must be 18 or older."); return; }
    if (!ackList.every(a => acks[a.key])) { setError("Accept all acknowledgments."); return; }
    if (!sig.name || !sig.date) { setError("Provide signature and date."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/applications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, authorized_to_work: authWork, is_18_or_older: is18, availability: avail, employment_history: employers.filter(e => e.company_name), skills, languages, additional_skills: extraSkills, applicant_references: refs.filter(r => r.name), emergency_contact_name: ec.name, emergency_contact_phone: ec.phone, emergency_contact_relationship: ec.relationship, ...Object.fromEntries(ackList.map(a => [a.key, !!acks[a.key]])), signature_name: sig.name, signature_date: sig.date }) });
      if (!res.ok) { const d = await res.json(); setError(d.error || "Failed."); return; }
      setSubmitted(true);
    } catch { setError("Network error."); } finally { setSubmitting(false); }
  };

  if (submitted) return (<div style={{ background: "var(--green-light)", border: "1px solid var(--green)", borderRadius: 12, padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 48, marginBottom: 12 }}>{"\u2713"}</div><h3 style={{ fontFamily: "var(--heading)", fontSize: 24, fontWeight: 700, color: "var(--dark-text)", marginBottom: 8 }}>Application Submitted</h3><p style={{ color: "var(--body-text)", maxWidth: 480, margin: "0 auto" }}>Thank you for your interest. We will contact you if your qualifications match our openings.</p></div>);

  const Field = ({ label, k, type = "text", span2, ...rest }) => (<div style={span2 ? { gridColumn: "1 / -1" } : {}}><label style={S.label}>{label}</label><input type={type} style={S.input} value={f[k]} onChange={e => set(k, e.target.value)} {...rest} /></div>);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <div style={{ background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 12, padding: 20 }}><strong style={{ color: "#92400E" }}>Important Notice:</strong><p style={{ color: "#92400E", fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>GreenPoint Maintenance Services Corp is an independent company. Employment does not carry over any terms, seniority, pay rates, or agreements from any prior employer.</p></div>

      <div><div style={S.section}>Personal Information</div><div style={S.grid2}>
        <Field label="Full Legal Name *" k="full_name" span2 placeholder="Last, First, Middle" />
        <Field label="Street Address *" k="street_address" span2 />
        <Field label="City *" k="city" /><div style={S.grid2}><Field label="State *" k="state" /><Field label="ZIP *" k="zip_code" /></div>
        <Field label="Phone *" k="phone" type="tel" /><Field label="Email *" k="email" type="email" />
        <Field label="Available Start Date *" k="date_available" type="date" />
        <div><label style={S.label}>Position *</label><select style={S.input} value={f.desired_position} onChange={e => set("desired_position", e.target.value)}><option value="">Select...</option>{positions.map(p => <option key={p}>{p}</option>)}<option>Other</option></select></div>
        <Field label="Desired Wage" k="desired_wage" placeholder="e.g. $18/hr" />
      </div>
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
        <div><label style={S.label}>Authorized to work in the US? *</label><div style={{ display: "flex", gap: 20 }}><label style={{ cursor: "pointer" }}><input type="radio" name="auth" checked={authWork === true} onChange={() => setAuthWork(true)} /> Yes</label><label style={{ cursor: "pointer" }}><input type="radio" name="auth" checked={authWork === false} onChange={() => setAuthWork(false)} /> No</label></div></div>
        <div><label style={S.label}>18 or older? *</label><div style={{ display: "flex", gap: 20 }}><label style={{ cursor: "pointer" }}><input type="radio" name="age" checked={is18 === true} onChange={() => setIs18(true)} /> Yes</label><label style={{ cursor: "pointer" }}><input type="radio" name="age" checked={is18 === false} onChange={() => setIs18(false)} /> No</label></div></div>
        <div><label style={S.label}>Availability</label><div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{["Full-Time","Part-Time","Weekends","Evenings","Holidays"].map(o => <label key={o} style={{ cursor: "pointer", fontSize: 14 }}><input type="checkbox" checked={avail.includes(o)} onChange={() => toggle(avail, o, setAvail)} /> {o}</label>)}</div></div>
      </div></div>

      <div><div style={S.section}>Employment History</div>
      {employers.map((emp, i) => <div key={i} style={S.card}><strong>Employer {i + 1}</strong><div style={{ ...S.grid2, marginTop: 12 }}>
        <div style={{ gridColumn: "1/-1" }}><label style={S.label}>Company</label><input style={S.input} value={emp.company_name} onChange={e => updEmp(i, "company_name", e.target.value)} /></div>
        <div><label style={S.label}>Phone</label><input style={S.input} value={emp.phone} onChange={e => updEmp(i, "phone", e.target.value)} /></div>
        <div><label style={S.label}>Supervisor</label><input style={S.input} value={emp.supervisor_name} onChange={e => updEmp(i, "supervisor_name", e.target.value)} /></div>
        <div><label style={S.label}>Title</label><input style={S.input} value={emp.job_title} onChange={e => updEmp(i, "job_title", e.target.value)} /></div>
        <div style={S.grid2}><div><label style={S.label}>Start</label><input type="date" style={S.input} value={emp.start_date} onChange={e => updEmp(i, "start_date", e.target.value)} /></div><div><label style={S.label}>End</label><input type="date" style={S.input} value={emp.end_date} onChange={e => updEmp(i, "end_date", e.target.value)} /></div></div>
        <div style={{ gridColumn: "1/-1" }}><label style={S.label}>Reason for Leaving</label><input style={S.input} value={emp.reason_for_leaving} onChange={e => updEmp(i, "reason_for_leaving", e.target.value)} /></div>
        <div style={{ gridColumn: "1/-1" }}><label style={S.label}>Duties</label><textarea style={{ ...S.input, minHeight: 60 }} value={emp.duties} onChange={e => updEmp(i, "duties", e.target.value)} /></div>
      </div></div>)}
      {employers.length < 3 && <button onClick={() => setEmployers(p => [...p, { ...emptyEmployer }])} style={{ background: "none", border: "none", color: "var(--green)", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>+ Add Employer</button>}</div>

      <div><div style={S.section}>Skills</div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>{skillOptions.map(s => <label key={s} style={{ fontSize: 14, cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 6 }}><input type="checkbox" checked={skills.includes(s)} onChange={() => toggle(skills, s, setSkills)} style={{ marginTop: 2 }} />{s}</label>)}</div>
      <div style={S.grid2}><div><label style={S.label}>Languages</label><input style={S.input} value={languages} onChange={e => setLanguages(e.target.value)} placeholder="e.g. English, Spanish" /></div><div><label style={S.label}>Other Skills</label><input style={S.input} value={extraSkills} onChange={e => setExtraSkills(e.target.value)} /></div></div></div>

      <div><div style={S.section}>References</div>{refs.map((r, i) => <div key={i} style={{ ...S.grid2, marginBottom: 12 }}><div><label style={S.label}>Name</label><input style={S.input} value={r.name} onChange={e => updRef(i, "name", e.target.value)} /></div><div><label style={S.label}>Phone</label><input style={S.input} value={r.phone} onChange={e => updRef(i, "phone", e.target.value)} /></div><div><label style={S.label}>Relationship</label><input style={S.input} value={r.relationship} onChange={e => updRef(i, "relationship", e.target.value)} /></div><div><label style={S.label}>Years Known</label><input style={S.input} value={r.years_known} onChange={e => updRef(i, "years_known", e.target.value)} /></div></div>)}
      {refs.length < 2 && <button onClick={() => setRefs(p => [...p, { ...emptyReference }])} style={{ background: "none", border: "none", color: "var(--green)", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>+ Add Reference</button>}</div>

      <div><div style={S.section}>Emergency Contact</div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}><div><label style={S.label}>Name</label><input style={S.input} value={ec.name} onChange={e => setEc(p => ({ ...p, name: e.target.value }))} /></div><div><label style={S.label}>Phone</label><input style={S.input} value={ec.phone} onChange={e => setEc(p => ({ ...p, phone: e.target.value }))} /></div><div><label style={S.label}>Relationship</label><input style={S.input} value={ec.relationship} onChange={e => setEc(p => ({ ...p, relationship: e.target.value }))} /></div></div></div>

      <div><div style={S.section}>Acknowledgments</div><p style={{ fontSize: 14, color: "var(--body-text)", marginBottom: 16 }}>Read and check each box. <strong>All required.</strong></p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{ackList.map((a, i) => <label key={a.key} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, borderRadius: 8, border: acks[a.key] ? "1px solid var(--green)" : "1px solid var(--border)", background: acks[a.key] ? "var(--green-light)" : "#fff", cursor: "pointer", transition: "all 0.2s" }}><input type="checkbox" checked={!!acks[a.key]} onChange={e => setAcks(p => ({ ...p, [a.key]: e.target.checked }))} style={{ marginTop: 2, width: 18, height: 18, flexShrink: 0 }} /><span style={{ fontSize: 14, color: "var(--body-text)", lineHeight: 1.5 }}><strong>{i + 1}.</strong> {a.text}</span></label>)}</div></div>

      <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: 8, padding: 16 }}><strong style={{ fontSize: 13 }}>NYC Fair Chance Act</strong><p style={{ fontSize: 12, color: "var(--subtle-text)", marginTop: 4 }}>GreenPoint will not inquire about criminal history until after a conditional offer. A record does not automatically disqualify.</p></div>

      <div><div style={S.section}>Digital Signature</div><p style={{ fontSize: 14, color: "var(--body-text)", marginBottom: 16 }}>By typing your name, you certify all information is accurate and agree to the terms above.</p>
      <div style={S.grid2}><div><label style={S.label}>Full Legal Name *</label><input style={{ ...S.input, fontWeight: 600 }} value={sig.name} onChange={e => setSig(p => ({ ...p, name: e.target.value }))} /></div><div><label style={S.label}>Date *</label><input type="date" style={S.input} value={sig.date} onChange={e => setSig(p => ({ ...p, date: e.target.value }))} /></div></div></div>

      {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", color: "#DC2626", borderRadius: 8, padding: 14, fontSize: 14 }}>{error}</div>}

      <div style={{ textAlign: "center", paddingTop: 16 }}><button onClick={submit} disabled={submitting} style={{ background: "var(--green)", color: "#fff", padding: "14px 48px", borderRadius: 10, fontWeight: 700, fontSize: 16, border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.5 : 1, fontFamily: "var(--heading)", boxShadow: "0 4px 20px rgba(27,122,61,0.25)" }}>{submitting ? "Submitting..." : "Submit Application"}</button><p style={{ color: "var(--subtle-text)", fontSize: 12, marginTop: 12 }}>Submitted securely and stored confidentially.</p></div>
    </div>
  );
}
