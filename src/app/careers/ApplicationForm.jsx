"use client";
import { useState, useEffect } from "react";
import { POSITIONS, SKILLS, AVAILABILITY, ACKS, T, label } from "./careers-i18n";

const emptyEmployer = { company_name: "", phone: "", supervisor_name: "", job_title: "", start_date: "", end_date: "", reason_for_leaving: "", may_contact: true, duties: "" };
const emptyReference = { name: "", phone: "", relationship: "", years_known: "" };

const S = {
  input: { width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, fontFamily: "var(--body)", outline: "none", boxSizing: "border-box" },
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "var(--dark-text)", marginBottom: 6, fontFamily: "var(--body)" },
  section: { background: "var(--green)", color: "#fff", padding: "10px 18px", borderRadius: 8, fontSize: 17, fontWeight: 700, fontFamily: "var(--heading)", marginBottom: 20 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  span2: { gridColumn: "1 / -1" },
  card: { border: "1px solid var(--border)", borderRadius: 10, padding: 20, marginBottom: 16 },
};

export default function ApplicationForm() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.language && navigator.language.toLowerCase().startsWith("es")) {
      setLang("es");
    }
  }, []);
  const t = (k) => (T[lang] && T[lang][k]) ?? k;

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

  const setField = (k, v) => setF(p => ({ ...p, [k]: v }));
  const toggle = (arr, v, fn) => fn(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);
  const updEmp = (i, k, v) => setEmployers(p => { const u = [...p]; u[i] = { ...u[i], [k]: v }; return u; });
  const updRef = (i, k, v) => setRefs(p => { const u = [...p]; u[i] = { ...u[i], [k]: v }; return u; });

  const submit = async () => {
    setError("");
    if (!f.full_name || !f.street_address || !f.city || !f.state || !f.zip_code || !f.phone || !f.email) { setError(t("err.required")); return; }
    if (!f.date_available || !f.desired_position) { setError(t("err.position")); return; }
    if (authWork !== true) { setError(t("err.auth")); return; }
    if (is18 !== true) { setError(t("err.age")); return; }
    if (!ACKS.every(a => acks[a.key])) { setError(t("err.acks")); return; }
    if (!sig.name || !sig.date) { setError(t("err.sig")); return; }
    setSubmitting(true);
    try {
      const payload = {
        ...f,
        authorized_to_work: authWork,
        is_18_or_older: is18,
        availability: avail,
        employment_history: employers.filter(e => e.company_name),
        skills,
        languages,
        additional_skills: extraSkills,
        applicant_references: refs.filter(r => r.name),
        emergency_contact_name: ec.name,
        emergency_contact_phone: ec.phone,
        emergency_contact_relationship: ec.relationship,
        ...Object.fromEntries(ACKS.map(a => [a.key, !!acks[a.key]])),
        signature_name: sig.name,
        signature_date: sig.date,
        submitted_at: new Date().toISOString(),
      };
      const res = await fetch("/api/applications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) { const d = await res.json(); setError(d.error || t("err.failed")); return; }
      setSubmitted(true);
    } catch { setError(t("err.network")); } finally { setSubmitting(false); }
  };

  if (submitted) return (
    <div style={{ background: "var(--green-light)", border: "1px solid var(--green)", borderRadius: 12, padding: "48px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>{"\u2713"}</div>
      <h3 style={{ fontFamily: "var(--heading)", fontSize: 24, fontWeight: 700, color: "var(--dark-text)", marginBottom: 8 }}>{t("success.title")}</h3>
      <p style={{ color: "var(--body-text)", maxWidth: 480, margin: "0 auto" }}>{t("success.body")}</p>
    </div>
  );

  const langBtn = (code, text) => (
    <button type="button" onClick={() => setLang(code)} style={{ padding: "6px 16px", borderRadius: 8, border: lang === code ? "2px solid var(--green)" : "1px solid var(--border)", background: lang === code ? "var(--green)" : "#fff", color: lang === code ? "#fff" : "var(--dark-text)", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "var(--body)" }}>{text}</button>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {/* Language toggle */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        {langBtn("en", "English")}
        {langBtn("es", "Español")}
      </div>

      {/* Intro */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--heading)", fontSize: 32, fontWeight: 700, color: "var(--dark-text)", marginBottom: 8 }}>{t("intro.heading")}</h2>
        <p style={{ color: "var(--body-text)", marginBottom: 8 }}>{t("intro.required")}</p>
        <p style={{ color: "var(--subtle-text)", fontSize: 14 }}>{t("intro.paperPrefix")}<a href="/GreenPoint_Employment_Application.pdf" download style={{ color: "var(--green)", fontWeight: 600 }}>{t("intro.paperLink")}</a>{t("intro.paperSuffix")}</p>
      </div>

      {/* Notice */}
      <div style={{ background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 12, padding: 20 }}>
        <strong style={{ color: "#92400E" }}>{t("notice.title")}</strong>
        <p style={{ color: "#92400E", fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>{t("notice.body")}</p>
      </div>

      {/* Personal Info */}
      <div>
        <div style={S.section}>{t("sec.personal")}</div>
        <div style={S.grid2}>
          <div style={S.span2}><label style={S.label}>{t("f.fullName")} *</label><input style={S.input} value={f.full_name} onChange={e => setField("full_name", e.target.value)} placeholder={t("ph.fullName")} /></div>
          <div style={S.span2}><label style={S.label}>{t("f.street")} *</label><input style={S.input} value={f.street_address} onChange={e => setField("street_address", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.city")} *</label><input style={S.input} value={f.city} onChange={e => setField("city", e.target.value)} /></div>
          <div style={S.grid2}>
            <div><label style={S.label}>{t("f.state")} *</label><input style={S.input} value={f.state} onChange={e => setField("state", e.target.value)} /></div>
            <div><label style={S.label}>{t("f.zip")} *</label><input style={S.input} value={f.zip_code} onChange={e => setField("zip_code", e.target.value)} /></div>
          </div>
          <div><label style={S.label}>{t("f.phone")} *</label><input type="tel" style={S.input} value={f.phone} onChange={e => setField("phone", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.email")} *</label><input type="email" style={S.input} value={f.email} onChange={e => setField("email", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.startDate")} *</label><input type="date" style={S.input} value={f.date_available} onChange={e => setField("date_available", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.position")} *</label><select style={S.input} value={f.desired_position} onChange={e => setField("desired_position", e.target.value)}><option value="">{t("opt.select")}</option>{POSITIONS.map(p => <option key={p.value} value={p.value}>{label(p, lang)}</option>)}<option value="Other">{t("opt.other")}</option></select></div>
          <div><label style={S.label}>{t("f.wage")}</label><input style={S.input} value={f.desired_wage} onChange={e => setField("desired_wage", e.target.value)} placeholder={t("ph.wage")} /></div>
        </div>
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div><label style={S.label}>{t("f.authWork")} *</label><div style={{ display: "flex", gap: 20 }}><label style={{ cursor: "pointer" }}><input type="radio" name="auth" checked={authWork === true} onChange={() => setAuthWork(true)} /> {t("common.yes")}</label><label style={{ cursor: "pointer" }}><input type="radio" name="auth" checked={authWork === false} onChange={() => setAuthWork(false)} /> {t("common.no")}</label></div></div>
          <div><label style={S.label}>{t("f.is18")} *</label><div style={{ display: "flex", gap: 20 }}><label style={{ cursor: "pointer" }}><input type="radio" name="age" checked={is18 === true} onChange={() => setIs18(true)} /> {t("common.yes")}</label><label style={{ cursor: "pointer" }}><input type="radio" name="age" checked={is18 === false} onChange={() => setIs18(false)} /> {t("common.no")}</label></div></div>
          <div><label style={S.label}>{t("f.availability")}</label><div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{AVAILABILITY.map(o => <label key={o.value} style={{ cursor: "pointer", fontSize: 14 }}><input type="checkbox" checked={avail.includes(o.value)} onChange={() => toggle(avail, o.value, setAvail)} /> {label(o, lang)}</label>)}</div></div>
        </div>
      </div>

      {/* Employment History */}
      <div>
        <div style={S.section}>{t("sec.employment")}</div>
        {employers.map((emp, i) => (
          <div key={i} style={S.card}>
            <strong>{t("emp.employer")} {i + 1}</strong>
            <div style={{ ...S.grid2, marginTop: 12 }}>
              <div style={S.span2}><label style={S.label}>{t("emp.company")}</label><input style={S.input} value={emp.company_name} onChange={e => updEmp(i, "company_name", e.target.value)} /></div>
              <div><label style={S.label}>{t("ref.phone")}</label><input style={S.input} value={emp.phone} onChange={e => updEmp(i, "phone", e.target.value)} /></div>
              <div><label style={S.label}>{t("emp.supervisor")}</label><input style={S.input} value={emp.supervisor_name} onChange={e => updEmp(i, "supervisor_name", e.target.value)} /></div>
              <div><label style={S.label}>{t("emp.title")}</label><input style={S.input} value={emp.job_title} onChange={e => updEmp(i, "job_title", e.target.value)} /></div>
              <div style={S.grid2}>
                <div><label style={S.label}>{t("emp.start")}</label><input type="date" style={S.input} value={emp.start_date} onChange={e => updEmp(i, "start_date", e.target.value)} /></div>
                <div><label style={S.label}>{t("emp.end")}</label><input type="date" style={S.input} value={emp.end_date} onChange={e => updEmp(i, "end_date", e.target.value)} /></div>
              </div>
              <div style={S.span2}><label style={S.label}>{t("emp.reason")}</label><input style={S.input} value={emp.reason_for_leaving} onChange={e => updEmp(i, "reason_for_leaving", e.target.value)} /></div>
              <div style={S.span2}><label style={S.label}>{t("emp.duties")}</label><textarea style={{ ...S.input, minHeight: 60 }} value={emp.duties} onChange={e => updEmp(i, "duties", e.target.value)} /></div>
            </div>
          </div>
        ))}
        {employers.length < 3 && <button type="button" onClick={() => setEmployers(p => [...p, { ...emptyEmployer }])} style={{ background: "none", border: "none", color: "var(--green)", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>{t("emp.add")}</button>}
      </div>

      {/* Skills */}
      <div>
        <div style={S.section}>{t("sec.skills")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
          {SKILLS.map(s => <label key={s.value} style={{ fontSize: 14, cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 6 }}><input type="checkbox" checked={skills.includes(s.value)} onChange={() => toggle(skills, s.value, setSkills)} style={{ marginTop: 2 }} />{label(s, lang)}</label>)}
        </div>
        <div style={S.grid2}>
          <div><label style={S.label}>{t("f.languages")}</label><input style={S.input} value={languages} onChange={e => setLanguages(e.target.value)} placeholder={t("ph.languages")} /></div>
          <div><label style={S.label}>{t("f.otherSkills")}</label><input style={S.input} value={extraSkills} onChange={e => setExtraSkills(e.target.value)} /></div>
        </div>
      </div>

      {/* References */}
      <div>
        <div style={S.section}>{t("sec.references")}</div>
        {refs.map((r, i) => (
          <div key={i} style={{ ...S.grid2, marginBottom: 12 }}>
            <div><label style={S.label}>{t("ref.name")}</label><input style={S.input} value={r.name} onChange={e => updRef(i, "name", e.target.value)} /></div>
            <div><label style={S.label}>{t("ref.phone")}</label><input style={S.input} value={r.phone} onChange={e => updRef(i, "phone", e.target.value)} /></div>
            <div><label style={S.label}>{t("ref.relationship")}</label><input style={S.input} value={r.relationship} onChange={e => updRef(i, "relationship", e.target.value)} /></div>
            <div><label style={S.label}>{t("ref.years")}</label><input style={S.input} value={r.years_known} onChange={e => updRef(i, "years_known", e.target.value)} /></div>
          </div>
        ))}
        {refs.length < 2 && <button type="button" onClick={() => setRefs(p => [...p, { ...emptyReference }])} style={{ background: "none", border: "none", color: "var(--green)", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>{t("ref.add")}</button>}
      </div>

      {/* Emergency Contact */}
      <div>
        <div style={S.section}>{t("sec.emergency")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <div><label style={S.label}>{t("ref.name")}</label><input style={S.input} value={ec.name} onChange={e => setEc(p => ({ ...p, name: e.target.value }))} /></div>
          <div><label style={S.label}>{t("ref.phone")}</label><input style={S.input} value={ec.phone} onChange={e => setEc(p => ({ ...p, phone: e.target.value }))} /></div>
          <div><label style={S.label}>{t("ref.relationship")}</label><input style={S.input} value={ec.relationship} onChange={e => setEc(p => ({ ...p, relationship: e.target.value }))} /></div>
        </div>
      </div>

      {/* Acknowledgments */}
      <div>
        <div style={S.section}>{t("sec.acks")}</div>
        <p style={{ fontSize: 14, color: "var(--body-text)", marginBottom: 16 }}>{t("acks.instruction")} <strong>{t("acks.allRequired")}</strong></p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ACKS.map((a, i) => (
            <label key={a.key} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, borderRadius: 8, border: acks[a.key] ? "1px solid var(--green)" : "1px solid var(--border)", background: acks[a.key] ? "var(--green-light)" : "#fff", cursor: "pointer", transition: "all 0.2s" }}>
              <input type="checkbox" checked={!!acks[a.key]} onChange={e => setAcks(p => ({ ...p, [a.key]: e.target.checked }))} style={{ marginTop: 2, width: 18, height: 18, flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: "var(--body-text)", lineHeight: 1.5 }}><strong>{i + 1}.</strong> {label(a, lang)}</span>
            </label>
          ))}
        </div>
        {lang === "es" && <p style={{ fontSize: 12, color: "var(--subtle-text)", marginTop: 12, fontStyle: "italic" }}>{t("acks.disclaimer")}</p>}
      </div>

      {/* Fair Chance */}
      <div style={{ background: "var(--off-white)", border: "1px solid var(--border)", borderRadius: 8, padding: 16 }}>
        <strong style={{ fontSize: 13 }}>{t("fairchance.title")}</strong>
        <p style={{ fontSize: 12, color: "var(--subtle-text)", marginTop: 4 }}>{t("fairchance.body")}</p>
      </div>

      {/* Signature */}
      <div>
        <div style={S.section}>{t("sec.signature")}</div>
        <p style={{ fontSize: 14, color: "var(--body-text)", marginBottom: 16 }}>{t("sig.cert")}</p>
        <div style={S.grid2}>
          <div><label style={S.label}>{t("f.fullName")} *</label><input style={{ ...S.input, fontWeight: 600 }} value={sig.name} onChange={e => setSig(p => ({ ...p, name: e.target.value }))} /></div>
          <div><label style={S.label}>{t("sig.date")} *</label><input type="date" style={S.input} value={sig.date} onChange={e => setSig(p => ({ ...p, date: e.target.value }))} /></div>
        </div>
      </div>

      {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", color: "#DC2626", borderRadius: 8, padding: 14, fontSize: 14 }}>{error}</div>}

      <div style={{ textAlign: "center", paddingTop: 16 }}>
        <button type="button" onClick={submit} disabled={submitting} style={{ background: "var(--green)", color: "#fff", padding: "14px 48px", borderRadius: 10, fontWeight: 700, fontSize: 16, border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.5 : 1, fontFamily: "var(--heading)", boxShadow: "0 4px 20px rgba(27,122,61,0.25)" }}>{submitting ? t("btn.submitting") : t("btn.submit")}</button>
        <p style={{ color: "var(--subtle-text)", fontSize: 12, marginTop: 12 }}>{t("btn.secure")}</p>
      </div>
    </div>
  );
}
