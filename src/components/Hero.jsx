import FadeInOnScroll from './FadeInOnScroll'

const terminalSkillObject = `{
  "role": "Frontend Engineer",
  "focus": ["Performance", "Scalability", "Accessibility"],
  "ux_philosophy": {
    "priority": "User-Centric Design",
    "principles": ["Heuristic Evaluation", "Atomic Design"],
    "tools": ["Figma", "Framer Motion"]
  },
  "metrics_driven": true
}`

function Hero() {
  return (
    <section className="mx-auto grid min-h-screen w-full max-w-6xl scroll-mt-24 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
      <FadeInOnScroll>
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818CF8]">Portfolio</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              I build scalable digital systems
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            Engineering high-performance interfaces and resilient frontend architectures for ambitious products.
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.08}>
        <div className="rounded-xl border border-[#1E293B] bg-[#111A2E]">
          <div className="flex items-center justify-between border-b border-[#1E293B] px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Code Terminal</p>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-[#1E293B] bg-[#0B1120]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#1E293B] bg-[#0B1120]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#1E293B] bg-[#0B1120]" />
            </div>
          </div>
          <pre className="overflow-x-auto px-4 py-5 text-sm leading-7 text-[#38BDF8]">
            <code>{terminalSkillObject}</code>
          </pre>
        </div>
      </FadeInOnScroll>
    </section>
  )
}

export default Hero
