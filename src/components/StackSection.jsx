import FadeInOnScroll from './FadeInOnScroll'

const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Quality',
    items: ['Docker', 'GitHub Actions', 'Jest', 'Playwright'],
  },
]

function StackSection() {
  return (
    <section id="stack" className="mx-auto min-h-screen w-full max-w-6xl scroll-mt-24 px-6 py-24 lg:px-10">
      <FadeInOnScroll className="mb-10">
        <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">Tech Stack</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          Production-focused tooling for building scalable, maintainable, and high-performance digital systems.
        </p>
      </FadeInOnScroll>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group, index) => (
          <FadeInOnScroll key={group.title} delay={index * 0.06}>
            <article className="rounded-xl border border-[#1E293B] bg-[#111A2E] p-6">
              <h3 className="text-base font-semibold text-slate-100">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#1E293B] bg-[#0B1120] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  )
}

export default StackSection
