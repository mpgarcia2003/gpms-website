import EligibilityForm from "./EligibilityForm";

export const metadata = {
  title: "Eligibility Packet | GreenPoint Maintenance Services Corp",
  description: "GreenPoint healthcare-facility eligibility packet.",
  robots: { index: false, follow: false, nocache: true },
};

export default function EligibilityPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: 80 }}>
      <section style={{ background: "var(--green-dark)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: 13, marginBottom: 10, fontFamily: "var(--mono)" }}>GreenPoint Maintenance Services</p>
          <h1 style={{ fontFamily: "var(--heading)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.15 }}>Eligibility Packet</h1>
          <p style={{ color: "#B0C4B8", fontSize: 16, maxWidth: 560, lineHeight: 1.6, marginTop: 14 }}>Please complete this packet to begin onboarding for placement at a GreenPoint healthcare-facility account.</p>
        </div>
      </section>

      <section style={{ padding: "48px 24px", background: "var(--off-white)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <EligibilityForm />
        </div>
      </section>

      <section style={{ background: "var(--green-dark)", padding: "40px 24px" }}>
        <p style={{ maxWidth: 800, margin: "0 auto", color: "#7A9A87", fontSize: 13, textAlign: "center", lineHeight: 1.7 }}>GreenPoint Maintenance Services Corp is an Equal Opportunity Employer. We consider applicants without regard to race, color, religion, national origin, sex, age, disability, sexual orientation, gender identity, veteran status, or any other protected status under federal, New York State, or New York City law.</p>
      </section>
    </main>
  );
}
