import { useReveal } from '../hooks/useReveal.js'


const STATS = [
  { val: '500+', label: 'Enterprise teams', sub: 'across 40 countries' },
  { val: '8.4M',  label: 'Records processed', sub: 'every month' },
  { val: '99.9%', label: 'Uptime maintained', sub: 'across all regions' },
  { val: '94%',   label: 'Failure reduction', sub: 'avg. across clients' },
]

const CASE_STUDIES = [
  {
    tag: '// 2026',
    company: 'Cigna Smart Health Systems',
    result: 'Revolutionized patient care through predictive analytics and seamless AI-driven diagnostic integration tools — reducing misdiagnosis rates by 37%.',
  },
  {
    tag: '// 2026',
    company: 'Aetna Health Data Ecosystem',
    result: "Automated Aetna's member data management using secure AI to provide personalized care and clinical insights at scale for 40M+ members.",
  },
  {
    tag: '// 2025',
    company: 'Deloitte Process Intelligence',
    result: 'Deployed autonomous audit agents that process 2M financial transactions daily, reducing manual review time by 82%.',
  },
]

export default function SocialProof() {
  const headerRef = useReveal()
  const statsRef  = useReveal()
  const caseRef   = useReveal()

  return (
    <section
      id="case-studies"
      aria-labelledby="social-proof-heading"
      className="bg-arctic py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-nocturnal" aria-hidden="true" />
            <span className="font-mono text-xs text-nocturnal uppercase tracking-widest">
              Case Studies
            </span>
          </div>
          <h2
            id="social-proof-heading"
            className="font-mono font-700 text-3xl md:text-4xl text-oceanic leading-tight max-w-xl"
          >
            Proven Neural Solutions.
          </h2>
          <p className="mt-4 font-sans text-nocturnal/70 text-lg max-w-lg">
            We partner with industry leaders to deploy AI agents that solve complex
            operational challenges and drive measurable growth.
          </p>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map(s => (
            <div
              key={s.val}
              className="bg-white border border-nocturnal/8 rounded-2xl p-6"
            >
              <div className="font-mono font-700 text-3xl text-oceanic">{s.val}</div>
              <div className="font-sans text-sm font-600 text-nocturnal mt-1">{s.label}</div>
              <div className="font-sans text-xs text-nocturnal/50 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Case studies list */}
        <div ref={caseRef} className="reveal mb-20">
          <div className="border-t border-nocturnal/12">
            {CASE_STUDIES.map((cs, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 py-8 border-b border-nocturnal/12 group cursor-default"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="font-mono text-xs text-nocturnal/40">{cs.tag}</span>
                </div>
                <div className="md:w-56 flex-shrink-0">
                  <h3 className="font-mono font-600 text-sm text-oceanic">{cs.company}</h3>
                </div>
                <p className="flex-1 font-sans text-sm text-nocturnal/70 leading-relaxed">
                  {cs.result}
                </p>
                <div className="flex-shrink-0 self-center">
                  <svg
                    className="text-nocturnal/20 group-hover:text-nocturnal/60 transition-colors duration-180"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
