import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StackSection from './components/StackSection'
import ProjectGrid from './components/ProjectGrid'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <StackSection />
        <ProjectGrid />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
