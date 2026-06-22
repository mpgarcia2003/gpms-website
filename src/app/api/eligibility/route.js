import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { encrypt } from "../../../lib/eligibilityCrypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSupabase() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ssnDigits = String(body.ssn || "").replace(/\D/g, "");

    if (!body.first_name || !body.last_name) return NextResponse.json({ error: "Name is required." }, { status: 400 });
    if (ssnDigits.length !== 9) return NextResponse.json({ error: "A valid 9-digit SSN is required." }, { status: 400 });
    if (!body.date_of_birth) return NextResponse.json({ error: "Date of birth is required." }, { status: 400 });
    if (!body.conviction_status) return NextResponse.json({ error: "Criminal-history answer is required." }, { status: 400 });
    if (!body.signatures || typeof body.signatures !== "object" || Object.keys(body.signatures).length < 5) {
      return NextResponse.json({ error: "All acknowledgments must be signed." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const convicted = body.conviction_status && body.conviction_status !== "none";

    const record = {
      status: "submitted",
      submission_language: body.submission_language === "es" ? "es" : "en",
      applicant_ip: ip,
      user_agent: req.headers.get("user-agent") || "",
      first_name: body.first_name, middle_initial: body.middle_initial || null, last_name: body.last_name,
      date_of_birth: body.date_of_birth || null,
      ssn_encrypted: encrypt(ssnDigits),
      email: body.email || null, mobile_phone: body.mobile_phone || null, reprint_contact: body.reprint_contact || null,
      used_previous_name: !!body.used_previous_name, previous_names: body.previous_names || null,
      used_alias: !!body.used_alias, aliases: body.aliases || null,
      home_street: body.home_street || null, home_apt: body.home_apt || null, home_city: body.home_city || null, home_state: body.home_state || null, home_zip: body.home_zip || null,
      mailing_same: body.mailing_same !== false,
      mailing_street: body.mailing_street || null, mailing_apt: body.mailing_apt || null, mailing_city: body.mailing_city || null, mailing_state: body.mailing_state || null, mailing_zip: body.mailing_zip || null,
      address_history: Array.isArray(body.address_history) ? body.address_history : [],
      country_of_birth: body.country_of_birth || null, state_of_birth: body.state_of_birth || null, country_of_citizenship: body.country_of_citizenship || null,
      height: body.height || null, weight: body.weight || null, gender: body.gender || null, preferred_language: body.preferred_language || null, race: body.race || null, ethnicity: body.ethnicity || null, eye_color: body.eye_color || null, hair_color: body.hair_color || null,
      conviction_status: body.conviction_status || null,
      criminal_details_encrypted: convicted ? encrypt(body.criminal_details) : null,
      no_other_household_members: !!body.no_other_household_members,
      household_members: Array.isArray(body.household_members) ? body.household_members : [],
      flu_option: body.flu_option || null, flu_site: body.flu_site || null, flu_exemption_claimed: !!body.flu_exemption_claimed,
      flu_provider_name: body.flu_provider_name || null, flu_provider_address: body.flu_provider_address || null, flu_provider_phone: body.flu_provider_phone || null,
      flu_vax_date: body.flu_vax_date || null, flu_lot: body.flu_lot || null, flu_expiration: body.flu_expiration || null,
      covid_option: body.covid_option || null, covid_site: body.covid_site || null, covid_exemption_claimed: !!body.covid_exemption_claimed,
      covid_provider_name: body.covid_provider_name || null, covid_provider_address: body.covid_provider_address || null, covid_provider_phone: body.covid_provider_phone || null,
      covid_vax_date: body.covid_vax_date || null, covid_lot: body.covid_lot || null, covid_expiration: body.covid_expiration || null,
      is_minor: !!body.is_minor, guardian_name: body.guardian_name || null,
      signatures: body.signatures,
    };

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("greenpoint_eligibility_submissions")
      .insert(record)
      .select("id")
      .single();

    if (error) {
      console.error("Eligibility insert error:", error);
      return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
    }

    // Notification: NAME + timestamp + link only. Never the SSN or criminal data.
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        const reviewUrl = `https://greenpointms.com/eligibility-review?id=${data.id}`;
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
          body: JSON.stringify({
            from: "GreenPoint Eligibility <noreply@greenpointms.com>",
            to: "info@greenpointms.com",
            subject: `New Eligibility Packet: ${record.first_name} ${record.last_name}`,
            html: `<h2>New Eligibility Packet Submitted</h2>
              <p><b>Applicant:</b> ${record.first_name} ${record.last_name}</p>
              <p><b>Submitted:</b> ${new Date().toISOString()}</p>
              <p>For confidentiality, this email contains no SSN or background details.</p>
              <p><a href="${reviewUrl}">Open the packet in your secure review page</a> (login required).</p>`,
          }),
        });
      } catch (emailErr) {
        console.error("Eligibility email notification failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err) {
    console.error("Eligibility route error:", err);
    return NextResponse.json({ error: "Unexpected error. Please try again." }, { status: 500 });
  }
}
