function scrollToWork() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="site-shell hero-grid">
        <div>
          <p className="eyebrow">
            Mobile application developer · React Native · TypeScript
          </p>
          <h1>
            I build mobile products, and I stay with them through the hard
            parts.
          </h1>
          <p className="hero-intro">
            I’m Iwalewa, a mobile and full-stack engineer with three years of
            shipping React Native products to the App Store and Play Store. I’ve
            built consumer apps, vendor tools, payment flows, a smart-terminal
            printer bridge, and the backend work needed to make those products
            hold together.
          </p>
          <div className="hero-actions">
            <button className="text-link strong" onClick={scrollToWork}>
              See selected work <span aria-hidden="true">↓</span>
            </button>
            <a className="text-link" href="mailto:kolawoleiwalewa@gmail.com">
              Email me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="current-note" aria-label="Current work">
          <p className="note-label">Currently</p>
          <div className="current-role">
            <strong>Sole Mobile Engineer</strong>
            <span>Afriplanora</span>
            <small>React Native contract · Remote</small>
          </div>
          <div className="current-role">
            <strong>Previously Platform Lead</strong>
            <span>Proximity Communications</span>
            <small>Nov 2025 — Sep 2026 · Full-time</small>
          </div>
          <p className="availability">
            Open to full-time React Native, mobile and frontend roles.
          </p>
        </aside>
      </div>
    </section>
  )
}
