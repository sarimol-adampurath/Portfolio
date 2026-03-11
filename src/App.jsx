import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StackSection from './components/StackSection'
import ProjectGrid from './components/ProjectGrid'
import ContactSection from './components/ContactSection'
import { content } from './content'

function App() {
  const [language, setLanguage] = useState('en')
  const pageContent = content[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B1120] text-slate-100">
      <Navbar
        nav={pageContent.nav}
        onLanguageToggle={() => setLanguage((current) => (current === 'en' ? 'de' : 'en'))}
      />
      <main>
        <Hero hero={pageContent.hero} />
        <StackSection stack={pageContent.stack} />
        <ProjectGrid projectsContent={pageContent.projects} />
        <ContactSection contact={pageContent.contact} />
      </main>
    </div>
  )
}

export default App
