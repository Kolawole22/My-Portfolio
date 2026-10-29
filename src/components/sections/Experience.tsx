type Role = {
  title: string
  company: string
  period: string
  arrangement: string
  details: Array<string>
}

const roles: Array<Role> = [
  {
    title: 'Mobile Application Developer (Sole Mobile Engineer)',
    company: 'Afriplanora',
    period: 'Feb 2026 — present',
    arrangement: 'Contract · Remote',
    details: [
      'Shipped the iOS and Android travel marketplace solo, with multi-currency checkout across Paystack, Stripe and PayPal. It has ~3,000 downloads and 120+ live listings.',
      'Built the vendor platform and, as sole developer, the admin web dashboard for users, services, KYC, earnings, complaints and broadcasts.',
      'Made the home screen cold launch 2–3× faster, cut transaction history’s first load from ~4s to ~1s, and backed the app with 2,000+ automated tests in CI.',
    ],
  },
  {
    title: 'Platform Lead / Software Developer',
    company: 'Proximity Communications',
    period: 'Nov 2025 — Sep 2026',
    arrangement: 'Full-time · Remote',
    details: [
      'Solely built and led a multi-tenant proximity-marketing platform across React, React Native, Node.js, Express and PostgreSQL. It launched with its first brand client after a live product demo won the deal.',
      'Engineered an API across 28 domain modules, including campaigns, loyalty, referrals, campus recycling, fraud signals and audit trails, plus Radar geofencing and scheduled jobs.',
      'Automated delivery from Cloud Build to Cloud Run and instrumented production with Sentry, an OpenAPI spec and role-based access control.',
    ],
  },
  {
    title: 'Mobile, Web & POS Developer',
    company: 'Santilotto',
    period: 'Nov 2025 — Jun 2026',
    arrangement: 'Contract · Remote',
    details: [
      'Built a live lottery platform solo across three codebases and 200+ screens: customer mobile and web apps, admin and agent portals, and an Android POS app.',
      'Wrote a Java-to-React Native bridge for the Nexgo SmartPOS printer and automated its native setup through an Expo config plugin.',
    ],
  },
  {
    title: 'Mobile Application Developer',
    company: 'RepMirror AI',
    period: 'Jul 2025 — Feb 2026',
    arrangement: 'Contract · Remote',
    details: [
      'Released an AI fitness app with camera-based rep counting through the KinesteX SDK, and owned builds, store submissions and OTA updates.',
      'Added workout plans, challenges, leaderboards and RevenueCat subscriptions, and built the Next.js marketing site and admin console.',
    ],
  },
  {
    title: 'Mobile & Full-Stack Developer',
    company: 'Trex Techies',
    period: 'Jun 2024 — Jul 2025',
    arrangement: 'Contract · Remote',
    details: [
      'Flyttman: built the 114-page Next.js frontend in English and Swedish, implemented Stripe checkout and invoicing on the backend, and deployed both on VPS.',
      'Ajoo.me: built the Expo group-savings app with group wallets, contributions and auto-debit bank transfers.',
      'Spectrum: built a React Native tax-payment and compliance app for the Osun State Government.',
    ],
  },
  {
    title: 'IT Support / Software Developer (NYSC)',
    company: 'BUA Group',
    period: 'Jul 2023 — Jul 2024',
    arrangement: 'National service',
    details: [
      'Handled day-to-day IT support and independently built a MySQL-backed inventory system for tracking equipment across subsidiaries.',
      'Designed the asset intake, employee assignment, transfer, return and access-control workflows, then deployed the system.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <div className="site-shell two-column-section">
        <div className="section-intro sticky-intro">
          <p className="eyebrow">Experience</p>
          <h2>Three years of shipping to production.</h2>
          <p>
            Most of my work has been remote. Some contracts ran alongside my
            full-time role, so each one shows its own dates and arrangement.
          </p>
          <a
            className="text-link"
            href="/resume/kola_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Read the full resume <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="experience-list">
          {roles.map((role) => (
            <article
              className="experience-item"
              key={`${role.company}-${role.period}`}
            >
              <div className="experience-title">
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.company}</p>
                </div>
                <div className="experience-meta">
                  <span>{role.period}</span>
                  <small>{role.arrangement}</small>
                </div>
              </div>
              <ul>
                {role.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}

          <div className="earlier-work">
            <p className="note-label">Earlier contract work</p>
            <p>
              Took over and published the Farmers Marketplace Android app for
              IFAD, and contributed React and Next.js frontend work to Cream for
              King David Elites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
