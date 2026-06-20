import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TEMPLATE_URL = "https://www.greenpointms.com/GreenPoint_Eligibility_Packet_FILLABLE.pdf";

function esc(s = "") {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
}

export async function POST(req) {
  try {
    const d = await req.json();
    if (d.company_website) return NextResponse.json({ success: true }, { status: 200 }); // honeypot

    const fullName = (d.full_name || "").trim();
    const email = (d.email || "").trim();
    const phone = (d.phone || "").trim();
    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: "Please complete your name, email, and phone." }, { status: 400 });
    }

    const resp = await fetch(TEMPLATE_URL, { cache: "no-store" });
    if (!resp.ok) {
      console.error("template fetch failed", resp.status);
      return NextResponse.json({ error: "Could not load the application template." }, { status: 502 });
    }
    const doc = await PDFDocument.load(new Uint8Array(await resp.arrayBuffer()));
    const form = doc.getForm();

    const T = (name, val) => { if (val != null && val !== "") { try { form.getTextField(name).setText(String(val)); } catch (e) {} } };
    const R = (name, val) => { if (val) { try { form.getRadioGroup(name).select(String(val)); } catch (e) {} } };

    const today = (d.today_date || "").trim();
    T("ack_name", fullName); T("ack_signature", fullName); T("ack_date", today);
    T("first_name_mi", d.first_name_mi); T("last_name", d.last_name);
    T("date_of_birth", d.date_of_birth); T("email", email); T("phone", phone);
    T("country_of_birth", d.country_of_birth); T("state_of_birth", d.state_of_birth);
    T("country_of_citizenship", d.country_of_citizenship); T("full_home_address", d.full_home_address);
    T("height", d.height); T("weight", d.weight); T("gender", d.gender);
    T("preferred_language", d.preferred_language); T("race", d.race); T("ethnicity", d.ethnicity);
    T("flu_emp_name", fullName); T("flu_emp_sig", fullName); T("flu_emp_date", today);
    T("covid_emp_name", fullName); T("covid_emp_sig", fullName); T("covid_emp_date", today);

    R("maiden_previous_name", d.maiden_previous_name);
    R("used_alias", d.used_alias);
    R("mailing_same_residential", d.mailing_same_residential);
    R("eye_color", d.eye_color);
    R("hair_color", d.hair_color);
    R("flu_option", d.flu_option);
    R("covid_option", d.covid_option);

    const filled = await doc.save();
    const base64 = Buffer.from(filled).toString("base64");

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) return NextResponse.json({ error: "Email is not configured on the server." }, { status: 500 });

    const safe = (fullName.replace(/[^a-z0-9]+/gi, "_").slice(0, 60)) || "Applicant";
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "GreenPoint Onboarding <noreply@greenpointms.com>",
        to: "info@greenpointms.com",
        reply_to: email,
        subject: `Online Application: ${fullName}`,
        html: `<h2>Online Eligibility Application</h2>
          <p><b>Name:</b> ${esc(fullName)}</p>
          <p><b>Email:</b> ${esc(email)}</p>
          <p><b>Phone:</b> ${esc(phone)}</p>
          <p><b>Submitted:</b> ${new Date().toISOString()}</p>
          <p>The applicant's filled packet (GreenPoint sections) is attached. The official state forms (OASAS, Justice Center, SCR) are completed in person at onboarding.</p>`,
        attachments: [{ filename: `Application_${safe}.pdf`, content: base64 }],
      }),
    });
    if (!r.ok) {
      const t = await r.text().catch(() => "");
      console.error("Resend error", r.status, t);
      return NextResponse.json({ error: "Could not send your application. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("apply-online error:", err);
    return NextResponse.json({ error: "Unexpected error. Please try again." }, { status: 500 });
  }
}
