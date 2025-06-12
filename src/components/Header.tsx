import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

// Helper function to scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle scroll event to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all ${isScrolled ? 'bg-card-dark shadow-md' : 'bg-transparent'}`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            <span className="hidden sm:inline">Kolawole Iwalewa</span>
            <span className="sm:hidden">KI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="nav-link"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="nav-link"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </button>
          <a
            href="/resume/kola_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-sm px-4 py-2"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-dark focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-card-dark shadow-lg animate-fadeIn">
          <div className="container py-4 flex flex-col space-y-4">
            <button
              onClick={() => {
                scrollToSection('about')
                setIsMenuOpen(false)
              }}
              className="nav-link block text-left"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('skills')
                setIsMenuOpen(false)
              }}
              className="nav-link block text-left"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToSection('projects')
                setIsMenuOpen(false)
              }}
              className="nav-link block text-left"
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection('experience')
                setIsMenuOpen(false)
              }}
              className="nav-link block text-left"
            >
              Experience
            </button>
            <button
              onClick={() => {
                scrollToSection('contact')
                setIsMenuOpen(false)
              }}
              className="nav-link block text-left"
            >
              Contact
            </button>
            <a
              href="/resume/kola_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-sm px-4 py-2 self-start"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
