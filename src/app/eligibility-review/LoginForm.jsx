"use client";
import { useState } from "react";

export default function LoginForm() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async () => {
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/eligibility/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
      if (res.ok) { window.location.reload(); return; }
      setErr("Incorrect password."); setBusy(false);
    } catch { setErr("Network error."); setBusy(false); }
  };
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--body)" }}>
      <div style={{ width: 340, border: "1px solid var(--border)", borderRadius: 12, padding: 28, background: "#fff" }}>
        <h2 style={{ fontFamily: "var(--heading)", fontSize: 20, fontWeight: 700, color: "var(--dark-text)", marginBottom: 6 }}>Eligibility Review</h2>
        <p style={{ fontSize: 13, color: "var(--subtle-text)", marginBottom: 18 }}>Authorized GreenPoint staff only.</p>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} placeholder="Password"
          style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, boxSizing: "border-box", marginBottom: 12 }} />
        {err && <p style={{ color: "#DC2626", fontSize: 13, marginBottom: 12 }}>{err}</p>}
        <button onClick={submit} disabled={busy} style={{ width: "100%", background: "var(--green)", color: "#fff", padding: "11px", borderRadius: 8, fontWeight: 700, border: "none", cursor: busy ? "not-allowed" : "pointer", opacity: busy ? 0.6 : 1 }}>{busy ? "Checking..." : "Sign in"}</button>
      </div>
    </div>
  );
}
