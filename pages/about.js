import Link from 'next/link';

export default function About() {
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
        </div>
      </nav>

      <main style={{
        minHeight: 'calc(100vh - 64px)',
        background: '#0f0c29',
        color: 'white',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1>About Cosmic Soul Sister</h1>

        <p style={{ maxWidth: '700px', lineHeight: 1.6 }}>
          This is astrology without gatekeeping. Start with sun signs,
          stay for the big three, go deeper when the timing feels right.
        </p>
      </main>
    </>
  );
}
