type Role = {
  title: string
  company: string
  period: string
  arrangement: string
  details: Array<string>
}

const roles: Array<Role> = [
  {
    title: 'Platform Lead / Software Developer',
    company: 'Proximity Communications',
    period: 'Nov 2025 — present',
    arrangement: 'Full-time · Remote',
    details: [
      'Lead development across a multi-application engagement platform for brands, venues, consumers, students, promoters and administrators.',
      'Build frontend and backend features across React, React Native, Node.js, Express and PostgreSQL products.',
      'Delivered location-aware campaigns, loyalty and rewards, QR workflows, push notifications, campus recycling operations and analytics.',
    ],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Afriplanora',
    period: 'Feb 2026 — present',
    arrangement: 'Contract · Remote',
    details: [
      'Built the complete traveller and vendor mobile application with React Native, Expo and TypeScript.',
      'Own booking, itinerary, payment, availability, vendor operations, automated testing and mobile release workflows.',
    ],
  },
  {
    title: 'Mobile Application Developer',
    company: 'RepMirror AI',
    period: 'Jul 2025 — Apr 2026',
    arrangement: 'Contract · Remote',
    details: [
      'Integrated KinesteX motion tracking and delivered workout, progress, subscription and notification flows.',
      'Handled production builds and releases for both the Apple App Store and Google Play Store.',
    ],
  },
  {
    title: 'Mobile, Web & POS Developer',
    company: 'Santilotto',
    period: 'Nov 2025 — Jun 2026',
    arrangement: 'Contract · Remote',
    details: [
      'Developed customer mobile, responsive web, administration, agent and Android POS applications.',
      'Built the custom Nexgo SmartPOS printer bridge and automated its native setup through an Expo config plugin.',
    ],
  },
  {
    title: 'Frontend Developer / Deployment Engineer',
    company: 'Flyttman',
    period: 'Nov 2024 — Sep 2025',
    arrangement: 'Contract · Remote',
    details: [
      'Built marketplace workflows, polling-based messaging and Stripe payments, with occasional backend fixes.',
      'Set up and managed frontend and backend VPS deployments using Nginx, PM2 and MySQL.',
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
          <h2>Overlapping roles, clearly separated.</h2>
          <p>
            Remote work gave me room to take on focused contracts alongside my
            primary role. Each engagement is labelled so the timeline stays
            honest.
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
              Spectrum tax-payment app for Osun State Government; Farmers
              Marketplace for IFAD; and frontend work on Cream for King David
              Elites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
