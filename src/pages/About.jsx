import React from 'react'
import { HoverBorderGradient } from 'components/ui/hover-border-gradient'

export const About = ({ onNavigate }) => {
  return (
    <section className="relative flex items-center justify-center h-screen w-screen">
      <div className="z-10 text-center text-5xl space-y-6 px-4 max-md:px-2 max-md:text-3xl">
        <h1>About Me</h1>
        <div className="text-lg max-w-2xl mx-auto space-y-4">
          <p>I'm a passionate developer with expertise in various technologies.</p>
          <p>I love creating beautiful and functional web applications.</p>
        </div>
        <HoverBorderGradient
          as="button"
          onClick={() => onNavigate('home')}
          className="text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-6 py-3 rounded-full"
          containerClassName="mx-auto mt-8"
          duration={1}
          clockwise={false}
        >
          Back to Home
        </HoverBorderGradient>
      </div>
    </section>
  )
}