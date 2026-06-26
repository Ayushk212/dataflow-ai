const TICKER_ITEMS = [
  'Aetna', 'Cigna', 'Deloitte', 'Salesforce', 'McKinsey',
  'JPMorgan', 'Adobe', 'Stripe', 'Databricks', 'Snowflake',
]

// Inline SVG data flow animation — no external assets
function DataFlowSVG() {
  return (
    <svg
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Grid dots */}
      {Array.from({ length: 12 }, (_, row) =>
        Array.from({ length: 20 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 32 + 4}
            cy={row * 26 + 4}
            r="1.2"
            fill="#D9E8E2"
            opacity="0.12"
          />
        ))
      )}

      {/* Main pipeline paths */}
      <path
        className="data-flow-path"
        d="M0 150 C80 150 100 80 180 80 S280 150 360 150 S460 220 540 150 L600 150"
        stroke="#FFC801"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ animationDelay: '0s', animationDuration: '4s' }}
      />
      <path
        className="data-flow-path"
        d="M0 180 C60 180 100 240 180 240 S280 120 360 120 S460 60 540 180 L600 180"
        stroke="#FF9932"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ animationDelay: '1.2s', animationDuration: '5s' }}
      />
      <path
        className="data-flow-path"
        d="M0 120 C80 120 120 200 200 200 S300 80 380 80 S480 200 560 120 L600 120"
        stroke="#114C5A"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ animationDelay: '0.6s', animationDuration: '4.5s' }}
      />

      {/* Node points */}
      {[
        { cx: 180, cy: 80,  r: 5, color: '#FFC801' },
        { cx: 360, cy: 150, r: 5, color: '#FFC801' },
        { cx: 540, cy: 150, r: 5, color: '#FFC801' },
        { cx: 180, cy: 240, r: 4, color: '#FF9932' },
        { cx: 360, cy: 120, r: 4, color: '#FF9932' },
        { cx: 200, cy: 200, r: 4, color: '#114C5A' },
        { cx: 380, cy: 80,  r: 4, color: '#114C5A' },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.cx} cy={node.cy} r={node.r + 4} fill={node.color} opacity="0.15"
            style={{ animation: `pulse-ring 2.5s ease-in-out ${i * 0.3}s infinite` }}
          />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} />
        </g>
      ))}

      {/* Corner labels */}
      <text x="10" y="20" fontFamily="JetBrains Mono" fontSize="9" fill="#D9E8E2" opacity="0.4">INGEST</text>
      <text x="250" y="20" fontFamily="JetBrains Mono" fontSize="9" fill="#D9E8E2" opacity="0.4">TRANSFORM</text>
      <text x="490" y="20" fontFamily="JetBrains Mono" fontSize="9" fill="#D9E8E2" opacity="0.4">DELIVER</text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-oceanic pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-nocturnal/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-saffron/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Copy */}
        <div>

          <h1 className="hero-headline font-mono font-700 text-4xl md:text-5xl lg:text-6xl text-arctic leading-[1.08] tracking-tight">
            Automate your{' '}
            <span
              className="relative"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FFC801, #FF9932)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              data pipeline
            </span>
            {' '}with AI agents.
          </h1>

          <p className="hero-sub mt-6 font-sans text-lg text-mystic leading-relaxed max-w-lg">
            Deploy custom enterprise agents and automate complex workflows.
            Transform raw data into decisions at scale — without writing a single ETL script.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="#pricing"
              className="btn-primary bg-forsythia text-oceanic font-mono font-700 px-7 py-3.5 rounded-xl text-base"
            >
              Build a Workflow →
            </a>
            <a
              href="#features"
              className="btn-ghost border border-white/15 text-arctic font-sans font-500 px-7 py-3.5 rounded-xl text-base"
            >
              See How It Works
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex gap-8 flex-wrap">
            {[
              { val: '99.9%', label: 'Uptime SLA' },
              { val: '8.4M',  label: 'Records / mo' },
              { val: '< 50ms', label: 'Avg Latency' },
            ].map(s => (
              <div key={s.val}>
                <div className="font-mono font-700 text-2xl text-forsythia">{s.val}</div>
                <div className="font-sans text-xs text-mystic mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Animated SVG visualization */}
        <div className="relative hero-cta">
          <div className="relative rounded-2xl border border-white/8 bg-nocturnal/20 p-4 overflow-hidden">
            {/* Terminal top bar */}
            <div className="flex items-center gap-1.5 mb-3">
              {['#FF5F56','#FFBD2E','#27C93F'].map(c => (
                <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} aria-hidden="true" />
              ))}
              <span className="font-mono text-xs text-mystic/50 ml-2">dataflow.pipeline — live</span>
            </div>
            <div className="h-52 md:h-64">
              <DataFlowSVG />
            </div>
            {/* Live status overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-oceanic/80 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-arctic">345 nodes active</span>
            </div>
          </div>

          {/* Floating metric cards */}
          <div className="absolute -bottom-4 -left-4 bg-nocturnal border border-white/10 rounded-xl px-4 py-3 shadow-xl">
            <div className="font-mono text-xl font-700 text-forsythia">82%</div>
            <div className="font-sans text-xs text-mystic">Efficiency gain</div>
          </div>
          <div className="absolute -top-4 -right-4 bg-nocturnal border border-forsythia/20 rounded-xl px-4 py-3 shadow-xl">
            <div className="font-mono text-xl font-700 text-saffron">10×</div>
            <div className="font-sans text-xs text-mystic">Faster deploys</div>
          </div>
        </div>
      </div>

      {/* Trust ticker */}
      <div className="relative border-t border-white/5 py-6 overflow-hidden" aria-label="Trusted by leading companies">
        <p className="text-center font-sans text-xs text-mystic/50 uppercase tracking-widest mb-4">
          Trusted by teams at
        </p>
        <div className="overflow-hidden">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((name, i) => (
              <span
                key={i}
                className="font-mono text-sm text-mystic/60 mx-10 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
