import { useState, useEffect } from 'react'

const NAV_LINKS = ['Features', 'Pricing', 'Case Studies', 'Docs']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-oceanic/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="DataFlow AI home" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#FFC801"/>
            <path d="M7 14h4l3-6 4 12 3-6h4" stroke="#172B36" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono font-700 text-arctic text-lg tracking-tight group-hover:text-forsythia transition-colors duration-150">
            DataFlow<span className="text-forsythia">.</span>AI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="nav-link font-sans text-sm font-500 text-mystic"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="btn-ghost border border-white/15 text-arctic text-sm font-500 px-4 py-2 rounded-lg font-sans">
            Sign In
          </a>
          <a href="#pricing" className="btn-primary bg-forsythia text-oceanic text-sm font-700 px-5 py-2 rounded-lg font-mono">
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden p-2 text-arctic"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="2" y1="6"  x2="20" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-oceanic/98 border-t border-white/5 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              className="text-mystic font-sans text-base py-1"
            >
              {link}
            </a>
          ))}
          <a href="#pricing" className="btn-primary bg-forsythia text-oceanic text-sm font-700 px-5 py-3 rounded-lg font-mono text-center mt-2">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}
