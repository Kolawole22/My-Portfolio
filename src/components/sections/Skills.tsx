import { motion } from 'framer-motion'

interface SkillProps {
  name: string
  icon?: string
  category: string
  key?: number // Add key prop for mapping
}

// Skill component that displays individual skills with Framer Motion animations
function Skill({ name, icon, category }: SkillProps) {
  return (
    <motion.div
      className="card p-4 hover:shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        {icon && (
          <motion.span
            className="text-primary text-xl"
            aria-hidden="true"
            whileHover={{ rotate: 20 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {icon}
          </motion.span>
        )}
        <h3 className="font-medium">{name}</h3>
      </div>

      <p className="text-sm text-gray-400 mt-2">{category}</p>
    </motion.div>
  )
}

export default function Skills() {
  // Updated skill list based on resume content
  const frontendSkills: Array<SkillProps> = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'React Native', icon: '📱', category: 'Frontend' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'JavaScript', icon: '📜', category: 'Frontend' },
    { name: 'HTML & CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
    { name: 'Responsive Design', icon: '📱', category: 'Frontend' },
  ]

  const backendSkills: Array<SkillProps> = [
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'RESTful APIs', icon: '🔌', category: 'Backend' },
    { name: 'SQL', icon: '🗃️', category: 'Backend' },
  ]

  const toolsSkills: Array<SkillProps> = [
    { name: 'Git', icon: '📊', category: 'Tools' },
    { name: 'Docker', icon: '🐳', category: 'Tools' },
    { name: 'Vercel', icon: '🚀', category: 'Tools' },
    { name: 'Digital Ocean', icon: '🌐', category: 'Tools' },
    { name: 'VPS', icon: '💻', category: 'Tools' },
    { name: 'Linux', icon: '🐧', category: 'Tools' },
  ]

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
      },
    },
  }

  return (
    <motion.section
      id="skills"
      className="section bg-bg-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={itemVariants}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <motion.div className="mb-12" variants={sectionVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Frontend Development
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {frontendSkills.map((skill, index) => (
                <Skill key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div className="mb-12" variants={sectionVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Backend Development
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {backendSkills.map((skill, index) => (
                <Skill key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div className="mb-12" variants={sectionVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Tools & Environments
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {toolsSkills.map((skill, index) => (
                <Skill key={index} {...skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
