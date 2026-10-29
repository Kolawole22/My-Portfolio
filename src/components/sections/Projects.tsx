import * as m from 'motion/react-m'
import { browserWidths, phoneWidths, webpSources } from '../webpSources'

const ease = [0.22, 1, 0.36, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 28 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.1 } },
}

type ProjectLink = {
  label: string
  href: string
}

type Highlight = {
  value: string
  label: string
}

type Screenshot = {
  /** Path without the `-<width>.webp` suffix. */
  image: string
  alt: string
}

type ProjectMedia =
  | { kind: 'phone'; screenshots: Array<Screenshot> }
  | {
      kind: 'browser'
      url: string
      screenshot: Screenshot & { width: number; height: number }
    }

type Project = {
  number: string
  name: string
  context: string
  period: string
  summary: string
  contribution: string
  highlights: Array<Highlight>
  media: ProjectMedia
  stack: Array<string>
  links: Array<ProjectLink>
}

const projects: Array<Project> = [
  {
    number: '01',
    name: 'Afriplanora',
    context: 'Travel marketplace · iOS, Android and admin web',
    period: '2026 — now',
    summary:
      'A two-sided travel product where travellers discover and book local services, build itineraries and manage reservations, while vendors run their listings, schedules, teams and payouts.',
    contribution:
      'I’m the sole mobile engineer. I built the traveller and vendor apps end to end, multi-currency checkout across Paystack, Stripe and PayPal, the referral and influencer payout features, and the admin web dashboard. I also made the home screen cold launch 2–3× faster and cut transaction history’s first load from about 4s to 1s.',
    highlights: [
      { value: '~3,000', label: 'downloads across both stores' },
      { value: '120+', label: 'live listings' },
      { value: '2,000+', label: 'automated tests run in CI' },
      { value: '2–3×', label: 'faster home-screen cold launch' },
    ],
    media: {
      kind: 'phone',
      screenshots: [
        {
          image: '/projects/afriplanora/plan-trips',
          alt: 'Afriplanora itinerary planner showing a Lagos trip by day',
        },
        {
          image: '/projects/afriplanora/discover',
          alt: 'Afriplanora map-based discovery of local experiences',
        },
        {
          image: '/projects/afriplanora/vendor',
          alt: 'Afriplanora vendor onboarding for listing services',
        },
      ],
    },
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'TanStack Query',
      'Stripe',
      'Paystack',
      'PayPal',
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
    context: 'Multi-tenant proximity-marketing platform · Web and Android',
    period: '2025 — 2026',
    summary:
      'A connected set of products for brands, venues, consumers, students and promoters, covering location-triggered campaigns, loyalty, rewards, campus recycling and operational analytics. Happy Hour is its consumer app.',
    contribution:
      'As sole engineer and platform lead, I built the consumer app, the web frontends and the Node/PostgreSQL API, then automated delivery to Cloud Run through Cloud Build. The platform launched with its first brand client after a live product demo won the deal.',
    highlights: [
      { value: '28', label: 'API domain modules' },
      { value: '100+', label: 'users with the first brand client' },
      { value: '39', label: 'unit, integration and contract test files' },
    ],
    media: {
      kind: 'phone',
      screenshots: [
        {
          image: '/projects/happy-hour/sign-in',
          alt: 'Happy Hour sign-in screen',
        },
        {
          image: '/projects/happy-hour/friends',
          alt: 'Happy Hour friends screen for planning a hangout at a venue',
        },
        {
          image: '/projects/happy-hour/rewards',
          alt: 'Happy Hour account screen with points, vouchers and referrals',
        },
      ],
    },
    stack: [
      'React Native',
      'React',
      'Node.js',
      'PostgreSQL',
      'Drizzle',
      'Cloud Run',
      'Radar',
    ],
    links: [
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
      'I integrated KinesteX, extended the app with workout plans, schedules, challenges, leaderboards and RevenueCat subscriptions, and owned store configuration, builds, submissions and OTA updates. I also built the Next.js marketing site and admin console.',
    highlights: [
      { value: '~300', label: 'downloads' },
      { value: '3', label: 'products: app, marketing site and admin' },
    ],
    media: {
      kind: 'phone',
      screenshots: [
        {
          image: '/projects/repmirror/rep-counting',
          alt: 'RepMirror counting repetitions through the phone camera',
        },
        {
          image: '/projects/repmirror/form-check',
          alt: 'RepMirror comparing wrong and corrected exercise form',
        },
        {
          image: '/projects/repmirror/progress',
          alt: 'RepMirror progress screen with workout history',
        },
      ],
    },
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
    context: 'Lottery platform · Mobile, web and Android POS',
    period: '2025 — 2026',
    summary:
      'A live lottery platform spanning customer mobile and web experiences, administration and agent portals, and a dedicated smart-terminal application for in-person ticket sales.',
    contribution:
      'I built it solo across three codebases. For the POS product, I wrote a Java-to-React Native bridge for the Nexgo printer SDK and an Expo config plugin that patches Gradle and registers the native package during builds.',
    highlights: [
      { value: '200+', label: 'screens and routes' },
      { value: '3', label: 'codebases built solo' },
    ],
    media: {
      kind: 'browser',
      url: 'santilotto.com',
      screenshot: {
        image: '/projects/santilotto/web-app',
        width: 1400,
        height: 875,
        alt: 'Santilotto web app home with games, results and live chat',
      },
    },
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
      'A marketplace where customers request moves, moving companies bid on quotations, and customers, companies, drivers and admins manage orders, disputes, payments and conversations.',
    contribution:
      'I built the Next.js frontend for all four roles, localised in English and Swedish. On the Express/MySQL backend I implemented Stripe checkout, partial-payment webhooks and PDF invoices, then deployed both on VPS with Nginx and PM2.',
    highlights: [
      { value: '114', label: 'pages in two languages' },
      { value: '99+', label: 'moving companies on the platform' },
    ],
    media: {
      kind: 'browser',
      url: 'flyttman.se',
      screenshot: {
        image: '/projects/flyttman/home',
        width: 1400,
        height: 875,
        alt: 'Flyttman homepage with a free-quote call to action',
      },
    },
    stack: ['Next.js', 'TypeScript', 'next-intl', 'Stripe', 'MySQL', 'Nginx'],
    links: [{ label: 'Website', href: 'https://flyttman.se' }],
  },
]

function ProjectMediaView({ media }: { media: ProjectMedia }) {
  if (media.kind === 'browser') {
    return (
      <m.figure
        className="project-media browser-frame"
        variants={reveal}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{media.url}</p>
        </div>
        <img
          {...webpSources(media.screenshot.image, browserWidths)}
          sizes="(max-width: 900px) calc(100vw - 32px), 860px"
          alt={media.screenshot.alt}
          width={media.screenshot.width}
          height={media.screenshot.height}
          loading="lazy"
          decoding="async"
        />
      </m.figure>
    )
  }

  return (
    <m.div
      className="project-media phone-strip"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      {media.screenshots.map((screenshot) => (
        <m.img
          variants={reveal}
          whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
          key={screenshot.image}
          {...webpSources(screenshot.image, phoneWidths)}
          sizes="(max-width: 720px) 40vw, 210px"
          alt={screenshot.alt}
          width={440}
          height={954}
          loading="lazy"
          decoding="async"
        />
      ))}
    </m.div>
  )
}

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
        <ProjectMediaView media={project.media} />
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">
          <strong>My part:</strong> {project.contribution}
        </p>
        <dl className="project-highlights">
          {project.highlights.map((highlight) => (
            <div key={highlight.label}>
              <dt>{highlight.label}</dt>
              <dd>{highlight.value}</dd>
            </div>
          ))}
        </dl>
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
