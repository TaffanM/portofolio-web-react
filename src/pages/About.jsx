import React, { useState } from 'react'
import { HoverBorderGradient } from 'components/ui/hover-border-gradient'
import { motion, AnimatePresence } from 'motion/react'
import { IconBrandLinkedin, IconBrandGithub, IconDownload, IconEye, IconX, IconBrandGmail, IconMail } from '@tabler/icons-react'
import { PixelatedCanvas } from 'components/ui/pixelated-canvas'
import profilePhoto from 'assets/photo.jpeg'
import cv from 'assets/cv.pdf'

export const About = ({ onNavigate }) => {
  const [showCV, setShowCV] = useState(false)

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

  return (
    <section className="relative flex items-center justify-center min-h-screen w-screen py-32 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-7xl mx-auto w-full"
      >
        {/* Mobile Layout (stacked) - md:hidden */}
        <div className="block lg:hidden">
          {/* Profile Section - Mobile */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              variants={profileVariants}
              className="relative inline-block mb-6 sm:mb-8"
            >
              <PixelatedCanvas
                src={profilePhoto}
                width={240}
                height={240}
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
                className="w-full h-full object-cover rounded-lg max-w-[240px] sm:max-w-[280px]"
              />
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-2"
            >
              Taffan Muhammad Rizqi
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6"
            >
              Software Developer
            </motion.p>

            {/* Social Media - Mobile */}
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

            {/* Projects Button - Mobile */}
            <motion.div
              variants={itemVariants}
              className="mb-8 sm:mb-12 justify-center flex"
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

          {/* Content Section - Mobile */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 sm:space-y-12"
          >
            {/* About Me - Mobile */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">About Me</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  As a passionate Informatics graduate from Institut Teknologi Nasional Bandung (ITENAS), Taffan has developed a strong interest in mobile development and emerging technologies. Taffan is eager to collaborate on innovative projects and contribute meaningful solutions to the tech industry.
                </p>
                <p>
                  With a solid foundation in Kotlin, Java, Object-Oriented Programming (OOP), Python, React, Tailwind, and UI/UX design, Taffan is committed to continuously enhancing his skills and staying current with the latest advancements in the field.
                </p>
                <p>
                  While Taffan has limited working proficiency in English, Taffan is dedicated to improving his language skills to facilitate broader communication and collaboration
                </p>
              </div>
              
              {/* Action Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
              >
                <HoverBorderGradient
                  as="button"
                  onClick={() => setShowCV(true)}
                  className="text-base sm:text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
                  containerClassName=""
                  duration={1}
                  clockwise={true}
                >
                  <IconEye className="w-4 h-4 sm:w-5 sm:h-5" />
                  View CV
                </HoverBorderGradient>

                <HoverBorderGradient
                  as="a"
                  href="/path-to-your-cv.pdf"
                  download="Taffan_Muhammad_Rizqi_CV.pdf"
                  className="text-base sm:text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
                  containerClassName=""
                  duration={1}
                  clockwise={false}
                >
                  <IconDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV
                </HoverBorderGradient>
              </motion.div>
            </div>

            {/* Skills Section - Mobile */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">Skills & Technologies</h2>
              <div className="space-y-3 sm:space-y-4 select-none">
                {[
                  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
                  { category: 'Mobile', skills: ['Kotlin', 'Flutter', 'Swift', 'Jetpack Compose'] },
                  { category: 'Backend', skills: ['Node.js', 'MySQL', 'SQLite'] },
                  { category: 'AI/ML', skills: ['Python', 'TensorFlow', 'Keras'] },
                  { category: 'Tools', skills: ['Git', 'AWS', 'Figma'] }
                ].map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-gray-800/50 p-3 sm:p-4 rounded-lg border border-gray-700"
                  >
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">{item.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout (side by side) - hidden lg:flex */}
        <div className="hidden lg:flex items-start gap-16">
          {/* Profile Section - Desktop */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 text-center flex flex-col items-center"
          >
            <motion.div
              variants={profileVariants}
              className="relative inline-block mb-8"
            >
              <PixelatedCanvas
                src={profilePhoto}
                width={320}
                height={320}
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
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Taffan Muhammad Rizqi
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-6"
            >
              Software Developer
            </motion.p>

            {/* Social Media - Desktop */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
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

            {/* Projects Button - Desktop */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <HoverBorderGradient
                as="button"
                onClick={() => onNavigate('projects')}
                className="text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-8 py-3 rounded-full"
                containerClassName=""
                duration={1}
                clockwise={false}
              >
                See My Work!
              </HoverBorderGradient>
            </motion.div>
          </motion.div>

          {/* Content Section - Desktop */}
          <motion.div className="flex-1">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 xl:grid-cols-2 gap-12"
            >
              {/* Bio Section - Desktop */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As a passionate Informatics graduate from Institut Teknologi Nasional Bandung (ITENAS), Taffan has developed a strong interest in mobile development and emerging technologies. Taffan is eager to collaborate on innovative projects and contribute meaningful solutions to the tech industry.
                  </p>
                  <p>
                    With a solid foundation in Kotlin, Java, Object-Oriented Programming (OOP), Python, React, Tailwind, and UI/UX design, Taffan is committed to continuously enhancing his skills and staying current with the latest advancements in the field.
                  </p>
                  <p>
                    While Taffan has limited working proficiency in English, Taffan is dedicated to improving his language skills to facilitate broader communication and collaboration
                  </p>
                </div>
                
                {/* Action Buttons - Desktop */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-row gap-4"
                >
                  <HoverBorderGradient
                    as="button"
                    onClick={() => setShowCV(true)}
                    className="text-m font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-4 py-2 rounded-full flex items-center gap-2"
                    containerClassName=""
                    duration={1}
                    clockwise={true}
                  >
                    <IconEye className="w-5 h-5" />
                    View my CV
                  </HoverBorderGradient>

                  <HoverBorderGradient
                    as="a"
                    href="/assets/cv.pdf"
                    download="Taffan_Muhammad_Rizqi_CV.pdf"
                    className="text-m font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-4 py-2 rounded-full flex items-center gap-2"
                    containerClassName=""
                    duration={1}
                    clockwise={false}
                  >
                    <IconDownload className="w-5 h-5" />
                    Download
                  </HoverBorderGradient>
                </motion.div>
              </div>

              {/* Skills Section - Desktop */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">Skills & Technologies</h2>
                <div className="space-y-4 select-none">
                  {[
                    { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
                    { category: 'Mobile', skills: ['Kotlin', 'Flutter', 'Swift', 'Jetpack Compose'] },
                    { category: 'Backend', skills: ['Node.js', 'MySQL', 'SQLite'] },
                    { category: 'AI/ML', skills: ['Python', 'TensorFlow', 'Keras'] },
                    { category: 'Tools', skills: ['Git', 'AWS', 'Figma'] }
                  ].map((item, index) => (
                    <motion.div
                      key={item.category}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                    >
                      <h3 className="text-white font-medium mb-2">{item.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="absolute bottom-0 right-0 z-50 p-4 select-none">
        <span className="text-sm text-gray-400 max-md:text-xs">© 2025 Taffan Muhammad Rizqi</span>
      </div>

      
      {/* CV Modal - Updated for mobile */}
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
                {/* Fallback if PDF doesn't load */}
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