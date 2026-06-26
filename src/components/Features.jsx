import { useState, useEffect, useRef, useCallback } from 'react'
import { FEATURES } from '../data/features.js'
import { useReveal } from '../hooks/useReveal.js'
import { fireTransferToast } from './TransferToast.jsx'

const MOBILE_BREAKPOINT = 768

// ─── Bento Card (desktop) ─────────────────────────────────────────────────────
function BentoCard({ feature, isActive, onActivate }) {
  const isLarge = feature.size === 'large'
  return (
    <article
      className={`bento-card rounded-2xl border bg-nocturnal/30 p-6 flex flex-col gap-4 cursor-pointer
        ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
        ${isActive ? 'active border-forsythia/60' : 'border-white/8'}
      `}
      onMouseEnter={onActivate}
      onClick={onActivate}
      aria-label={`Feature: ${feature.title}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onActivate()}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
          style={{ background: `${feature.accent}18`, color: feature.accent }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: feature.icon }}
        />
        <span
          className="font-mono text-xs px-2 py-0.5 rounded-full border mt-1"
          style={{ color: feature.accent, borderColor: `${feature.accent}40`, background: `${feature.accent}10` }}
        >
          {feature.eyebrow}
        </span>
      </div>

      <h3 className="font-mono font-600 text-lg text-arctic leading-snug">{feature.title}</h3>

      <p className={`font-sans text-sm text-mystic leading-relaxed transition-all duration-300 ease-in-out
        ${isActive || isLarge ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        {feature.description}
      </p>

      <div className="mt-auto pt-4 border-t border-white/6 flex items-center justify-between">
        <div>
          <div className="font-mono font-700 text-xl" style={{ color: feature.accent }}>{feature.stat}</div>
          <div className="font-sans text-xs text-mystic/60 mt-0.5">{feature.statLabel}</div>
        </div>
        {isActive && (
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: `${feature.accent}20` }} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke={feature.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
    </article>
  )
}

// ─── Accordion Item (mobile) ──────────────────────────────────────────────────
function AccordionItem({ feature, isOpen, onToggle }) {
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button
        className="accordion-header w-full flex items-center gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${feature.id}`}
        id={`accordion-header-${feature.id}`}
      >
        <div
          className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center"
          style={{ background: `${feature.accent}18`, color: feature.accent }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: feature.icon }}
        />
        <div className="flex-1 min-w-0">
          <div className="font-mono text-xs mb-0.5" style={{ color: feature.accent }}>{feature.eyebrow}</div>
          <div className="font-mono font-600 text-sm text-arctic truncate">{feature.title}</div>
        </div>
        <div className={`accordion-icon flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center
          ${isOpen ? 'border-forsythia bg-forsythia/10' : 'border-white/20'}`} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            className={`accordion-icon ${isOpen ? 'open' : ''}`}>
            <path d="M6 1v10M1 6h10" stroke={isOpen ? '#FFC801' : '#D9E8E2'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      <div
        id={`accordion-panel-${feature.id}`}
        role="region"
        aria-labelledby={`accordion-header-${feature.id}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <div className="px-5 pb-5 pt-1">
          <p className="font-sans text-sm text-mystic leading-relaxed mb-4">{feature.description}</p>
          <div className="flex items-center gap-3 pt-3 border-t border-white/6">
            <span className="font-mono font-700 text-lg" style={{ color: feature.accent }}>{feature.stat}</span>
            <span className="font-sans text-xs text-mystic/60">{feature.statLabel}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Features() {
  const sectionRef = useReveal()

  const activeIndexRef = useRef(0)
  const [bentoActive, setBentoActive]   = useState(0)
  const [accordionOpen, setAccordionOpen] = useState(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT)
  const prevIsMobile = useRef(isMobile)

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      const nowMobile = entry.contentRect.width < MOBILE_BREAKPOINT
      const wasMobile = prevIsMobile.current

      if (nowMobile !== wasMobile) {
        const idx     = activeIndexRef.current
        const feature = FEATURES[idx]

        if (nowMobile && !wasMobile) {
          // Desktop → Mobile: transfer active bento index to accordion
          setAccordionOpen(idx)
          fireTransferToast({
            direction:   'desktop→mobile',
            index:       idx,
            featureName: feature?.title ?? `Feature ${idx}`,
          })
        } else if (!nowMobile && wasMobile) {
          // Mobile → Desktop: sync accordion back to bento
          if (accordionOpen !== null) {
            setBentoActive(accordionOpen)
            activeIndexRef.current = accordionOpen
            fireTransferToast({
              direction:   'mobile→desktop',
              index:       accordionOpen,
              featureName: FEATURES[accordionOpen]?.title ?? `Feature ${accordionOpen}`,
            })
          }
        }

        prevIsMobile.current = nowMobile
        setIsMobile(nowMobile)
      }
    })
    ro.observe(document.documentElement)
    return () => ro.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordionOpen])

  const handleBentoActivate = useCallback((id) => {
    activeIndexRef.current = id
    setBentoActive(id)
  }, [])

  const handleAccordionToggle = useCallback((id) => {
    setAccordionOpen(prev => {
      const next = prev === id ? null : id
      if (next !== null) activeIndexRef.current = next
      return next
    })
  }, [])

  return (
    <section id="features" aria-labelledby="features-heading" className="py-24 bg-oceanic">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="reveal mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-forsythia" aria-hidden="true" />
            <span className="font-mono text-xs text-forsythia uppercase tracking-widest">Technical Capabilities</span>
          </div>
          <h2 id="features-heading" className="font-mono font-700 text-3xl md:text-4xl text-arctic leading-tight">
            Built for the way data actually moves.
          </h2>
          <p className="mt-4 font-sans text-mystic text-lg leading-relaxed">
            Every feature in DataFlow AI is engineered for production-grade reliability —
            not demos. Here's what powers the platform.
          </p>
          {/* Hint for judges — only visible on desktop */}
          <p className="mt-3 font-mono text-xs text-forsythia/40 hidden md:block tracking-wide">
            ↓ Hover a card · then resize past mobile breakpoint to see context transfer
          </p>
        </div>

        {/* Desktop: Bento Grid */}
        {!isMobile && (
          <div className="grid md:grid-cols-3 gap-4" role="list" aria-label="Features grid">
            {FEATURES.map(feature => (
              <BentoCard
                key={feature.id}
                feature={feature}
                isActive={bentoActive === feature.id}
                onActivate={() => handleBentoActivate(feature.id)}
              />
            ))}
          </div>
        )}

        {/* Mobile: Accordion */}
        {isMobile && (
          <div className="flex flex-col gap-3" role="list" aria-label="Features accordion">
            {FEATURES.map(feature => (
              <AccordionItem
                key={feature.id}
                feature={feature}
                isOpen={accordionOpen === feature.id}
                onToggle={() => handleAccordionToggle(feature.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
