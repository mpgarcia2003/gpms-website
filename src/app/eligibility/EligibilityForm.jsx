"use client";
import { useState, useEffect } from "react";
import { SEX, EYE_COLORS, HAIR_COLORS, RACE, ETHNICITY, CONVICTION, VAX_OPTIONS, ACKS, T, label } from "./eligibility-i18n";

const emptyHistory = { street: "", apt: "", city: "", state: "", zip: "", from_my: "", to_my: "" };
const emptyMember = { relationship: "", last_name: "", first_name: "", sex: "", dob: "" };

const S = {
  input: { width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, fontFamily: "var(--body)", outline: "none", boxSizing: "border-box" },
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "var(--dark-text)", marginBottom: 6, fontFamily: "var(--body)" },
  section: { background: "var(--green)", color: "#fff", padding: "10px 18px", borderRadius: 8, fontSize: 17, fontWeight: 700, fontFamily: "var(--heading)", marginBottom: 20 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  grid3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 },
  span2: { gridColumn: "1 / -1" },
  card: { border: "1px solid var(--border)", borderRadius: 10, padding: 20, marginBottom: 16 },
  lock: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--green)", fontWeight: 600, background: "var(--green-light)", padding: "1px 8px", borderRadius: 20, marginLeft: 8 },
  radios: { display: "flex", gap: 20, flexWrap: "wrap" },
};

export default function EligibilityForm() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.language && navigator.language.toLowerCase().startsWith("es")) setLang("es");
  }, []);
  const t = (k) => (T[lang] && T[lang][k]) ?? k;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [f, setF] = useState({
    first_name: "", middle_initial: "", last_name: "", date_of_birth: "", ssn: "", email: "", mobile_phone: "", reprint_contact: "",
    previous_names: "", aliases: "",
    home_street: "", home_apt: "", home_city: "", home_state: "", home_zip: "",
    mailing_street: "", mailing_apt: "", mailing_city: "", mailing_state: "", mailing_zip: "",
    country_of_birth: "", state_of_birth: "", country_of_citizenship: "",
    height: "", weight: "", gender: "", preferred_language: "", race: "", ethnicity: "", eye_color: "", hair_color: "",
    criminal_details: "",
    flu_site: "", flu_provider_name: "", flu_provider_address: "", flu_provider_phone: "", flu_vax_date: "", flu_lot: "", flu_expiration: "",
    covid_site: "", covid_provider_name: "", covid_provider_address: "", covid_provider_phone: "", covid_vax_date: "", covid_lot: "", covid_expiration: "",
    guardian_name: "",
  });
  const [usedPrev, setUsedPrev] = useState(false);
  const [usedAlias, setUsedAlias] = useState(false);
  const [mailingSame, setMailingSame] = useState(true);
  const [history, setHistory] = useState([{ ...emptyHistory }]);
  const [conviction, setConviction] = useState("");
  const [noHH, setNoHH] = useState(false);
  const [household, setHousehold] = useState([{ ...emptyMember }]);
  const [fluOpt, setFluOpt] = useState("");
  const [covidOpt, setCovidOpt] = useState("");
  const [isMinor, setIsMinor] = useState(false);
  const [acks, setAcks] = useState({});
  const [sig, setSig] = useState({ name: "", date: "" });

  const setField = (k, v) => setF(p => ({ ...p, [k]: v }));
  const updHist = (i, k, v) => setHistory(p => { const u = [...p]; u[i] = { ...u[i], [k]: v }; return u; });
  const updHH = (i, k, v) => setHousehold(p => { const u = [...p]; u[i] = { ...u[i], [k]: v }; return u; });

  const submit = async () => {
    setError("");
    const digits = (f.ssn || "").replace(/\D/g, "");
    const req = lang === "es" ? " es obligatorio" : " is required";
    const fail = (msg) => { setError(msg); if (typeof document !== "undefined") document.getElementById("elig-form-top")?.scrollIntoView({ behavior: "smooth" }); };
    const reqFields = [["first_name", "f.firstName"], ["last_name", "f.lastName"], ["date_of_birth", "f.dob"], ["email", "f.email"], ["mobile_phone", "f.phone"], ["home_street", "f.street"], ["home_city", "f.city"], ["home_state", "f.state"], ["home_zip", "f.zip"]];
    for (const [k, lk] of reqFields) { if (!f[k]) { fail(t(lk) + req); return; } }
    if (digits.length !== 9) { fail(t("err.ssn")); return; }
    if (history.filter(h => h.street && h.from_my && h.to_my).length === 0) { fail(t("err.history")); return; }
    if (!conviction) { fail((lang === "es" ? "Sección 7 (Antecedentes Penales)" : "Section 7 (Criminal History)") + req); return; }
    if ((conviction === "convicted" || conviction === "pending") && !f.criminal_details) { fail(t("err.criminal")); return; }
    if (!fluOpt) { fail((lang === "es" ? "Sección 9 (Influenza)" : "Section 9 (Influenza)") + req); return; }
    if (!covidOpt) { fail((lang === "es" ? "Sección 10 (COVID)" : "Section 10 (COVID)") + req); return; }
    if (isMinor && !f.guardian_name) { fail(t("f.guardianName") + req); return; }
    if (!ACKS.every(a => acks[a.key])) { fail(t("err.acks")); return; }
    if (!sig.name || !sig.date) { fail(t("err.sig")); return; }
    setSubmitting(true);
    try {
      const now = new Date().toISOString();
      const payload = {
        ...f,
        ssn: digits,
        reprint_contact: f.reprint_contact || f.email,
        used_previous_name: usedPrev,
        previous_names: usedPrev ? f.previous_names : "",
        used_alias: usedAlias,
        aliases: usedAlias ? f.aliases : "",
        mailing_same: mailingSame,
        mailing_street: mailingSame ? "" : f.mailing_street,
        mailing_apt: mailingSame ? "" : f.mailing_apt,
        mailing_city: mailingSame ? "" : f.mailing_city,
        mailing_state: mailingSame ? "" : f.mailing_state,
        mailing_zip: mailingSame ? "" : f.mailing_zip,
        address_history: history.filter(h => h.street || h.from_my || h.to_my),
        conviction_status: conviction,
        criminal_details: conviction === "none" ? "" : f.criminal_details,
        no_other_household_members: noHH,
        household_members: noHH ? [] : household.filter(h => h.first_name || h.last_name),
        flu_option: fluOpt,
        flu_exemption_claimed: fluOpt === "exemption",
        covid_option: covidOpt,
        covid_exemption_claimed: covidOpt === "exemption",
        is_minor: isMinor,
        guardian_name: isMinor ? f.guardian_name : "",
        submission_language: lang,
        signatures: Object.fromEntries([
          ...ACKS.map(a => [a.key, { legal_name: sig.name, signed_at: now }]),
          ...(isMinor ? [["guardian", { legal_name: f.guardian_name, signed_at: now }]] : []),
        ]),
      };
      const res = await fetch("/api/eligibility", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); setError(d.error || t("err.failed")); return; }
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

  const langBtn = (code, txt) => (
    <button type="button" onClick={() => setLang(code)} style={{ padding: "6px 16px", borderRadius: 8, border: lang === code ? "2px solid var(--green)" : "1px solid var(--border)", background: lang === code ? "var(--green)" : "#fff", color: lang === code ? "#fff" : "var(--dark-text)", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "var(--body)" }}>{txt}</button>
  );
  const YN = (name, val, setter) => (
    <div style={S.radios}>
      <label style={{ cursor: "pointer" }}><input type="radio" name={name} checked={val === true} onChange={() => setter(true)} /> {t("common.yes")}</label>
      <label style={{ cursor: "pointer" }}><input type="radio" name={name} checked={val === false} onChange={() => setter(false)} /> {t("common.no")}</label>
    </div>
  );

  return (
    <div id="elig-form-top" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>{langBtn("en", "English")}{langBtn("es", "Español")}</div>

      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--heading)", fontSize: 32, fontWeight: 700, color: "var(--dark-text)", marginBottom: 8 }}>{t("intro.heading")}</h2>
        <p style={{ color: "var(--body-text)", maxWidth: 520, margin: "0 auto 8px" }}>{t("intro.sub")}</p>
        <p style={{ color: "var(--subtle-text)", fontSize: 14 }}>{t("intro.required")}</p>
      </div>

      <div style={{ background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 12, padding: 20 }}>
        <strong style={{ color: "#92400E" }}>{t("notice.title")}</strong>
        <p style={{ color: "#92400E", fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>{t("notice.body")}</p>
      </div>

      {/* 1. Identity & Contact */}
      <div>
        <div style={S.section}>{t("sec.identity")}</div>
        <div style={S.grid3}>
          <div><label style={S.label}>{t("f.firstName")} *</label><input style={S.input} value={f.first_name} onChange={e => setField("first_name", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.mi")}</label><input style={S.input} value={f.middle_initial} onChange={e => setField("middle_initial", e.target.value)} maxLength={2} /></div>
          <div><label style={S.label}>{t("f.lastName")} *</label><input style={S.input} value={f.last_name} onChange={e => setField("last_name", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.dob")} *</label><input type="date" style={S.input} value={f.date_of_birth} onChange={e => setField("date_of_birth", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.ssn")} *<span style={S.lock} title={t("criminal.secure")}>{"\uD83D\uDD12"}</span></label><input style={S.input} value={f.ssn} onChange={e => setField("ssn", e.target.value)} placeholder={t("ph.ssn")} inputMode="numeric" /></div>
          <div><label style={S.label}>{t("f.phone")} *</label><input type="tel" style={S.input} value={f.mobile_phone} onChange={e => setField("mobile_phone", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.email")} *</label><input type="email" style={S.input} value={f.email} onChange={e => setField("email", e.target.value)} /></div>
          <div style={S.span2}><label style={S.label}>{t("f.reprint")}</label><input style={S.input} value={f.reprint_contact} onChange={e => setField("reprint_contact", e.target.value)} placeholder={t("ph.reprint")} /></div>
        </div>
      </div>

      {/* 2. Names & Aliases */}
      <div>
        <div style={S.section}>{t("sec.names")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div><label style={S.label}>{t("f.usedPrev")}</label>{YN("prev", usedPrev, setUsedPrev)}</div>
          {usedPrev && <div><label style={S.label}>{t("f.prevNames")}</label><input style={S.input} value={f.previous_names} onChange={e => setField("previous_names", e.target.value)} /></div>}
          <div><label style={S.label}>{t("f.usedAlias")}</label>{YN("alias", usedAlias, setUsedAlias)}</div>
          {usedAlias && <div><label style={S.label}>{t("f.aliases")}</label><input style={S.input} value={f.aliases} onChange={e => setField("aliases", e.target.value)} /></div>}
        </div>
      </div>

      {/* 3. Home Address */}
      <div>
        <div style={S.section}>{t("sec.address")}</div>
        <div style={S.grid2}>
          <div style={S.span2}><label style={S.label}>{t("f.street")} *</label><input style={S.input} value={f.home_street} onChange={e => setField("home_street", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.apt")}</label><input style={S.input} value={f.home_apt} onChange={e => setField("home_apt", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.city")} *</label><input style={S.input} value={f.home_city} onChange={e => setField("home_city", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.state")} *</label><input style={S.input} value={f.home_state} onChange={e => setField("home_state", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.zip")} *</label><input style={S.input} value={f.home_zip} onChange={e => setField("home_zip", e.target.value)} /></div>
        </div>
        <div style={{ marginTop: 16 }}><label style={S.label}>{t("f.mailingSame")}</label>{YN("mailing", mailingSame, setMailingSame)}</div>
        {!mailingSame && (
          <div style={{ ...S.card, marginTop: 16 }}>
            <strong style={{ fontSize: 14 }}>{t("sec.mailing")}</strong>
            <div style={{ ...S.grid2, marginTop: 12 }}>
              <div style={S.span2}><label style={S.label}>{t("f.street")}</label><input style={S.input} value={f.mailing_street} onChange={e => setField("mailing_street", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.apt")}</label><input style={S.input} value={f.mailing_apt} onChange={e => setField("mailing_apt", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.city")}</label><input style={S.input} value={f.mailing_city} onChange={e => setField("mailing_city", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.state")}</label><input style={S.input} value={f.mailing_state} onChange={e => setField("mailing_state", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.zip")}</label><input style={S.input} value={f.mailing_zip} onChange={e => setField("mailing_zip", e.target.value)} /></div>
            </div>
          </div>
        )}
      </div>

      {/* 4. 28-Year Address History */}
      <div>
        <div style={S.section}>{t("sec.history")}</div>
        <div style={{ background: "#FEE2E2", border: "1px solid #EF4444", borderRadius: 10, padding: 14, color: "#991B1B", fontSize: 13, lineHeight: 1.55, marginBottom: 16 }}>{t("history.intro")}</div>
        {history.map((h, i) => (
          <div key={i} style={S.card}>
            <div style={S.grid2}>
              <div style={S.span2}><label style={S.label}>{t("f.street")}{i === 0 ? " *" : ""}</label><input style={S.input} value={h.street} onChange={e => updHist(i, "street", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.apt")}</label><input style={S.input} value={h.apt} onChange={e => updHist(i, "apt", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.city")}</label><input style={S.input} value={h.city} onChange={e => updHist(i, "city", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.state")}</label><input style={S.input} value={h.state} onChange={e => updHist(i, "state", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.zip")}</label><input style={S.input} value={h.zip} onChange={e => updHist(i, "zip", e.target.value)} /></div>
              <div><label style={S.label}>{t("history.from")}{i === 0 ? " *" : ""}</label><input style={S.input} value={h.from_my} onChange={e => updHist(i, "from_my", e.target.value)} placeholder="MM/YYYY" /></div>
              <div><label style={S.label}>{t("history.to")}{i === 0 ? " *" : ""}</label><input style={S.input} value={h.to_my} onChange={e => updHist(i, "to_my", e.target.value)} placeholder={i === 0 ? "Present" : "MM/YYYY"} /></div>
            </div>
            {i > 0 && <button type="button" onClick={() => setHistory(p => p.filter((_, x) => x !== i))} style={{ background: "none", border: "none", color: "#991B1B", fontSize: 13, cursor: "pointer", marginTop: 10 }}>{"\u2715"} Remove</button>}
          </div>
        ))}
        <button type="button" onClick={() => setHistory(p => [...p, { ...emptyHistory }])} style={{ background: "none", border: "none", color: "var(--green)", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>{t("history.add")}</button>
      </div>

      {/* 5. Citizenship & Birth */}
      <div>
        <div style={S.section}>{t("sec.citizenship")}</div>
        <div style={S.grid3}>
          <div><label style={S.label}>{t("f.countryBirth")}</label><input style={S.input} value={f.country_of_birth} onChange={e => setField("country_of_birth", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.stateBirth")}</label><input style={S.input} value={f.state_of_birth} onChange={e => setField("state_of_birth", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.countryCitizenship")}</label><input style={S.input} value={f.country_of_citizenship} onChange={e => setField("country_of_citizenship", e.target.value)} /></div>
        </div>
      </div>

      {/* 6. Physical Description */}
      <div>
        <div style={S.section}>{t("sec.physical")}</div>
        <div style={S.grid3}>
          <div><label style={S.label}>{t("f.height")}</label><input style={S.input} value={f.height} onChange={e => setField("height", e.target.value)} placeholder={t("ph.height")} /></div>
          <div><label style={S.label}>{t("f.weight")}</label><input style={S.input} value={f.weight} onChange={e => setField("weight", e.target.value)} placeholder={t("ph.weight")} /></div>
          <div><label style={S.label}>{t("f.gender")}</label><select style={S.input} value={f.gender} onChange={e => setField("gender", e.target.value)}><option value="">{t("opt.select")}</option>{SEX.map(o => <option key={o.value} value={o.value}>{label(o, lang)}</option>)}</select></div>
          <div><label style={S.label}>{t("f.eye")}</label><select style={S.input} value={f.eye_color} onChange={e => setField("eye_color", e.target.value)}><option value="">{t("opt.select")}</option>{EYE_COLORS.map(o => <option key={o.value} value={o.value}>{label(o, lang)}</option>)}</select></div>
          <div><label style={S.label}>{t("f.hair")}</label><select style={S.input} value={f.hair_color} onChange={e => setField("hair_color", e.target.value)}><option value="">{t("opt.select")}</option>{HAIR_COLORS.map(o => <option key={o.value} value={o.value}>{label(o, lang)}</option>)}</select></div>
          <div><label style={S.label}>{t("f.language")}</label><input style={S.input} value={f.preferred_language} onChange={e => setField("preferred_language", e.target.value)} /></div>
          <div><label style={S.label}>{t("f.race")}</label><select style={S.input} value={f.race} onChange={e => setField("race", e.target.value)}><option value="">{t("opt.select")}</option>{RACE.map(o => <option key={o.value} value={o.value}>{label(o, lang)}</option>)}</select></div>
          <div><label style={S.label}>{t("f.ethnicity")}</label><select style={S.input} value={f.ethnicity} onChange={e => setField("ethnicity", e.target.value)}><option value="">{t("opt.select")}</option>{ETHNICITY.map(o => <option key={o.value} value={o.value}>{label(o, lang)}</option>)}</select></div>
        </div>
      </div>

      {/* 7. Criminal History */}
      <div>
        <div style={S.section}>{t("sec.criminal")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {CONVICTION.map(o => (
            <label key={o.value} style={{ cursor: "pointer", fontSize: 14, color: "var(--body-text)", display: "flex", alignItems: "flex-start", gap: 8 }}>
              <input type="radio" name="conv" checked={conviction === o.value} onChange={() => setConviction(o.value)} style={{ marginTop: 3 }} /> {label(o, lang)}
            </label>
          ))}
        </div>
        {(conviction === "convicted" || conviction === "pending") && (
          <div style={{ marginTop: 14 }}>
            <label style={S.label}>{t("f.criminalDetails")} *<span style={S.lock} title={t("criminal.secure")}>{"\uD83D\uDD12"}</span></label>
            <textarea style={{ ...S.input, minHeight: 70 }} value={f.criminal_details} onChange={e => setField("criminal_details", e.target.value)} />
          </div>
        )}
        <p style={{ fontSize: 12, color: "var(--subtle-text)", marginTop: 12, lineHeight: 1.5 }}>{t("criminal.helper")}</p>
      </div>

      {/* 8. Household Members */}
      <div>
        <div style={S.section}>{t("sec.household")}</div>
        <p style={{ fontSize: 14, color: "var(--body-text)", marginBottom: 12 }}>{t("household.intro")}</p>
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--body-text)", marginBottom: 14, cursor: "pointer" }}>
          <input type="checkbox" checked={noHH} onChange={e => setNoHH(e.target.checked)} /> {t("f.noHousehold")}
        </label>
        {!noHH && (
          <div>
            {household.map((m, i) => (
              <div key={i} style={S.card}>
                <div style={S.grid3}>
                  <div><label style={S.label}>{t("f.relationship")}</label><input style={S.input} value={m.relationship} onChange={e => updHH(i, "relationship", e.target.value)} /></div>
                  <div><label style={S.label}>{t("f.lastName")}</label><input style={S.input} value={m.last_name} onChange={e => updHH(i, "last_name", e.target.value)} /></div>
                  <div><label style={S.label}>{t("f.firstName")}</label><input style={S.input} value={m.first_name} onChange={e => updHH(i, "first_name", e.target.value)} /></div>
                  <div><label style={S.label}>{t("f.hhSex")}</label><select style={S.input} value={m.sex} onChange={e => updHH(i, "sex", e.target.value)}><option value="">{t("opt.select")}</option><option value="M">M</option><option value="F">F</option></select></div>
                  <div><label style={S.label}>{t("f.dob")}</label><input type="date" style={S.input} value={m.dob} onChange={e => updHH(i, "dob", e.target.value)} /></div>
                </div>
                {i > 0 && <button type="button" onClick={() => setHousehold(p => p.filter((_, x) => x !== i))} style={{ background: "none", border: "none", color: "#991B1B", fontSize: 13, cursor: "pointer", marginTop: 10 }}>{"\u2715"} Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => setHousehold(p => [...p, { ...emptyMember }])} style={{ background: "none", border: "none", color: "var(--green)", fontWeight: 600, cursor: "pointer", fontSize: 14 }}>{t("household.add")}</button>
          </div>
        )}
      </div>

      {/* 9. Influenza */}
      <div>
        <div style={S.section}>{t("sec.flu")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
          {VAX_OPTIONS.map(o => (
            <label key={o.value} style={{ cursor: "pointer", fontSize: 14, color: "var(--body-text)", display: "flex", alignItems: "flex-start", gap: 8 }}>
              <input type="radio" name="flu" checked={fluOpt === o.value} onChange={() => setFluOpt(o.value)} style={{ marginTop: 3 }} /> {label(o, lang)}
            </label>
          ))}
        </div>
        <div><label style={S.label}>{t("f.site")}</label><input style={S.input} value={f.flu_site} onChange={e => setField("flu_site", e.target.value)} /></div>
        {fluOpt === "provider" && (
          <div style={{ ...S.card, marginTop: 14 }}>
            <strong style={{ fontSize: 14 }}>{t("vax.provider")}</strong>
            <div style={{ ...S.grid3, marginTop: 12 }}>
              <div><label style={S.label}>{t("f.vaxDate")}</label><input type="date" style={S.input} value={f.flu_vax_date} onChange={e => setField("flu_vax_date", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.lot")}</label><input style={S.input} value={f.flu_lot} onChange={e => setField("flu_lot", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.expiration")}</label><input type="date" style={S.input} value={f.flu_expiration} onChange={e => setField("flu_expiration", e.target.value)} /></div>
              <div style={S.span2}><label style={S.label}>{t("f.providerName")}</label><input style={S.input} value={f.flu_provider_name} onChange={e => setField("flu_provider_name", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.providerPhone")}</label><input style={S.input} value={f.flu_provider_phone} onChange={e => setField("flu_provider_phone", e.target.value)} /></div>
              <div style={S.span2}><label style={S.label}>{t("f.providerAddress")}</label><input style={S.input} value={f.flu_provider_address} onChange={e => setField("flu_provider_address", e.target.value)} /></div>
            </div>
          </div>
        )}
      </div>

      {/* 10. COVID */}
      <div>
        <div style={S.section}>{t("sec.covid")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
          {VAX_OPTIONS.map(o => (
            <label key={o.value} style={{ cursor: "pointer", fontSize: 14, color: "var(--body-text)", display: "flex", alignItems: "flex-start", gap: 8 }}>
              <input type="radio" name="covid" checked={covidOpt === o.value} onChange={() => setCovidOpt(o.value)} style={{ marginTop: 3 }} /> {label(o, lang)}
            </label>
          ))}
        </div>
        <div><label style={S.label}>{t("f.site")}</label><input style={S.input} value={f.covid_site} onChange={e => setField("covid_site", e.target.value)} /></div>
        {covidOpt === "provider" && (
          <div style={{ ...S.card, marginTop: 14 }}>
            <strong style={{ fontSize: 14 }}>{t("vax.provider")}</strong>
            <div style={{ ...S.grid3, marginTop: 12 }}>
              <div><label style={S.label}>{t("f.vaxDate")}</label><input type="date" style={S.input} value={f.covid_vax_date} onChange={e => setField("covid_vax_date", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.lot")}</label><input style={S.input} value={f.covid_lot} onChange={e => setField("covid_lot", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.expiration")}</label><input type="date" style={S.input} value={f.covid_expiration} onChange={e => setField("covid_expiration", e.target.value)} /></div>
              <div style={S.span2}><label style={S.label}>{t("f.providerName")}</label><input style={S.input} value={f.covid_provider_name} onChange={e => setField("covid_provider_name", e.target.value)} /></div>
              <div><label style={S.label}>{t("f.providerPhone")}</label><input style={S.input} value={f.covid_provider_phone} onChange={e => setField("covid_provider_phone", e.target.value)} /></div>
              <div style={S.span2}><label style={S.label}>{t("f.providerAddress")}</label><input style={S.input} value={f.covid_provider_address} onChange={e => setField("covid_provider_address", e.target.value)} /></div>
            </div>
          </div>
        )}
      </div>

      {/* 11. Review & Sign */}
      <div>
        <div style={S.section}>{t("sec.review")}</div>
        <div style={{ marginBottom: 16 }}><label style={S.label}>{t("f.isMinor")}</label>{YN("minor", isMinor, setIsMinor)}</div>
        {isMinor && <div style={{ marginBottom: 16 }}><label style={S.label}>{t("f.guardianName")} *</label><input style={S.input} value={f.guardian_name} onChange={e => setField("guardian_name", e.target.value)} /></div>}
        <p style={{ fontSize: 14, color: "var(--body-text)", marginBottom: 16 }}>{t("acks.instruction")} <strong>{t("acks.allRequired")}</strong></p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ACKS.map((a, i) => (
            <label key={a.key} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, borderRadius: 8, border: acks[a.key] ? "1px solid var(--green)" : "1px solid var(--border)", background: acks[a.key] ? "var(--green-light)" : "#fff", cursor: "pointer" }}>
              <input type="checkbox" checked={!!acks[a.key]} onChange={e => setAcks(p => ({ ...p, [a.key]: e.target.checked }))} style={{ marginTop: 2, width: 18, height: 18, flexShrink: 0 }} />
              <span style={{ fontSize: 13.5, color: "var(--body-text)", lineHeight: 1.5 }}><strong>{i + 1}.</strong> {label(a, lang)}</span>
            </label>
          ))}
        </div>
        {lang === "es" && <p style={{ fontSize: 12, color: "var(--subtle-text)", marginTop: 12, fontStyle: "italic" }}>{t("acks.disclaimer")}</p>}
        <p style={{ fontSize: 14, color: "var(--body-text)", margin: "20px 0 16px" }}>{t("sig.cert")}</p>
        <div style={S.grid2}>
          <div><label style={S.label}>{t("sig.legalName")} *</label><input style={{ ...S.input, fontWeight: 600 }} value={sig.name} onChange={e => setSig(p => ({ ...p, name: e.target.value }))} /></div>
          <div><label style={S.label}>{t("sig.date")} *</label><input type="date" style={S.input} value={sig.date} onChange={e => setSig(p => ({ ...p, date: e.target.value }))} /></div>
        </div>
      </div>

      {error && <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", color: "#DC2626", borderRadius: 8, padding: 14, fontSize: 14 }}>{error}</div>}

      <div style={{ textAlign: "center", paddingTop: 8 }}>
        <button type="button" onClick={submit} disabled={submitting} style={{ background: "var(--green)", color: "#fff", padding: "14px 48px", borderRadius: 10, fontWeight: 700, fontSize: 16, border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.5 : 1, fontFamily: "var(--heading)", boxShadow: "0 4px 20px rgba(27,122,61,0.25)" }}>{submitting ? t("btn.submitting") : t("btn.submit")}</button>
        <p style={{ color: "var(--subtle-text)", fontSize: 12, marginTop: 12 }}>{t("btn.secure")}</p>
      </div>
    </div>
  );
}
