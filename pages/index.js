export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
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
        Daily horoscopes, deep-dive charts, and soul-level insight —
        simple when you want it, profound when you’re ready.
      </p>

      <div style={{ marginTop: '2rem', opacity: 0.85 }}>
        🌙 Big Three · Charts · Readings · Human Design 🌙
      </div>
    </main>
  );
}
