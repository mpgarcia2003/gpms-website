import ApplicationForm from "./ApplicationForm";

export const metadata = {
  title: "Careers | GreenPoint Maintenance Services Corp",
  description: "Join the GreenPoint Maintenance team. Now hiring janitorial technicians, day porters, site supervisors across NYC.",
};

const positions = ["Janitorial Technician", "Day Porter", "Site Supervisor", "Floor Care Specialist", "Maintenance Technician"];

export default function CareersPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ background: "var(--green-dark)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, background: "radial-gradient(circle at 25% 50%, var(--green) 0%, transparent 50%), radial-gradient(circle at 75% 50%, var(--gold) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
          <p style={{ color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: 13, marginBottom: 12, fontFamily: "var(--mono)" }}>Now Hiring</p>
          <h1 style={{ fontFamily: "var(--heading)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>Build Your Career<br /><span style={{ color: "var(--green)" }}>with GreenPoint</span></h1>
          <p style={{ color: "#B0C4B8", fontSize: 18, maxWidth: 560, lineHeight: 1.6, marginBottom: 32 }}>We&apos;re growing our team across New York City. Competitive pay, stable schedules, and a professional work environment.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#apply" style={{ background: "var(--green)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", fontFamily: "var(--heading)" }}>Apply Online</a>
            <a href="/GreenPoint_Employment_Application.pdf" download style={{ border: "2px solid var(--gold)", color: "var(--gold)", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", fontFamily: "var(--heading)" }}>Download PDF Application</a>
          </div>
        </div>
      </section>

      {/* Why GreenPoint */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--heading)", fontSize: 32, fontWeight: 700, color: "var(--dark-text)", textAlign: "center", marginBottom: 48 }}>Why Work at GreenPoint?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[{ icon: "\uD83D\uDCB0", title: "Competitive Pay", desc: "Wages that reflect your skills, with performance-based increases." }, { icon: "\uD83D\uDD50", title: "Stable Schedules", desc: "Consistent Monday\u2013Saturday at professional commercial facilities." }, { icon: "\uD83D\uDCC8", title: "Growth Opportunities", desc: "We promote from within. Grow into lead and supervisory roles." }].map((item, i) => (
              <div key={i} style={{ background: "var(--off-white)", borderRadius: 12, padding: 28, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--heading)", fontSize: 18, fontWeight: 700, color: "var(--dark-text)", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "var(--body-text)", fontSize: 15, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" style={{ padding: "64px 24px", background: "var(--off-white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--heading)", fontSize: 32, fontWeight: 700, color: "var(--dark-text)", textAlign: "center", marginBottom: 8 }}>Apply Online</h2>
          <p style={{ color: "var(--body-text)", textAlign: "center", marginBottom: 8 }}>All fields marked * are required.</p>
          <p style={{ color: "var(--subtle-text)", textAlign: "center", fontSize: 14, marginBottom: 40 }}>Prefer paper? <a href="/GreenPoint_Employment_Application.pdf" download style={{ color: "var(--green)", fontWeight: 600 }}>Download PDF</a> and email to info@greenpointms.com</p>
          <ApplicationForm positions={positions} />
        </div>
      </section>

      {/* EEO */}
      <section style={{ background: "var(--green-dark)", padding: "40px 24px" }}>
        <p style={{ maxWidth: 800, margin: "0 auto", color: "#7A9A87", fontSize: 13, textAlign: "center", lineHeight: 1.7 }}>GreenPoint Maintenance Services Corp is an Equal Opportunity Employer. We consider applicants without regard to race, color, religion, national origin, sex, age, disability, sexual orientation, gender identity, veteran status, or any other protected status under federal, New York State, or New York City law.</p>
      </section>
    </main>
  );
}
