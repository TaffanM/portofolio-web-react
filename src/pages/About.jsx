import React, { useState } from 'react'
import { HoverBorderGradient } from 'components/ui/hover-border-gradient'
import { motion, AnimatePresence } from 'motion/react'
import { IconBrandLinkedin, IconBrandGithub, IconDownload, IconEye, IconX, IconMail } from '@tabler/icons-react'
import { PixelatedCanvas } from 'components/ui/pixelated-canvas'
import MagicBento from 'components/ui/MagicBento'
import profilePhoto from 'assets/photo.jpeg'
import cv from 'assets/cv.pdf'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const [showCV, setShowCV] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/projects')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <IconBrandLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://www.linkedin.com/in/taffan-muhammad-rizqi/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <IconBrandGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'https://github.com/TaffanM',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'Email',
      icon: <IconMail className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: 'mailto:taffanm@gmail.com',
      color: 'hover:bg-red-600'
    }
  ]

  const skillsData = [
    {
      color: '#1a1a1a',
      title: 'React & Next.js',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      label: 'Frontend'
    },
    {
      color: '#1a1a1a',
      title: 'Kotlin & Flutter',
      skills: ['Kotlin', 'Flutter', 'Dart', 'Android Studio', 'Firebase'],
      label: 'Mobile'
    },
    {
      color: '#1a1a1a',
      title: 'Node.js & MySQL',
      skills: ['Node.js', 'MySQL', 'REST API'],
      label: 'Backend'
    },
    {
      color: '#1a1a1a',
      title: 'Python & TensorFlow',
      skills: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
      label: 'AI/ML'
    },
    {
      color: '#1a1a1a',
      title: 'Git & AWS',
      skills: ['Git', 'GitHub', 'AWS', 'Docker', 'CI/CD'],
      label: 'Tools'
    }
  ]

  return (
    <section className="relative min-h-screen w-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-4xl mx-auto w-full space-y-12 sm:space-y-16 lg:space-y-20"
      >
        {/* Profile Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            variants={profileVariants}
            className="relative inline-block mb-6 sm:mb-8"
          >
            <PixelatedCanvas
              src={profilePhoto}
              width={280}
              height={280}
              cellSize={4}
              dotScale={0.9}
              shape="square"
              responsive={true}
              backgroundColor="#1E201E"
              dropoutStrength={0.1}
              interactive
              distortionStrength={0.9}
              distortionMode="attract"
              distortionRadius={200}
              followSpeed={0.2}
              jitterStrength={4}
              jitterSpeed={1}
              sampleAverage
              maxFps={30}
              fadeOnLeave={true}
              className="w-full h-full object-cover rounded-lg max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] mx-auto"
            />
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-2"
          >
            Taffan Muhammad Rizqi
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8"
          >
            Software Developer
          </motion.p>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 sm:p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 10, opacity: 0.9 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Projects Button */}
          <motion.div
            variants={itemVariants}
            className="justify-center flex"
          >
            <HoverBorderGradient
              as="button"
              onClick={() => onNavigate('projects')}
              className="text-base sm:text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full"
              containerClassName=""
              duration={1}
              clockwise={false}
            >
              See My Work!
            </HoverBorderGradient>
          </motion.div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-6 sm:mb-8">
            About Me
          </h2>
          <div className="space-y-4 sm:space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            <p>
              As a passionate Informatics graduate from Institut Teknologi Nasional Bandung (ITENAS), Taffan has developed a strong interest in mobile development and emerging technologies. Taffan is eager to collaborate on innovative projects and contribute meaningful solutions to the tech industry.
            </p>
            <p>
              With a solid foundation in Kotlin, Java, Object-Oriented Programming (OOP), Python, React, Tailwind, and UI/UX design, Taffan is committed to continuously enhancing his skills and staying current with the latest advancements in the field.
            </p>
            <p>
              While Taffan has limited working proficiency in English, Taffan is dedicated to improving his language skills to facilitate broader communication and collaboration.
            </p>
          </div>
          
          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center pt-4 sm:pt-6"
          >
            <HoverBorderGradient
              as="button"
              onClick={() => setShowCV(true)}
              className="text-base sm:text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
              containerClassName=""
              duration={1}
              clockwise={true}
            >
              <IconEye className="w-4 h-4 sm:w-5 sm:h-5" />
              View CV
            </HoverBorderGradient>

            <HoverBorderGradient
              as="a"
              href={cv}
              download="Taffan_Muhammad_Rizqi_CV.pdf"
              className="text-base sm:text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
              containerClassName=""
              duration={1}
              clockwise={false}
            >
              <IconDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </HoverBorderGradient>
          </motion.div>
        </motion.div>

        {/* Skills Section with MagicBento */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 sm:space-y-8 pb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-6 sm:mb-8">
            Skills & Technologies
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <MagicBento
              textAutoHide={false}
              enableStars={false}
              enableSpotlight={false}
              enableBorderGlow={true}
              spotlightRadius={300}
              particleCount={10}
              enableTilt={true}
              glowColor="200, 200, 200"
              clickEffect={true}
              enableMagnetism={true}
              cardData={skillsData}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <div className="absolute bottom-0 right-0 z-50 p-4 select-none">
        <span className="text-sm text-gray-400 max-md:text-xs">© 2025 Taffan Muhammad Rizqi</span>
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg w-full max-w-4xl h-[90vh] sm:h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 sm:p-4 border-b">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Curriculum Vitae</h3>
                <button
                  onClick={() => setShowCV(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <IconX className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)]">
                <iframe
                  src={cv}
                  className="w-full h-full"
                  title="CV Viewer"
                />
                <div className="hidden items-center justify-center h-full text-gray-500">
                  <div className="text-center p-4">
                    <p className="mb-4 text-sm sm:text-base">PDF viewer not available</p>
                    <a
                      href={cv}
                      download
                      className="text-blue-600 hover:underline text-sm sm:text-base"
                    >
                      Download CV instead
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}