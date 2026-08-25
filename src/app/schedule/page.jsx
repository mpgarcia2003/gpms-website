import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Schedule a Walk-Through | GreenPoint Maintenance Services Corp',
  description:
    'Pick a time that works for you — book a free facility walk-through with GreenPoint Maintenance Services online in under a minute.',
  // Hidden test page: not linked anywhere, not indexed, not in the sitemap.
  robots: { index: false, follow: false },
};

export default function SchedulePage() {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 80, fontFamily: "'DM Sans', sans-serif", background: '#fafbfa' }}>
        <section style={{
          background: 'linear-gradient(165deg, #0a1a12 0%, #0d2818 40%, #122d1c 100%)',
          padding: '64px 24px 48px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <span style={{
              fontSize: 12, color: '#2ecc71', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif",
            }}>
              Online Scheduling
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(30px, 5vw, 50px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: '14px 0 16px',
            }}>
              Pick a Time. We&apos;ll Be There.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
              Book a free facility walk-through in under a minute — choose a service,
              pick an open slot, and you&apos;ll get an instant email confirmation.
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{
            maxWidth: 760, margin: '0 auto', background: '#fff', borderRadius: 16,
            border: '1px solid #eee', padding: 'clamp(12px, 3vw, 28px)',
          }}>
            <iframe
              src="https://getstockpoint.com/book/A76NhR7S0CbQq-i6a-PTEJS4?embed=1"
              style={{ width: '100%', minHeight: 680, border: 0 }}
              title="Schedule with GreenPoint Maintenance Services"
            />
          </div>
          <p style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: '#8aa39c' }}>
            Prefer to talk first? Call <a href="tel:+13473329348" style={{ color: '#1B7A3D', fontWeight: 600 }}>347-332-9348</a> or
            email <a href="mailto:info@greenpointms.com" style={{ color: '#1B7A3D', fontWeight: 600 }}>info@greenpointms.com</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
