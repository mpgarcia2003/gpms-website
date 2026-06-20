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

const S = {
  wrap: { maxWidth: 680, margin: "0 auto", padding: "40px 18px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif", color: "#1a2027" },
  brand: { color: "#1f7a3d", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: ".03em" },
  h1: { fontSize: 26, fontWeight: 800, margin: "6px 0 6px" },
  p: { fontSize: 15, lineHeight: 1.6, color: "#3a444e" },
  card: { border: "1px solid #e2e6ea", borderRadius: 12, padding: 20, marginTop: 22, background: "#fff" },
  sec: { fontSize: 12, fontWeight: 700, color: "#1f7a3d", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 12 },
  guideRow: { display: "flex", gap: 24, flexWrap: "wrap" },
  guideCol: { flex: "1 1 250px", minWidth: 0 },
  devTitle: { fontSize: 15, fontWeight: 700, margin: "4px 0 8px", display: "flex", alignItems: "center", gap: 8 },
  ol: { margin: 0, paddingLeft: 20 },
  li: { fontSize: 14.5, lineHeight: 1.6, color: "#3a444e", marginBottom: 9 },
  label: { display: "block", fontSize: 13.5, fontWeight: 600, margin: "12px 0 5px" },
  input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #c8cfd6", fontSize: 16, boxSizing: "border-box", background: "#fff" },
  row2: { display: "flex", gap: 12, flexWrap: "wrap" },
  col: { flex: "1 1 200px", minWidth: 0 },
  dl: { display: "inline-block", background: "#1f7a3d", color: "#fff", textDecoration: "none", padding: "13px 20px", borderRadius: 8, fontWeight: 600, fontSize: 15 },
  btn: { width: "100%", marginTop: 18, background: "#1f7a3d", color: "#fff", border: 0, padding: "15px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" },
  note: { fontSize: 12.5, color: "#6b7682", marginTop: 14, lineHeight: 1.5 },
  err: { background: "#fdecec", color: "#a3271f", padding: "10px 12px", borderRadius: 8, fontSize: 14, marginTop: 12 },
  ok: { textAlign: "center", padding: "14px 6px" },
};

export default function BackgroundCheckForm() {
  const [upStatus, setUpStatus] = useState("idle");
  const [upError, setUpError] = useState("");
  const [fileName, setFileName] = useState("");

  async function submitUpload(e) {
    e.preventDefault();
    setUpError(""); setUpStatus("submitting");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/background-check", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setUpError(data.error || "Something went wrong. Please try again."); setUpStatus("idle"); return; }
      setUpStatus("success");
    } catch { setUpError("Network error. Please try again."); setUpStatus("idle"); }
  }

  return (
    <div style={S.wrap}>
      <div style={S.brand}>GreenPoint Maintenance Services</div>
      <h1 style={S.h1}>Pre-Employment Application</h1>
      <p style={S.p}>To apply, download the packet, fill it out completely, and upload it back here. Follow the steps for your device below. This page is private to invited applicants.</p>

      <div style={S.card}>
        <div style={S.sec}>How to apply</div>
        <div style={{ background: "#fff4f3", border: "1px solid #f1c4be", borderLeft: "4px solid #c0392b", borderRadius: 8, padding: "12px 14px", marginBottom: 16, fontSize: 14, lineHeight: 1.55, color: "#7a2820" }}>
          <b>Required &mdash; 28-year address history.</b> You must list <b>every address where you have lived for the past 28 years</b> (street, city, state, and the move-in/move-out dates) on the SCR form &mdash; the page with the address grid near the bottom of the packet. Our clients include medical clinics and rehabilitation facilities, and New York State requires this complete address history for the mandated background check. <b>Applications with a blank or incomplete address history cannot be processed.</b> If you need more room, attach a separate sheet.
        </div>
        <div style={S.guideRow}>
          <div style={S.guideCol}>
            <div style={S.devTitle}><span>&#128241;</span> On your phone</div>
            <ol style={S.ol}>
              <li style={S.li}>Tap <b>Download the packet</b> below — it opens in a preview.</li>
              <li style={S.li}>Tap the <b>Share</b> icon, then <b>Save to Files</b> (iPhone) or <b>Download</b> (Android).</li>
              <li style={S.li}>Open the saved PDF, fill in every field, and sign where shown.</li>
              <li style={S.li}>Return to this page and <b>upload</b> the completed packet below.</li>
            </ol>
            <div style={{ background: "#fff7e6", border: "1px solid #f3d9a0", borderRadius: 8, padding: "10px 12px", marginTop: 10, fontSize: 13.5, lineHeight: 1.5, color: "#7a5b12" }}>
              <b>Important:</b> If the text boxes won&rsquo;t let you type, your phone&rsquo;s built-in viewer can&rsquo;t fill PDFs. Open the file in the free <b>Adobe Acrobat Reader</b> app, then fill it out there.
            </div>
          </div>
          <div style={S.guideCol}>
            <div style={S.devTitle}><span>&#128187;</span> On a computer</div>
            <ol style={S.ol}>
              <li style={S.li}>Click <b>Download the packet</b> below.</li>
              <li style={S.li}>Open it in <b>Adobe Acrobat Reader</b> (free) and fill it out completely.</li>
              <li style={S.li}>Save the file, then <b>upload</b> it below.</li>
            </ol>
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.sec}>Step 1 &middot; Download the packet</div>
        <p style={S.p}>Download the complete packet, then fill it out using the steps above. Be sure to complete every section and sign where indicated.</p>
        <a style={S.dl} href={PACKET_URL} download>Download the packet (PDF)</a>
      </div>

      <div style={S.card}>
        <div style={S.sec}>Step 2 &middot; Upload your completed packet</div>
        {upStatus === "success" ? (
          <div style={S.ok}>
            <div style={{ fontSize: 42 }}>&#10003;</div>
            <p style={{ ...S.p, fontWeight: 600, color: "#1f7a3d" }}>Your completed packet was sent to GreenPoint Maintenance Services. Thank you &mdash; we&rsquo;ll be in touch about next steps, including in-person fingerprinting.</p>
          </div>
        ) : (
          <form onSubmit={submitUpload}>
            <div style={S.row2}>
              <div style={S.col}><label style={S.label}>Full name *</label><input style={S.input} name="full_name" required autoComplete="name" /></div>
              <div style={S.col}><label style={S.label}>Email *</label><input style={S.input} type="email" name="email" required autoComplete="email" /></div>
            </div>
            <div style={S.row2}>
              <div style={S.col}><label style={S.label}>Phone *</label><input style={S.input} type="tel" name="phone" required autoComplete="tel" /></div>
              <div style={S.col}>
                <label style={S.label}>Location applying for</label>
                <select style={S.input} name="location" defaultValue="">
                  <option value="" disabled>Select a location</option>
                  {LOCATIONS.map((l) => (<option key={l} value={l}>{l}</option>))}
                </select>
              </div>
            </div>
            <label style={S.label}>Completed packet (PDF) *</label>
            <input style={S.input} type="file" name="packet" accept="application/pdf,.pdf" required onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
            {fileName ? <div style={{ fontSize: 13, color: "#1f7a3d", marginTop: 6 }}>Selected: {fileName}</div> : null}
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />
            <label style={{ display: "flex", gap: 8, alignItems: "flex-start", margin: "16px 0 4px", fontSize: 14, lineHeight: 1.5, color: "#3a444e" }}><input type="checkbox" name="confirm_complete" required style={{ marginTop: 3 }} /> <span>I confirm I completed every page of the packet, including my full <b>28-year address history</b> (street, city, state, and dates) on the SCR form.</span></label>
            {upError ? <div style={S.err}>{upError}</div> : null}
            <button style={S.btn} type="submit" disabled={upStatus === "submitting"}>{upStatus === "submitting" ? "Sending…" : "Submit completed packet"}</button>
          </form>
        )}
      </div>

      <p style={S.note}>Your packet is sent directly and securely to GreenPoint Maintenance Services and is not posted publicly or stored in a database. Please do not email these documents elsewhere, as they contain sensitive personal information.</p>
    </div>
  );
}
