import { motion } from 'framer-motion'

interface ExperienceProps {
  company: string
  position: string
  period: string
  description: string
  achievements: Array<string>
  key?: number // Add key prop for mapping
}

// Experience Item component for displaying individual work experiences with animations
function ExperienceItem({
  company,
  position,
  period,
  description,
  achievements,
}: ExperienceProps) {
  return (
    <motion.div
      className="card mb-6 border-l-4 border-primary hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: Math.random() * 0.2 }}
      whileHover={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)', y: -5 }}
    >
      <div className="mb-2">
        <motion.h3
          className="text-xl font-bold text-primary"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
        >
          {position}
        </motion.h3>
        <div className="flex justify-between items-center flex-wrap">
          <p className="text-lg font-medium">{company}</p>
          <span className="text-sm text-gray-400">{period}</span>
        </div>
      </div>

      <p className="mb-4 text-gray-300">{description}</p>

      {achievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h4 className="text-base font-medium mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function Experience() {
  // Experience data from the user's resume
  const experiences: Array<ExperienceProps> = [
    {
      company: 'FLYTTMAN',
      position: 'WEB DEVELOPER',
      period: 'NOVEMBER 2024 – FEBRUARY 2025',
      description:
        'Developed a comprehensive moving service platform connecting customers with logistics partners across Sweden.',
      achievements: [
        'Developed a comprehensive moving service platform connecting customers with logistics partners across Sweden.',
        'Built a multi-user chat system enabling communication between customers, movers, and admin.',
        'Created an escrow payment system for secure transactions between customers and service providers.',
      ],
    },
    {
      company: 'OSUN STATE GOVERNMENT',
      position: 'MOBILE AND WEB DEVELOPER',
      period: 'MAY 2024 – AUGUST 2024',
      description:
        'Built a state government tax payment and compliance mobile app using React Native improving taxpayer accessibility and transparency.',
      achievements: [
        'Built a state government tax payment and compliance mobile app using React Native improving taxpayer accessibility and transparency.',
        'Built the Agent dashboard website with React.',
        'Collaborated with cross functional teams to implement data security measures for user sensitive data.',
      ],
    },
    {
      company: 'BUA GROUP',
      position: 'IT / SOFTWARE DEVELOPER',
      period: 'JULY 2023 – JULY 2024',
      description:
        'Developed and deployed internal web applications for asset management across multiple subsidiaries.',
      achievements: [
        'Developed and deployed an asset inventory internal web application using React and Django, simplifying the process of managing inventory assets across multiple subsidiaries spanning different locations.',
        'Implemented stakeholder access controls within the web application, ensuring secure and role-based access to sensitive inventory information.',
      ],
    },
    {
      company: 'KING DAVID ELITES',
      position: 'FRONTEND DEVELOPER',
      period: 'JANUARY 2023 – MAY 2024',
      description:
        'Led development of customer-focused platforms that enhanced business accessibility and growth.',
      achievements: [
        'Led the creation of Safelink, a platform that simplifies sharing business details, photos and prices through a single link that enhances customer accessibility and driving business growth.',
        'Migrated the Cream website from React to Next.js, resulting in a significant performance improvements and the seamless integration of advanced features.',
      ],
    },
    {
      company: 'IFAD',
      position: 'MOBILE APP DEVELOPER',
      period: 'DECEMBER 2023 – APRIL 2024',
      description:
        'Built mobile applications connecting agricultural stakeholders.',
      achievements: [
        'Built and deployed a mobile app connecting rural farmers with buyers and input dealers, enabling product listings, and engagement.',
        'Successfully deployed the app to the Google Play Store, ensuring compliance with all guidelines.',
      ],
    },
  ]

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

  return (
    <motion.section
      id="experience"
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
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
