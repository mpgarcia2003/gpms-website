import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { checkPassword, REVIEW_COOKIE } from "../../lib/eligibilityAuth";
import { decrypt, formatSSN } from "../../lib/eligibilityCrypto";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Eligibility Review", robots: { index: false, follow: false } };

function getSupabase() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "5px 0", borderBottom: "1px solid #EEF1EE", fontSize: 14 }}>
      <div style={{ width: 210, color: "#6B756E", flexShrink: 0 }}>{label}</div>
      <div style={{ fontWeight: 500, wordBreak: "break-word" }}>{value === 0 || value ? value : "\u2014"}</div>
    </div>
  );
}
function Group({ title, children }) {
  return (
    <div style={{ marginBottom: 22, border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ background: "var(--green)", color: "#fff", padding: "8px 14px", fontWeight: 700, fontSize: 14 }}>{title}</div>
      <div style={{ padding: "10px 16px" }}>{children}</div>
    </div>
  );
}
const oneLine = (parts) => parts.filter(Boolean).join(", ");

export default async function ReviewPage({ searchParams }) {
  const authed = checkPassword(cookies().get(REVIEW_COOKIE)?.value);
  if (!authed) return <main style={{ minHeight: "100vh", paddingTop: 80 }}><LoginForm /></main>;

  const supabase = getSupabase();
  const id = searchParams?.id;
  const wrap = { maxWidth: 900, margin: "0 auto", padding: "40px 20px", fontFamily: "var(--body)", color: "var(--dark-text)" };

  if (!id) {
    const { data: rows } = await supabase
      .from("greenpoint_eligibility_submissions")
      .select("id, first_name, last_name, created_at, status")
      .order("created_at", { ascending: false });
    return (
      <main style={{ minHeight: "100vh", paddingTop: 80 }}>
        <div style={wrap}>
          <h1 style={{ fontFamily: "var(--heading)", fontSize: 28, fontWeight: 800, marginBottom: 4 }}>Eligibility Packets</h1>
          <p style={{ color: "var(--subtle-text)", fontSize: 14, marginBottom: 24 }}>{(rows || []).length} submission(s)</p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead><tr style={{ textAlign: "left", color: "#6B756E", borderBottom: "2px solid var(--border)" }}>
              <th style={{ padding: "8px 6px" }}>Name</th><th style={{ padding: "8px 6px" }}>Submitted</th><th style={{ padding: "8px 6px" }}>Status</th><th></th>
            </tr></thead>
            <tbody>
              {(rows || []).map(r => (
                <tr key={r.id} style={{ borderBottom: "1px solid #EEF1EE" }}>
                  <td style={{ padding: "10px 6px", fontWeight: 600 }}>{r.last_name}, {r.first_name}</td>
                  <td style={{ padding: "10px 6px", color: "#6B756E" }}>{new Date(r.created_at).toLocaleString()}</td>
                  <td style={{ padding: "10px 6px" }}>{r.status}</td>
                  <td style={{ padding: "10px 6px" }}><a href={`?id=${r.id}`} style={{ color: "var(--green)", fontWeight: 600 }}>View &rarr;</a></td>
                </tr>
              ))}
              {(!rows || rows.length === 0) && <tr><td colSpan={4} style={{ padding: 20, color: "#6B756E" }}>No submissions yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </main>
    );
  }

  const { data: r } = await supabase.from("greenpoint_eligibility_submissions").select("*").eq("id", id).single();
  if (!r) return <main style={{ minHeight: "100vh", paddingTop: 80 }}><div style={wrap}><a href="/eligibility-review" style={{ color: "var(--green)", fontWeight: 600 }}>&larr; All packets</a><p style={{ marginTop: 20 }}>Packet not found.</p></div></main>;

  const ssn = formatSSN(decrypt(r.ssn_encrypted));
  const crim = decrypt(r.criminal_details_encrypted);
  const convLabels = { none: "No conviction", convicted: "Convicted (NY or other jurisdiction)", pending: "Pending arrest charges" };
  const vaxLabels = { provider: "Own provider", greenpoint: "GreenPoint provider / CityMD", exemption: "Exemption (DOH-4482, in person)", refuse: "Declined (will wear PPE)" };

  return (
    <main style={{ minHeight: "100vh", paddingTop: 80 }}>
      <div style={wrap}>
        <a href="/eligibility-review" style={{ color: "var(--green)", fontWeight: 600, fontSize: 14 }}>&larr; All packets</a>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10, marginBottom: 2 }}>
          <h1 style={{ fontFamily: "var(--heading)", fontSize: 26, fontWeight: 800, margin: 0 }}>{oneLine([r.last_name + ",", r.first_name, r.middle_initial])}</h1>
          <a href={`/api/eligibility/export?id=${id}`} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--green)", color: "#fff", padding: "8px 16px", borderRadius: 6, fontWeight: 700, fontSize: 12, textDecoration: "none", whiteSpace: "nowrap" }}>
            ↓ Download PDF
          </a>
        </div>
        <p style={{ color: "var(--subtle-text)", fontSize: 13, marginBottom: 24 }}>Submitted {new Date(r.created_at).toLocaleString()} &middot; {r.status} &middot; filled in {r.submission_language === "es" ? "Spanish" : "English"}</p>

        <Group title="For TRS-52 (OASAS) & JC CBC 4 — fingerprinting consent">
          <Row label="Last / First / MI" value={oneLine([r.last_name, r.first_name, r.middle_initial])} />
          <Row label="Date of birth" value={r.date_of_birth} />
          <Row label="SSN" value={ssn} />
          <Row label="Home address" value={oneLine([r.home_street, r.home_apt && "Apt " + r.home_apt, r.home_city, r.home_state, r.home_zip])} />
          <Row label="Criminal history" value={convLabels[r.conviction_status] || r.conviction_status} />
          {r.conviction_status && r.conviction_status !== "none" && <Row label="Details" value={crim} />}
          <Row label="Facility / Provider" value="Assign at fingerprinting" />
        </Group>

        <Group title="For SCR (LDSS-3370) — Statewide Central Register">
          <Row label="Maiden / previous name" value={r.used_previous_name ? r.previous_names : "None"} />
          <Row label="Alias" value={r.used_alias ? r.aliases : "None"} />
          <Row label="Sex / DOB" value={oneLine([r.gender, r.date_of_birth])} />
          <div style={{ marginTop: 10, fontSize: 12, fontWeight: 700, color: "#6B756E", textTransform: "uppercase" }}>28-year address history</div>
          {(r.address_history || []).map((h, i) => <Row key={i} label={oneLine([h.from_my || "?", "\u2013", h.to_my || "?"])} value={oneLine([h.street, h.apt && "Apt " + h.apt, h.city, h.state, h.zip])} />)}
          {(!r.address_history || r.address_history.length === 0) && <Row label="History" value="" />}
          <div style={{ marginTop: 10, fontSize: 12, fontWeight: 700, color: "#6B756E", textTransform: "uppercase" }}>Household members</div>
          {r.no_other_household_members ? <Row label="Members" value="None declared" /> : (r.household_members || []).map((m, i) => <Row key={i} label={m.relationship || "Member"} value={oneLine([m.last_name, m.first_name, m.sex, m.dob])} />)}
        </Group>

        <Group title="Demographic & contact">
          <Row label="Email" value={r.email} />
          <Row label="Phone" value={r.mobile_phone} />
          <Row label="Reprint contact" value={r.reprint_contact} />
          <Row label="Mailing address" value={r.mailing_same ? "Same as home" : oneLine([r.mailing_street, r.mailing_apt, r.mailing_city, r.mailing_state, r.mailing_zip])} />
          <Row label="Birth / citizenship" value={oneLine([r.country_of_birth, r.state_of_birth, r.country_of_citizenship && "citizen of " + r.country_of_citizenship])} />
          <Row label="Height / Weight" value={oneLine([r.height, r.weight])} />
          <Row label="Eye / Hair" value={oneLine([r.eye_color, r.hair_color])} />
          <Row label="Race / Ethnicity" value={oneLine([r.race, r.ethnicity])} />
          <Row label="Preferred language" value={r.preferred_language} />
        </Group>

        <Group title="Vaccinations">
          <Row label="Influenza" value={vaxLabels[r.flu_option] || r.flu_option} />
          <Row label="Flu site" value={r.flu_site} />
          {r.flu_option === "provider" && <Row label="Flu provider" value={oneLine([r.flu_provider_name, r.flu_vax_date, r.flu_lot && "Lot " + r.flu_lot])} />}
          <Row label="COVID" value={vaxLabels[r.covid_option] || r.covid_option} />
          <Row label="COVID site" value={r.covid_site} />
          {r.covid_option === "provider" && <Row label="COVID provider" value={oneLine([r.covid_provider_name, r.covid_vax_date, r.covid_lot && "Lot " + r.covid_lot])} />}
        </Group>

        <Group title="Signatures">
          {r.is_minor && <Row label="Minor — guardian" value={r.guardian_name} />}
          {Object.entries(r.signatures || {}).map(([k, v]) => <Row key={k} label={k} value={oneLine([v && v.legal_name, v && v.signed_at && new Date(v.signed_at).toLocaleString()])} />)}
        </Group>
      </div>
    </main>
  );
}
