"use client";

import { useState } from "react";

const PACKET_URL = "/GreenPoint_Eligibility_Packet_FILLABLE.pdf";

const EYE = ["Black","Blue","Brown","Gray","Green","Hazel","Maroon","Pink","Multicolored"];
const HAIR = ["Bald","Black","Blond or","Strawberry","Brown","Gray","Red or","Auburn","Sandy","White Blue","Green","Orange","Pink Purple","Unknown"];
const FLU = [
  ["provider","I received my flu vaccination from my Health Care Provider"],
  ["startcare_citymd","I received my flu vaccination from an Authorized Provider / CityMD"],
  ["exemption","I have an exemption (will attach DOH-4482)"],
  ["refuse","I decline the flu vaccination and understand I must wear PPE"],
];
const COVID = [
  ["provider","I received my COVID vaccination from my Health Care Provider"],
  ["pharmacy","I received my COVID vaccination from my local pharmacy"],
  ["exemption","I have an exemption (will attach DOH-4482)"],
  ["refuse","I decline the COVID vaccination and understand I must wear PPE"],
];

const S = {
  wrap: { maxWidth: 680, margin: "0 auto", padding: "40px 18px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif", color: "#1a2027" },
  brand: { color: "#1f7a3d", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: ".03em" },
  h1: { fontSize: 26, fontWeight: 800, margin: "6px 0 6px" },
  p: { fontSize: 15, lineHeight: 1.6, color: "#3a444e" },
  card: { border: "1px solid #e2e6ea", borderRadius: 12, padding: 20, marginTop: 22, background: "#fff" },
  sec: { fontSize: 12, fontWeight: 700, color: "#1f7a3d", textTransform: "uppercase", letterSpacing: ".05em", margin: "20px 0 2px" },
  label: { display: "block", fontSize: 13.5, fontWeight: 600, margin: "12px 0 5px" },
  input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #c8cfd6", fontSize: 16, boxSizing: "border-box", background: "#fff" },
  row2: { display: "flex", gap: 12, flexWrap: "wrap" },
  col: { flex: "1 1 200px", minWidth: 0 },
  ynwrap: { display: "flex", gap: 18, marginTop: 4 },
  yn: { display: "flex", alignItems: "center", gap: 6, fontSize: 15 },
  opt: { display: "flex", gap: 8, alignItems: "flex-start", margin: "8px 0", fontSize: 14.5 },
  dl: { display: "inline-block", background: "#1f7a3d", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 8, fontWeight: 600, fontSize: 15 },
  btn: { width: "100%", marginTop: 18, background: "#1f7a3d", color: "#fff", border: 0, padding: "15px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" },
  note: { fontSize: 12.5, color: "#6b7682", marginTop: 12, lineHeight: 1.5 },
  err: { background: "#fdecec", color: "#a3271f", padding: "10px 12px", borderRadius: 8, fontSize: 14, marginTop: 12 },
  ok: { textAlign: "center", padding: "30px 10px" },
};

export default function BackgroundCheckForm() {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [upStatus, setUpStatus] = useState("idle");
  const [upError, setUpError] = useState("");
  const [fileName, setFileName] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submitOnline(e) {
    e.preventDefault();
    setError(""); setStatus("submitting");
    try {
      const res = await fetch("/api/apply-online", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setError(data.error || "Something went wrong. Please try again."); setStatus("idle"); return; }
      setStatus("success");
    } catch { setError("Network error. Please try again."); setStatus("idle"); }
  }

  async function submitUpload(e) {
    e.preventDefault();
    setUpError(""); setUpStatus("submitting");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/background-check", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setUpError(data.error || "Something went wrong."); setUpStatus("idle"); return; }
      setUpStatus("success");
    } catch { setUpError("Network error. Please try again."); setUpStatus("idle"); }
  }

  const Text = (name, label, opts = {}) => (
    <div style={S.col}>
      <label style={S.label}>{label}{opts.req ? " *" : ""}</label>
      <input style={S.input} type={opts.type || "text"} value={form[name] || ""} onChange={set(name)} required={!!opts.req} autoComplete={opts.ac || "off"} />
    </div>
  );
  const Sel = (name, label, options) => (
    <div style={S.col}>
      <label style={S.label}>{label}</label>
      <select style={S.input} value={form[name] || ""} onChange={set(name)}>
        <option value="">Select…</option>
        {options.map((o) => { const [v, t] = Array.isArray(o) ? o : [o, o]; return <option key={v} value={v}>{t}</option>; })}
      </select>
    </div>
  );
  const YesNo = (name, label) => (
    <div style={S.col}>
      <label style={S.label}>{label}</label>
      <div style={S.ynwrap}>
        {["Yes", "No"].map((v) => (
          <label key={v} style={S.yn}><input type="radio" name={name} value={v} checked={form[name] === v} onChange={set(name)} /> {v}</label>
        ))}
      </div>
    </div>
  );
  const Opts = (name, label, options) => (
    <div>
      <label style={S.label}>{label}</label>
      {options.map(([v, t]) => (
        <label key={v} style={S.opt}><input type="radio" name={name} value={v} checked={form[name] === v} onChange={set(name)} style={{ marginTop: 3 }} /> <span>{t}</span></label>
      ))}
    </div>
  );

  if (status === "success") {
    return (
      <div style={S.wrap}><div style={S.ok}>
        <div style={{ fontSize: 46 }}>&#10003;</div>
        <h1 style={S.h1}>Application received</h1>
        <p style={S.p}>Thank you. Your application has been sent to GreenPoint Maintenance Services. Our team will reach out about next steps, including in-person fingerprinting and signing the official forms.</p>
      </div></div>
    );
  }

  return (
    <div style={S.wrap}>
      <div style={S.brand}>GreenPoint Maintenance Services</div>
      <h1 style={S.h1}>Pre-Employment Application</h1>
      <p style={S.p}>Welcome. The fastest way to apply is to fill out the short form below right here on your phone or computer — no download needed. This page is private to invited applicants.</p>

      <form onSubmit={submitOnline} style={S.card}>
        <div style={S.sec}>Your information</div>
        <div style={S.row2}>{Text("full_name", "Full legal name", { req: true, ac: "name" })}{Text("today_date", "Today's date", { type: "date" })}</div>
        <div style={S.row2}>{Text("email", "Email", { req: true, type: "email", ac: "email" })}{Text("phone", "Phone", { req: true, type: "tel", ac: "tel" })}</div>

        <div style={S.sec}>Demographics</div>
        <div style={S.row2}>{Text("first_name_mi", "First name & middle initial")}{Text("last_name", "Last name")}</div>
        <div style={S.row2}>{Text("date_of_birth", "Date of birth", { type: "date" })}{Text("country_of_birth", "Country of birth")}</div>
        <div style={S.row2}>{Text("state_of_birth", "If US, state of birth")}{Text("country_of_citizenship", "Country of citizenship")}</div>
        <div style={S.row2}>{YesNo("maiden_previous_name", "Ever used a maiden / previous name?")}{YesNo("used_alias", "Ever used an alias?")}</div>
        {YesNo("mailing_same_residential", "Is your mailing address the same as your residential address?")}
        <label style={S.label}>Full home address (include apt # if applicable)</label>
        <textarea style={{ ...S.input, minHeight: 70, resize: "vertical" }} value={form.full_home_address || ""} onChange={set("full_home_address")} />

        <div style={S.sec}>Physical description</div>
        <div style={S.row2}>{Text("height", "Height")}{Text("weight", "Weight")}{Text("gender", "Gender")}</div>
        <div style={S.row2}>{Text("preferred_language", "Preferred language")}{Text("race", "Race")}{Text("ethnicity", "Ethnicity")}</div>
        <div style={S.row2}>{Sel("eye_color", "Eye color", EYE)}{Sel("hair_color", "Hair color", HAIR)}</div>

        <div style={S.sec}>Influenza attestation</div>
        {Opts("flu_option", "Select one:", FLU)}
        <div style={S.sec}>COVID attestation</div>
        {Opts("covid_option", "Select one:", COVID)}

        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={form.company_website || ""} onChange={set("company_website")} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

        {error ? <div style={S.err}>{error}</div> : null}
        <p style={S.note}>By submitting, you certify the information is true and acknowledge receipt of the fingerprinting notice (Justice Center / OASAS / OMH). Your typed name serves as your signature for this acknowledgment. The official state forms are signed in person at onboarding.</p>
        <button style={S.btn} type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Submit application"}</button>
      </form>

      <div style={S.card}>
        <div style={S.sec}>Prefer the full PDF? (best on a computer)</div>
        <p style={S.p}>You can download the complete packet, fill it in Adobe Acrobat Reader, and upload it back here. This includes the official state forms.</p>
        <a style={S.dl} href={PACKET_URL} download>Download the full packet (PDF)</a>
        {upStatus === "success" ? (
          <p style={{ ...S.p, color: "#1f7a3d", fontWeight: 600, marginTop: 16 }}>&#10003; Your completed packet was sent. Thank you.</p>
        ) : (
          <form onSubmit={submitUpload} style={{ marginTop: 16 }}>
            <div style={S.row2}>{Text("up_name", "Full name", { req: true })}{Text("up_email", "Email", { req: true, type: "email" })}</div>
            <input type="hidden" name="full_name" value={form.up_name || ""} />
            <input type="hidden" name="email" value={form.up_email || ""} />
            <input type="hidden" name="phone" value={form.phone || form.up_phone || "n/a"} />
            <label style={S.label}>Upload completed packet (PDF) *</label>
            <input style={S.input} type="file" name="packet" accept="application/pdf,.pdf" required onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
            {fileName ? <div style={{ fontSize: 13, color: "#1f7a3d", marginTop: 6 }}>Selected: {fileName}</div> : null}
            {upError ? <div style={S.err}>{upError}</div> : null}
            <button style={S.btn} type="submit" disabled={upStatus === "submitting"}>{upStatus === "submitting" ? "Sending…" : "Upload completed packet"}</button>
          </form>
        )}
      </div>

      <p style={S.note}>Your information is sent directly and securely to GreenPoint Maintenance Services and is not posted publicly or stored in a database. Please do not email these documents elsewhere, as they contain sensitive personal information.</p>
    </div>
  );
}
