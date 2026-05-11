import { useCallback, useEffect, useState, useMemo } from 'react'
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
import Logo from 'assets/taffan.svg?react'
import { motion } from 'motion/react'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const items = [
    { title: 'Home', icon: <HomeIcon />, href: '#home', onClick: () => scrollToSection('home') },
    { title: 'About', icon: <InfoIcon />, href: '#about', onClick: () => scrollToSection('about') },
    { title: 'Projects', icon: <ProjectsIcon />, href: '#projects', onClick: () => scrollToSection('projects') },
    { title: 'Contact', icon: <ContactIcon />, href: '#contact', onClick: () => scrollToSection('contact') },
  ]

  return (
    <>
      <div className="w-full min-h-screen bg-[#1E201E] text-white relative">
        {/* Memoized SparklesCore */}
        {sparklesComponent}

        {/* Logo */}
        <div className="fixed top-0 left-0 z-50 p-4">
          <nav className="flex space-x-4">
           <button onClick={() => scrollToSection('home')}>
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
        <div className="relative z-10 w-full" data-scroll-container>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
