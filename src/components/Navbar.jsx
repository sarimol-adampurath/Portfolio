import { useEffect, useState } from 'react'

function Navbar({ nav, onLanguageToggle }) {
  const [activeSection, setActiveSection] = useState('stack')

  useEffect(() => {
    const updateActiveSection = () => {
      const sectionIds = nav.links.map((link) => link.href.slice(1))
      const scrollPosition = window.scrollY + 120

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (!section) {
          continue
        }

        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(sectionId)
          return
        }
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection)
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [nav.links])

  return (
    <header className="sticky top-0 z-40 border-b border-[#1E293B] bg-[#0B1120]/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="text-sm font-semibold tracking-wide text-slate-100">
          <span className="animated-text-sweep">{nav.brand}</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveSection(link.href.slice(1))}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-opacity duration-200 hover:opacity-100 ${
                activeSection === link.href.slice(1) ? 'opacity-100' : 'opacity-85'
              }`}
            >
              <span className="animated-text-sweep">{link.label}</span>
            </a>
          ))}

          <a
            href="https://github.com/sarimol-adampurath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={nav.githubLabel}
            className="rounded-md p-2 transition-opacity duration-200 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animated-icon-sweep"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/sarimol-adampurath-90b320224/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={nav.linkedinLabel}
            className="rounded-md p-2 transition-opacity duration-200 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animated-icon-sweep"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={onLanguageToggle}
            aria-label={nav.languageToggleAria}
            className="animated-border-card animated-border-always cursor-pointer rounded-md px-4 py-2 text-sm font-medium tracking-[0.16em] text-slate-100 transition-colors duration-200"
          >
            {nav.languageToggle}
          </button>

          <a
            href={nav.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-border-card animated-border-always rounded-md px-4 py-2 text-sm font-medium text-slate-100 transition-colors duration-200"
          >
            {nav.resume}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
