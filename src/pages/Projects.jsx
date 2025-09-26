import React from 'react'
import { TracingBeam } from '../components/ui/tracing-beams'
import { motion } from 'motion/react'
import { HoverBorderGradient } from '../components/ui/hover-border-gradient'
import { IconExternalLink, IconBrandGithub, IconArrowLeft } from '@tabler/icons-react'

const projectsData = [
  {
    title: "BinaSehat Health App",
    description: "A mobile health application that helps users track body stats, manage nutrition, and exercise routines. Features include REST API integration, motion tracking for exercise, and a dark mode option.",
    technologies: ["Kotlin", "Jetpack Compose", "REST API", "SQLite", "Motion Tracking"],
    image: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=BinaSehat+App",
    githubLink: "https://github.com/yourusername/bina-sehat",
    liveLink: "https://play.google.com/store/apps/details?id=bina.sehat",
    category: "Mobile Development"
  },
  {
    title: "Nadamu Learning Mobile App",
    description: "A voice-controlled learning assistant app powered by PicoVoice wake-word detection. Allows users to interact hands-free and integrates backend services with PostgreSQL.",
    technologies: ["Flutter", "PicoVoice", "PostgreSQL"],
    image: "https://via.placeholder.com/400x300/2D3748/FFFFFF?text=Nadamu+App",
    githubLink: "https://github.com/yourusername/nadamu",
    liveLink: "https://your-nadamu-demo.com",
    category: "Mobile Development"
  },
  {
    title: "Guest Management App",
    description: "An Android app for managing guest attendance with features like digital signatures, document selection, automatic PDF export, and Google Drive integration.",
    technologies: ["Kotlin", "Room Database", "MVVM", "PDF Export", "Google Drive API"],
    image: "https://via.placeholder.com/400x300/1A202C/FFFFFF?text=Guest+App",
    githubLink: "https://github.com/yourusername/guest-management-app",
    liveLink: "https://play.google.com/store/apps/details?id=guest.app",
    category: "Mobile Development"
  },
  {
    title: "Company Profile Website",
    description: "A modern, responsive company profile website built with React and Tailwind CSS. Supports internationalization with react-i18next and includes experience showcase pages.",
    technologies: ["React", "Tailwind CSS", "i18next", "Adobe PDF Embed"],
    image: "https://via.placeholder.com/400x300/2B6CB0/FFFFFF?text=Company+Profile",
    githubLink: "https://github.com/yourusername/company-profile",
    liveLink: "https://your-company.com",
    category: "Web Development"
  },
  {
    title: "NutriSight App",
    description: "A nutrition-focused mobile app providing food databases, detail screens, and user-friendly UI for tracking dietary intake.",
    technologies: ["Kotlin", "MVVM"],
    image: "https://via.placeholder.com/400x300/38A169/FFFFFF?text=NutriSight",
    githubLink: "https://github.com/Nutrisight-capstone-nutrisight-app/Nutrisight-Android-App",
    liveLink: "https://play.google.com/store/apps/details?id=nutrisight.app",
    category: "Mobile Development"
  },
  {
    title: "Adaptive Traffic Signal Control using DQN",
    description: "Undergraduate thesis project evaluating Deep Q-Network (DQN) for adaptive traffic signal control at a major Jakarta intersection using SUMO simulation. Compared reinforcement learning performance against Webster fixed-time control, showing improvements in vehicle flow efficiency and fairness metrics.",
    technologies: ["Python", "PyTorch", "SUMO", "Reinforcement Learning"],
    image: "https://via.placeholder.com/400x300/805AD5/FFFFFF?text=DQN+Traffic+Control",
    githubLink: "https://github.com/yourusername/traffic-dqn",
    liveLink: "",
    category: "Research & Simulation"
  }
]


const ProjectCard = ({ project, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-20"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Project Image */}
        <motion.div
          className="order-2 md:order-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="order-1 md:order-2 space-y-6">
          <div>
            <span className="text-sm text-blue-400 font-medium">{project.category}</span>
            <h3 className="text-3xl font-bold text-white mt-2 mb-4">{project.title}</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <HoverBorderGradient
              as="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors text-lg font-medium duration-300 rounded-full"
              duration={1}
            >
              <IconBrandGithub className="w-4 h-4" />
              Code
            </HoverBorderGradient>
            
            <HoverBorderGradient
              as="a"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              duration={1}
            >
              <IconExternalLink className="w-4 h-4" />
              Live Demo
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Projects = ({ onNavigate }) => {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen w-screen py-20 px-4 overflow-auto mb-30">
      {/* Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        <h1 className="text-5xl max-md:text-3xl font-bold mb-4  bg-clip-text text-white">
          My Projects
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A showcase of my work in mobile development, web applications, and emerging technologies
        </p>
      </motion.div>

      {/* TracingBeam with Projects */}
      <TracingBeam className="max-w-6xl">
        <div className="space-y-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        
      </TracingBeam>
      {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">Interested in working together?</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <HoverBorderGradient
              as="button"
              onClick={() => onNavigate('contact')}
              className="text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-8 py-3 rounded-full"
              containerClassName=""
              duration={1}
              clockwise={false}
            >
              Get In Touch!
            </HoverBorderGradient>
          </div>
        </motion.div>
    </section>
  )
}