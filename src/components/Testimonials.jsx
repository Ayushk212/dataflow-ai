const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      'We replaced our entire Airflow setup with DataFlow in a weekend. What used to require a dedicated data engineering team now runs autonomously. The observability alone is worth the switch.',
    author: 'Sarah R.',
    role: 'Head of Data Engineering',
    company: 'Acme Corp',
    initials: 'SR',
    color: '#FFC801',
    bg: 'rgba(255,200,1,0.12)',
  },
  {
    stars: 5,
    quote:
      'The matrix pricing is a revelation. My finance team sees exactly what we pay and why. Zero surprises, and the multi-currency support saved us hours of FX reconciliation every month.',
    author: 'Marcus P.',
    role: 'CTO',
    company: 'Nexus Dynamics',
    initials: 'MP',
    color: '#FF9932',
    bg: 'rgba(255,153,50,0.12)',
  },
  {
    stars: 5,
    quote:
      '8 billion events per day at 34ms P99. At that scale most tools fall apart. DataFlow just handles it, and when something goes wrong the agent traces tell you exactly why in seconds.',
    author: 'Ji-Young K.',
    role: 'Principal Engineer',
    company: 'Horizon Labs',
    initials: 'JK',
    color: '#114C5A',
    bg: 'rgba(17,76,90,0.4)',
  },
]

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FFC801" aria-hidden="true">
          <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.2l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: '#0A1117',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          {/* Pill badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 14px',
            borderRadius: '20px',
            background: 'rgba(17,76,90,0.5)',
            border: '1px solid rgba(17,76,90,0.8)',
            marginBottom: '20px',
          }}>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10px',
              color: '#D9E8E2',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Social Proof
            </span>
          </div>

          <h2
            id="testimonials-heading"
            style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700 }}
            className="text-3xl md:text-5xl text-arctic leading-tight"
          >
            Loved by{' '}
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #FFC801, #FF9932)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Engineering Teams
            </span>
            {' '}at Every Scale.
          </h2>

          {/* Star aggregate */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '16px',
          }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#FFC801" aria-hidden="true">
                  <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.2l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5L7 1z" />
                </svg>
              ))}
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(217,232,226,0.45)',
            }}>
              4.9 / 5 across 500+ enterprise teams
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              style={{
                background: 'rgba(23,43,54,0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '18px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 180ms cubic-bezier(0,0,0.2,1), border-color 180ms cubic-bezier(0,0,0.2,1), box-shadow 180ms cubic-bezier(0,0,0.2,1)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = `${t.color}30`
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${t.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Subtle top glow per card */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${t.color}40, transparent)`,
              }} aria-hidden="true" />

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Big quote mark */}
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '56px',
                lineHeight: 0.6,
                color: t.color,
                opacity: 0.2,
                userSelect: 'none',
              }} aria-hidden="true">
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(217,232,226,0.75)',
                lineHeight: 1.75,
                flex: 1,
                marginTop: '-16px',
              }}>
                {t.quote}
              </p>

              {/* Author */}
              <footer style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}>
                {/* Avatar */}
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: t.bg,
                  border: `1px solid ${t.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: t.color,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#F1F6F4',
                  }}>
                    {t.author}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(217,232,226,0.4)',
                    marginTop: '2px',
                  }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div style={{
          marginTop: '48px',
          padding: '20px 32px',
          borderRadius: '14px',
          background: 'rgba(255,200,1,0.04)',
          border: '1px solid rgba(255,200,1,0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {[
            { val: '500+', label: 'Enterprise teams' },
            { val: '99.9%', label: 'Avg. uptime reported' },
            { val: '4.9★', label: 'Customer rating' },
            { val: '< 48h', label: 'Avg. onboarding time' },
          ].map(s => (
            <div key={s.val} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFC801',
              }}>
                {s.val}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: 'rgba(217,232,226,0.4)',
                marginTop: '3px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
