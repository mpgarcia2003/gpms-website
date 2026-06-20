"use client";

import { useState } from "react";

const PACKET_URL = "/GreenPoint_Eligibility_Packet_FILLABLE.pdf";
const LOCATIONS = [
  "East New York, Brooklyn",
  "Fort Greene, Brooklyn",
  "Bushwick, Brooklyn",
  "Washington Heights, Manhattan",
  "Central Harlem, Manhattan",
  "East Harlem, Manhattan",
  "Other / Not sure",
];

const C = {
  wrap: { maxWidth: 680, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", color: "#1a2027" },
  brand: { color: "#1f7a3d", fontWeight: 700, letterSpacing: ".02em", fontSize: 14, textTransform: "uppercase" },
  h1: { fontSize: 28, fontWeight: 800, margin: "8px 0 8px" },
  p: { fontSize: 15, lineHeight: 1.6, color: "#3a444e" },
  card: { border: "1px solid #e2e6ea", borderRadius: 12, padding: 24, marginTop: 24, background: "#fff" },
  step: { fontSize: 13, fontWeight: 700, color: "#1f7a3d", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 8 },
  dl: { display: "inline-block", background: "#1f7a3d", color: "#fff", textDecoration: "none", padding: "12px 20px", borderRadius: 8, fontWeight: 600, fontSize: 15 },
  label: { display: "block", fontSize: 14, fontWeight: 600, margin: "14px 0 6px" },
  input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #c8cfd6", fontSize: 15, boxSizing: "border-box" },
  btn: { width: "100%", marginTop: 20, background: "#1f7a3d", color: "#fff", border: 0, padding: "14px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" },
  note: { fontSize: 12.5, color: "#6b7682", marginTop: 14, lineHeight: 1.5 },
  err: { background: "#fdecec", color: "#a3271f", padding: "10px 12px", borderRadius: 8, fontSize: 14, marginTop: 14 },
  ok: { textAlign: "center", padding: "30px 10px" },
};

export default function BackgroundCheckForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/background-check", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div style={C.wrap}>
        <div style={C.ok}>
          <div style={{ fontSize: 46 }}>&#10003;</div>
          <h1 style={C.h1}>Packet received</h1>
          <p style={C.p}>Thank you. Your completed eligibility packet has been sent to GreenPoint Maintenance Services. Our team will be in touch about next steps, including fingerprinting.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={C.wrap}>
      <div style={C.brand}>GreenPoint Maintenance Services</div>
      <h1 style={C.h1}>Pre-Employment Eligibility Packet</h1>
      <p style={C.p}>Welcome. To move forward, please complete the eligibility packet below and submit it here. This page is private to invited applicants.</p>

      <div style={C.card}>
        <div style={C.step}>Step 1 &middot; Download &amp; complete</div>
        <p style={C.p}>Download the packet, then fill it out. For best results, open it in <b>Adobe Acrobat Reader</b> (free). Be sure to complete every section and sign where indicated.</p>
        <a style={C.dl} href={PACKET_URL} download>Download the packet (PDF)</a>
      </div>

      <form className="bc-form" onSubmit={handleSubmit} style={C.card}>
        <div style={C.step}>Step 2 &middot; Submit your completed packet</div>

        <label style={C.label}>Full name *</label>
        <input style={C.input} name="full_name" required autoComplete="name" />

        <label style={C.label}>Email *</label>
        <input style={C.input} type="email" name="email" required autoComplete="email" />

        <label style={C.label}>Phone *</label>
        <input style={C.input} type="tel" name="phone" required autoComplete="tel" />

        <label style={C.label}>Location applying for</label>
        <select style={C.input} name="location" defaultValue="">
          <option value="" disabled>Select a location</option>
          {LOCATIONS.map((l) => (<option key={l} value={l}>{l}</option>))}
        </select>

        <label style={C.label}>Upload your completed packet (PDF) *</label>
        <input
          style={C.input}
          type="file"
          name="packet"
          accept="application/pdf,.pdf"
          required
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
        {fileName ? <div style={{ fontSize: 13, color: "#1f7a3d", marginTop: 6 }}>Selected: {fileName}</div> : null}

        {/* honeypot - hidden from real users */}
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

        {error ? <div style={C.err}>{error}</div> : null}

        <button style={C.btn} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit completed packet"}
        </button>

        <p style={C.note}>
          Your packet is sent directly and securely to GreenPoint Maintenance Services and is not posted publicly. Please do not email these documents elsewhere, as they contain sensitive personal information.
        </p>
      </form>
    </div>
  );
}
