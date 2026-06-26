import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const STEPS = [
  {
    num: '01',
    title: 'Connect your data sources',
    description:
      'Point DataFlow at any source — databases, REST APIs, file systems, event streams. Our schema inspector maps your entire data topology in under 60 seconds.',
  },
  {
    num: '02',
    title: 'Define your agent logic',
    description:
      'Describe your pipeline in plain language or configure it in the visual builder. DataFlow compiles it into a versioned, testable agent graph.',
  },
  {
    num: '03',
    title: 'Deploy and observe',
    description:
      'One command to production. Live telemetry streams back immediately — latency, throughput, error rates, and agent decision traces, all in one view.',
  },
  {
    num: '04',
    title: 'Scale without limits',
    description:
      'Autoscale from zero to 100M events per day with zero infrastructure changes. DataFlow handles partitioning, backpressure, and retry logic automatically.',
  },
]

const TERMINAL_LINES = [
  { delay: 0,    color: 'rgba(217,232,226,0.45)', text: 'Connecting to postgres://prod-db-01...' },
  { delay: 800,  color: '#FFC801',                text: '00:01  ✓  Connected — 47 tables found' },
  { delay: 1600, color: '#FFC801',                text: '00:02  ✓  Relationships mapped (312 FK)' },
  { delay: 2400, color: '#FF9932',                text: '00:03  ⟳  Building knowledge graph...' },
  { delay: 3400, color: '#FFC801',                text: '00:04  ✓  Knowledge graph ready' },
  { delay: 4200, color: '#FF9932',                text: '00:05  ⟳  Compiling agent logic...' },
  { delay: 5000, color: '#FFC801',                text: '00:06  ✓  Agent graph compiled (v1.0.0)' },
  { delay: 5800, color: '#FFC801',                text: '00:07  ✓  Deploying to prod cluster...' },
  { delay: 6600, color: '#22c55e',                text: '00:08  ✓  Live — 345 nodes active' },
]

const SOURCES = [
  { label: 'postgres://prod',  color: '#FFC801',  bg: 'rgba(255,200,1,0.1)',  border: 'rgba(255,200,1,0.25)' },
  { label: 'kafka://events',   color: '#FF9932',  bg: 'rgba(255,153,50,0.1)', border: 'rgba(255,153,50,0.25)' },
  { label: 's3://data-lake',   color: '#D9E8E2',  bg: 'rgba(217,232,226,0.06)', border: 'rgba(217,232,226,0.15)' },
]

// ── Animated terminal panel ───────────────────────────────────────────────────
function Terminal({ activeStep }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [elapsed, setElapsed]           = useState(0)
  const [isLive, setIsLive]             = useState(false)
  const terminalRef = useRef(null)
  const timersRef   = useRef([])

  // Re-run terminal animation whenever activeStep changes
  useEffect(() => {
    // Clear previous timers + reset
    timersRef.current.forEach(t => clearTimeout(t))
    timersRef.current = []
    setVisibleLines([])
    setElapsed(0)
    setIsLive(false)

    // Tick elapsed counter
    const tick = setInterval(() => setElapsed(s => s + 1), 100)
    timersRef.current.push(tick)

    // Schedule each line
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        if (i === TERMINAL_LINES.length - 1) {
          setIsLive(true)
          clearInterval(tick)
        }
        // Auto-scroll
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, line.delay)
      timersRef.current.push(t)
    })

    return () => {
      timersRef.current.forEach(t => clearTimeout(t))
      clearInterval(tick)
    }
  }, [activeStep])

  return (
    <div style={{
      background: '#0D1B21',
      border: '1px solid rgba(255,200,1,0.15)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
    }}>
      {/* Terminal top bar */}
      <div style={{
        background: '#0A1117',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#FF5F56','#FFBD2E','#27C93F'].map(c => (
            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        {/* Title */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            color: 'rgba(217,232,226,0.6)',
          }}>
            schema-inspector
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(217,232,226,0.3)',
          }}>
            Running · {(elapsed / 10).toFixed(1)}s elapsed
          </span>
        </div>
        {/* Live badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '3px 10px',
          borderRadius: '20px',
          background: isLive ? 'rgba(34,197,94,0.12)' : 'rgba(255,200,1,0.1)',
          border: `1px solid ${isLive ? 'rgba(34,197,94,0.3)' : 'rgba(255,200,1,0.2)'}`,
          transition: 'all 400ms ease',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: isLive ? '#22c55e' : '#FFC801',
            animation: 'pulse-ring 1.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
            color: isLive ? '#22c55e' : '#FFC801',
            fontWeight: 700,
          }}>
            {isLive ? 'Live' : 'Running'}
          </span>
        </div>
      </div>

      {/* Terminal output */}
      <div
        ref={terminalRef}
        style={{
          padding: '20px',
          height: '220px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          scrollbarWidth: 'none',
        }}
      >
        {visibleLines.map((line, i) => (
          <div key={i} style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            color: line.color,
            lineHeight: 1.6,
            animation: 'fadeUp 0.2s ease-out both',
          }}>
            {line.text}
          </div>
        ))}
        {/* Blinking cursor */}
        {!isLive && (
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            color: '#FFC801',
          }}>
            <span style={{ animation: 'blink-cursor 1s step-end infinite' }}>▊</span>
          </div>
        )}
      </div>

      {/* Sources detected footer */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '14px 20px',
        background: 'rgba(0,0,0,0.2)',
      }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: 'rgba(217,232,226,0.3)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          Sources Detected
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {SOURCES.map(s => (
            <span key={s.label} style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px',
              color: s.color,
              background: s.bg,
              border: `1px solid ${s.border}`,
              padding: '4px 10px',
              borderRadius: '20px',
            }}>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const headerRef = useReveal()

  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      style={{ background: '#0A1117', borderTop: '1px solid rgba(255,255,255,0.04)' }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="reveal mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ width: '24px', height: '1px', background: '#FFC801' }} />
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px',
              color: '#FFC801',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              How It Works
            </span>
          </div>
          <h2
            id="hiw-heading"
            style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700 }}
            className="text-3xl md:text-4xl text-arctic leading-tight"
          >
            From Zero to{' '}
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #FFC801, #FF9932)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Production
            </span>
            {' '}in Four Steps.
          </h2>
          <p className="mt-4 font-sans text-mystic text-lg leading-relaxed">
            No infrastructure expertise required. DataFlow handles the complexity
            so your team focuses on decisions, not plumbing.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Steps */}
          <div className="flex flex-col gap-2">
            {STEPS.map((step, i) => {
              const isActive = activeStep === i
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${step.num}: ${step.title}`}
                  style={{
                    textAlign: 'left',
                    background: isActive
                      ? 'rgba(255,200,1,0.06)'
                      : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(255,200,1,0.2)' : 'transparent'}`,
                    borderRadius: '14px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    transition: 'all 200ms cubic-bezier(0,0,0.2,1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'transparent'
                    }
                  }}
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      left: 0, top: '20%', bottom: '20%',
                      width: '3px',
                      borderRadius: '0 2px 2px 0',
                      background: 'linear-gradient(180deg, #FFC801, #FF9932)',
                    }} />
                  )}

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    {/* Number */}
                    <span style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: isActive ? '#FFC801' : 'rgba(217,232,226,0.2)',
                      marginTop: '3px',
                      flexShrink: 0,
                      transition: 'color 200ms ease',
                    }}>
                      {step.num}
                    </span>

                    <div>
                      <h3 style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: isActive ? '#F1F6F4' : 'rgba(217,232,226,0.55)',
                        marginBottom: '6px',
                        transition: 'color 200ms ease',
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        color: 'rgba(217,232,226,0.45)',
                        lineHeight: 1.65,
                        maxHeight: isActive ? '80px' : '0',
                        overflow: 'hidden',
                        opacity: isActive ? 1 : 0,
                        transition: 'max-height 300ms cubic-bezier(0.4,0,0.2,1), opacity 250ms ease',
                      }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right — Terminal */}
          <div className="sticky top-24">
            <Terminal activeStep={activeStep} />

            {/* Step indicator dots */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px',
            }}>
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  style={{
                    width: activeStep === i ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: activeStep === i ? '#FFC801' : 'rgba(217,232,226,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 250ms cubic-bezier(0,0,0.2,1)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
