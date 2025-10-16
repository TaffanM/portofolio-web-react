import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import { FloatingDock } from 'components/ui/floating-dock'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Projects } from 'pages/Projects'
import { Contact } from 'pages/Contact'
import HomeIcon from 'assets/icons/home.svg?react'
import InfoIcon from 'assets/icons/info.svg?react'
import ProjectsIcon from 'assets/icons/projects.svg?react'
import ContactIcon from 'assets/icons/contact.svg?react'
import { SparklesCore } from 'components/ui/sparkles' 
import { SocialDock } from 'components/ui/social-button'
import Logo from 'assets/taffan.svg?react';
import { AnimatePresence, motion } from 'motion/react'
import { useMemo } from 'react';

function PageContainer({ children}) {
  const location = useLocation();

  return(
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='w-full h-full'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}


function MainApp() {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  // Scroll reset function
  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    const containers = [
      document.querySelector('[data-scroll-container]'),
      document.querySelector('.overflow-y-auto'),
      document.querySelector('main'),
      document.body
    ]
    
    containers.forEach(container => {
      if (container) {
        container.scrollTop = 0
      }
    })
  }

  useEffect(() => {
    // Delay scroll reset until after the animation duration (0.5s) + small buffer
    const scrollResetTimer = setTimeout(() => {
      resetScroll()
      
      
      setTimeout(resetScroll, 50)
      setTimeout(resetScroll, 100)
    }, 550)

    return () => clearTimeout(scrollResetTimer)
  }, [handleNavigation])

  // Memoize the SparklesCore to prevent re-rendering
  const sparklesComponent = useMemo(() => (
    <div className="pointer-events-none w-full h-full fixed inset-0 z-0">
      <SparklesCore 
        id="sparkles"
        className="w-full h-full"
        background="transparent"
        minSize={0.5}
        maxSize={1}
        speed={4}
        particleColor="#ffffff"
        particleDensity={3}
      />
    </div>
  ), []);

  const pages = {
    home: <Home onNavigate={handleNavigation} />,
    about: <About onNavigate={handleNavigation} />,
    projects: <Projects onNavigate={handleNavigation} />,
    contact: <Contact onNavigate={handleNavigation} />,
  }
  
  const items = [
    { title: 'Home', icon: <HomeIcon />, href: '#home', onClick: () => handleNavigation('/') },
    { title: 'About', icon: <InfoIcon />, href: '#about', onClick: () => handleNavigation('/about') },
    { title: 'Projects', icon: <ProjectsIcon />, href: '#projects', onClick: () => handleNavigation('/projects') },
    { title: 'Contact', icon: <ContactIcon />, href: '#contact', onClick: () => handleNavigation('/contact') },
  ]

  return (
    <>
      <div className="w-full h-full bg-[#1E201E] text-white overflow-hidden">
        {/* Memoized SparklesCore */}
        {sparklesComponent}

        {/* Logo */}
        <div className="fixed top-0 left-0 z-50 p-4">
          <nav className="flex space-x-4">
           <button onClick={() => handleNavigation('/')}>
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
        <div 
          className="relative z-10 w-full h-full"
          data-scroll-container
          >
          <Routes>
            <Route path='/' element={<PageContainer><Home /></PageContainer>} />
            <Route path='/about' element={<PageContainer><About /></PageContainer>} />
            <Route path='/projects' element={<PageContainer><Projects /></PageContainer>} />
            <Route path='/contact' element={<PageContainer><Contact /></PageContainer>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <MainApp />
    </BrowserRouter>
  )
}
