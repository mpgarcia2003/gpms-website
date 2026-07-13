import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { checkPassword, REVIEW_COOKIE } from "../../../../lib/eligibilityAuth";
import { decrypt, formatSSN } from "../../../../lib/eligibilityCrypto";

export const dynamic = "force-dynamic";

function getSupabase() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}

const convLabels = { none: "No conviction", convicted: "Convicted (NY or other jurisdiction)", pending: "Pending arrest charges" };
const vaxLabels = { provider: "Own provider", greenpoint: "GreenPoint provider / CityMD", exemption: "Exemption (DOH-4482, in person)", refuse: "Declined (will wear PPE)" };
const oneLine = (parts) => parts.filter(Boolean).join(", ");

export async function GET(req) {
  // Auth check
  const authed = checkPassword(cookies().get(REVIEW_COOKIE)?.value);
  if (!authed) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const supabase = getSupabase();
  const { data: r } = await supabase.from("greenpoint_eligibility_submissions").select("*").eq("id", id).single();
  if (!r) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const ssn = formatSSN(decrypt(r.ssn_encrypted));
  const crim = decrypt(r.criminal_details_encrypted);

  // Build HTML that will be printed as PDF
  const fullName = oneLine([r.first_name, r.middle_initial, r.last_name]);
  const homeAddr = oneLine([r.home_street, r.home_apt && "Apt " + r.home_apt, r.home_city, r.home_state, r.home_zip]);
  const mailingAddr = r.mailing_same ? "Same as home" : oneLine([r.mailing_street, r.mailing_apt, r.mailing_city, r.mailing_state, r.mailing_zip]);

  const addressRows = (r.address_history || []).map(h =>
    `<tr><td style="padding:4px 8px;border:1px solid #ddd;">${oneLine([h.from_my || "?", "–", h.to_my || "?"])}</td><td style="padding:4px 8px;border:1px solid #ddd;">${oneLine([h.street, h.apt && "Apt " + h.apt, h.city, h.state, h.zip])}</td></tr>`
  ).join("");

  const householdRows = r.no_other_household_members ? `<tr><td colspan="4" style="padding:4px 8px;border:1px solid #ddd;">None declared</td></tr>` :
    (r.household_members || []).map(m =>
      `<tr><td style="padding:4px 8px;border:1px solid #ddd;">${m.last_name || ""}</td><td style="padding:4px 8px;border:1px solid #ddd;">${m.first_name || ""}</td><td style="padding:4px 8px;border:1px solid #ddd;">${m.relationship || ""}</td><td style="padding:4px 8px;border:1px solid #ddd;">${oneLine([m.sex, m.dob])}</td></tr>`
    ).join("");

  const sigRows = Object.entries(r.signatures || {}).map(([k, v]) =>
    `<tr><td style="padding:4px 8px;border:1px solid #ddd;">${k}</td><td style="padding:4px 8px;border:1px solid #ddd;">${v?.legal_name || ""}</td><td style="padding:4px 8px;border:1px solid #ddd;">${v?.signed_at ? new Date(v.signed_at).toLocaleString() : ""}</td></tr>`
  ).join("");

  const html = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>Eligibility Packet – ${fullName}</title>
<style>
  @page { size: letter; margin: 0.6in 0.75in; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #1a1a1a; line-height: 1.5; }
  h1 { font-size: 18px; color: #1B7A3D; margin-bottom: 2px; }
  h2 { font-size: 13px; color: #fff; background: #1B7A3D; padding: 5px 10px; margin: 18px 0 8px; border-radius: 3px; }
  .sub { font-size: 10px; color: #666; margin-bottom: 16px; }
  .row { display: flex; gap: 8px; padding: 3px 0; border-bottom: 1px solid #eee; }
  .row .label { width: 190px; color: #666; flex-shrink: 0; font-size: 10px; }
  .row .value { font-weight: 600; font-size: 11px; word-break: break-word; }
  table { width: 100%; border-collapse: collapse; font-size: 10px; margin-top: 6px; }
  th { background: #f0f4f1; text-align: left; padding: 4px 8px; border: 1px solid #ddd; font-weight: 700; }
  td { vertical-align: top; }
  .footer { margin-top: 30px; border-top: 1px solid #ddd; padding-top: 8px; font-size: 9px; color: #999; text-align: center; }
  .page-break { page-break-before: always; }
</style>
</head><body>

<h1>GreenPoint Maintenance Services Corp</h1>
<div class="sub">Pre-Employment Eligibility Packet &mdash; ${fullName} &mdash; Submitted ${new Date(r.created_at).toLocaleString()} &mdash; Language: ${r.submission_language === "es" ? "Spanish" : "English"}</div>

<h2>TRS-52 (OASAS) &amp; JC CBC 4 — Fingerprinting Consent</h2>
<div class="row"><div class="label">Full Name</div><div class="value">${oneLine([r.last_name + ",", r.first_name, r.middle_initial])}</div></div>
<div class="row"><div class="label">Date of Birth</div><div class="value">${r.date_of_birth || "—"}</div></div>
<div class="row"><div class="label">SSN</div><div class="value">${ssn || "—"}</div></div>
<div class="row"><div class="label">Home Address</div><div class="value">${homeAddr || "—"}</div></div>
<div class="row"><div class="label">Criminal History</div><div class="value">${convLabels[r.conviction_status] || r.conviction_status || "—"}</div></div>
${r.conviction_status && r.conviction_status !== "none" ? `<div class="row"><div class="label">Criminal Details</div><div class="value">${crim || "—"}</div></div>` : ""}

<h2>SCR (LDSS-3370) — Statewide Central Register</h2>
<div class="row"><div class="label">Maiden / Previous Name</div><div class="value">${r.used_previous_name ? (r.previous_names || "—") : "None"}</div></div>
<div class="row"><div class="label">Alias</div><div class="value">${r.used_alias ? (r.aliases || "—") : "None"}</div></div>
<div class="row"><div class="label">Sex / DOB</div><div class="value">${oneLine([r.gender, r.date_of_birth])}</div></div>

<div style="margin-top:10px;font-size:10px;font-weight:700;color:#666;text-transform:uppercase;">28-Year Address History</div>
<table>
<tr><th>Dates</th><th>Address</th></tr>
${addressRows || `<tr><td colspan="2" style="padding:4px 8px;border:1px solid #ddd;">—</td></tr>`}
</table>

<div style="margin-top:10px;font-size:10px;font-weight:700;color:#666;text-transform:uppercase;">Household Members</div>
<table>
<tr><th>Last Name</th><th>First Name</th><th>Relationship</th><th>Sex / DOB</th></tr>
${householdRows}
</table>

<h2>Demographic &amp; Contact Information</h2>
<div class="row"><div class="label">Email</div><div class="value">${r.email || "—"}</div></div>
<div class="row"><div class="label">Phone</div><div class="value">${r.mobile_phone || "—"}</div></div>
<div class="row"><div class="label">Reprint Contact</div><div class="value">${r.reprint_contact || "—"}</div></div>
<div class="row"><div class="label">Mailing Address</div><div class="value">${mailingAddr}</div></div>
<div class="row"><div class="label">Birth / Citizenship</div><div class="value">${oneLine([r.country_of_birth, r.state_of_birth, r.country_of_citizenship && "citizen of " + r.country_of_citizenship])}</div></div>
<div class="row"><div class="label">Height / Weight</div><div class="value">${oneLine([r.height, r.weight])}</div></div>
<div class="row"><div class="label">Eye / Hair Color</div><div class="value">${oneLine([r.eye_color, r.hair_color])}</div></div>
<div class="row"><div class="label">Race / Ethnicity</div><div class="value">${oneLine([r.race, r.ethnicity])}</div></div>
<div class="row"><div class="label">Preferred Language</div><div class="value">${r.preferred_language || "—"}</div></div>

<h2>Vaccinations</h2>
<div class="row"><div class="label">Influenza</div><div class="value">${vaxLabels[r.flu_option] || r.flu_option || "—"}</div></div>
<div class="row"><div class="label">Flu Site</div><div class="value">${r.flu_site || "—"}</div></div>
${r.flu_option === "provider" ? `<div class="row"><div class="label">Flu Provider</div><div class="value">${oneLine([r.flu_provider_name, r.flu_vax_date, r.flu_lot && "Lot " + r.flu_lot])}</div></div>` : ""}
<div class="row"><div class="label">COVID</div><div class="value">${vaxLabels[r.covid_option] || r.covid_option || "—"}</div></div>
<div class="row"><div class="label">COVID Site</div><div class="value">${r.covid_site || "—"}</div></div>
${r.covid_option === "provider" ? `<div class="row"><div class="label">COVID Provider</div><div class="value">${oneLine([r.covid_provider_name, r.covid_vax_date, r.covid_lot && "Lot " + r.covid_lot])}</div></div>` : ""}

<h2>Signatures</h2>
<table>
<tr><th>Form</th><th>Legal Name</th><th>Signed At</th></tr>
${sigRows || `<tr><td colspan="3" style="padding:4px 8px;border:1px solid #ddd;">—</td></tr>`}
</table>

${r.is_minor ? `<div class="row" style="margin-top:8px"><div class="label">Minor — Guardian</div><div class="value">${r.guardian_name || "—"}</div></div>` : ""}

<div class="footer">
  GreenPoint Maintenance Services Corp &mdash; 1420 Outlook Ave, Bronx, NY 10465 &mdash; 347-332-9348 &mdash; info@greenpointms.com<br>
  This document contains sensitive personal information. Handle in accordance with company privacy policies.
</div>

</body></html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `inline; filename="Eligibility_Packet_${r.last_name}_${r.first_name}.html"`,
    },
  });
}
