import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TracingBeam } from '../components/ui/tracing-beams'
import { motion } from 'motion/react'
import { HoverBorderGradient } from '../components/ui/hover-border-gradient'
import { IconExternalLink, IconBrandGithub, IconArrowLeft } from '@tabler/icons-react'

const projectsData = [
  {
    title: "BinaSehat Health App",
    description: "A mobile health application that helps users track body stats, manage nutrition, and exercise routines. Features include REST API integration, motion tracking for exercise, and a dark mode option.",
    technologies: ["Kotlin", "Jetpack Compose", "REST API", "SQLite", "Motion Tracking"],
    image: "/images/BinaSehat.png",
    githubLink: "https://github.com/yourusername/bina-sehat",
    liveLink: "https://play.google.com/store/apps/details?id=bina.sehat",
    category: "Mobile Development"
  },
  {
    title: "Nadamu Learning Mobile App",
    description: "A voice-controlled learning assistant app powered by PicoVoice wake-word detection. Allows users to interact hands-free and integrates backend services with PostgreSQL.",
    technologies: ["Flutter", "PicoVoice", "PostgreSQL"],
    image: "/images/nadamu.png",
    githubLink: "https://github.com/yourusername/nadamu",
    liveLink: "https://your-nadamu-demo.com",
    category: "Mobile Development"
  },
  {
    title: "NutriSight App",
    description: "A nutrition-focused mobile app providing food databases, detail screens, and user-friendly UI for tracking dietary intake.",
    technologies: ["Kotlin", "MVVM"],
    image: "/images/NutriSight.png",
    githubLink: "https://github.com/Nutrisight-capstone-nutrisight-app/Nutrisight-Android-App",
    liveLink: "https://play.google.com/store/apps/details?id=nutrisight.app",
    category: "Mobile Development"
  },
  {
    title: "Guest Management App",
    description: "An Android app for managing guest attendance with features like digital signatures, document selection, automatic PDF export, and Google Drive integration.",
    technologies: ["Kotlin", "Room Database", "MVVM", "PDF Export", "Google Drive API"],
    image: "/images/GuestApp.png",
    githubLink: "https://github.com/yourusername/guest-management-app",
    liveLink: "https://play.google.com/store/apps/details?id=guest.app",
    category: "Mobile Development"
  },
  {
    title: "Company Profile Website",
    description: "A modern, responsive company profile website built with React and Tailwind CSS. Supports internationalization with react-i18next and includes experience showcase pages.",
    technologies: ["React", "Tailwind CSS", "i18next", "Adobe PDF Embed"],
    image: "/images/compro.png",
    githubLink: "https://github.com/yourusername/company-profile",
    liveLink: "https://your-company.com",
    category: "Web Development"
  },
  {
    title: "Adaptive Traffic Signal Control using DQN",
    description: "Undergraduate thesis project evaluating Deep Q-Network (DQN) for adaptive traffic signal control at a major Jakarta intersection using SUMO simulation. Compared reinforcement learning performance against Webster fixed-time control, showing improvements in vehicle flow efficiency and fairness metrics.",
    technologies: ["Python", "PyTorch", "SUMO", "Reinforcement Learning"],
    image: "/images/TA.png",
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
        delay: index * 0.1, // Reduced delay for better flow
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-12 sm:mb-16 lg:mb-20" // Responsive spacing
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Project Image */}
        <motion.div
          className="order-1 lg:order-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="order-2 lg:order-2 space-y-4 sm:space-y-6">
          <div>
            <span className="text-xs sm:text-sm text-blue-400 font-medium">{project.category}</span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-2 mb-3 sm:mb-4">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4">
            <HoverBorderGradient
              as="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors text-sm sm:text-base lg:text-lg font-medium duration-300 rounded-full"
              duration={1}
            >
              <IconBrandGithub className="w-4 h-4" />
              Code
            </HoverBorderGradient>
            
            {project.liveLink && (
              <HoverBorderGradient
                as="a"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base lg:text-lg font-medium duration-300"
                duration={1}
              >
                <IconExternalLink className="w-4 h-4" />
                Live Demo
              </HoverBorderGradient>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Projects = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/contact')
  }

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
    <section className="relative flex flex-col min-h-screen w-screen pt-32 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Main content container */}
      <div className="flex-1">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-white">
            My Projects
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in mobile development, web applications, and emerging technologies
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <TracingBeam className="w-full">
            {/* Add padding-left to create space for the line */}
            <div className="pl-8 sm:pl-2 lg:pl-2 space-y-4">
              {projectsData.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </TracingBeam>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20 space-y-4 sm:space-y-6 px-4"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white">Interested in working together?</h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
          
          <div className="flex justify-center">
            <HoverBorderGradient
              as="button"
              onClick={handleClick}
              className="text-base sm:text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full"
              containerClassName=""
              duration={1}
              clockwise={false}
            >
              Get In Touch!
            </HoverBorderGradient>
          </div>
        </motion.div>
      </div>

      {/* Copyright at bottom of page content */}
      <div className="mt-12 pb-20 text-center">
        <span className="text-sm text-gray-500">© 2025 Taffan Muhammad Rizqi</span>
      </div>
    </section>
  )
}