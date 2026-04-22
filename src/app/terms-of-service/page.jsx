import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Terms of Service | GreenPoint Maintenance Services Corp',
  description: 'Terms of Service for clients, affiliates, and referral partners of GreenPoint Maintenance Services Corp. Includes non-solicitation, confidentiality, and governing law provisions.',
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
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
              display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(46,204,113,0.1)',
              border: '1px solid rgba(46,204,113,0.25)', borderRadius: 100, padding: '6px 16px', marginBottom: 20,
            }}>
              <span style={{ fontSize: 12, color: '#2ecc71', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
                Legal · Client Agreement
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em',
            }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
              Governing agreement for all clients, affiliates, referral partners, and service recipients of GreenPoint Maintenance Services Corp.
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

            <Preamble />

            <Section number="1" title="Services Provided">
              <p>GreenPoint provides commercial janitorial, facility maintenance, and related services across New York, New Jersey, Connecticut, Pennsylvania, and Florida. Specific scope, frequency, pricing, and deliverables are defined in the individual Service Agreement, proposal, or Statement of Work executed between GreenPoint and the Client. These Terms apply in addition to any such agreement. In the event of a direct conflict, the signed Service Agreement controls, except for Sections 6 (Non-Solicitation), 7 (Non-Circumvention), 8 (Confidentiality), 10 (Limitation of Liability), and 13 (Governing Law), which always control.</p>
            </Section>

            <Section number="2" title="Payment Terms">
              <p>Invoices are due <strong>Net 15</strong> from the invoice date unless otherwise stated in writing. Late payments accrue interest at <strong>1.5% per month</strong> (or the maximum rate permitted by law, whichever is lower). GreenPoint reserves the right to suspend service for any account more than 30 days past due. Clients are responsible for all collection costs, including reasonable attorneys&apos; fees, incurred in collecting past-due amounts.</p>
            </Section>

            <Section number="3" title="Term and Termination">
              <p>The service term is defined in the Service Agreement. Either party may terminate for convenience with <strong>thirty (30) days&apos; written notice</strong>. GreenPoint may terminate immediately for non-payment, safety violations at the service site, or a material breach of these Terms by the Client. Upon termination, Client remains responsible for all services rendered through the termination date, and the obligations in Sections 6, 7, and 8 survive termination.</p>
            </Section>

            <Section number="4" title="Client Responsibilities">
              <p>Client shall: (a) provide safe, reasonable access to service areas; (b) notify GreenPoint of any known hazards, including but not limited to hazardous materials, structural issues, pests, or biohazards; (c) maintain functional utilities (water, electricity, HVAC) reasonably needed for service; (d) provide secure storage for supplies and equipment where applicable; and (e) designate a point of contact authorized to direct or approve work.</p>
            </Section>

            <Section number="5" title="Independent Contractor Relationship">
              <p>GreenPoint is an independent contractor. Nothing in these Terms creates an employment, agency, partnership, or joint venture relationship between GreenPoint and the Client. GreenPoint retains sole control over its personnel, methods, scheduling, training, and supervision.</p>
            </Section>

            <Section number="6" title="Non-Solicitation of GreenPoint Personnel" flagged>
              <CalloutBox>
                This section is a material term of these Terms. Please read it carefully. A breach of this Section 6 entitles GreenPoint to liquidated damages, injunctive relief, and attorneys&apos; fees.
              </CalloutBox>
              <p>During the term of service and for a period of <strong>twelve (12) months</strong> following the termination or expiration of services for any reason (the &ldquo;<strong>Restricted Period</strong>&rdquo;), Client, its affiliates, subsidiaries, parent companies, officers, directors, agents, and any successor entities shall not, directly or indirectly:</p>

              <p><strong>(a) Covered Personnel.</strong> Hire, employ, engage, retain, contract with, or solicit any GreenPoint employee, subcontractor, or crew member who (i) performed services at the Client&apos;s facility within the twelve (12) months preceding termination, <strong>AND</strong> (ii) with whom Client or Client&apos;s personnel had meaningful contact through GreenPoint&apos;s services. For clarity, this restriction does not apply to former GreenPoint personnel who separated from GreenPoint at least six (6) months before Client&apos;s offer, provided Client did not initiate or facilitate that separation.</p>

              <p><strong>(b) Indirect Solicitation.</strong> Refer, introduce, or recommend any such Covered Personnel to any third-party cleaning, janitorial, or facility maintenance provider for the purpose of employment or contract work, where the referral is intended to circumvent this Section 6.</p>

              <p><strong>(c) Acknowledgment of Legitimate Interest.</strong> Client acknowledges that GreenPoint invests significant resources in recruiting, background-checking, training, uniforming, insuring, and retaining its personnel &mdash; including specialized training in safety, equipment operation, client-site protocols, and proprietary systems including JaniTrack &mdash; and that these investments create a legitimate protectable business interest under New York law.</p>

              <p><strong>(d) Liquidated Damages.</strong> Because actual damages resulting from a breach of this Section 6 are difficult to calculate with precision, Client agrees that a breach results in liquidated damages equal to <strong>the greater of (i) $15,000 per individual, or (ii) fifty percent (50%) of the individual&apos;s annualized wages</strong> paid by GreenPoint in the twelve (12) months preceding the breach, representing a reasonable estimate of GreenPoint&apos;s training, recruiting, and replacement costs. This amount is not a penalty. Liquidated damages are payable to GreenPoint within thirty (30) days of written demand.</p>

              <p><strong>(e) Injunctive Relief.</strong> Client agrees that a breach of this Section 6 would cause irreparable harm to GreenPoint that cannot be fully remedied by monetary damages alone, and that GreenPoint is entitled to seek injunctive relief, in addition to any other remedies available at law or in equity, without the need to post bond.</p>

              <p><strong>(f) Attorneys&apos; Fees.</strong> In any action to enforce this Section 6, the prevailing party is entitled to recover reasonable attorneys&apos; fees and costs.</p>
            </Section>

            <Section number="7" title="Non-Circumvention">
              <p>During the Restricted Period, Client shall not engage, directly or through any intermediary, any subcontractor, supplier, vendor, or referral partner introduced to Client by GreenPoint for the purpose of providing services substantially similar to those provided by GreenPoint, without GreenPoint&apos;s prior written consent.</p>
            </Section>

            <Section number="8" title="Confidentiality">
              <p>All pricing, methods, processes, checklists, training materials, software (including JaniTrack data and dashboards), supplier lists, employee information, and any other non-public information disclosed by GreenPoint is &ldquo;<strong>Confidential Information</strong>.&rdquo; Client shall not disclose, copy, or use any Confidential Information for any purpose other than receiving services under the Service Agreement. This obligation survives termination indefinitely for trade secrets and for five (5) years for all other Confidential Information.</p>
            </Section>

            <Section number="9" title="Insurance">
              <p>GreenPoint maintains commercial general liability, workers&apos; compensation, and auto liability insurance as required by law and as specified in the Service Agreement. Certificates of insurance are available upon written request.</p>
            </Section>

            <Section number="10" title="Limitation of Liability">
              <p>To the maximum extent permitted by law, GreenPoint&apos;s total cumulative liability under these Terms, any Service Agreement, and any related claim (whether in contract, tort, negligence, or otherwise) shall not exceed the total fees paid by Client to GreenPoint in the <strong>three (3) months</strong> preceding the event giving rise to the claim. In no event shall GreenPoint be liable for consequential, incidental, special, indirect, or punitive damages, including lost profits or business interruption, even if advised of the possibility of such damages.</p>
            </Section>

            <Section number="11" title="Indemnification">
              <p>Client shall indemnify, defend, and hold harmless GreenPoint, its officers, employees, and agents from any claims, damages, or liabilities arising out of (a) Client&apos;s breach of these Terms; (b) Client&apos;s negligent acts or omissions; (c) conditions at the service site not disclosed to GreenPoint; or (d) Client&apos;s violation of any law or regulation.</p>
            </Section>

            <Section number="12" title="Force Majeure">
              <p>Neither party is liable for delays or failures caused by events beyond reasonable control, including natural disasters, pandemics, government actions, labor disputes (not involving GreenPoint&apos;s own workforce), utility failures, or acts of war or terrorism.</p>
            </Section>

            <Section number="13" title="Governing Law and Dispute Resolution">
              <p>These Terms are governed by the laws of the <strong>State of New York</strong>, without regard to conflict-of-law principles. Any dispute shall be resolved in the state or federal courts located in <strong>Bronx County or New York County, New York</strong>, and both parties consent to personal jurisdiction and venue there. Both parties waive any right to a jury trial.</p>
            </Section>

            <Section number="14" title="Severability and Judicial Modification">
              <p>If any provision of these Terms is found unenforceable, the remaining provisions remain in full effect. If Section 6 (Non-Solicitation) or any other restrictive covenant is found overly broad in any respect (including scope, duration, geography, or definition of Covered Personnel), the parties authorize the court to reform and narrow the clause to the extent necessary to make it enforceable, rather than void the entire clause. This is commonly referred to as a &ldquo;blue pencil&rdquo; provision and reflects the parties&apos; mutual intent.</p>
            </Section>

            <Section number="15" title="Entire Agreement; Modifications">
              <p>These Terms, together with the applicable Service Agreement, constitute the entire agreement between the parties regarding the subject matter. No modification is binding unless in writing and signed by both parties.</p>
            </Section>

            <Section number="16" title="Notices">
              <p>All notices must be in writing and sent to:</p>
              <div style={{
                marginTop: 16, padding: 24, background: '#f5f7f5', borderLeft: '3px solid #1B7A3D',
                borderRadius: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.9, color: '#333',
              }}>
                <div><strong>GreenPoint Maintenance Services Corp</strong></div>
                <div>Attn: Miguel Garcia</div>
                <div>1420 Outlook Ave, Apt 2</div>
                <div>Bronx, NY 10465</div>
                <div>Email: info@greenpointms.com</div>
                <div>Phone: 347-332-9348</div>
              </div>
            </Section>

            <div style={{
              marginTop: 48, padding: '32px 24px', background: '#f5f7f5', borderRadius: 12, textAlign: 'center',
            }}>
              <p style={{ fontSize: 15, color: '#333', fontWeight: 600, marginBottom: 8 }}>
                By engaging GreenPoint&apos;s services, Client acknowledges having read, understood, and agreed to these Terms of Service in full.
              </p>
              <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
                Questions? Contact Miguel Garcia at <a href="mailto:info@greenpointms.com" style={{ color: '#1B7A3D', fontWeight: 600 }}>info@greenpointms.com</a> or <a href="tel:+13473329348" style={{ color: '#1B7A3D', fontWeight: 600 }}>347-332-9348</a>.
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
      `}</style>
    </>
  );
}

/* ============================================================
   Helper components (inline within file — single-file page)
   ============================================================ */

function Preamble() {
  return (
    <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid #eee' }}>
      <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>
        These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) govern all services provided by GreenPoint Maintenance Services Corp, a New York corporation (&ldquo;<strong>GreenPoint</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), to its clients, customers, affiliates, referral partners, subcontractors, and any other parties that engage our services or receive access to our personnel, processes, or proprietary information (collectively, &ldquo;<strong>Client</strong>&rdquo; or &ldquo;you&rdquo;). By engaging GreenPoint&apos;s services, signing a service agreement, issuing a purchase order, or accepting any proposal from GreenPoint, you agree to be bound by these Terms in full.
      </p>
    </div>
  );
}

function Section({ number, title, children, flagged }) {
  return (
    <div style={{ marginBottom: 32, scrollMarginTop: 100 }} id={`section-${number}`}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: '#0d2818',
        marginBottom: 14, display: 'flex', alignItems: 'baseline', gap: 12,
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
            Material Term
          </span>
        )}
      </h2>
      <div style={{ fontSize: 15, color: '#444', lineHeight: 1.8 }}>
        {children}
      </div>
      <style>{`
        #section-${number} p { margin: 0 0 14px 0; }
        #section-${number} p:last-child { margin-bottom: 0; }
      `}</style>
    </div>
  );
}

function CalloutBox({ children }) {
  return (
    <div style={{
      background: 'rgba(200,163,77,0.08)', border: '1px solid rgba(200,163,77,0.3)',
      borderLeft: '3px solid #C8A34D', padding: '16px 20px', borderRadius: 4, marginBottom: 18,
      fontSize: 14, color: '#5a4a20', fontWeight: 500,
    }}>
      ⚠️ {children}
    </div>
  );
}
