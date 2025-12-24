import Link from 'next/link';

const sections = {
  Planets: [
    'Sun – core identity, vitality',
    'Moon – emotions, inner world',
    'Mercury – communication, thinking',
    'Venus – love, values, attraction',
    'Mars – drive, action, desire',
    'Jupiter – growth, expansion',
    'Saturn – structure, lessons',
    'Uranus – change, rebellion',
    'Neptune – dreams, illusion',
    'Pluto – transformation, power'
  ],
  Houses: [
    '1st – self, identity',
    '2nd – values, resources',
    '3rd – communication, learning',
    '4th – home, roots',
    '5th – creativity, pleasure',
    '6th – work, health',
    '7th – relationships',
    '8th – intimacy, transformation',
    '9th – belief, exploration',
    '10th – career, reputation',
    '11th – community, vision',
    '12th – subconscious, surrender'
  ],
  Aspects: [
    'Conjunction – blended energy',
    'Opposition – polarity, tension',
    'Trine – ease, harmony',
    'Square – friction, growth',
    'Sextile – opportunity'
  ]
};

export default function CosmicCliffNotes() {
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
          <Link href="/">Home</Link>
          <Link href="/daily">Daily</Link>
          <Link href="/big-three">Big Three</Link>
          <Link href="/cosmic-cliff-notes">Cosmic Cliff Notes</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      <main style={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(135deg, #0f0c29, #302b63)',
        color: 'white',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1>Cosmic Cliff Notes</h1>
        <p style={{ maxWidth: '700px', lineHeight: 1.6 }}>
          Astrology has a lot of symbols. This is the short version.
No gatekeeping, no overwhelm — just the core ideas you actually
need to know.
        </p>

        {Object.entries(sections).map(([title, items]) => (
          <section key={title} style={{ marginTop: '2rem' }}>
            <h2>{title}</h2>
            <ul>
              {items.map(item => (
                <li key={item} style={{ lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
