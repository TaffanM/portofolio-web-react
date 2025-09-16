import React, { useState } from 'react'
import { HoverBorderGradient } from 'components/ui/hover-border-gradient'
import { motion, AnimatePresence } from 'motion/react'
import { IconBrandLinkedin, IconBrandGithub, IconDownload, IconEye, IconX } from '@tabler/icons-react'
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
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/taffan-muhammad-rizqi/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <IconBrandGithub className="w-6 h-6" />,
      url: 'https://github.com/TaffanM',
      color: 'hover:bg-gray-700'
    }
  ]

  return (
    <section className="relative flex items-center justify-center min-h-screen w-screen py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-7xl mx-auto flex"
      >
        {/* Profile Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-0 md:mr-16 flex flex-col items-center"
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
            className="text-5xl max-md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Taffan Muhammad Rizqi
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl max-md:text-lg text-gray-300 mb-4"
          >
            Software Engineer
          </motion.p>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
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
          
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-4"
          >
            
          </motion.p>

        {/* Projects Button */}
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

        <motion.div className="w-full ">
          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 mb-12"
          >
            {/* Bio Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a passionate Informatics graduate from Institut Teknologi Nasional Bandung (ITENAS), Taffan has developed a strong interest in mobile development and emerging technologies.  Taffan is eager to collaborate on innovative projects and contribute meaningful solutions to the tech industry. 
                </p>
                <p>
                  With a solid foundation in Kotlin, Java, Object-Oriented Programming (OOP), Python, React, Tailwind, and UI/UX design, Taffan is committed to continuously enhancing his skills and staying current with the latest advancements in the field.
                </p>
                <p>
                  While Taffan has limited working proficiency in English, Taffan is dedicated to improving his language skills to facilitate broader communication and collaboration
                </p>
              </div>
              
              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <HoverBorderGradient
                  as="button"
                  onClick={() => setShowCV(true)}
                  className="text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-6 py-3 rounded-full flex items-center gap-2"
                  containerClassName=""
                  duration={1}
                  clockwise={true}
                >
                  <IconEye className="w-5 h-5" />
                  View CV
                </HoverBorderGradient>

                <HoverBorderGradient
                  as="a"
                  href="/path-to-your-cv.pdf"
                  download="Taffan_Muhammad_Rizqi_CV.pdf"
                  className="text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-6 py-3 rounded-full flex items-center gap-2"
                  containerClassName=""
                  duration={1}
                  clockwise={false}
                >
                  <IconDownload className="w-5 h-5" />
                  Download CV
                </HoverBorderGradient>
              </motion.div>
            </div>

            {/* Skills Section */}
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
      </motion.div>

      
        

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Curriculum Vitae</h3>
                <button
                  onClick={() => setShowCV(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <IconX className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="h-[calc(100%-4rem)]">
                <iframe
                  src={cv}
                  className="w-full h-full"
                  title="CV Viewer"
                />
                {/* Fallback if PDF doesn't load */}
                <div className="hidden items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <p className="mb-4">PDF viewer not available</p>
                    <a
                      href={cv}
                      download
                      className="text-blue-600 hover:underline"
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