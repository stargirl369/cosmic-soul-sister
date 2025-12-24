import Link from 'next/link';

const signs = [
  'Aries','Taurus','Gemini','Cancer','Leo','Virgo',
  'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
];

export default function Daily() {
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
        <h1>Daily Horoscope</h1>
        <p style={{ maxWidth: '700px', lineHeight: 1.6 }}>
          Choose your sun sign for today’s cosmic weather.  
          Simple insight. No overwhelm.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          marginTop: '2rem',
          maxWidth: '700px'
        }}>
          {signs.map(sign => (
            <div key={sign} style={{
              padding: '1rem',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              textAlign: 'center',
              opacity: 0.85
            }}>
              {sign}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
