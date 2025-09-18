import React from 'react'
import { TracingBeam } from '../components/ui/tracing-beams'
import { motion } from 'motion/react'
import { HoverBorderGradient } from '../components/ui/hover-border-gradient'
import { IconExternalLink, IconBrandGithub, IconArrowLeft } from '@tabler/icons-react'

const projectsData = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce mobile application built with React Native and Kotlin. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React Native", "Kotlin", "Firebase", "Stripe API"],
    image: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=E-Commerce+App",
    githubLink: "https://github.com/yourusername/ecommerce-app",
    liveLink: "https://your-app-store-link.com",
    category: "Mobile Development"
  },
  {
    title: "AI Task Manager",
    description: "An intelligent task management system powered by machine learning that predicts task priorities and suggests optimal scheduling based on user behavior patterns.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
    image: "https://via.placeholder.com/400x300/2D3748/FFFFFF?text=AI+Task+Manager",
    githubLink: "https://github.com/yourusername/ai-task-manager",
    liveLink: "https://ai-task-manager-demo.com",
    category: "AI/ML & Web"
  },
  {
    title: "Real-time Chat Platform",
    description: "A modern real-time messaging platform with end-to-end encryption, file sharing, and video calling capabilities. Built with scalability in mind.",
    technologies: ["Next.js", "Socket.io", "WebRTC", "MongoDB", "AWS"],
    image: "https://via.placeholder.com/400x300/1A202C/FFFFFF?text=Chat+Platform",
    githubLink: "https://github.com/yourusername/chat-platform",
    liveLink: "https://chat-platform-demo.com",
    category: "Full Stack Web"
  },
  {
    title: "IoT Weather Station",
    description: "An IoT-based weather monitoring system with mobile app integration. Collects environmental data and provides real-time weather insights with predictive analytics.",
    technologies: ["Arduino", "Flutter", "Firebase", "Python", "TensorFlow"],
    image: "https://via.placeholder.com/400x300/2B6CB0/FFFFFF?text=Weather+Station",
    githubLink: "https://github.com/yourusername/iot-weather",
    liveLink: "https://weather-dashboard-demo.com",
    category: "IoT & Mobile"
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