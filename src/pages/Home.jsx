import React from 'react'
import { FlipWords } from 'components/ui/flip-words'

const words = [
  "Software Developer",
  "Mobile Developer",
  "Front-end Engineer",
  "AI/ML Engineer",
  "UI/UX Enthusiast",
]

export const Home = () => {
  return (
    <section className="relative flex items-center justify-center h-screen w-screen"> 
        <div className="z-10 text-center text-5xl space-y-6 px-4">
            <h1>Hi</h1>
            <div className="flex flex-row justify-center items-center gap-2 max-md:flex-col">
              <h1>I'm Taffan Muhammad Rizqi, a</h1>
              <div className="w-115 max-lg:w-[40rem] max-md:w-full text-left">
                <FlipWords words={words} duration={1000} />
              </div>
            </div>
        </div>
    </section>
  )
}
