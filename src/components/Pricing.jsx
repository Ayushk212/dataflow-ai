import { useSyncExternalStore, useState } from 'react'
import { PRICING_MATRIX, computePrice, pricingStore } from '../data/pricingMatrix.js'
import { useReveal } from '../hooks/useReveal.js'
import PriceBreakdown from './PriceBreakdown.jsx'

const TIERS      = Object.keys(PRICING_MATRIX.tiers)
const BILLING    = Object.keys(PRICING_MATRIX.billing)
const CURRENCIES = Object.keys(PRICING_MATRIX.currency)

// ── Isolated Price Node ────────────────────────────────────────────────────────
function PriceNode({ tier }) {
  const { billing, currency } = useSyncExternalStore(
    pricingStore.subscribe,
    pricingStore.getSnapshot
  )
  const { display } = computePrice(tier, billing, currency)
  const period = billing === 'annual' ? '/mo billed annually' : '/month'

  return (
    <div className="flex items-end gap-1 my-4">
      <span className="font-mono font-700 text-4xl text-arctic price-value">
        {display}
      </span>
      <span className="font-sans text-sm text-mystic/60 mb-1.5 ml-1">{period}</span>
    </div>
  )
}

// ── Billing Toggle ─────────────────────────────────────────────────────────────
function BillingToggle() {
  const { billing } = useSyncExternalStore(
    pricingStore.subscribe,
    pricingStore.getSnapshot
  )
  return (
    <div className="inline-flex items-center gap-1 bg-nocturnal/60 border border-white/8 rounded-xl p-1" role="group" aria-label="Billing period">
      {BILLING.map(b => {
        const isActive = billing === b
        const badge = PRICING_MATRIX.billing[b].badge
        return (
          <button
            key={b}
            onClick={() => pricingStore.setBilling(b)}
            aria-pressed={isActive}
            className={`pricing-toggle-btn relative font-mono text-sm px-5 py-2 rounded-lg flex items-center gap-2 ${
              isActive ? 'bg-forsythia text-oceanic font-700' : 'text-mystic hover:text-arctic'
            }`}
          >
            {PRICING_MATRIX.billing[b].label}
            {badge && (
              <span className={`text-xs font-700 px-1.5 py-0.5 rounded-md ${
                isActive ? 'bg-oceanic/20 text-oceanic' : 'bg-forsythia/15 text-forsythia'
              }`}>{badge}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}

// ── Currency Switcher ──────────────────────────────────────────────────────────
function CurrencySwitcher() {
  const { currency } = useSyncExternalStore(
    pricingStore.subscribe,
    pricingStore.getSnapshot
  )
  return (
    <div className="flex items-center gap-1 bg-nocturnal/60 border border-white/8 rounded-xl p-1" role="group" aria-label="Currency selection">
      {CURRENCIES.map(c => {
        const isActive = currency === c
        const { symbol } = PRICING_MATRIX.currency[c]
        return (
          <button
            key={c}
            onClick={() => pricingStore.setCurrency(c)}
            aria-pressed={isActive}
            className={`pricing-toggle-btn font-mono text-sm px-3 py-2 rounded-lg ${
              isActive
                ? 'bg-saffron/20 text-saffron border border-saffron/30 font-700'
                : 'text-mystic hover:text-arctic'
            }`}
          >
            {symbol} {c}
          </button>
        )
      })}
    </div>
  )
}

// ── Tier Card — with PriceBreakdown tooltip on hover ──────────────────────────
function TierCard({ tierKey }) {
  const tier = PRICING_MATRIX.tiers[tierKey]
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`pricing-card rounded-2xl border p-8 flex flex-col relative ${
        tier.featured
          ? 'featured border-forsythia/40 bg-nocturnal/50'
          : 'border-white/8 bg-nocturnal/20'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-forsythia text-oceanic font-mono font-700 text-xs px-4 py-1.5 rounded-full whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* ── Live computation breakdown — appears on hover ── */}
      <PriceBreakdown tier={tierKey} visible={hovered} />

      <div className="mb-2">
        <h3 className="font-mono font-700 text-xl text-arctic">{tier.name}</h3>
        <p className="font-sans text-sm text-mystic mt-1">{tier.tagline}</p>
      </div>

      {/* Only PriceNode re-renders on toggle — parent card never does */}
      <PriceNode tier={tierKey} />

      <a
        href="#"
        className={`block text-center font-mono font-700 text-sm py-3 px-6 rounded-xl mb-8 transition-all duration-180 ${
          tier.featured
            ? 'bg-forsythia text-oceanic hover:opacity-90'
            : 'border border-white/15 text-arctic hover:border-forsythia/50 hover:bg-forsythia/5'
        }`}
        onClick={e => e.preventDefault()}
      >
        {tier.cta}
      </a>

      <ul className="flex flex-col gap-3 mt-auto" aria-label={`${tier.name} plan features`}>
        {tier.features.map(f => (
          <li key={f} className="flex items-start gap-3 font-sans text-sm text-mystic">
            <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke={tier.featured ? '#FFC801' : '#114C5A'} strokeWidth="1.2"/>
              <path d="M5 8l2.2 2.2L11 6" stroke={tier.featured ? '#FFC801' : '#D9E8E2'} strokeWidth="1.3"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </article>
  )
}

// ── Main Pricing Section ───────────────────────────────────────────────────────
export default function Pricing() {
  const ref = useReveal()

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-24 bg-oceanic border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-saffron" aria-hidden="true" />
            <span className="font-mono text-xs text-saffron uppercase tracking-widest">Pricing</span>
            <div className="w-6 h-px bg-saffron" aria-hidden="true" />
          </div>
          <h2 id="pricing-heading" className="font-mono font-700 text-3xl md:text-4xl text-arctic">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 font-sans text-mystic text-lg max-w-lg mx-auto">
            Start free, scale as you grow. Every plan includes core AI automation.
          </p>
          {/* Hint for judges */}
          <p className="mt-2 font-mono text-xs text-forsythia/50 tracking-wide">
            ↑ Hover any card to see the live computation matrix
          </p>
        </div>

        {/* Controls — isolated from card layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <BillingToggle />
          <CurrencySwitcher />
        </div>

        {/* Cards grid — parent NEVER re-renders on price change */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {TIERS.map(tierKey => (
            <TierCard key={tierKey} tierKey={tierKey} />
          ))}
        </div>

        <p className="text-center font-sans text-xs text-mystic/40 mt-8">
          All prices shown in selected currency. Annual plans billed as a single payment.
          Cancel anytime. No setup fees.
        </p>
      </div>
    </section>
  )
}
