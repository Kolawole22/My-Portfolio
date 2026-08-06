import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'
import Footer from '../components/Footer'

export const Route = createFileRoute('/')({ component: Portfolio })

function Portfolio() {
  return (
    <div className="portfolio-page">
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
