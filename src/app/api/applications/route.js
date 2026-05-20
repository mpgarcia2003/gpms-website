import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function getSupabase() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const required = ["full_name", "street_address", "city", "state", "zip_code", "phone", "email", "date_available", "desired_position", "signature_name", "signature_date"];
    for (const field of required) {
      if (!body[field]) return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
    const ackKeys = ["ack_independent_company", "ack_at_will", "ack_wages_by_greenpoint", "ack_truthfulness", "ack_authorize_verification", "ack_not_a_contract", "ack_i9_compliance", "ack_site_requirements"];
    for (const a of ackKeys) {
      if (!body[a]) return NextResponse.json({ error: "All acknowledgments are required." }, { status: 400 });
    }

    const supabase = getSupabase();
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    const record = {
      full_name: body.full_name,
      street_address: body.street_address,
      city: body.city,
      state: body.state,
      zip_code: body.zip_code,
      phone: body.phone,
      email: body.email,
      date_available: body.date_available,
      desired_position: body.desired_position,
      desired_wage: body.desired_wage || null,
      authorized_to_work: body.authorized_to_work,
      is_18_or_older: body.is_18_or_older,
      availability: body.availability || [],
      employment_history: body.employment_history || [],
      skills: body.skills || [],
      languages: body.languages || null,
      additional_skills: body.additional_skills || null,
      applicant_references: body.applicant_references || [],
      emergency_contact_name: body.emergency_contact_name || null,
      emergency_contact_phone: body.emergency_contact_phone || null,
      emergency_contact_relationship: body.emergency_contact_relationship || null,
      ack_independent_company: body.ack_independent_company,
      ack_at_will: body.ack_at_will,
      ack_wages_by_greenpoint: body.ack_wages_by_greenpoint,
      ack_truthfulness: body.ack_truthfulness,
      ack_authorize_verification: body.ack_authorize_verification,
      ack_not_a_contract: body.ack_not_a_contract,
      ack_i9_compliance: body.ack_i9_compliance,
      ack_site_requirements: body.ack_site_requirements,
      signature_name: body.signature_name,
      signature_date: body.signature_date,
      submitted_at: new Date().toISOString(),
      ip_address: ip,
      user_agent: req.headers.get("user-agent") || "",
      status: "new",
    };

    const { data, error } = await supabase
      .from("job_applications")
      .insert(record)
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to submit application." }, { status: 500 });
    }

    // Optional email notification
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
          body: JSON.stringify({
            from: "GreenPoint Careers <noreply@greenpointms.com>",
            to: "info@greenpointms.com",
            subject: `New Application: ${body.full_name} - ${body.desired_position}`,
            html: `<h2>New Job Application</h2>
              <p><b>Name:</b> ${body.full_name}</p>
              <p><b>Position:</b> ${body.desired_position}</p>
              <p><b>Phone:</b> ${body.phone}</p>
              <p><b>Email:</b> ${body.email}</p>
              <p><b>Available:</b> ${body.date_available}</p>
              <p><b>Submitted:</b> ${record.submitted_at}</p>
              <p>Application ID: ${data.id}</p>`,
          }),
        });
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err) {
    console.error("Application route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
