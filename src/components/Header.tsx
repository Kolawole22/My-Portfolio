import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const navigation = [
  { label: 'Work', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
]

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = (target: string) => {
    scrollToSection(target)
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link to="/" className="brand" aria-label="Iwalewa Kolawole, home">
          <span className="brand-mark">IK</span>
          <span>Iwalewa Kolawole</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <button key={item.target} onClick={() => navigate(item.target)}>
              {item.label}
            </button>
          ))}
          <a href="/resume/kola_resume.pdf" target="_blank" rel="noreferrer">
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <div className="site-shell">
            {navigation.map((item) => (
              <button key={item.target} onClick={() => navigate(item.target)}>
                {item.label}
              </button>
            ))}
            <a href="/resume/kola_resume.pdf" target="_blank" rel="noreferrer">
              Open resume ↗
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
