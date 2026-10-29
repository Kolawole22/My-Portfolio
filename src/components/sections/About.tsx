export default function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="site-shell about-grid">
        <figure className="portrait-wrap">
          <img
            src="/projects/portrait.jpg"
            alt="Iwalewa Kolawole"
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Software developer based in Nigeria, working remotely.
          </figcaption>
        </figure>

        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>
            I’m most useful when a product needs more than a screen builder.
          </h2>
          <p className="large-copy">
            Mobile development is my strongest lane, but the work rarely stops
            at React Native. I’m comfortable tracing an API contract, fixing a
            backend issue, setting up a deployment or working through a native
            Android integration when that is what gets the product shipped.
          </p>
          <p>
            I started with web frontend work, built an internal inventory system
            during my NYSC year at BUA, and gradually moved into production
            mobile products. Since then I’ve worked on fitness, travel, lottery,
            logistics, loyalty, group-savings and government-service products.
          </p>
          <p>
            I care about clear interfaces, accurate product behaviour and code
            that another developer can understand after the deadline has passed.
          </p>

          <dl className="working-notes">
            <div>
              <dt>Strongest in</dt>
              <dd>React Native, Expo, TypeScript and frontend product work</dd>
            </div>
            <div>
              <dt>Comfortable across</dt>
              <dd>
                REST APIs, Node.js, PostgreSQL, payments, CI/CD, Docker and
                Cloud Run
              </dd>
            </div>
            <div>
              <dt>Looking for</dt>
              <dd>
                Mobile and frontend teams that value ownership and careful
                execution
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
