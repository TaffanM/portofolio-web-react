import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconUser, IconMessageCircle, IconSend, IconCheck } from '@tabler/icons-react'

export const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    }, 2000)
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/taffan-muhammad-rizqi/',
      color: 'hover:bg-blue-500/20 hover:border-blue-400',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: <IconBrandGithub className="w-6 h-6" />,
      href: 'https://github.com/TaffanM',
      color: 'hover:bg-gray-500/20 hover:border-gray-400',
      description: 'Check my repositories'
    },
    {
      name: 'Email',
      icon: <IconMail className="w-6 h-6" />,
      href: 'mailto:taffanm@gmail.com',
      color: 'hover:bg-red-500/20 hover:border-red-400',
      description: 'taffanm@gmail.com'
    }
  ]

  return (
    <section className="relative flex flex-col min-h-screen w-screen pt-32 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Main content container */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 max-w-6xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting conversations.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Send a Message</h2>
                  
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Your Name
                          </label>
                          <div className="relative">
                            <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Your Email
                          </label>
                          <div className="relative">
                            <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        {/* Subject Field */}
                        <div className="space-y-2">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                            placeholder="What's this about?"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                            Message
                          </label>
                          <div className="relative">
                            <IconMessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                            <textarea
                              id="message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                              placeholder="Tell me about your project or just say hello..."
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-6 bg-gradient-to-r from-white-500 to-white-600 hover:from-grey-600 hover:to-grey-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <IconSend className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <IconCheck className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Contact Information & Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 ${social.color} group`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.1, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                          {social.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-white mb-1">{social.name}</h4>
                        <p className="text-sm text-gray-300">{social.description}</p>
                      </div>
                      <motion.div
                        className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
              >
                <h4 className="text-lg font-medium text-white mb-3">Quick Info</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>📍 Based in Indonesia</p>
                  <p>⚡ Usually responds within 24 hours</p>
                  <p>🌍 Available for remote opportunities</p>
                </div>
              </motion.div>
            </motion.div>
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