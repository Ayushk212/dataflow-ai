/**
 * Multi-dimensional pricing configuration matrix.
 * All UI price values are computed — never hardcoded.
 * Formula: base × billing_multiplier × currency_tariff
 */

export const PRICING_MATRIX = {
  tiers: {
    starter: {
      base: 29,
      name: 'Starter',
      tagline: 'For solo builders & small teams',
      features: [
        '5 AI Automation Pipelines',
        '50K data records / month',
        'REST API access',
        'Basic analytics dashboard',
        'Email support',
        '99.5% uptime SLA',
      ],
      cta: 'Start Free Trial',
      featured: false,
    },
    pro: {
      base: 79,
      name: 'Pro',
      tagline: 'For growing data teams',
      features: [
        'Unlimited Pipelines',
        '5M data records / month',
        'GraphQL + REST API',
        'Real-time monitoring',
        'Priority Slack support',
        '99.9% uptime SLA',
        'Custom agent workflows',
        'Team collaboration tools',
      ],
      cta: 'Get Started',
      featured: true,
    },
    enterprise: {
      base: 199,
      name: 'Enterprise',
      tagline: 'For mission-critical operations',
      features: [
        'Unlimited everything',
        'Dedicated infrastructure',
        'On-premise deployment',
        'SOC 2 Type II compliance',
        '24/7 dedicated support',
        '99.99% uptime SLA',
        'Custom SLAs & contracts',
        'White-label options',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  },

  billing: {
    monthly: { multiplier: 1.0,  label: 'Monthly',  badge: null },
    annual:  { multiplier: 0.80, label: 'Annual',   badge: 'Save 20%' },
  },

  currency: {
    USD: { symbol: '$', code: 'USD', tariff: 1.000,  locale: 'en-US' },
    INR: { symbol: '₹', code: 'INR', tariff: 83.50, locale: 'en-IN' },
    EUR: { symbol: '€', code: 'EUR', tariff: 0.920, locale: 'de-DE' },
  },
}

/**
 * Compute final display price for a tier/billing/currency combo.
 * @param {string} tier     - 'starter' | 'pro' | 'enterprise'
 * @param {string} billing  - 'monthly' | 'annual'
 * @param {string} currency - 'USD' | 'INR' | 'EUR'
 * @returns {{ display: string, symbol: string, amount: number }}
 */
export function computePrice(tier, billing, currency) {
  const base    = PRICING_MATRIX.tiers[tier].base
  const mult    = PRICING_MATRIX.billing[billing].multiplier
  const cur     = PRICING_MATRIX.currency[currency]
  const amount  = base * mult * cur.tariff

  // Format: INR uses no decimals (large numbers), others 0 decimals
  const formatted = Math.round(amount).toLocaleString(cur.locale)
  return {
    symbol:  cur.symbol,
    amount,
    display: `${cur.symbol}${formatted}`,
  }
}

/**
 * Tiny pub/sub store for pricing state — isolated from parent tree.
 * No global React context, no re-render propagation to layout blocks.
 */
function createPricingStore() {
  let state = { billing: 'monthly', currency: 'USD' }
  const listeners = new Set()

  return {
    getSnapshot: () => state,
    subscribe: (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    setBilling: (billing) => {
      state = { ...state, billing }
      listeners.forEach(cb => cb())
    },
    setCurrency: (currency) => {
      state = { ...state, currency }
      listeners.forEach(cb => cb())
    },
  }
}

export const pricingStore = createPricingStore()
