import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function getSupabase() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const required = ["full_name","street_address","city","state","zip_code","phone","email","date_available","desired_position","signature_name","signature_date"];
    for (const f of required) { if (!body[f]) return NextResponse.json({ error: `Missing: ${f}` }, { status: 400 }); }
    const ackKeys = ["ack_independent_company","ack_at_will","ack_wages_by_greenpoint","ack_truthfulness","ack_authorize_verification","ack_not_a_contract","ack_i9_compliance","ack_site_requirements"];
    for (const a of ackKeys) { if (!body[a]) return NextResponse.json({ error: "All acknowledgments required." }, { status: 400 }); }

    const supabase = getSupabase();
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { data, error } = await supabase.from("job_applications").insert({ ...body, ip_address: ip, user_agent: req.headers.get("user-agent") || "", status: "new" }).select("id").single();
    if (error) { console.error(error); return NextResponse.json({ error: "Failed to submit." }, { status: 500 }); }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try { await fetch("https://api.resend.com/emails", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` }, body: JSON.stringify({ from: "GreenPoint Careers <noreply@greenpointms.com>", to: "info@greenpointms.com", subject: `New Application: ${body.full_name} - ${body.desired_position}`, html: `<h2>New Application</h2><p><b>Name:</b> ${body.full_name}</p><p><b>Position:</b> ${body.desired_position}</p><p><b>Phone:</b> ${body.phone}</p><p><b>Email:</b> ${body.email}</p><p><b>Available:</b> ${body.date_available}</p><p>ID: ${data.id}</p>` }) }); } catch (e) { console.error(e); }
    }
    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err) { console.error(err); return NextResponse.json({ error: "Unexpected error." }, { status: 500 }); }
}
