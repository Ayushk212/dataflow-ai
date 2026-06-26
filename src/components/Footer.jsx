const FOOTER_LINKS = {
  'Quick Links': ['Home', 'Features', 'Pricing', 'Case Studies'],
  'Company':     ['About Us', 'Contact Us', 'Book a Demo', 'Blog'],
  'Policies':    ['Terms & Conditions', 'Privacy Policy', 'Security', 'GDPR'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" style={{ background: '#0A1117' }}>

      {/* ── Unified CTA + Newsletter card ── */}
      <div style={{ background: '#0A1117', padding: '60px 0 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Outer glow card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              padding: '2px',
              background: 'linear-gradient(135deg, rgba(255,200,1,0.35) 0%, rgba(255,153,50,0.2) 40%, rgba(17,76,90,0.4) 100%)',
              boxShadow: '0 0 60px rgba(255,200,1,0.06), 0 24px 64px rgba(0,0,0,0.5)',
            }}
          >
            {/* Inner card */}
            <div
              style={{
                borderRadius: '18px',
                background: 'linear-gradient(145deg, #111C26 0%, #0D1920 60%, #0A1117 100%)',
                overflow: 'hidden',
              }}
            >
              {/* Subtle top-left glow orb */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-60px',
                  left: '-40px',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,200,1,0.07) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div className="flex flex-col lg:flex-row">

                {/* ── LEFT: CTA ── */}
                <div
                  className="flex flex-col justify-center px-10 py-12 flex-1"
                  style={{ position: 'relative' }}
                >
                  {/* Label badge */}
                  <div
                    className="inline-flex items-center gap-2 mb-5 self-start px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,200,1,0.1)',
                      border: '1px solid rgba(255,200,1,0.2)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: '#FFC801' }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#FFC801' }}>
                      No credit card required
                    </span>
                  </div>

                  <h2
                    className="font-mono font-700 leading-tight mb-6"
                    style={{ color: '#F1F6F4', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                  >
                    Start automating<br />
                    <span style={{ color: '#FFC801' }}>in under 5 minutes.</span>
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#pricing"
                      className="font-mono font-700 text-sm px-7 py-3.5 rounded-xl text-center transition-all duration-200"
                      style={{
                        background: '#FFC801',
                        color: '#172B36',
                        boxShadow: '0 4px 20px rgba(255,200,1,0.25)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#ffd340'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,200,1,0.4)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#FFC801'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,200,1,0.25)' }}
                    >
                      Build a Workflow →
                    </a>
                    <a
                      href="#features"
                      className="font-sans text-sm px-7 py-3.5 rounded-xl text-center transition-all duration-200"
                      style={{
                        border: '1.5px solid rgba(241,246,244,0.15)',
                        color: 'rgba(241,246,244,0.7)',
                      }}
                      onClick={e => e.preventDefault()}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(241,246,244,0.35)'; e.currentTarget.style.color = '#F1F6F4' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(241,246,244,0.15)'; e.currentTarget.style.color = 'rgba(241,246,244,0.7)' }}
                    >
                      See the Docs
                    </a>
                  </div>
                </div>

                {/* ── Vertical divider ── */}
                <div
                  className="hidden lg:block flex-shrink-0"
                  style={{
                    width: '1px',
                    margin: '32px 0',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)',
                  }}
                  aria-hidden="true"
                />

                {/* ── Horizontal divider (mobile) ── */}
                <div
                  className="lg:hidden mx-10"
                  style={{
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)',
                  }}
                  aria-hidden="true"
                />

                {/* ── RIGHT: Newsletter ── */}
                <div className="flex flex-col justify-center px-10 py-12 flex-1">
                  {/* Newsletter heading */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,200,1,0.12)', border: '1px solid rgba(255,200,1,0.2)' }}
                    >
                      <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M2 4h14v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" stroke="#FFC801" strokeWidth="1.4"/>
                        <path d="M2 4l7 7 7-7" stroke="#FFC801" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono font-700 text-sm" style={{ color: '#F1F6F4' }}>
                        DataFlow Weekly
                      </p>
                      <p className="font-sans text-xs" style={{ color: 'rgba(217,232,226,0.45)' }}>
                        AI automation insights — no fluff.
                      </p>
                    </div>
                  </div>

                  {/* Trust line */}
                  <p className="font-sans text-xs mb-6 mt-3" style={{ color: 'rgba(217,232,226,0.35)' }}>
                    Join&nbsp;<span style={{ color: 'rgba(255,200,1,0.8)' }}>4,200+</span> engineers &amp; data teams getting the weekly edge.
                  </p>

                  {/* Email input */}
                  <div
                    className="flex gap-2 rounded-xl p-1.5"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="you@company.com"
                      className="flex-1 bg-transparent px-3 py-2 font-sans text-sm outline-none"
                      style={{ color: '#F1F6F4' }}
                    />
                    <button
                      type="button"
                      className="font-mono font-700 text-sm px-5 py-2 rounded-lg whitespace-nowrap flex-shrink-0 transition-all duration-200"
                      style={{
                        background: '#FFC801',
                        color: '#172B36',
                        boxShadow: '0 2px 12px rgba(255,200,1,0.2)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#ffd340'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#FFC801'; }}
                    >
                      Subscribe
                    </button>
                  </div>

                  {/* Fine print */}
                  <p className="font-sans text-xs mt-3" style={{ color: 'rgba(217,232,226,0.25)' }}>
                    Unsubscribe at any time. We respect your privacy.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
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
          <p className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: 'rgba(217,232,226,0.1)' }}>
            dataflow · ai · automation
          </p>
        </div>
      </div>

    </footer>
  )
}
