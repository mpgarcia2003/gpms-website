import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Team Member Conduct & Safety Policy | GreenPoint Maintenance Services Corp',
  description: 'Workplace safety rules, ladder safety, injury reporting, lifting limits, and conduct standards for all GreenPoint Maintenance Services team members.',
  robots: { index: true, follow: true },
};

export default function TeamConductSafetyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 80, fontFamily: "'DM Sans', sans-serif", background: '#fafbfa' }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 30%, #122d1c 60%, #0a1a12 100%)',
          padding: '72px 24px 56px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(200,163,77,0.12)',
              border: '1px solid rgba(200,163,77,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 20,
            }}>
              <span style={{ fontSize: 12, color: '#C8A34D', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
                Team Members · Mandatory Reading
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em',
            }}>
              Team Member Conduct &amp; Safety Policy
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
              Workplace rules, safety standards, and conduct expectations for all GreenPoint employees, subcontractors, and crew members.
            </p>
            <div style={{
              marginTop: 24, display: 'inline-flex', gap: 16, fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em',
            }}>
              <span>EFFECTIVE: April 22, 2026</span>
              <span>·</span>
              <span>LAST UPDATED: April 22, 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: 'clamp(32px, 6vw, 64px)', border: '1px solid #eee' }}>

            {/* Preamble */}
            <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid #eee' }}>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>
                This policy applies to all employees, contractors, subcontractors, temporary workers, and any individual performing work on behalf of GreenPoint Maintenance Services Corp (&ldquo;<strong>GreenPoint</strong>,&rdquo; &ldquo;<strong>Company</strong>&rdquo;) at any client site, Company vehicle, warehouse, or Company-sponsored activity (&ldquo;<strong>Team Members</strong>&rdquo; or &ldquo;you&rdquo;). By accepting work with GreenPoint, you acknowledge receipt of this policy and agree to comply with every provision.
              </p>
              <div style={{
                marginTop: 20, padding: '16px 20px', background: 'rgba(200,163,77,0.08)',
                border: '1px solid rgba(200,163,77,0.3)', borderLeft: '3px solid #C8A34D', borderRadius: 4,
                fontSize: 14, color: '#5a4a20', fontWeight: 500,
              }}>
                ⚠️ Violation of this policy is grounds for discipline up to and including immediate termination. Failure to follow safety rules may also eliminate or reduce bonuses, disciplinary standing, or continued employment. Nothing in this policy reduces or affects your rights under New York Workers&apos; Compensation Law.
              </div>
            </div>

            <Section number="1" title="General Conduct">
              <ListRules items={[
                "Arrive on time, in proper uniform, and in physical condition to work safely.",
                "Treat all clients, client staff, coworkers, and the public with professionalism and respect.",
                "Do not consume or be under the influence of alcohol, cannabis, or illegal drugs while on duty, in Company vehicles, or at any client site. GreenPoint maintains a drug- and alcohol-free workplace.",
                "Do not bring weapons of any kind to any client site, Company vehicle, or Company property.",
                "Never remove anything from a client site that does not belong to you. Taking any item without written authorization is theft and grounds for immediate termination and criminal referral.",
                "Immediately report any theft, damage, or misconduct observed on site to Miguel Garcia.",
                "Do not bring unauthorized visitors, friends, family members, or children to any client site.",
                "Do not eat or drink in client work areas except in designated break areas approved by the client.",
                "Maintain a professional appearance. No offensive graphics, political slogans, or inappropriate imagery on clothing, bags, or personal items visible to clients.",
              ]} />
            </Section>

            <Section number="2" title="Ladder Safety — Two-Person Rule" flagged>
              <CalloutBox>This is a zero-tolerance safety policy. No exceptions. No &ldquo;just this once.&rdquo;</CalloutBox>

              <p><strong>(a) Two-Person Requirement.</strong> Whenever a ladder is used for any task &mdash; including high dusting, light-bulb replacement, window cleaning, filter changes, signage cleaning, or reaching elevated storage &mdash; <strong>two Team Members must be present at all times</strong>. One person climbs and performs the work; the second person holds and stabilizes the ladder at the base and acts as the spotter.</p>

              <p><strong>(b) Ladder Inspection.</strong> Before each use, inspect the ladder for broken rungs, cracked rails, loose hardware, missing feet, or damaged spreaders. Any defective ladder must be tagged out, removed from service immediately, and reported to Miguel Garcia.</p>

              <p><strong>(c) Prohibited Practices.</strong> You shall not:</p>
              <ListRules items={[
                "Climb or descend a ladder with tools, buckets, or supplies in your hands — use a tool belt, tether, or have your partner hand items up.",
                "Stand on the top rung, top cap, or the brace below the top cap.",
                "Use a ladder on wet, icy, uneven, or unstable surfaces.",
                "Use a metal ladder near electrical work or energized equipment.",
                "Use a ladder outdoors in high winds (20+ mph) or thunderstorms.",
                "Lean sideways while on a ladder — always keep your belt buckle between the rails.",
                "Use a folding ladder in the unfolded / leaning position.",
                "Use any ladder model you have not been trained to use.",
                "Place a ladder in front of an unlocked door without stationing your partner to block entry.",
              ]} />

              <p><strong>(d) Height Limits.</strong> For any task requiring work above <strong>10 feet</strong>, you must notify Miguel Garcia in advance and use Company-approved fall protection if available. Work above <strong>20 feet</strong> requires written supervisor pre-approval and documented fall protection.</p>

              <p><strong>(e) No Exceptions.</strong> If a second Team Member is not available and a ladder task must be performed, <strong>stop and call Miguel Garcia at 347-332-9348</strong>. Do not attempt the task alone, even if the client, the client&apos;s staff, or a building manager asks or pressures you to do so. <strong>Client pressure is never a justification for violating this rule.</strong></p>
            </Section>

            <Section number="3" title="Injury &amp; Incident Reporting" flagged>
              <CalloutBox>Same-day reporting is Company policy. Your NY Workers&apos; Comp right to a 30-day reporting window is preserved regardless.</CalloutBox>

              <p><strong>(a) Internal Reporting Deadline.</strong> All work-related injuries, accidents, near-misses, and incidents &mdash; no matter how minor &mdash; must be reported <strong>as soon as possible, and in no event later than the end of your shift on the day the incident occurs</strong>. Written follow-up via the online Incident Report form, text, or email must be submitted within <strong>seven (7) calendar days</strong>.</p>

              <p><strong>(b) Who to Report To.</strong> Report every incident directly to:</p>
              <div style={{
                marginTop: 10, marginBottom: 14, padding: 20, background: '#f5f7f5',
                borderLeft: '3px solid #1B7A3D', borderRadius: 4, fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13, lineHeight: 1.9, color: '#333',
              }}>
                <div><strong>Miguel Garcia</strong></div>
                <div>📧 <a href="mailto:info@greenpointms.com" style={{ color: '#1B7A3D' }}>info@greenpointms.com</a></div>
                <div>📞 <a href="tel:+13473329348" style={{ color: '#1B7A3D' }}>347-332-9348</a></div>
                <div>🔗 <a href="/incident-report" style={{ color: '#1B7A3D' }}>Submit Company Incident Report →</a></div>
              </div>

              <p><strong>(c) Why This Rule Exists.</strong> Prompt reporting ensures you receive proper medical care, documents the incident while memories are fresh, and preserves evidence. Same-day verbal reporting followed by written documentation is Company policy.</p>

              <p><strong>(d) Reportable Incidents Include:</strong></p>
              <ListRules items={[
                "Cuts, scrapes, bruises, puncture wounds.",
                "Slips, trips, and falls — even if you believe you are uninjured at the time.",
                "Back, neck, knee, or shoulder strain.",
                "Exposure to chemicals, blood, bodily fluids, or hazardous materials.",
                "Eye irritation or chemical splashes.",
                "Burns — thermal, chemical, or electrical.",
                "Insect or animal bites.",
                "Any incident involving a ladder, lift, or equipment, regardless of apparent injury.",
                "Vehicle accidents involving Company vehicles or while on Company time.",
                "Near-misses (no injury occurred, but could have) — reporting near-misses protects everyone.",
              ]} />

              <p><strong>(e) How to Report.</strong></p>
              <ol style={{ paddingLeft: 22, lineHeight: 1.9 }}>
                <li>Call or text Miguel Garcia at <strong>347-332-9348</strong> immediately (or email <strong>info@greenpointms.com</strong>).</li>
                <li>Submit the online <a href="/incident-report" style={{ color: '#1B7A3D', fontWeight: 600 }}>Company Incident Report form</a> by end-of-shift or next business day.</li>
                <li>Provide medical documentation within five (5) business days of any treatment.</li>
                <li>Cooperate fully with any workers&apos; compensation claim, investigation, or return-to-work process.</li>
              </ol>

              <p><strong>(f) Your Rights Under New York Law — Acknowledged.</strong> New York Workers&apos; Compensation Law gives you <strong>thirty (30) days</strong> to report a workplace injury to your employer to preserve workers&apos; compensation benefits. <strong>Nothing in this policy shortens that legal deadline or affects your right to benefits.</strong> The Company&apos;s internal same-day/seven-day policy is for operational and disciplinary purposes only. Late reporting may affect performance review and disciplinary standing but will <strong>not</strong> be used to deny you workers&apos; compensation benefits you are legally entitled to.</p>

              <p><strong>(g) Emergencies.</strong> For life-threatening injuries, <strong>call 911 first</strong>, then notify Miguel Garcia at 347-332-9348 as soon as reasonably possible.</p>

              <p><strong>(h) No Retaliation.</strong> GreenPoint will not retaliate against any Team Member for reporting an injury or filing a workers&apos; compensation claim in good faith. Retaliation is illegal under New York law and a violation of this policy.</p>
            </Section>

            <Section number="4" title="Personal Protective Equipment (PPE)">
              <p>The Company provides required PPE at no cost. You must wear the appropriate PPE at all times when the task requires it.</p>
              <ListRules items={[
                "Gloves — for all cleaning, chemical handling, and waste removal.",
                "Safety glasses or goggles — for overhead work, chemical use, and pressurized equipment.",
                "Slip-resistant, closed-toe footwear — required at all times on duty. No sandals, sneakers without slip resistance, or open-toe footwear ever.",
                "Dust masks or N95 respirators — for dusty environments, mold-affected areas, or specific chemical use.",
                "Back-support belts — when lifting heavy items (see Section 5).",
                "High-visibility vest — in parking lots, loading docks, or near vehicular traffic.",
              ]} />
              <p>PPE must be worn correctly. Refusing or failing to use provided PPE is a disciplinary offense. Report any damaged, worn-out, or missing PPE to Miguel Garcia immediately.</p>
            </Section>

            <Section number="5" title="Lifting, Pushing, Pulling &amp; Ergonomics" flagged>
              <CalloutBox>Back injuries are one of the most common — and preventable — cleaning-industry injuries. Follow these rules without exception.</CalloutBox>

              <p><strong>(a) Solo Lifting Limit.</strong> Do not lift any object heavier than <strong>50 pounds</strong> alone. Above 50 pounds, you <strong>must</strong> use a two-person team lift, a cart, a dolly, or request mechanical assistance.</p>

              <p><strong>(b) Trash Bag Rule.</strong> If a filled trash bag is heavier than <strong>40 pounds</strong> or awkward to carry, <strong>split it into two bags</strong>. Never drag a heavy bag down stairs or across sharp surfaces that can tear it. Tie bags tightly before moving. Never reach into a bag without heavy-duty puncture-resistant gloves.</p>

              <p><strong>(c) Pushing / Pulling Limit.</strong> If moving a cart, mop bucket, floor machine, or any rolling load requires <strong>more than both hands and normal walking effort</strong> &mdash; stop. Get help, split the load, or use a larger dolly. If you feel shoulder strain, chest tightness, or back tension, stop immediately and report it.</p>

              <p><strong>(d) Proper Lifting Technique.</strong></p>
              <ListRules items={[
                "Plan the lift before touching the object. Check the path for obstacles.",
                "Stand close to the object, feet shoulder-width apart.",
                "Squat down by bending the knees and hips — not the back.",
                "Keep the load close to your body, at belt level when carrying.",
                "Lift smoothly with your legs. Never jerk or twist.",
                "Turn with your feet, not your waist.",
                "Lower the load using the same technique — squat down with legs.",
              ]} />

              <p><strong>(e) Repetitive Motion.</strong> For repetitive tasks (scrubbing, vacuuming, mopping long stretches), switch hands and take micro-breaks every 20&ndash;30 minutes. Report any recurring pain or tingling immediately (see Section 3).</p>

              <p><strong>(f) Awkward Positions.</strong> Do not bend, kneel, or crouch for extended periods without breaks. Use kneepads for floor-level work. If a task requires sustained awkward posture, stop and contact Miguel Garcia.</p>
            </Section>

            <Section number="6" title="Slip, Trip &amp; Fall Prevention — Mopping Rules" flagged>
              <CalloutBox>Wet floors are the #1 cause of injury claims in cleaning. These rules are non-negotiable.</CalloutBox>

              <p><strong>(a) Wet-Floor Signs — Always.</strong> Place &ldquo;Wet Floor&rdquo; signs at both ends of any area being mopped or recently cleaned, <strong>before</strong> you start mopping. Signs must remain in place until the floor is fully dry. <strong>No exceptions</strong>, even if the area is small or &ldquo;only takes a minute.&rdquo;</p>

              <p><strong>(b) Mopping Technique — Backward &ldquo;S&rdquo; Pattern.</strong></p>
              <ListRules items={[
                "Always mop backward, working away from yourself toward the exit or already-cleaned area. Never walk across a floor you have just mopped.",
                "Use a figure-8 or S-pattern to cover the area evenly without stepping in the wet section.",
                "Wring the mop properly — an over-wet mop creates standing water and slip hazards.",
                "Change mop water frequently (every 500–1,000 sq ft or when visibly dirty). Dirty water leaves a residue that is more slippery than dry dirt.",
                "Do not mop an area with foot traffic without first blocking it off with signs or a partner posted as spotter.",
              ]} />

              <p><strong>(c) Your Own Footing — How to Step.</strong></p>
              <ListRules items={[
                "Wear slip-resistant shoes at all times. Inspect treads weekly; replace worn shoes.",
                "Take shorter steps on any wet, waxed, or freshly mopped surface.",
                "Keep your center of gravity over your front foot. Do not lean sideways.",
                "If you must cross a wet area, walk slowly, with flat feet, and hold onto a stable surface if possible.",
                "Never run at a client site. Never.",
                "Use handrails on all stairs — both directions. Do not carry loads up or down stairs without one free hand for the railing.",
              ]} />

              <p><strong>(d) Spill Response.</strong> Clean up spills immediately. Do not leave cords, hoses, mop buckets, or equipment in walkways. Report any structural hazards (loose tiles, damaged flooring, broken handrails, uneven transitions) to Miguel Garcia and the client contact on the same day.</p>

              <p><strong>(e) Floor Waxing &amp; Stripping.</strong> Only Team Members trained in floor care may strip, wax, or buff floors. The entire area must be roped off or physically blocked from pedestrian access for the full curing period. Never perform floor care during business hours without written client authorization.</p>
            </Section>

            <Section number="7" title="Chemical Safety">
              <ListRules items={[
                "Only use Company-approved chemicals. Do not bring personal cleaning products.",
                "Never mix chemicals — especially bleach and ammonia, which create toxic chloramine gas.",
                "Never mix different brands of the same product type without supervisor approval.",
                "Store chemicals upright, capped, and labeled in their original containers. Never transfer chemicals to unmarked bottles.",
                "Review the Safety Data Sheet (SDS) for any chemical you have not used before. SDS binders are available from Miguel Garcia on request.",
                "Ventilate the area when using strong chemicals. Open windows or turn on exhaust fans.",
                "Use the correct dilution ratios. Stronger is not better and can damage surfaces or cause skin burns.",
                "If a chemical splashes in your eyes or on your skin, flush with water for 15+ minutes and call Miguel Garcia immediately.",
              ]} />
            </Section>

            <Section number="8" title="Equipment Use">
              <ListRules items={[
                "Do not operate any equipment you have not been trained on — vacuums, buffers, auto-scrubbers, pressure washers, or power tools.",
                "Inspect equipment before each use. Check cords for fraying, plugs for damage, and moving parts for loose components.",
                "Report any damaged or malfunctioning equipment to Miguel Garcia immediately. Tag out damaged equipment so no one else uses it.",
                "Never modify, disassemble, or bypass safety guards on any equipment.",
                "Unplug equipment before changing bags, brushes, filters, or clearing jams.",
                "Do not run cords across walkways without proper cord covers or tape.",
                "Do not use electrical equipment in wet conditions unless it is rated for wet use.",
                "Return all equipment to its designated storage area clean, coiled, and ready for the next user.",
              ]} />
            </Section>

            <Section number="9" title="Phone &amp; Personal Device Policy" flagged>
              <CalloutBox>Phone distraction is a top cause of cleaning-industry injuries and client complaints. Follow these rules strictly.</CalloutBox>

              <ListRules items={[
                "No personal phone use during active work tasks. Phones stay in pockets, bags, or vehicles except on authorized breaks.",
                "Absolutely no phone use while on a ladder, operating equipment, handling chemicals, or driving a Company vehicle.",
                "No earbuds, headphones, or AirPods while working at a client site. You must be able to hear coworkers, clients, alarms, and environmental sounds at all times.",
                "Do not take photographs or videos of any client site, client materials, client employees, or work performed, except at the specific written direction of Miguel Garcia.",
                "Do not post about client sites, client staff, or any work performed on social media. Any violation is grounds for immediate termination.",
                "Emergency phone calls (family, medical, etc.) are always permitted. Step outside the work area and notify a coworker before taking the call.",
                "Client-business phone calls require a client-designated quiet area and a brief notification to Miguel Garcia.",
              ]} />
            </Section>

            <Section number="10" title="Vehicle &amp; Driving Policy">
              <ListRules items={[
                "Only authorized Team Members may operate Company vehicles. You must hold a valid driver's license and provide a copy to Miguel Garcia before driving.",
                "Seat belts must be worn at all times — driver and all passengers. No exceptions.",
                "No phone use while driving, including hands-free calls for anything other than brief essential communication. No texting, emailing, navigating via handheld, or social media while the vehicle is moving.",
                "No passengers other than GreenPoint Team Members in Company vehicles without written authorization.",
                "No smoking, vaping, eating, or drinking anything other than water while driving.",
                "Obey all posted speed limits. Leave early enough that you never have to rush.",
                "Inspect the vehicle before each shift — tires, lights, fluids, mirrors. Report any issues to Miguel Garcia before driving.",
                "Report any vehicle accident — regardless of fault or apparent damage — to Miguel Garcia within two (2) hours. All Company vehicle accidents are also subject to the injury reporting rule in Section 3.",
                "Keep vehicles clean and organized. Secure all supplies, chemicals, and equipment so they do not shift during transit.",
              ]} />
            </Section>

            <Section number="11" title="Client Property &amp; Confidentiality">
              <ListRules items={[
                "Touch only what is on your assigned cleaning checklist. Do not move, rearrange, or handle personal items, client valuables, paperwork, computers, or electronics unless specifically instructed.",
                "If a client item is in the way, clean around it or notify Miguel Garcia for direction. Never move valuables out of the way yourself.",
                "Do not photograph, video, or share on any platform any client site, client materials, client employees, or work performed.",
                "Any documents, access codes, keys, badges, or information you encounter at a client site is confidential and must not be discussed outside of work.",
                "Do not give out any client contact information, address, or security details to anyone outside GreenPoint.",
                "Report any suspicious activity, unauthorized persons on site, or concerns about site security to Miguel Garcia immediately.",
                "Never enter a client area you have not been assigned to clean — even to use the restroom, unless specifically authorized.",
              ]} />
            </Section>

            <Section number="12" title="Non-Solicitation &amp; Post-Employment Obligations" flagged>
              <p>During your engagement with GreenPoint and for <strong>twelve (12) months</strong> after it ends, you shall not, directly or indirectly:</p>

              <p><strong>(a) Client Non-Solicit — Limited Scope.</strong> Solicit, serve, or accept competing janitorial or facility-maintenance work from any GreenPoint client <strong>with whom you personally performed services or had material contact during the twelve (12) months preceding your departure</strong>, and about whom you learned confidential pricing, scope, or scheduling information through GreenPoint. You may work in the cleaning industry generally; this restriction applies only to the specific clients you personally serviced.</p>

              <p><strong>(b) Coworker Non-Solicit.</strong> Solicit, recruit, or encourage any GreenPoint Team Member you worked alongside to leave GreenPoint to work for you or any third party.</p>

              <p><strong>(c) Confidentiality.</strong> Do not disclose or use GreenPoint&apos;s pricing, methods, client lists, JaniTrack data, training materials, or any other non-public information for any purpose other than performing your duties for GreenPoint. This obligation survives termination.</p>

              <p><strong>(d) What This Does NOT Restrict.</strong> Nothing in this Section 12 prevents you from (i) working for a competitor in a general capacity, (ii) soliciting clients you had pre-existing relationships with before joining GreenPoint, or (iii) accepting employment with any company that did not come to you through GreenPoint.</p>

              <p><strong>(e) Remedies.</strong> Violation may result in immediate termination, a claim for actual damages, and injunctive relief.</p>
            </Section>

            <Section number="13" title="Drug &amp; Alcohol Policy">
              <p>GreenPoint maintains a drug- and alcohol-free workplace. You may be subject to drug and alcohol testing (a) as part of a post-accident or reasonable-suspicion investigation; (b) at random for certain safety-sensitive roles; or (c) as required by client contracts. Refusal to test is treated as a positive result and is grounds for termination.</p>
            </Section>

            <Section number="14" title="Anti-Harassment &amp; Anti-Discrimination">
              <p>GreenPoint prohibits harassment or discrimination based on race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, veteran status, or any other protected characteristic. Report any concerns directly to Miguel Garcia at <strong>info@greenpointms.com</strong> or <strong>347-332-9348</strong>. Reports will be investigated promptly and confidentially. Retaliation for a good-faith report is itself a violation of this policy and is illegal under New York law.</p>
            </Section>

            <Section number="15" title="Weather &amp; Environmental Hazards">
              <ListRules items={[
                "In extreme heat, take more frequent water breaks and rest in shaded or air-conditioned areas. Report signs of heat exhaustion or heat stroke immediately.",
                "In extreme cold, dress in layers and take breaks to warm up. Never attempt outdoor work in severe wind chill without proper gear.",
                "During storms with lightning, do not operate outdoors or touch metal ladders.",
                "In snow or ice conditions, salt walkways before cleaning and wear ice-traction footwear when walking to and from client sites.",
                "If a client site is unsafe to work in due to weather, fire, flooding, gas leak, or any emergency — evacuate immediately and call Miguel Garcia.",
              ]} />
            </Section>

            <Section number="16" title="Acknowledgment">
              <p>By signing below &mdash; or by continuing to perform work for GreenPoint after receiving this policy &mdash; you acknowledge that you have received, read, understood, and agreed to comply with this Team Member Conduct &amp; Safety Policy in full.</p>

              <div style={{
                marginTop: 24, padding: 28, background: '#f5f7f5', borderRadius: 10,
                border: '1px dashed #c7d4c9',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: 14 }} className="ack-grid">
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Team Member Name (print)</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Date</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Signature</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#666', fontFamily: "'JetBrains Mono', monospace", marginBottom: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Supervisor Signature</div>
                    <div style={{ borderBottom: '1px solid #999', height: 28 }}></div>
                  </div>
                </div>
              </div>
            </Section>

            <div style={{
              marginTop: 48, padding: '32px 24px', background: 'linear-gradient(135deg, #0d2818, #1a4d2e)',
              borderRadius: 12, textAlign: 'center', color: '#fff',
            }}>
              <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>
                Questions or concerns about this policy?
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                Contact Miguel Garcia at <a href="mailto:info@greenpointms.com" style={{ color: '#C8A34D', fontWeight: 600 }}>info@greenpointms.com</a> or <a href="tel:+13473329348" style={{ color: '#C8A34D', fontWeight: 600 }}>347-332-9348</a>
              </p>
            </div>

          </div>
        </section>

      </main>
      <SiteFooter />

      <style>{`
        @media print {
          header, footer { display: none !important; }
          main { padding-top: 0 !important; background: #fff !important; }
          section { padding: 0 !important; background: #fff !important; }
        }
        @media (max-width: 600px) {
          .ack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

/* ============================================================
   Helper components
   ============================================================ */

function Section({ number, title, children, flagged }) {
  return (
    <div style={{ marginBottom: 36, scrollMarginTop: 100 }} id={`section-${number}`}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: '#0d2818',
        marginBottom: 14, display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: flagged ? '#C8A34D' : '#1B7A3D',
          fontWeight: 700, letterSpacing: '0.05em',
        }}>
          §{number}
        </span>
        <span>{title}</span>
        {flagged && (
          <span style={{
            background: 'rgba(200,163,77,0.12)', color: '#8a6d2a', padding: '2px 8px',
            borderRadius: 4, fontSize: 10, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(200,163,77,0.3)',
          }}>
            Critical
          </span>
        )}
      </h2>
      <div style={{ fontSize: 15, color: '#444', lineHeight: 1.8 }}>
        {children}
      </div>
      <style>{`
        #section-${number} p { margin: 0 0 14px 0; }
        #section-${number} p:last-child { margin-bottom: 0; }
        #section-${number} ul { margin: 0 0 14px 0; padding-left: 0; list-style: none; }
        #section-${number} ol { margin: 0 0 14px 0; }
      `}</style>
    </div>
  );
}

function CalloutBox({ children }) {
  return (
    <div style={{
      background: 'rgba(200,163,77,0.08)', border: '1px solid rgba(200,163,77,0.3)',
      borderLeft: '3px solid #C8A34D', padding: '14px 18px', borderRadius: 4, marginBottom: 18,
      fontSize: 14, color: '#5a4a20', fontWeight: 500,
    }}>
      ⚠️ {children}
    </div>
  );
}

function ListRules({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} style={{
          paddingLeft: 28, paddingBottom: 10, position: 'relative', fontSize: 15, color: '#444', lineHeight: 1.7,
        }}>
          <span style={{
            position: 'absolute', left: 0, top: 2, width: 18, height: 18, borderRadius: '50%',
            background: 'rgba(27,122,61,0.1)', color: '#1B7A3D', fontSize: 11, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace",
          }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
