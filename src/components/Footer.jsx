const FOOTER_LINKS = {
  'Quick Links': ['Home', 'Features', 'Pricing', 'Case Studies'],
  'Company':     ['About Us', 'Contact Us', 'Book a Demo', 'Blog'],
  'Policies':    ['Terms & Conditions', 'Privacy Policy', 'Security', 'GDPR'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" style={{ background: '#0A1117' }}>

      {/* ── Top divider — thick forsythia accent bar ── */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #FFC801 0%, #FF9932 50%, transparent 100%)' }} />

      {/* ── CTA band — Arctic Powder bg, visually loud break from page ── */}
      <div style={{ background: '#F1F6F4' }}>
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#FF9932' }}>
              No credit card required
            </p>
            <h2 className="font-mono font-700 text-3xl md:text-4xl leading-tight" style={{ color: '#172B36' }}>
              Start automating<br />in under 5 minutes.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#pricing"
              className="btn-primary font-mono font-700 text-sm px-8 py-4 rounded-xl text-center"
              style={{ background: '#172B36', color: '#FFC801' }}
            >
              Build a Workflow →
            </a>
            <a
              href="#features"
              className="btn-ghost font-sans font-500 text-sm px-8 py-4 rounded-xl text-center"
              style={{ border: '1.5px solid #172B36', color: '#172B36' }}
              onClick={e => e.preventDefault()}
            >
              See the Docs
            </a>
          </div>
        </div>
      </div>

      {/* ── Newsletter bar — Nocturnal Expedition strip ── */}
      <div style={{ background: '#114C5A' }}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4h14v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" stroke="#FFC801" strokeWidth="1.3"/>
              <path d="M2 4l7 7 7-7" stroke="#FFC801" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className="font-mono text-sm font-600" style={{ color: '#F1F6F4' }}>
              DataFlow Weekly
            </span>
            <span className="font-sans text-xs" style={{ color: 'rgba(217,232,226,0.55)' }}>
              — AI automation insights, no fluff.
            </span>
          </div>
          <div className="flex gap-2 flex-1 max-w-md sm:ml-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-lg px-4 py-2.5 font-sans text-sm outline-none"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#F1F6F4',
              }}
            />
            <button
              type="button"
              className="btn-primary font-mono font-700 text-sm px-5 py-2.5 rounded-lg whitespace-nowrap"
              style={{ background: '#FFC801', color: '#172B36' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ── Main footer body — near-black, clearly separate ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand col */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="#FFC801"/>
              <path d="M7 14h4l3-6 4 12 3-6h4" stroke="#172B36" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-mono font-700 text-base" style={{ color: '#F1F6F4' }}>
              DataFlow<span style={{ color: '#FFC801' }}>.</span>AI
            </span>
          </div>
          <p className="font-sans text-xs leading-relaxed max-w-44" style={{ color: 'rgba(217,232,226,0.45)' }}>
            The AI-native data automation platform for enterprise teams at scale.
          </p>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,200,1,0.08)', border: '1px solid rgba(255,200,1,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs" style={{ color: 'rgba(217,232,226,0.6)' }}>
              All systems operational
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-2.5 mt-5" aria-label="Social media links">
            {[
              { label: 'X (Twitter)', d: 'M4 4l16 16M20 4L4 20' },
              { label: 'LinkedIn',   d: 'M4 6h4v14H4zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 10v10M12 10c0-3 2-4 4-4 3 0 4 2 4 5v9' },
              { label: 'GitHub',     d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
            ].map(s => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                onClick={e => e.preventDefault()}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(217,232,226,0.45)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFC801'; e.currentTarget.style.borderColor = 'rgba(255,200,1,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(217,232,226,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={s.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <nav key={heading} aria-label={`${heading} links`}>
            <h3 className="font-mono text-xs uppercase tracking-widest mb-5"
              style={{ color: 'rgba(217,232,226,0.3)' }}>
              {heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm transition-colors duration-150"
                    style={{ color: 'rgba(217,232,226,0.5)' }}
                    onClick={e => e.preventDefault()}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFC801'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(217,232,226,0.5)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs" style={{ color: 'rgba(217,232,226,0.25)' }}>
            © {year} DataFlow AI, Inc. All rights reserved.
          </p>
          {/* Big oversized wordmark — like the reference video */}
          <p className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: 'rgba(217,232,226,0.1)' }}>
            dataflow · ai · automation
          </p>
        </div>
      </div>

    </footer>
  )
}
