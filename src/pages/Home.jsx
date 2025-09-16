import React from 'react'
import { FlipWords } from 'components/ui/flip-words'
import { HoverBorderGradient } from 'components/ui/hover-border-gradient'

const words = [
  "Software Engineer",
  "Mobile Developer",
  "Front-end Developer",
  "AI/ML Engineer",
  "UI/UX Enthusiast",
]

export const Home = ({ onNavigate }) => {
  return (
    <section className="relative flex items-center justify-center h-screen w-screen"> 
        <div className="z-10 text-center text-5xl space-y-6 px-4 max-md:px-2 max-md:text-3xl">
            <h1>Hi</h1>
            <div className="flex flex-row justify-center items-center gap-2 max-md:flex-col">
              <h1>I'm Taffan Muhammad Rizqi, a</h1>
              <div className="w-120 max-lg:w-[40rem] max-md:w-full text-left max-md:text-center">
                <FlipWords words={words} duration={2000} />
              </div>
            </div>
            <HoverBorderGradient
              as="button"
              onClick={() => onNavigate('about')}
              className="text-lg font-medium bg-[#222831] hover:bg-[#393E46] transition-colors duration-300 text-white px-6 py-3 rounded-full"
              containerClassName="mx-auto mt-8"
              duration={1}
              clockwise={false}
            >
              Learn More About Me!
            </HoverBorderGradient>
        </div>
    </section>
  )
}
