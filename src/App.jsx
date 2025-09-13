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
import Logo from 'assets/taffan.svg?react';
import { AnimatePresence, motion } from 'motion/react';


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

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

  return (
    <>
      <div className="w-full h-full bg-[#1E201E] text-white overflow-hidden">
        <div className="items-center flex flex-col">
          <div className="fixed top-0 left-0 z-50 p-4">
            <nav className="flex space-x-4">
             <button onClick={() => handleNavigation('home')}>
                <Logo className="w-24 h-24 hover:scale-110 transition-transform duration-300" />
              </button>
            </nav>
          </div>
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
          <FloatingDock 
          items={items}
          desktopClassName='fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50'
          mobileClassName="fixed bottom-4 right-6 z-50"
          />
        </div>
        
        <div className="pointer-events-none w-full h-full absolute inset-0">
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
      </div>
    </>
  )
}

export default App
