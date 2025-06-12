import { motion } from 'framer-motion'

interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: Array<string>
  liveLink?: string
  githubLink?: string
  key?: number // Add key prop for mapping
}

// Props for the ProjectCard component - separate from the data model
type ProjectCardProps = ProjectProps

// Project card component for displaying individual projects with animations
function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className="card group overflow-hidden transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)' }}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-4">
            {liveLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm px-4 py-2"
                >
                  View Live
                </a>
              </motion.div>
            )}
            {githubLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-sm px-4 py-2"
                >
                  View Code
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <motion.h3
        className="text-xl font-bold mb-2 text-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>

      {/* Technologies Used */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ backgroundColor: '#374151', y: -2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  // Function to generate a placeholder image with project title as text
  const generatePlaceholderImage = (title: string, color: string) => {
    // Generate a placeholder gradient background with text
    // This is a fallback for when actual project images aren't available
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='36' font-weight='bold' fill='white'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Projects data from resume
  const projects: Array<ProjectProps> = [
    {
      title: 'Flyttman',
      description:
        'A comprehensive platform connecting customers with logistics partners across Sweden, featuring multi-user chat and secure payment systems.',
      image: '/projects/flyttman-preview.png',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Socket.io',
        'Stripe',
      ],
      liveLink: 'https://flyttman.se',
      // githubLink: 'https://github.com/yourusername/flyttman',
    },
    {
      title: 'Farmers Marketplace App',
      description:
        'Mobile app connecting rural farmers with buyers and input dealers, enabling product listings and stakeholder engagement.',
      image: '/projects/farmers-marketplace-preview.png',
      technologies: ['React Native', 'Firebase', 'Redux', 'Google Maps API'],
      liveLink:
        'https://play.google.com/store/apps/details?id=com.farmersmarketplace.app&pli=1',
    },
    {
      title: 'Trex-Food',
      description:
        'Decentralized • AI-powered • eco-friendly food delivery at your fingertips.',
      image: '/projects/trex-food-preview.png',
      technologies: ['React Native', 'Firebase', 'Redux', 'Google Maps API'],
      liveLink: 'https://chowdegen.web.app/',
    },
    {
      title: 'Tax Payment Mobile App',
      description:
        'State government tax payment and compliance mobile app improving taxpayer accessibility and transparency with secure payment integration.',
      image: generatePlaceholderImage('Tax Payment App', '0f766e'),
      technologies: ['React Native', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      // liveLink: 'https://play.google.com/store',
    },
    {
      title: 'Ape Safe',
      description:
        'Multi-signature wallet application with enhanced security features and intuitive interface for Ethereum-based assets.',
      image: '/projects/ape-safe-preview.png',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redux', 'Material UI'],
      liveLink: 'https://ape-safe-monorepo-frontend.vercel.app/',
    },
    {
      title: 'Safelink Platform',
      description:
        'Platform that simplifies sharing business details, photos and prices through a single link, enhancing customer accessibility and driving business growth.',
      image: '/projects/safelink-preview.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node js', 'Vercel'],
      liveLink: 'https://joinsafelink.com',
    },
  ]

  return (
    <motion.section
      id="projects"
      className="section bg-bg-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={itemVariants}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
