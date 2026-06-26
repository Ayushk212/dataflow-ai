export const FEATURES = [
  {
    id: 0,
    title: 'Neural Pipeline Engine',
    eyebrow: 'Core Infrastructure',
    description:
      'Orchestrate multi-step AI workflows across any data source. Our engine handles conditional branching, error recovery, and parallel execution automatically — no manual intervention.',
    stat: '99.9%',
    statLabel: 'Pipeline Uptime',
    accent: '#FFC801',
    size: 'large', // spans 2 cols
    icon: (
      `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="20" width="10" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <rect x="19" y="14" width="10" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <rect x="19" y="26" width="10" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <rect x="34" y="20" width="10" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M14 24h5M29 18l5 6M29 30l5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="24" cy="8" r="3" stroke="#FFC801" stroke-width="1.5"/>
        <path d="M24 11v3" stroke="#FFC801" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`
    ),
  },
  {
    id: 1,
    title: 'Real-Time Data Intelligence',
    eyebrow: 'Analytics Layer',
    description:
      'Stream, process, and visualize data as it moves. Sub-second latency across millions of concurrent records with adaptive sampling that never misses an anomaly.',
    stat: '< 50ms',
    statLabel: 'Avg. Latency',
    accent: '#FF9932',
    size: 'small',
    icon: (
      `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4,36 14,24 22,30 32,14 44,20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="44" cy="20" r="3" fill="#FF9932" stroke="#FF9932"/>
        <line x1="4" y1="40" x2="44" y2="40" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      </svg>`
    ),
  },
  {
    id: 2,
    title: 'Autonomous Agent Mesh',
    eyebrow: 'AI Agents',
    description:
      'Deploy a self-coordinating network of specialized AI agents. Each agent handles a distinct task domain — extraction, transformation, validation, delivery — and they collaborate without human prompting.',
    stat: '345+',
    statLabel: 'Active Nodes',
    accent: '#114C5A',
    size: 'small',
    icon: (
      `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="8"  cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="40" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="8"  cy="36" r="3" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="40" cy="36" r="3" stroke="currentColor" stroke-width="1.5"/>
        <path d="M11 13.5L19.5 20M36.5 13.5L28.5 20M11 34.5L19.5 28M36.5 34.5L28.5 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`
    ),
  },
  {
    id: 3,
    title: 'Enterprise Security Layer',
    eyebrow: 'Compliance & Trust',
    description:
      'Every byte shielded with AES-256 encryption in transit and at rest. SOC 2 Type II certified, GDPR compliant, and ready for your most sensitive production workloads.',
    stat: 'SOC 2',
    statLabel: 'Type II Certified',
    accent: '#FFC801',
    size: 'small',
    icon: (
      `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L6 12v12c0 10.5 7.7 20.3 18 23 10.3-2.7 18-12.5 18-23V12L24 4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M17 24l5 5 9-10" stroke="#FFC801" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    ),
  },
  {
    id: 4,
    title: 'Visual Workflow Builder',
    eyebrow: 'No-Code Interface',
    description:
      'Drag-and-drop canvas for designing sophisticated agent behaviors. Build, test, and deploy complete automation pipelines without writing a single line of code.',
    stat: '10×',
    statLabel: 'Faster Deployment',
    accent: '#FF9932',
    size: 'large',
    icon: (
      `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <rect x="28" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <rect x="16" y="32" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M12 16v8h12M36 16v8H24M24 24v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    ),
  },
]
