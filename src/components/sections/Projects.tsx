type ProjectLink = {
  label: string
  href: string
}

type Project = {
  number: string
  name: string
  context: string
  period: string
  summary: string
  contribution: string
  stack: Array<string>
  links: Array<ProjectLink>
}

const projects: Array<Project> = [
  {
    number: '01',
    name: 'Afriplanora',
    context: 'Travel marketplace · iOS and Android',
    period: '2026 — now',
    summary:
      'A two-sided travel product where travellers discover and book local services, build itineraries and manage reservations, while vendors run their listings, schedules, teams and payouts.',
    contribution:
      'I built the mobile application end to end: traveller and vendor flows, API integration, payments, booking operations, automated tests, environment setup and store releases.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'TanStack Query',
      'Stripe',
      'Paystack',
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/ng/app/afriplanora/id6759009228',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.afriplanora',
      },
    ],
  },
  {
    number: '02',
    name: 'Proximity Communications',
    context: 'Location-aware engagement ecosystem',
    period: '2025 — now',
    summary:
      'A connected set of products for brands, venues, consumers, students, promoters and administrators, covering campaigns, geofencing, loyalty, rewards, recycling and operational analytics.',
    contribution:
      'As platform lead, I work across the consumer mobile app, vendor and admin frontends, the Malta CanBack applications and the shared Node/PostgreSQL backend. My work spans product decisions, frontend delivery, backend features and integrations.',
    stack: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'Radar', 'Expo'],
    links: [
      { label: 'Happy Hour', href: 'https://happyhours.ng' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.appstar.happyhour',
      },
    ],
  },
  {
    number: '03',
    name: 'RepMirror AI',
    context: 'Camera-based fitness coaching · iOS and Android',
    period: '2025 — 2026',
    summary:
      'A fitness app that uses motion tracking to count repetitions, evaluate exercise form and give feedback while a workout is in progress.',
    contribution:
      'I integrated KinesteX, built the workout and progress flows, added RevenueCat subscriptions, notifications and account handling, and managed the App Store and Play Store releases.',
    stack: [
      'React Native',
      'Expo',
      'KinesteX',
      'RevenueCat',
      'React Query',
      'EAS',
    ],
    links: [
      { label: 'Website', href: 'https://repmirror.ai' },
      { label: 'App Store', href: 'https://apps.apple.com/app/id6753352161' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.repmirror.ayomide',
      },
    ],
  },
  {
    number: '04',
    name: 'Santilotto',
    context: 'Lottery ecosystem · Mobile, web and Android POS',
    period: '2025 — 2026',
    summary:
      'A lottery platform spanning customer mobile and web experiences, administration and agent portals, and a dedicated smart-terminal application for in-person ticket sales.',
    contribution:
      'I worked across every client application. For the POS product, I wrote a Java-to-React Native bridge for the Nexgo printer SDK and an Expo config plugin that installs and registers the native integration during builds.',
    stack: [
      'React Native',
      'React',
      'TypeScript',
      'Java',
      'Nexgo SDK',
      'WebSockets',
    ],
    links: [{ label: 'Website', href: 'https://santilotto.com/' }],
  },
  {
    number: '05',
    name: 'Flyttman',
    context: 'Moving-services marketplace · Sweden',
    period: '2024 — 2025',
    summary:
      'A marketplace where customers request moves, logistics companies submit quotations, and both sides manage bookings, disputes, payments and conversations.',
    contribution:
      'I focused on the frontend, integrated Stripe when the backend integration stalled, fixed backend issues, and set up both deployments across Loopia and DigitalOcean using Nginx, PM2 and MySQL.',
    stack: ['React', 'TypeScript', 'Stripe', 'Node.js', 'MySQL', 'Nginx'],
    links: [{ label: 'Website', href: 'https://flyttman.se' }],
  },
]

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-index" aria-hidden="true">
        {project.number}
      </div>
      <div className="project-main">
        <div className="project-heading">
          <div>
            <h3>{project.name}</h3>
            <p>{project.context}</p>
          </div>
          <span>{project.period}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">
          <strong>My part:</strong> {project.contribution}
        </p>
        <div className="project-footer">
          <ul aria-label={`${project.name} technologies`}>
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="content-section work-section">
      <div className="site-shell">
        <div className="section-intro">
          <p className="eyebrow">Selected work</p>
          <h2>A few products I know beyond the screens.</h2>
          <p>
            These are the projects where I owned meaningful parts of the
            product, release process or underlying system—not just isolated UI
            tickets.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
