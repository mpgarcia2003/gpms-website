import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 20 * 1024 * 1024; // 20 MB

function esc(s = "") {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
}

export async function POST(req) {
  try {
    const form = await req.formData();

    // Honeypot: real users never fill this hidden field. Silently accept + drop.
    if (form.get("company_website")) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const fullName = (form.get("full_name") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const location = (form.get("location") || "").toString().trim();
    const file = form.get("packet");

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: "Please complete your name, email, and phone." }, { status: 400 });
    }
    if (!file || typeof file === "string" || typeof file.arrayBuffer !== "function") {
      return NextResponse.json({ error: "Please attach your completed packet (PDF)." }, { status: 400 });
    }

    const filename = file.name || "packet.pdf";
    const isPdf = file.type === "application/pdf" || filename.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      return NextResponse.json({ error: "The packet must be a PDF file." }, { status: 400 });
    }

    const buf = Buffer.from(await file.arrayBuffer());
    if (buf.length === 0) return NextResponse.json({ error: "The uploaded file is empty." }, { status: 400 });
    if (buf.length > MAX_BYTES) return NextResponse.json({ error: "File is too large (max 20 MB)." }, { status: 400 });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email is not configured on the server." }, { status: 500 });
    }

    const safeName = (fullName.replace(/[^a-z0-9]+/gi, "_").slice(0, 60)) || "Applicant";
    const submittedAt = new Date().toISOString();

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "GreenPoint Onboarding <noreply@greenpointms.com>",
        to: "info@greenpointms.com",
        reply_to: email,
        subject: `Eligibility Packet: ${fullName}${location ? " - " + location : ""}`,
        html: `<h2>Completed Eligibility Packet</h2>
          <p><b>Name:</b> ${esc(fullName)}</p>
          <p><b>Email:</b> ${esc(email)}</p>
          <p><b>Phone:</b> ${esc(phone)}</p>
          <p><b>Location:</b> ${esc(location) || "&mdash;"}</p>
          <p><b>Submitted:</b> ${submittedAt}</p>
          <p>The applicant's completed packet is attached.</p>`,
        attachments: [{ filename: `Eligibility_Packet_${safeName}.pdf`, content: buf.toString("base64") }],
      }),
    });

    if (!resp.ok) {
      const t = await resp.text().catch(() => "");
      console.error("Resend error:", resp.status, t);
      return NextResponse.json({ error: "Could not send your packet. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("background-check route error:", err);
    return NextResponse.json({ error: "Unexpected error. Please try again." }, { status: 500 });
  }
}
