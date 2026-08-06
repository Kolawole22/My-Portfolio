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
            I’m Iwalewa, a software developer focused on React Native and
            frontend engineering. I’ve shipped consumer apps, vendor tools,
            payment flows, a smart-terminal printer bridge, and the backend work
            needed to make those products hold together.
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
            <strong>Platform Lead</strong>
            <span>Proximity Communications</span>
            <small>Mobile, web and backend · Remote</small>
          </div>
          <div className="current-role">
            <strong>Mobile Application Developer</strong>
            <span>Afriplanora</span>
            <small>React Native contractor · Remote</small>
          </div>
          <p className="availability">
            Interested in React Native, mobile product and frontend
            opportunities.
          </p>
        </aside>
      </div>
    </section>
  )
}
