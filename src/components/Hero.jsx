import FadeInOnScroll from './FadeInOnScroll'

function Hero({ hero }) {
  return (
    <section className="mx-auto grid min-h-screen w-full max-w-6xl scroll-mt-24 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
      <FadeInOnScroll>
        <div className="min-w-0 space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818CF8]">{hero.eyebrow}</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="animated-text-sweep">
              {hero.title}
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            {hero.description}
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.08} className="min-w-0">
        <div className="rounded-xl border border-[#1E293B] bg-[#111A2E]">
          <div className="flex items-center justify-between border-b border-[#1E293B] px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">{hero.terminalLabel}</p>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
          </div>
          <pre className="w-full whitespace-pre-wrap break-words px-4 py-5 text-sm leading-7 text-[#38BDF8]">
            <code>{hero.terminalSkillObject}</code>
          </pre>
        </div>
      </FadeInOnScroll>
    </section>
  )
}

export default Hero
