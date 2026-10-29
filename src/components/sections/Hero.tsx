import * as m from 'motion/react-m'
import { phoneWidths, webpSources } from '../webpSources'

const ease = [0.22, 1, 0.36, 1] as const

const heroCards = [
  {
    image: '/projects/repmirror/form-check',
    alt: 'RepMirror form-correction screen',
    className: 'hero-card is-left',
    rest: { rotate: -8, x: '-2%' },
    fanned: { rotate: -12, x: '-9%' },
  },
  {
    image: '/projects/happy-hour/rewards',
    alt: 'Happy Hour rewards and account screen',
    className: 'hero-card is-right',
    rest: { rotate: 7, x: '2%' },
    fanned: { rotate: 11, x: '9%' },
  },
  {
    image: '/projects/afriplanora/discover',
    alt: 'Afriplanora map-based discovery screen',
    className: 'hero-card is-front',
    rest: { rotate: -1, x: '0%' },
    fanned: { rotate: 0, x: '0%' },
  },
]

function scrollToWork() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

function HeroCards() {
  return (
    <m.div
      className="hero-cards"
      initial="hidden"
      animate="rest"
      whileHover="fanned"
      aria-label="Screens from Afriplanora, RepMirror and Happy Hour"
      role="img"
    >
      {heroCards.map((card, index) => (
        <m.img
          key={card.image}
          {...webpSources(card.image, phoneWidths)}
          sizes="(max-width: 720px) 150px, 212px"
          alt=""
          className={card.className}
          width={440}
          height={954}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, y: 48, rotate: 0, x: '0%' },
            rest: {
              opacity: 1,
              y: 0,
              ...card.rest,
              transition: { duration: 0.9, delay: 0.15 + index * 0.12, ease },
            },
            fanned: {
              opacity: 1,
              y: index === 2 ? -10 : 0,
              ...card.fanned,
              transition: { duration: 0.5, ease },
            },
          }}
        />
      ))}
    </m.div>
  )
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
            I build mobile products, and I stay with them through{' '}
            <em>the hard parts.</em>
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

        <HeroCards />
      </div>

      <aside className="site-shell current-note" aria-label="Current work">
        <div className="current-role">
          <p className="note-label">Currently</p>
          <strong>Sole Mobile Engineer</strong>
          <span>Afriplanora · React Native contract · Remote</span>
        </div>
        <div className="current-role">
          <p className="note-label">Previously</p>
          <strong>Platform Lead</strong>
          <span>Proximity Communications · Nov 2025 — Sep 2026</span>
        </div>
        <div className="current-role">
          <p className="note-label">Looking for</p>
          <strong>Full-time roles</strong>
          <span>React Native, mobile and frontend</span>
        </div>
      </aside>
    </section>
  )
}
