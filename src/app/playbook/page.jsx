import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "The GreenPoint Playbook | How We Handle Call-Outs, Complaints & Emergencies",
  description:
    "What actually happens when a cleaner calls out, a tenant complains, or a pipe bursts at 2am. GreenPoint's operating protocols, first-30-day transition plan, and team screening — written out, step by step.",
  keywords: [
    "commercial cleaning accountability",
    "janitorial call-out coverage",
    "cleaning complaint process",
    "cleaning vendor transition plan",
    "how commercial cleaning companies handle emergencies",
    "GreenPoint Playbook",
  ],
  alternates: { canonical: "https://greenpointms.com/playbook/" },
  openGraph: {
    title: "The GreenPoint Playbook — Operations & Accountability",
    description: "Real scenarios, real protocols. How GreenPoint handles absences, complaints, emergencies, and your first 30 days.",
    url: "https://greenpointms.com/playbook/",
    type: "website",
  },
};

const PHONE_DISPLAY = "(844) 814-0810";
const PHONE_HREF = "tel:+18448140810";

const F = {
  h: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em" },
  body: "'DM Sans', sans-serif",
};

const SCENARIOS = [
  {
    id: "call-out",
    tag: "Absence coverage",
    title: "“It’s 11pm and your cleaner calls out sick.”",
    intro: "The scenario every facility manager dreads — and the one every cleaning company handles differently.",
    steps: [
      { when: "Minute 0", title: "The supervisor is alerted before the shift starts.", detail: "Crews check in through StockPoint. A missed check-in or a call-out flags the supervisor immediately — we are not waiting to find out in the morning." },
      { when: "Within 15 minutes", title: "A trained backup is activated.", detail: "Every building has two to three backup crew members who already know your layout, alarm codes, and site-specific rules. They are not learning your building for the first time." },
      { when: "Within 30 minutes", title: "Replacement confirmed, and you are notified.", detail: "The supervisor confirms the backup is en route and sends you a text or email. You wake up knowing it was handled, not wondering." },
      { when: "Next morning", title: "StockPoint photos verify the work.", detail: "Timestamped, GPS-tagged photos show the building was cleaned to standard — the same as any other night." },
    ],
  },
  {
    id: "complaint",
    tag: "Complaint handling",
    title: "“A tenant says the conference room wasn’t cleaned.”",
    intro: "Complaints happen. What matters is whether the vendor investigates or just apologizes.",
    steps: [
      { when: "Within 1 hour", title: "We pull the StockPoint record.", detail: "Before anyone points fingers, we review last night’s timestamped photos and task checklist for that room. The record answers the question objectively." },
      { when: "Within 2 hours", title: "You get a straight answer.", detail: "If we missed it, we say so and fix it. If the record shows it was cleaned, we share that evidence and look at what happened between cleaning and the complaint — an early meeting, after-hours use, a delivery." },
      { when: "Same day", title: "Corrective action is taken.", detail: "If it was our miss: the crew lead is retrained on that room’s requirements, a supervisor spot-checks it for the next five nights, and we follow up with the person who complained." },
      { when: "48 hours", title: "You receive a written incident report.", detail: "Root cause, corrective action, and the verification plan — documented. Not a verbal “we’ll do better.”" },
    ],
  },
  {
    id: "emergency",
    tag: "After-hours emergency",
    title: "“A toilet overflows on the 3rd floor at 2am.”",
    intro: "Your building doesn’t stop having problems because it’s after hours.",
    steps: [
      { when: "Minute 0", title: "The emergency line is answered.", detail: `Call ${PHONE_DISPLAY}. A person who can dispatch picks up — not a voicemail box.` },
      { when: "Within 15 minutes", title: "The situation is contained.", detail: "If our crew is on-site, they shut off the water, block the area, and place signage. If not, the nearest available team member is dispatched." },
      { when: "Within 45 minutes", title: "On-site response.", detail: "Water extraction, cleaning of the affected area, and temporary mitigation. If it is beyond our scope — a main-line break, structural damage — we have already called the appropriate licensed contractor." },
      { when: "Before the building opens", title: "Area restored and documented.", detail: "Clean, dry, and safe before the first person walks in, with a photo-documented incident report filed for your records and insurance." },
    ],
  },
  {
    id: "access",
    tag: "Third-party disruption",
    title: "“The elevator company no-showed. Your crew can’t reach floors 4–8.”",
    intro: "Other vendors affect your cleaning. Here is how we adapt.",
    steps: [
      { when: "Immediately", title: "The crew lead looks for alternative access.", detail: "Stairwells, freight elevator, service entrance — our crews know your building and find another route when one exists." },
      { when: "Within 30 minutes", title: "You are notified with a plan.", detail: "If we can reach the floors, we clean them. If we can’t, we tell you tonight — not tomorrow morning — and propose a make-up window." },
      { when: "Next available window", title: "Missed floors are cleaned first.", detail: "The make-up service prioritizes what was missed. It is scheduled and confirmed, not “we’ll get to it.”" },
    ],
  },
  {
    id: "rush",
    tag: "Last-minute request",
    title: "“Friday at 3pm: ‘We need the building spotless for a Monday event.’”",
    intro: "Last-minute requests show whether a cleaning company is a partner or just a vendor.",
    steps: [
      { when: "Within 1 hour", title: "Scope confirmed, crew allocated, price quoted.", detail: "We do not say “let me get back to you Monday.” You get a price and a plan the same afternoon." },
      { when: "Saturday / Sunday", title: "The crew executes.", detail: "Deep cleaning, floor work, restroom refresh, lobby detailing — whatever the event requires. Before-and-after photos go into StockPoint so you can check before Monday." },
      { when: "Monday morning", title: "Your building is ready.", detail: "You walk in knowing it is done because you already saw the photos." },
    ],
  },
  {
    id: "training",
    tag: "Site training",
    title: "“How do you train someone on my building?”",
    intro: "Every building is different. Generic training produces generic results.",
    steps: [
      { when: "Before the first shift", title: "Building-specific orientation.", detail: "Floor plan, alarm system, key protocols, restricted areas, trash locations, supply closets, and any site rules — before anyone touches a mop." },
      { when: "Shifts 1–5", title: "Shadow shifts with an experienced crew member.", detail: "The new member works alongside someone who knows your building: which tenants arrive early, which floors need extra attention, where the problem spots are." },
      { when: "Shifts 6–10", title: "Solo, with nightly supervisor checks.", detail: "The new crew member works independently while a supervisor inspects nightly and reviews their StockPoint photos against the veteran’s." },
      { when: "Day 30", title: "Sign-off.", detail: "The supervisor formally approves the crew member for your building and you have met them. No more “who is this new person?”" },
    ],
  },
];

const DISCOVERY = [
  {
    sector: "House of Worship",
    example: "Synagogue",
    heard: "Heavy traffic on Shabbat and holidays, quiet midweek. The nursery fills every Saturday morning. The kitchen goes from zero to 200 meals for a community event.",
    response: "We build the schedule around your worship calendar, not a Monday–Friday template: post-Shabbat deep cleaning, pre-holiday preparation, nursery sanitization before every children’s program.",
    question: "Walk me through a typical week — when are your peak days, which rooms get used, and which events create the most cleanup?",
  },
  {
    sector: "Healthcare",
    example: "Medical Office",
    heard: "Patients are in exam rooms 8am to 6pm. No chemical odors during appointments. Every exam room needs terminal cleaning before morning.",
    response: "Day porters handle waiting areas and restrooms during patient hours. After-hours crews perform terminal cleaning of clinical areas with low-odor, EPA-registered products at label dwell times. Every surface documented.",
    question: "Which rooms are clinical versus administrative? Do you have procedure rooms that need terminal cleaning between patients?",
  },
  {
    sector: "Education",
    example: "K–12 School",
    heard: "The cafeteria needs cleaning after breakfast and lunch, not just at night. The gym floor can’t get wet. Kindergarten rooms need non-toxic everything.",
    response: "Meal-by-meal cafeteria turnovers. Gym-specific dust-mop protocols. Product selection by wing and age group. Summer deep cleaning planned months ahead to use the full break.",
    question: "How many meal services per day? Do after-school programs use classrooms in the evening? Any carpeted rooms we should know about?",
  },
  {
    sector: "Government",
    example: "Municipal Building",
    heard: "Three hundred people come through the lobby daily. Public restrooms are rough by noon. The courtroom has to be spotless at 9am sharp.",
    response: "Day porters for continuous public-area upkeep. Restroom rounds every 60–90 minutes. Courtroom ready by 8am. Security-compliant access protocols and prevailing-wage documentation.",
    question: "Which areas are public-facing versus employee-only? Are there security zones with different access levels? What is the daily visitor count?",
  },
];

const TRANSITION = [
  { days: "Days 1–3", title: "Setup", items: ["Detailed facility walkthrough", "Scope finalization document", "Key and alarm code handoff", "Supply closet staging", "StockPoint dashboard setup"] },
  { days: "Days 4–7", title: "Crew Assignment", items: ["Dedicated team selected", "Building-specific training", "Equipment deployed", "Product inventory stocked", "Emergency contacts exchanged"] },
  { days: "Days 8–14", title: "Supervised Launch", items: ["Service begins with a supervisor on-site", "Nightly quality checks", "Baseline ATP readings where in scope", "Tenant and staff introductions", "Daily feedback loop"] },
  { days: "Days 15–30", title: "Steady State", items: ["Crew operates independently", "First quality review meeting", "Protocol adjustments finalized", "30-day satisfaction check-in", "Ongoing StockPoint reporting"] },
];

const TEAM = [
  {
    title: "How we find people",
    body: "Our best hires come from current employees who recommend people they would want to work alongside — it self-selects for reliability. We recruit in the communities we serve, so crews live near the buildings they clean: shorter commutes, fewer missed shifts.",
  },
  {
    title: "Screening before anyone gets keys",
    body: "Every crew member is background-checked and work-authorization verified before assignment. Buildings serving children get additional screening appropriate to the setting. We can share our screening standard with your procurement or HR team on request.",
  },
  {
    title: "Why they stay",
    body: "Dedicated building assignments, consistent schedules, and a supervisor who checks their work nightly. Crews who are treated like professionals act like professionals — and the same faces in your building is the single biggest driver of consistent quality.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What happens if a GreenPoint cleaner calls out?", acceptedAnswer: { "@type": "Answer", text: "The supervisor is alerted through StockPoint before the shift starts, a trained backup who already knows the building is activated within 15 minutes, the client is notified within 30 minutes, and next-morning photo records verify the building was cleaned to standard." } },
    { "@type": "Question", name: "How does GreenPoint handle a cleaning complaint?", acceptedAnswer: { "@type": "Answer", text: "Within one hour we review the timestamped photo and checklist record for the area in question, give the client a straight answer within two hours, take corrective action the same day, and deliver a written incident report within 48 hours." } },
    { "@type": "Question", name: "Does GreenPoint respond to after-hours emergencies?", acceptedAnswer: { "@type": "Answer", text: "Yes. The emergency line is answered live, the situation is contained within 15 minutes, on-site response follows within about 45 minutes, and the area is restored and documented before the building opens." } },
    { "@type": "Question", name: "What does the first 30 days with GreenPoint look like?", acceptedAnswer: { "@type": "Answer", text: "Days 1-3 setup and scope finalization; days 4-7 dedicated crew assignment and site training; days 8-14 supervised launch with nightly checks; days 15-30 steady state with a first quality review and 30-day check-in." } },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://greenpointms.com/" },
    { "@type": "ListItem", position: 2, name: "The GreenPoint Playbook", item: "https://greenpointms.com/playbook/" },
  ],
};

function Label({ children, light }) {
  return (
    <div style={{ fontFamily: F.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: light ? "#2ecc71" : "#1B7A3D", marginBottom: 14 }}>
      {children}
    </div>
  );
}

export default function PlaybookPage() {
  return (
    <div style={{ fontFamily: F.body, background: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <style>{`
        .pb-wrap { max-width: 1100px; margin: 0 auto; }
        .pb-scenario { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; padding: 56px 0; border-top: 1px solid #e6ece8; }
        .pb-step { display: grid; grid-template-columns: 150px 1fr; gap: 20px; padding: 18px 0; border-top: 1px solid #eef2ef; }
        .pb-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .pb-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .pb-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pb-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .pb-card { background: #fff; border: 1px solid #e6ece8; border-radius: 14px; padding: 28px; transition: transform .2s, box-shadow .2s; }
        .pb-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(13,40,24,0.08); }
        .pb-toc a { color: #1B7A3D; text-decoration: none; font-weight: 600; font-size: 13px; padding: 8px 14px; border: 1px solid #cfe3d6; border-radius: 100px; white-space: nowrap; }
        .pb-toc a:hover { background: #e9f6ee; }
        @media (max-width: 900px) {
          .pb-scenario { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
          .pb-grid-2, .pb-grid-3, .pb-grid-4 { grid-template-columns: 1fr; }
          .pb-stats { grid-template-columns: 1fr 1fr; }
          .pb-step { grid-template-columns: 1fr; gap: 6px; }
        }
      `}</style>

      <SiteHeader />

      {/* Breadcrumb */}
      <div style={{ background: "#0d2818", padding: "14px 24px", paddingTop: 96 }}>
        <div className="pb-wrap" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a href="/" style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", fontWeight: 600 }}>Home</a>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>&rsaquo;</span>
          <span style={{ fontSize: 12, color: "#2ecc71", fontWeight: 600 }}>The GreenPoint Playbook</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "linear-gradient(165deg, #0a1a12 0%, #0d2818 45%, #122d1c 100%)", padding: "72px 24px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -220, right: -220, width: 640, height: 640, background: "radial-gradient(circle, rgba(46,204,113,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div className="pb-wrap" style={{ position: "relative", zIndex: 2 }}>
          <Label light>Operations &amp; Accountability</Label>
          <h1 style={{ ...F.h, fontSize: "clamp(32px, 5vw, 60px)", color: "#fff", maxWidth: 820, marginBottom: 22 }}>
            Most cleaning companies promise reliability.<br />
            <span style={{ color: "#2ecc71" }}>We show you how.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.68)", lineHeight: 1.75, maxWidth: 680, marginBottom: 36 }}>
            Every facility manager has the same questions before signing a cleaning contract: What happens when someone calls out? How do you handle complaints? What if there is an emergency at 2am? This page answers them with the actual protocols we follow — not marketing promises.
          </p>

          <div className="pb-stats" style={{ maxWidth: 760 }}>
            {[["80+", "Facilities under contract"], ["5", "States served"], ["24/7", "Emergency line"], ["2018", "Incorporated"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(46,204,113,0.2)", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ ...F.h, fontSize: 30, color: "#2ecc71" }}>{n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4, letterSpacing: "0.04em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band + TOC */}
      <section style={{ background: "#F7FAF8", padding: "40px 24px", borderBottom: "1px solid #e6ece8" }}>
        <div className="pb-wrap">
          <p style={{ ...F.h, fontSize: "clamp(18px, 2.2vw, 24px)", color: "#0d2818", fontStyle: "italic", maxWidth: 820, margin: "0 0 20px" }}>
            “The difference between a good cleaning company and a bad one isn’t what happens on a normal Tuesday night. It’s what happens when things go wrong.”
          </p>
          <div className="pb-toc" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a href="#scenarios">What happens when…</a>
            <a href="#discovery">We learn your building</a>
            <a href="#first-30-days">Your first 30 days</a>
            <a href="#team">How we build the team</a>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" style={{ padding: "80px 24px 40px" }}>
        <div className="pb-wrap">
          <Label>What Happens When…</Label>
          <h2 style={{ ...F.h, fontSize: "clamp(28px, 3.6vw, 42px)", color: "#0d2818", marginBottom: 14 }}>Real scenarios. Real protocols.</h2>
          <p style={{ fontSize: 16, color: "#4A5E52", lineHeight: 1.8, maxWidth: 680, marginBottom: 24 }}>
            Every situation below has happened. Here is exactly how we handle each one — in practice, every time.
          </p>

          {SCENARIOS.map((sc) => (
            <div key={sc.id} id={sc.id} className="pb-scenario">
              <div>
                <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1B7A3D", background: "#e9f6ee", borderRadius: 100, padding: "6px 12px", marginBottom: 16 }}>{sc.tag}</div>
                <h3 style={{ ...F.h, fontSize: "clamp(22px, 2.6vw, 30px)", color: "#0d2818", marginBottom: 12 }}>{sc.title}</h3>
                <p style={{ fontSize: 15, color: "#4A5E52", lineHeight: 1.75, margin: 0 }}>{sc.intro}</p>
              </div>
              <div style={{ background: "#F7FAF8", border: "1px solid #e6ece8", borderRadius: 16, padding: "8px 28px 16px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1B7A3D", padding: "16px 0 6px" }}>Our protocol</div>
                {sc.steps.map((st) => (
                  <div key={st.when} className="pb-step">
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#2ecc71", paddingTop: 2 }}>{st.when}</div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#0d2818", marginBottom: 4 }}>{st.title}</div>
                      <div style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.7 }}>{st.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery */}
      <section id="discovery" style={{ background: "#0d2818", padding: "80px 24px" }}>
        <div className="pb-wrap">
          <Label light>Every Building Is Different</Label>
          <h2 style={{ ...F.h, fontSize: "clamp(28px, 3.6vw, 42px)", color: "#fff", marginBottom: 14 }}>We learn your building before we clean it.</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 680, marginBottom: 40 }}>
            A synagogue is not an office building. A medical office is not a school. Here is how we find out what makes your facility different — and build the protocol around it.
          </p>
          <div className="pb-grid-2">
            {DISCOVERY.map((d) => (
              <div key={d.example} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(46,204,113,0.18)", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2ecc71", marginBottom: 6 }}>{d.sector}</div>
                <div style={{ ...F.h, fontSize: 24, color: "#fff", marginBottom: 14 }}>{d.example}</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontStyle: "italic", borderLeft: "2px solid rgba(46,204,113,0.4)", paddingLeft: 14, margin: "0 0 14px" }}>“{d.heard}”</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75, margin: "0 0 16px" }}>{d.response}</p>
                <div style={{ background: "rgba(46,204,113,0.08)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2ecc71", marginBottom: 4 }}>Discovery question we ask</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>“{d.question}”</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First 30 days */}
      <section id="first-30-days" style={{ padding: "80px 24px", background: "#F7FAF8" }}>
        <div className="pb-wrap">
          <Label>Your First 30 Days</Label>
          <h2 style={{ ...F.h, fontSize: "clamp(28px, 3.6vw, 42px)", color: "#0d2818", marginBottom: 14 }}>What happens after you sign.</h2>
          <p style={{ fontSize: 16, color: "#4A5E52", lineHeight: 1.8, maxWidth: 680, marginBottom: 40 }}>
            Most cleaning transitions are chaotic. Ours follow a fixed timeline from contract to steady state, with a supervisor on-site through launch.
          </p>
          <div className="pb-grid-4">
            {TRANSITION.map((t, i) => (
              <div key={t.days} className="pb-card">
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1B7A3D", marginBottom: 6 }}>{t.days}</div>
                <div style={{ ...F.h, fontSize: 22, color: "#0d2818", marginBottom: 14 }}>{t.title}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.items.map((it) => (
                    <li key={it} style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.6, padding: "6px 0 6px 18px", position: "relative", borderTop: "1px solid #eef2ef" }}>
                      <span style={{ position: "absolute", left: 0, top: 13, width: 7, height: 7, borderRadius: "50%", background: "#2ecc71" }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ padding: "80px 24px" }}>
        <div className="pb-wrap">
          <Label>Behind the Scenes</Label>
          <h2 style={{ ...F.h, fontSize: "clamp(28px, 3.6vw, 42px)", color: "#0d2818", marginBottom: 14 }}>How we build a team you can trust.</h2>
          <p style={{ fontSize: 16, color: "#4A5E52", lineHeight: 1.8, maxWidth: 680, marginBottom: 40 }}>
            Your cleaning crew has keys to your building and unsupervised access after hours. Here is how we find, screen, train, and keep the people you will never have to worry about.
          </p>
          <div className="pb-grid-3">
            {TEAM.map((t) => (
              <div key={t.title} className="pb-card">
                <div style={{ ...F.h, fontSize: 20, color: "#0d2818", marginBottom: 12 }}>{t.title}</div>
                <p style={{ fontSize: 14, color: "#4A5E52", lineHeight: 1.75, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#6b7f73", marginTop: 24 }}>
            Our full <a href="/team-conduct-safety-policy" style={{ color: "#1B7A3D", fontWeight: 600 }}>Team Conduct &amp; Safety Policy</a> is public. Our <a href="/incident-report" style={{ color: "#1B7A3D", fontWeight: 600 }}>incident report form</a> is how clients and crews document anything that goes wrong.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0d2818, #1a4d2e)", padding: "72px 24px", textAlign: "center" }}>
        <div className="pb-wrap">
          <Label light>Ready?</Label>
          <h2 style={{ ...F.h, fontSize: "clamp(28px, 3.6vw, 42px)", color: "#fff", marginBottom: 14 }}>See the Playbook in action.</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 32px" }}>
            Schedule a free walkthrough and we will show you exactly how these protocols apply to your facility. No obligation, no pitch — just systems.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#schedule" style={{ background: "linear-gradient(135deg, #2ecc71, #27ae60)", color: "#fff", padding: "16px 34px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 24px rgba(46,204,113,0.3)" }}>Schedule a Walkthrough →</a>
            <a href={PHONE_HREF} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "16px 34px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
