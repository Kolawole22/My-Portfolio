export default function About() {
  return (
    <section id="about" className="section bg-bg-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Profile Image */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20">
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark to-primary-light opacity-80"></div> */}
                <img
                  src="/projects/pp.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
                  KI
                </div> */}
                {/* You can replace the gradient and initials with an actual image */}
                {/* <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg">
                I'm a software developer with a strong focus on{' '}
                <span className="text-primary font-medium">
                  frontend development
                </span>
                , complemented by practical experience in backend systems.
              </p>

              <p>
                My journey in software development began with a curiosity about
                how interactive websites work, which evolved into a passion for
                creating seamless user experiences. I specialize in building
                modern web applications using{' '}
                <span className="text-primary">React</span>, enhanced with tools
                like
                <span className="text-primary"> TanStack Router</span> and
                styled with
                <span className="text-primary"> Tailwind CSS</span>.
              </p>

              <p>
                While frontend is where my passion truly lies, I'm comfortable
                working with backend technologies to build robust full-stack
                applications when needed. This balanced skill set allows me to
                understand and contribute to the entire development process.
              </p>

              <p>
                Beyond technical skills, I value{' '}
                <span className="text-primary">problem-solving</span>,
                <span className="text-primary"> collaboration</span>, and
                <span className="text-primary"> continuous learning</span>. I'm
                constantly exploring new technologies and approaches to stay at
                the forefront of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
