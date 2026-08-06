const capabilities = [
  {
    title: 'Mobile product',
    description:
      'Cross-platform application architecture, navigation, offline-aware state, native capabilities and store delivery.',
    tools: 'React Native, Expo, Expo Router, Reanimated, EAS',
  },
  {
    title: 'Frontend systems',
    description:
      'Responsive product interfaces, typed data flows, forms, dashboards and role-based application shells.',
    tools: 'React, Next.js, TypeScript, TanStack, Tailwind CSS',
  },
  {
    title: 'Backend & data',
    description:
      'API features, authentication, integrations, data validation and the database work needed to unblock a product.',
    tools: 'Node.js, Express, Python, Django, PostgreSQL, MySQL',
  },
  {
    title: 'Release & integration',
    description:
      'Payments, subscriptions, native SDKs, mobile release pipelines and production server deployment.',
    tools: 'Stripe, Paystack, RevenueCat, Java, Nginx, PM2',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="content-section capabilities-section">
      <div className="site-shell">
        <div className="section-intro compact-intro">
          <p className="eyebrow">Capabilities</p>
          <h2>The parts of product delivery I work in.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article key={capability.title}>
              <span className="capability-number">0{index + 1}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <small>{capability.tools}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
