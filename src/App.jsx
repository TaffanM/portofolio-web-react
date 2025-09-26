import { useEffect, useState } from 'react'
import './App.css'
import { FloatingDock } from 'components/ui/floating-dock'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Projects } from 'pages/Projects'
import { Contact } from 'pages/Contact'
import HomeIcon from 'assets/icons/home.svg?react';
import InfoIcon from 'assets/icons/info.svg?react';
import ProjectsIcon from 'assets/icons/projects.svg?react';
import ContactIcon from 'assets/icons/contact.svg?react';
import { SparklesCore } from 'components/ui/sparkles';  
import { SocialDock } from 'components/ui/social-button'
import Logo from 'assets/taffan.svg?react';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo } from 'react';
import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin } from '@tabler/icons-react'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  // Memoize the SparklesCore to prevent re-rendering
  const sparklesComponent = useMemo(() => (
    <div className="pointer-events-none w-full h-full fixed inset-0 z-0">
      <SparklesCore 
        id="sparkles"
        className="w-full h-full"
        background="transparent"
        minSize={1}
        maxSize={1}
        speed={4}
        particleColor="#ffffff"
        particleDensity={10}
      />
    </div>
  ), []); // Empty dependency array means it only renders once

  const pages = {
    home: <Home onNavigate={handleNavigation} />,
    about: <About onNavigate={handleNavigation} />,
    projects: <Projects onNavigate={handleNavigation} />,
    contact: <Contact onNavigate={handleNavigation} />,
  }
  
  const items = [
    { title: 'Home', icon: <HomeIcon />, href: '#home', onClick: () => handleNavigation('home') },
    { title: 'About', icon: <InfoIcon />, href: '#about', onClick: () => handleNavigation('about') },
    { title: 'Projects', icon: <ProjectsIcon />, href: '#projects', onClick: () => handleNavigation('projects') },
    { title: 'Contact', icon: <ContactIcon />, href: '#contact', onClick: () => handleNavigation('contact') },
  ]

  const socialLinks = [
    {
      name: 'Email',
      icon: <IconBrandGmail className='w-5 h-5' />,
      href: 'mailto:taffanm@gmail.com',
      color: 'dark:bg-neutral-900 hover:bg-red-600'
    },
    {
      name: 'LinkedIn',
      icon: <IconBrandLinkedin className='w-5 h-5' />,
      href: 'https://www.linkedin.com/in/taffan-muhammad-rizqi/',
      color: 'dark:bg-neutral-900 hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <IconBrandGithub className='w-5 h-5' />,
      href: 'https://github.com/TaffanM',
      color: 'dark:bg-neutral-900 hover:bg-gray-700'
    }
  ]

  return (
    <>
      <div className="w-full h-full bg-[#1E201E] text-white overflow-hidden">
        {/* Memoized SparklesCore */}
        {sparklesComponent}

        {/* Logo */}
        <div className="fixed top-0 left-0 z-50 p-4">
          <nav className="flex space-x-4">
           <button onClick={() => handleNavigation('home')}>
              <Logo className="w-24 h-24 hover:scale-110 transition-transform duration-300 max-md:w-14 max-md:h-14" />
            </button>
          </nav>
        </div>

        {/* FloatingDock */}
        <FloatingDock 
          items={items}
          desktopClassName='fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50'
          mobileClassName="fixed bottom-12 right-6 z-50"
        />

        
        {/* Contact Me Button */}
        <SocialDock />

        {/* Page content container */}
        <div className="relative z-10 w-full h-full">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App
