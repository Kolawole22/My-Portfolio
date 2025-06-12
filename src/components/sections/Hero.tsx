// Helper function to scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="animate-slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bringing Ideas to Life with{' '}
              <span className="text-primary">Clean Code</span> & Engaging
              Experiences
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Frontend-focused Software Developer with practical backend
              experience, passionate about creating intuitive, user-friendly,
              and visually polished web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Subtle visual element */}
          <div className="hidden md:block absolute right-10 bottom-10 opacity-20">
            <div className="w-64 h-64 rounded-full bg-primary-light blur-3xl animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
