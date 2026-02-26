import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('stack')

  useEffect(() => {
    const updateActiveSection = () => {
      const sectionIds = navLinks.map((link) => link.href.slice(1))
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
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-[#1E293B] bg-[#0B1120]/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="text-sm font-semibold tracking-wide text-slate-100">
          SARIS.DEV
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveSection(link.href.slice(1))}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#38BDF8] ${
                activeSection === link.href.slice(1) ? 'text-[#38BDF8]' : 'text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#"
            className="rounded-md border border-[#1E293B] px-4 py-2 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-[#38BDF8]"
            style={{ boxShadow: '0 0 0 1px rgba(56, 189, 248, 0.2)' }}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
