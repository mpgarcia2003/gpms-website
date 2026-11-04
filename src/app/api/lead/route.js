import { NextResponse } from "next/server";
import { Resend } from "resend";

// ============================================================
// GreenPoint website lead notification
// - Quote email, homepage contact, and free facility inspection
// - Emails the team via Resend. No database write.
// ============================================================

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateMap = new Map();

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const FORMS = {
  quote: {
    label: "Quote email",
    required: ["email"],
  },
  contact: {
    label: "Homepage contact",
    required: ["name", "email", "phone"],
  },
  inspection: {
    label: "Free facility inspection",
    required: ["name", "email", "phone", "facilityType", "address"],
  },
};

const FIELD_LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  facilityType: 80,
  address: 300,
  message: 4000,
  preferredDate: 32,
};

const FIELD_LABELS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  facilityType: "Facility type",
  address: "Facility address",
  message: "Message",
  preferredDate: "Preferred date",
};

const INSPECTION_FACILITY_TYPES = new Set([
  "school",
  "healthcare",
  "government",
  "worship",
  "daycare",
  "office",
  "other",
]);

const CONTACT_FACILITY_TYPES = new Set([
  "School / Educational",
  "Church / House of Worship",
  "Medical / Healthcare",
  "Daycare / Childcare",
  "Government",
  "Commercial Office",
  "Other",
]);

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }
  entry.count += 1;
  rateMap.set(ip, entry);
  if (rateMap.size > 5000) {
    for (const [key, value] of rateMap) {
      if (now > value.resetAt) rateMap.delete(key);
    }
  }
  return entry.count <= RATE_LIMIT_MAX;
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

function cleanText(value) {
  return String(value)
    .replace(/[\u0000-\u001F\u007F\u200B-\u200D\uFEFF]/g, "")
    .trim();
}

function isPhone(value) {
  if (!/^[0-9+().\-\s]{7,40}$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function readField(body, key, required) {
  const raw = body[key];
  const label = FIELD_LABELS[key];
  if (raw === undefined || raw === null || raw === "") {
    if (required) return { error: `${label} is required.` };
    return { value: "" };
  }
  if (typeof raw !== "string") return { error: "Invalid request." };
  const value = cleanText(raw);
  if (!value) {
    if (required) return { error: `${label} is required.` };
    return { value: "" };
  }
  if (value.length > FIELD_LIMITS[key]) return { error: `${label} is too long.` };
  return { value };
}

function notificationRecipient() {
  const fallback = "info@greenpointms.com";
  const configured = process.env.GREENPOINT_NOTIFICATION_EMAIL;
  if (typeof configured !== "string" || configured.trim() === "") return { email: fallback };
  const candidate = cleanText(configured);
  if (!candidate || candidate.length > 254 || !EMAIL_RE.test(candidate)) return { error: true };
  return { email: candidate };
}

// greenpointms.com is not a verified Resend domain (not_started).
// mail.getstockpoint.com is verified. Override with LEAD_FROM_EMAIL after DNS verification.
const DEFAULT_LEAD_FROM = "GreenPoint Website <leads@mail.getstockpoint.com>";

function leadFromAddress() {
  const configured = process.env.LEAD_FROM_EMAIL;
  if (typeof configured !== "string") return DEFAULT_LEAD_FROM;
  const value = configured.trim();
  return value || DEFAULT_LEAD_FROM;
}

function resendApiKey() {
  const preferred = process.env.GREENPOINT_RESEND_API_KEY;
  const fallback = process.env.RESEND_API_KEY;
  const raw = typeof preferred === "string" && preferred.trim() ? preferred : fallback;
  return typeof raw === "string" ? raw.trim() : "";
}

function logResendFailure(form, error) {
  const source = error && typeof error === "object" ? error : {};
  const name = typeof source.name === "string" && source.name ? source.name : "Error";
  const rawMessage = typeof source.message === "string" && source.message ? source.message : "Resend send failed";
  const message = rawMessage
    .replace(/re_[A-Za-z0-9_-]+/g, "[redacted]")
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "[redacted]");
  const statusCode =
    typeof source.statusCode === "number"
      ? source.statusCode
      : typeof source.status === "number"
        ? source.status
        : undefined;
  console.error("[lead] resend send failed", { form, name, message, statusCode });
}

function row(label, value) {
  return `<tr>
    <td style="padding:8px 12px 8px 0;font-size:13px;color:#888;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;font-size:14px;color:#222;">${escapeHtml(value || "")}</td>
  </tr>`;
}

function buildLeadEmailHtml({ formLabel, fields, submittedAt }) {
  const detailRows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Facility type", fields.facilityType],
    ["Address", fields.address],
    ["Preferred date", fields.preferredDate],
  ].filter(([, value]) => value);

  const messageBlock = fields.message
    ? `<h3 style="margin:24px 0 12px 0;font-size:14px;color:#1B7A3D;text-transform:uppercase;letter-spacing:0.08em;">Details</h3>
      <div style="background:#f5f7f5;padding:16px;border-left:3px solid #1B7A3D;border-radius:4px;font-size:14px;line-height:1.7;white-space:pre-wrap;color:#333;">${escapeHtml(fields.message)}</div>`
    : "";

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#fafbfa;font-family:'Segoe UI',Arial,sans-serif;color:#222;">
  <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
    <div style="background:#0d2818;color:#fff;padding:24px;border-radius:10px 10px 0 0;">
      <div style="font-size:11px;color:#C8A34D;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">GreenPoint Maintenance Services · Website lead</div>
      <div style="font-size:22px;font-weight:700;">New lead from ${escapeHtml(formLabel)}</div>
    </div>
    <div style="background:#fff;padding:28px 24px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:8px;">
        ${row("Form", formLabel)}
        ${detailRows.map(([label, value]) => row(label, value)).join("")}
        ${row("Submitted", submittedAt)}
      </table>
      ${messageBlock}
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #eee;font-size:12px;color:#888;line-height:1.6;">
        Sent from the GreenPoint website. Reply to this email to respond to the lead.
      </div>
    </div>
  </div>
</body></html>`;
}

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: silent success, no email.
    if (typeof body.company_website === "string" && body.company_website.trim()) {
      return NextResponse.json({ ok: true });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute and try again, or call 844-814-0810." },
        { status: 429 }
      );
    }

    const source = FORMS[body.form];
    if (!source || typeof body.form !== "string") {
      return NextResponse.json({ error: "Unknown form." }, { status: 400 });
    }

    const fields = {};
    for (const key of Object.keys(FIELD_LIMITS)) {
      const required = source.required.includes(key);
      const result = readField(body, key, required);
      if (result.error) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }
      fields[key] = result.value;
    }

    if (!EMAIL_RE.test(fields.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (fields.phone && !isPhone(fields.phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }
    if (fields.preferredDate && !DATE_RE.test(fields.preferredDate)) {
      return NextResponse.json({ error: "Preferred date is invalid." }, { status: 400 });
    }
    if (body.form === "inspection" && !INSPECTION_FACILITY_TYPES.has(fields.facilityType)) {
      return NextResponse.json({ error: "Facility type is not recognized." }, { status: 400 });
    }
    if (body.form === "contact" && fields.facilityType && !CONTACT_FACILITY_TYPES.has(fields.facilityType)) {
      return NextResponse.json({ error: "Facility type is not recognized." }, { status: 400 });
    }

    const resendKey = resendApiKey();
    if (!resendKey) {
      console.error("[lead] email is not configured");
      return NextResponse.json(
        { error: "Email is not configured on the server. Please call 844-814-0810." },
        { status: 500 }
      );
    }

    const recipient = notificationRecipient();
    if (recipient.error) {
      console.error("[lead] notification recipient is not configured");
      return NextResponse.json(
        { error: "Email is not configured on the server. Please call 844-814-0810." },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toISOString();
    const who = (fields.name || fields.email).slice(0, 80);
    const subject = `[Website lead] ${source.label} — ${who}`;

    let sendResult;
    try {
      const resend = new Resend(resendKey);
      sendResult = await resend.emails.send({
        from: leadFromAddress(),
        to: [recipient.email],
        replyTo: EMAIL_RE.test(fields.email) ? fields.email : undefined,
        subject,
        html: buildLeadEmailHtml({ formLabel: source.label, fields, submittedAt }),
      });
    } catch (error) {
      logResendFailure(body.form, error);
      return NextResponse.json(
        { error: "We could not send your request. Please try again or call 844-814-0810." },
        { status: 502 }
      );
    }

    if (sendResult?.error || !sendResult?.data?.id) {
      logResendFailure(body.form, sendResult?.error);
      return NextResponse.json(
        { error: "We could not send your request. Please try again or call 844-814-0810." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error("[lead] unhandled error");
    return NextResponse.json(
      { error: "Unexpected error. Please try again or call 844-814-0810." },
      { status: 500 }
    );
  }
}
