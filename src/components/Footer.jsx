const FOOTER_LINKS = {
  'Quick Links': ['Home', 'Features', 'Pricing', 'Case Studies'],
  'Company':     ['About Us', 'Contact Us', 'Book a Demo', 'Blog'],
  'Policies':    ['Terms & Conditions', 'Privacy Policy', 'Security', 'GDPR'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-oceanic border-t border-white/5" role="contentinfo">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-mono font-700 text-2xl text-arctic">
              Stay ahead of your data.
            </h2>
            <p className="font-sans text-sm text-mystic mt-2">
              Weekly insights on AI automation, pipeline architecture, and real builds. No fluff.
            </p>
          </div>
          <div className="flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-nocturnal/40 border border-white/12 rounded-xl px-4 py-3 font-sans text-sm text-arctic placeholder:text-mystic/40 outline-none focus:border-forsythia/50 focus:ring-1 focus:ring-forsythia/30 transition-colors duration-150"
            />
            <button
              className="btn-primary bg-forsythia text-oceanic font-mono font-700 text-sm px-6 py-3 rounded-xl whitespace-nowrap"
              type="button"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="#FFC801"/>
              <path d="M7 14h4l3-6 4 12 3-6h4" stroke="#172B36" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-mono font-700 text-arctic text-base">
              DataFlow<span className="text-forsythia">.</span>AI
            </span>
          </div>
          <p className="font-sans text-xs text-mystic/60 leading-relaxed max-w-48">
            The AI-native data automation platform for enterprise teams.
          </p>
          {/* Social */}
          <div className="flex gap-3 mt-5" aria-label="Social media links">
            {[
              { label: 'X (Twitter)', path: 'M4 4l16 16M20 4L4 20' },
              { label: 'LinkedIn',   path: 'M4 6h4v14H4zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 10v10M12 10c0-3 2-4 4-4 3 0 4 2 4 5v9' },
              { label: 'GitHub',     path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
            ].map(s => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-mystic hover:text-forsythia hover:border-forsythia/30 transition-colors duration-180"
                onClick={e => e.preventDefault()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={s.path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <nav key={heading} aria-label={`${heading} links`}>
            <h3 className="font-mono text-xs text-mystic/40 uppercase tracking-widest mb-4">
              {heading}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm text-mystic hover:text-forsythia transition-colors duration-150"
                    onClick={e => e.preventDefault()}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-mystic/40">
            © {year} DataFlow AI, Inc. All rights reserved.
          </p>
          {/* Big wordmark echo (like reference video) */}
          <p className="font-mono text-xs text-mystic/20 tracking-widest uppercase">
            dataflow · ai · automation
          </p>
        </div>
      </div>
    </footer>
  )
}
