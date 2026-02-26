import FadeInOnScroll from './FadeInOnScroll'

const projects = [
  {
    name: 'Realtime Ops Dashboard',
    summary: 'Monitoring and telemetry platform for distributed services with low-latency streaming.',
    tags: ['React', 'TypeScript', 'WebSockets'],
  },
  {
    name: 'Enterprise Design System',
    summary: 'Scalable component library with token-driven theming and strict accessibility baseline.',
    tags: ['React', 'Storybook', 'Tailwind'],
  },
  {
    name: 'Analytics Workbench',
    summary: 'Data-intensive frontend for querying and visualizing product metrics across teams.',
    tags: ['Vite', 'React', 'Node.js'],
  },
]

function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto min-h-screen w-full max-w-6xl scroll-mt-24 px-6 py-24 lg:px-10">
      <FadeInOnScroll className="mb-10 flex items-end justify-between gap-6">
        <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">Projects</h2>
        <a href="#stack" className="text-sm font-medium text-[#818CF8]">
          Core Stack
        </a>
      </FadeInOnScroll>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <FadeInOnScroll key={project.name} delay={index * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-[#1E293B] bg-[#111A2E] p-6 transition-colors duration-300 hover:border-[#38BDF8]">
              <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#1E293B] bg-[#0B1120] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
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

export default ProjectGrid
