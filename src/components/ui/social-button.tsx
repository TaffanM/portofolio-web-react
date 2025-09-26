import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconMail } from '@tabler/icons-react'

interface SocialLink {
  name: string
  icon: React.ReactNode
  href: string
  color: string
}

interface SocialDockProps {
  className?: string
}

export const SocialDock = ({ className }: SocialDockProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      icon: <IconMail className='w-5 h-5' />,
      href: 'mailto:taffanm@gmail.com',
      color: 'hover:bg-red-600'
    },
    {
      name: 'LinkedIn',
      icon: <IconBrandLinkedin className='w-5 h-5' />,
      href: 'https://www.linkedin.com/in/taffan-muhammad-rizqi/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <IconBrandGithub className='w-5 h-5' />,
      href: 'https://github.com/TaffanM',
      color: 'hover:bg-gray-700'
    }
  ]

  const handleSocialClick = () => {
    // Close the menu when a social link is clicked (mobile)
    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
  }

  return (
    <div className={`fixed bottom-12 left-4 z-50 ${className}`}>
      <motion.div
        className="relative"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Desktop Version */}
        <motion.div
          className="group relative hidden md:block"
          whileHover="hover"
          initial="initial"
        >
          {/* Primary button - Desktop */}
          <motion.div
            className="flex items-center justify-center w-16 h-14 dark:bg-neutral-900 backdrop-blur-sm rounded-full border border-gray-700 cursor-pointer hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full ml-1"></div>
            </div>
          </motion.div>

          {/* Expanded social buttons - Desktop */}
          <motion.div
            className="absolute bottom-4 left-0 flex flex-col gap-2 pb-14"
            variants={{
              initial: { opacity: 0, y: 20 },
              hover: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.3,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                variants={{
                  initial: { opacity: 0, x: -20, scale: 0.8 },
                  hover: { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    transition: { duration: 0.3, delay: index * 0.1 }
                  }
                }}
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-3 dark:bg-neutral-900 backdrop-blur-sm rounded-full transition-all duration-300 ${social.color} hover:shadow-lg border border-gray-700 hover:border-gray-500`}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex-shrink-0">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Version */}
        <div className="block md:hidden">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-4 left-0 flex flex-col gap-2 pb-14"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      transition: {
                        delay: (socialLinks.length - 1 - index) * 0.05,
                      },
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleSocialClick}
                      className={`flex items-center gap-3 px-4 py-3 dark:bg-neutral-900 backdrop-blur-sm rounded-full transition-all duration-300 ${social.color} hover:shadow-lg border border-gray-700 hover:border-gray-500`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex-shrink-0">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-white whitespace-nowrap">
                        {social.name}
                      </span>
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile trigger button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 dark:bg-neutral-900 backdrop-blur-sm rounded-full border border-gray-700 cursor-pointer hover:border-gray-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isOpen ? 45 : 0 }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full ml-1"></div>
            </div>
          </motion.button>

          {/* Background overlay when menu is open - Mobile */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}