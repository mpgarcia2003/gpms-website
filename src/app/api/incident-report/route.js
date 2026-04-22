import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// ============================================================
// GreenPoint Incident Report API
// - Stores submission in Supabase (incident_reports table)
// - Emails Miguel at info@greenpointms.com via Resend
// - Sends acknowledgment copy to reporter if email provided
// ============================================================

// Basic in-memory rate limit (per serverless instance).
// Not a perfect solution on Vercel's distributed infra, but
// adds friction against spam. Combined with honeypot it's sufficient.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submits per IP per minute
const rateMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  return entry.count <= RATE_LIMIT_MAX;
}

function safe(v, max = 5000) {
  if (v === null || v === undefined) return "";
  return String(v).slice(0, max);
}

function formatReferenceId() {
  const now = new Date();
  const year = now.getFullYear();
  const timestamp = Math.floor(now.getTime() / 1000).toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `GP-${year}-${timestamp}-${random}`;
}

const incidentTypeLabels = {
  slip_trip_fall: "Slip, trip, or fall",
  lifting_strain: "Lifting / strain injury",
  cut_laceration: "Cut or laceration",
  chemical_exposure: "Chemical exposure",
  ladder_incident: "Ladder incident",
  equipment_incident: "Equipment / machinery incident",
  vehicle_accident: "Vehicle accident",
  property_damage: "Property damage",
  near_miss: "Near-miss (no injury)",
  other: "Other",
};

const injuryLabels = {
  no: "No injury",
  yes_minor: "Yes — minor",
  yes_significant: "Yes — significant",
  unsure: "Unsure / possible delayed symptoms",
};

const medicalLabels = {
  no: "No",
  self_care: "Self-care only",
  urgent_care: "Urgent care / clinic",
  er: "Emergency room",
  pending: "Planned but not yet received",
};

export async function POST(req) {
  try {
    // --- Rate limit by IP ---
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a minute or call 347-332-9348." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // --- Honeypot check ---
    if (body.company_website) {
      // Silent acknowledgment — don't let bots know they're detected
      return NextResponse.json({ ok: true, reference_id: "GP-0000-IGNORED" });
    }

    // --- Validate required fields ---
    const name = safe(body.name, 200);
    const workplace_address = safe(body.workplace_address, 500);
    const incident_date = safe(body.incident_date, 20);
    const description = safe(body.description, 10000);
    if (!name || !workplace_address || !incident_date || !description) {
      return NextResponse.json(
        { error: "Missing required fields (name, workplace address, date of incident, description)." },
        { status: 400 }
      );
    }

    const reporter_email = safe(body.reporter_email, 200);
    const reporter_phone = safe(body.reporter_phone, 50);
    const incident_time = safe(body.incident_time, 20);
    const incident_type = safe(body.incident_type, 50);
    const witnesses = safe(body.witnesses, 500);
    const injury_occurred = safe(body.injury_occurred, 50);
    const medical_attention = safe(body.medical_attention, 50);

    const reference_id = formatReferenceId();
    const submitted_at = new Date().toISOString();
    const user_agent = safe(req.headers.get("user-agent"), 500);

    // --- Store in Supabase (cloud record) ---
    const supabaseUrl = process.env.GREENPOINT_SUPABASE_URL;
    const supabaseKey = process.env.GREENPOINT_SUPABASE_SERVICE_KEY;

    let supabaseError = null;
    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error } = await supabase.from("incident_reports").insert({
          reference_id,
          submitted_at,
          reporter_ip: ip,
          reporter_user_agent: user_agent,
          name,
          reporter_email: reporter_email || null,
          reporter_phone: reporter_phone || null,
          workplace_address,
          incident_date,
          incident_time: incident_time || null,
          incident_type: incident_type || null,
          description,
          witnesses: witnesses || null,
          injury_occurred,
          medical_attention,
          raw_payload: body,
        });
        if (error) supabaseError = error.message;
      } catch (e) {
        supabaseError = e.message;
      }
    } else {
      supabaseError = "Supabase env vars not set (storage skipped)";
    }

    // --- Email notification to Miguel via Resend ---
    const resendKey = process.env.GREENPOINT_RESEND_API_KEY;
    const notifyEmail = process.env.GREENPOINT_NOTIFICATION_EMAIL || "info@greenpointms.com";

    let emailError = null;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);

        const emailHtml = buildNotificationEmailHtml({
          reference_id, submitted_at, name, reporter_email, reporter_phone,
          workplace_address, incident_date, incident_time,
          incident_type: incidentTypeLabels[incident_type] || incident_type || "Not specified",
          description, witnesses,
          injury_occurred: injuryLabels[injury_occurred] || injury_occurred,
          medical_attention: medicalLabels[medical_attention] || medical_attention,
          ip, user_agent,
        });

        await resend.emails.send({
          from: "GreenPoint Incident Reports <info@greenpointms.com>",
          to: [notifyEmail],
          reply_to: reporter_email || undefined,
          subject: `[Incident Report] ${reference_id} — ${name} at ${workplace_address.slice(0, 60)}`,
          html: emailHtml,
        });

        // --- Send acknowledgment copy to reporter if email provided ---
        if (reporter_email) {
          await resend.emails.send({
            from: "GreenPoint Maintenance Services <info@greenpointms.com>",
            to: [reporter_email],
            subject: `Acknowledgment: Incident Report ${reference_id} Received`,
            html: buildAcknowledgmentEmailHtml({
              reference_id, submitted_at, name, workplace_address, incident_date, description,
            }),
          });
        }
      } catch (e) {
        emailError = e.message;
      }
    } else {
      emailError = "Resend API key not set (email skipped)";
    }

    // --- Even if email/supabase partially failed, acknowledge receipt ---
    if (supabaseError && emailError) {
      console.error("[INCIDENT REPORT] Both storage and email failed:", { supabaseError, emailError });
      return NextResponse.json(
        {
          error: "Your report could not be processed. Please call Miguel Garcia immediately at 347-332-9348.",
          reference_id,
        },
        { status: 500 }
      );
    }

    if (supabaseError) console.error("[INCIDENT REPORT] Storage error:", supabaseError);
    if (emailError) console.error("[INCIDENT REPORT] Email error:", emailError);

    return NextResponse.json({
      ok: true,
      reference_id,
      submitted_at,
    });
  } catch (err) {
    console.error("[INCIDENT REPORT] Unhandled error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please call Miguel Garcia at 347-332-9348." },
      { status: 500 }
    );
  }
}

// ============================================================
// Email templates
// ============================================================

function buildNotificationEmailHtml(d) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#fafbfa;font-family:'Segoe UI',Arial,sans-serif;color:#222;">
  <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
    <div style="background:#0d2818;color:#fff;padding:24px;border-radius:10px 10px 0 0;">
      <div style="font-size:11px;color:#C8A34D;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">GreenPoint Maintenance Services · Incident Report</div>
      <div style="font-size:22px;font-weight:700;">New Incident Report Submitted</div>
      <div style="margin-top:8px;font-size:13px;color:rgba(255,255,255,0.7);">Reference: <strong style="color:#fff;font-family:monospace;">${d.reference_id}</strong></div>
    </div>

    <div style="background:#fff;padding:28px 24px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px;">

      <h3 style="margin:0 0 12px 0;font-size:14px;color:#1B7A3D;text-transform:uppercase;letter-spacing:0.08em;">Reporter</h3>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        ${row("Name", d.name)}
        ${row("Email", d.reporter_email || "(not provided)")}
        ${row("Phone", d.reporter_phone || "(not provided)")}
      </table>

      <h3 style="margin:0 0 12px 0;font-size:14px;color:#1B7A3D;text-transform:uppercase;letter-spacing:0.08em;">Incident</h3>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        ${row("Workplace Address", d.workplace_address)}
        ${row("Date", d.incident_date)}
        ${row("Time", d.incident_time || "(not specified)")}
        ${row("Type", d.incident_type)}
        ${row("Injury", d.injury_occurred)}
        ${row("Medical", d.medical_attention)}
        ${row("Witnesses", d.witnesses || "(none listed)")}
      </table>

      <h3 style="margin:0 0 12px 0;font-size:14px;color:#1B7A3D;text-transform:uppercase;letter-spacing:0.08em;">Description</h3>
      <div style="background:#f5f7f5;padding:16px;border-left:3px solid #1B7A3D;border-radius:4px;font-size:14px;line-height:1.7;white-space:pre-wrap;color:#333;">
${escapeHtml(d.description)}
      </div>

      <h3 style="margin:24px 0 12px 0;font-size:14px;color:#888;text-transform:uppercase;letter-spacing:0.08em;">Submission Metadata</h3>
      <table style="width:100%;border-collapse:collapse;font-size:12px;color:#666;">
        ${row("Submitted", d.submitted_at)}
        ${row("IP", d.ip)}
        ${row("User Agent", d.user_agent)}
      </table>

      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #eee;font-size:12px;color:#888;line-height:1.6;">
        This is an automated notification from the GreenPoint incident report form. The full record has been saved to the company database. Reply to this email to respond to the reporter${d.reporter_email ? ` (${d.reporter_email})` : ""}.
      </div>
    </div>
  </div>
</body></html>`;
}

function buildAcknowledgmentEmailHtml(d) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#fafbfa;font-family:'Segoe UI',Arial,sans-serif;color:#222;">
  <div style="max-width:600px;margin:0 auto;padding:32px 20px;">
    <div style="background:#0d2818;color:#fff;padding:24px;border-radius:10px 10px 0 0;">
      <div style="font-size:11px;color:#C8A34D;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">GreenPoint Maintenance Services</div>
      <div style="font-size:20px;font-weight:700;">Incident Report Received</div>
    </div>

    <div style="background:#fff;padding:28px 24px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px;">
      <p style="font-size:15px;line-height:1.7;color:#333;margin:0 0 16px 0;">
        Hi ${escapeHtml(d.name)},
      </p>
      <p style="font-size:15px;line-height:1.7;color:#333;margin:0 0 16px 0;">
        This is your timestamped acknowledgment that GreenPoint Maintenance Services Corp has received your incident report. Miguel Garcia will follow up with you as soon as possible.
      </p>

      <div style="background:#f5f7f5;padding:20px;border-radius:8px;margin:20px 0;">
        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Reference ID</div>
        <div style="font-family:monospace;font-size:16px;font-weight:700;color:#0d2818;margin-bottom:16px;">${d.reference_id}</div>

        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Submitted</div>
        <div style="font-size:14px;color:#333;margin-bottom:16px;">${d.submitted_at}</div>

        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Workplace</div>
        <div style="font-size:14px;color:#333;margin-bottom:16px;">${escapeHtml(d.workplace_address)}</div>

        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Incident Date</div>
        <div style="font-size:14px;color:#333;margin-bottom:16px;">${d.incident_date}</div>

        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Your Description</div>
        <div style="font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${escapeHtml(d.description)}</div>
      </div>

      <p style="font-size:14px;line-height:1.7;color:#555;margin:16px 0;">
        <strong>Next steps:</strong> If your incident involved an injury, please seek any necessary medical care. For life-threatening emergencies, call 911. Miguel Garcia can be reached at <a href="mailto:info@greenpointms.com" style="color:#1B7A3D;">info@greenpointms.com</a> or <a href="tel:+13473329348" style="color:#1B7A3D;">347-332-9348</a>.
      </p>

      <p style="font-size:14px;line-height:1.7;color:#555;margin:16px 0;">
        Please save this email for your records.
      </p>

      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #eee;font-size:12px;color:#888;line-height:1.6;">
        GreenPoint Maintenance Services Corp<br>
        1420 Outlook Ave, Apt 2, Bronx, NY 10465<br>
        info@greenpointms.com · 347-332-9348
      </div>
    </div>
  </div>
</body></html>`;
}

function row(label, value) {
  return `<tr>
    <td style="padding:8px 12px 8px 0;font-size:13px;color:#888;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;font-size:14px;color:#222;">${escapeHtml(value || "")}</td>
  </tr>`;
}

function escapeHtml(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
