import Link from 'next/link';

export default function Home() {
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
          <Link href="/about" style={{ color: 'white' }}>About</Link>
  <Link href="/daily" style={{ color: 'white' }}>Daily</Link>
  <Link href="/big-three" style={{ color: 'white' }}>Big Three</Link>
  <Link href="/cosmic-cliff-notes">Cosmic Cliff Notes</Link>
        </div>
      </nav>

      <main style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Cosmic Soul Sister
        </h1>

        <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Astrology for the big three, the curious, and the cosmic wanderers.
          Simple when you want it. Deep when you’re ready.
        </p>

        <div style={{ marginTop: '2rem', opacity: 0.85 }}>
          🌙 Big Three · Charts · Readings · Human Design 🌙
        </div>
      </main>
    </>
  );
}
