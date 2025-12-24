import { useState } from 'react';
import Link from 'next/link';

const sunSigns = [
  'Aries','Taurus','Gemini','Cancer','Leo','Virgo',
  'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
];

export default function BigThree() {
  const [sun, setSun] = useState('');
  const [moon, setMoon] = useState('');
  const [rising, setRising] = useState('');

  return (
    <>
      <nav style={{
        padding: '1rem 2rem',
        background: '#0f0c29',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <strong>Cosmic Soul Sister</strong>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/" style={{ color: 'white' }}>Home</Link>
          <Link href="/daily" style={{ color: 'white' }}>Daily</Link>
          <Link href="/big-three" style={{ color: 'white' }}>Big Three</Link>
          <Link href="/about" style={{ color: 'white' }}>About</Link>
        </div>
      </nav>

      <main style={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(135deg, #0f0c29, #302b63)',
        color: 'white',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1>The Big Three</h1>
        <p style={{ maxWidth: '700px', lineHeight: 1.6 }}>
          Your Sun, Moon, and Rising signs form the core of your astrological
          identity. Start here. Go deeper when ready.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          maxWidth: '700px',
          marginTop: '2rem'
        }}>
          <select value={sun} onChange={e => setSun(e.target.value)}>
            <option value="">Sun Sign</option>
            {sunSigns.map(s => <option key={s}>{s}</option>)}
          </select>

          <select value={moon} onChange={e => setMoon(e.target.value)}>
            <option value="">Moon Sign</option>
            {sunSigns.map(s => <option key={s}>{s}</option>)}
          </select>

          <select value={rising} onChange={e => setRising(e.target.value)}>
            <option value="">Rising Sign</option>
            {sunSigns.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {(sun || moon || rising) && (
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '10px',
            maxWidth: '700px'
          }}>
            <h2>Your Big Three</h2>
            <p>☀️ Sun: {sun || '—'}</p>
            <p>🌙 Moon: {moon || '—'}</p>
            <p>⬆️ Rising: {rising || '—'}</p>
          </div>
        )}
      </main>
    </>
  );
}
