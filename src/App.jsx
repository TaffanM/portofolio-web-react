import { useState } from 'react'
import './App.css'
import { FloatingDock } from 'components/ui/floating-dock'
import { Home } from 'pages/Home'
import HomeIcon from 'assets/icons/home.svg?react';
import InfoIcon from 'assets/icons/info.svg?react';
import ProjectsIcon from 'assets/icons/projects.svg?react';
import ContactIcon from 'assets/icons/contact.svg?react';
import { SparklesCore } from 'components/ui/sparkles';  
import Logo from 'assets/taffan.svg?react';



function App() {
  const items = [
    { title: 'Home', icon: <HomeIcon />, href: '#home' },
    { title: 'About', icon: <InfoIcon />, href: '#about' },
    { title: 'Projects', icon: <ProjectsIcon />, href: '#projects' },
    { title: 'Contact', icon: <ContactIcon />, href: '#contact' },
  ]

  return (
    <>
      <div className="w-full h-full bg-[#1E201E] text-white overflow-hidden">
        <div className="items-center flex flex-col">
          <div className="fixed justify-between p-4">
            <nav className="flex space-x-4">
              <Logo className="w-24 h-24" href="#" />
            </nav>
          </div>
          <Home />
          <FloatingDock 
          items={items}
          desktopClassName='fixed bottom-12 left-1/2 transform -translate-x-1/2'
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
