// Shared building blocks for the Conduct & Safety Policy pages (EN + ES).
import Link from 'next/link';

export function LangToggle({ current }) {
  const pill = (active) => ({
    padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em',
    textDecoration: 'none',
    color: active ? '#0a1a12' : 'rgba(255,255,255,0.7)',
    background: active ? '#C8A34D' : 'rgba(255,255,255,0.08)',
    border: active ? '1px solid #C8A34D' : '1px solid rgba(255,255,255,0.2)',
  });
  return (
    <div style={{ display: 'inline-flex', gap: 8, marginBottom: 18 }}>
      <Link href="/team-conduct-safety-policy" style={pill(current === 'en')}>English</Link>
      <Link href="/team-conduct-safety-policy-es" style={pill(current === 'es')}>Español</Link>
    </div>
  );
}

export function Section({ number, title, children, flagged, criticalLabel = 'Critical' }) {
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
            {criticalLabel}
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

export function CalloutBox({ children }) {
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

export function ListRules({ items }) {
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
