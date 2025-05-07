import { useState } from 'react'
import './App.css'
import { FloatingDock } from 'components/ui/floating-dock'
import { Home } from 'pages/Home'
import HomeIcon from 'assets/icons/home.svg?react';
import InfoIcon from 'assets/icons/info.svg?react';
import ProjectsIcon from 'assets/icons/projects.svg?react';
import ContactIcon from 'assets/icons/contact.svg?react';



function App() {
  const items = [
    { title: 'Home', icon: <HomeIcon />, href: '#home' },
    { title: 'About', icon: <InfoIcon />, href: '#about' },
    { title: 'Projects', icon: <ProjectsIcon />, href: '#projects' },
    { title: 'Contact', icon: <ContactIcon />, href: '#contact' },
  ]

  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
        <Home />
        <FloatingDock items={items}/>
      </div>
        
    </>
  )
}

export default App
