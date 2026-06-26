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

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Copy */}
        <div>

          <h1 className="hero-headline font-mono font-700 text-4xl md:text-5xl lg:text-6xl text-arctic leading-[1.08] tracking-tight">
            Automate Your{' '}
            <span
              className="relative"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FFC801, #FF9932)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Data Pipeline
            </span>
            {' '}with AI Agents.
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

          {/* Trusted by row */}
          <div className="mt-14 flex flex-col gap-4">
            <p className="font-sans text-sm text-mystic/60">Trusted by engineering teams at</p>
            <div className="flex gap-3 flex-wrap">
              {['STRIPE', 'VERCEL', 'NOTION', 'LINEAR'].map(company => (
                <div key={company} className="px-4 py-2 rounded-lg border border-white/10 bg-nocturnal/20 font-mono text-xs font-700 text-mystic/80 tracking-widest uppercase transition-colors hover:border-forsythia/30">
                  {company}
                </div>
              ))}
            </div>
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

      {/* Global Scale Stats */}
      <div className="relative border-t border-white/5 bg-nocturnal/20 py-12 overflow-hidden" aria-label="Platform Statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { val: '8B+', label: 'Events processed daily', color: 'text-arctic' },
              { val: '38ms', label: 'P99 latency at scale', color: 'text-forsythia' },
              { val: '150+', label: 'Source connectors', color: 'text-arctic' },
              { val: '99.99%', label: 'Platform uptime (90d)', color: 'text-saffron' },
              { val: '2.4k+', label: 'Engineering teams', color: 'text-arctic' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center py-4 md:py-0 px-2">
                <div className={`font-mono font-700 text-4xl md:text-5xl tracking-tight mb-2 ${stat.color}`}>
                  {stat.val}
                </div>
                <div className="font-sans text-xs text-mystic/60 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
