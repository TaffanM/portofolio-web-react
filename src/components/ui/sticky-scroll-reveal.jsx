"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row h-auto min-h-[30rem] lg:h-[30rem] justify-center lg:space-x-10 overflow-y-auto rounded-md p-4 sm:p-6 lg:p-10"
      ref={ref}>
      <div className="relative flex items-start w-full lg:w-auto px-2 sm:px-4">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-12 sm:my-16 lg:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl sm:text-2xl font-bold text-slate-100">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm sm:text-base mt-6 lg:mt-10 max-w-full lg:max-w-sm text-slate-300">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20 lg:h-40" />
        </div>
      </div>
      
      {/* Mobile: Show active content below text */}
      <div className="block lg:hidden mt-8 w-full">
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "w-full h-48 sm:h-60 overflow-hidden rounded-md bg-white",
            contentClassName
          )}>
          {content[activeCard].content ?? null}
        </div>
      </div>

      {/* Desktop: Sticky sidebar */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden lg:block h-60 w-80 overflow-hidden rounded-md bg-white flex-shrink-0",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
