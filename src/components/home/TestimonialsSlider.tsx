"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Tridots tech",
    subtitle: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    footer: "Software testing process",
  },
  {
    id: 2,
    title: "Card Two",
    subtitle: "UI Designer",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    footer: "UI/UX Process",
  },
  {
    id: 3,
    title: "Card Three",
    subtitle: "Frontend Dev",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    footer: "Development Cycle",
  },
];

export default function CardSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <h2 className="text-2xl md:text-3xl font-regular mb-4 text-left" 
        style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}>
          Client Success <span style={{ color: "var(--color-title)" }}>stories </span> 
        </h2>
      <hr className="intro-underline"></hr>
      {/* Slider Container */}
      <div className="relative w-[350px] sm:w-[500px] md:w-[500px] lg:w-[500px] h-[320px]">
        {cards.map((card, i) => {
         
          // difference relative to activeIndex
          const indexDiff = (i - activeIndex + cards.length) % cards.length;

          if (indexDiff > 2) return null; // only show front + 2 layers

          // Layer styling
          const zIndex = 50 - indexDiff;
          const scale = indexDiff === 0 ? 1 : indexDiff === 1 ? 0.92 : 0.85;
          const translateX = indexDiff === 0 ? 0 : indexDiff === 1 ? -40 : -78;
          const blur = indexDiff === 0 ? "blur(0px)" : indexDiff === 1 ? "blur(2px)" : "blur(2px)";


          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                scale,
                x: translateX,
                filter: blur,
                boxShadow: '0 100px 30px -10px rgba(48, 18, 18, 0.25)',
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full bg-white rounded-2xl shadow-xl pt-6 flex flex-col justify-between"
              style={{ zIndex }}
            >
              <div className="p-6">
                 <Quote className="w-6 h-6 rotate-180" style={{ color: "var(--color-title)" ,fill: "currentColor" }} />
                    <div className="p-4">
                       <h3 className="text-lg text-center font-bold" style={{ color: "var(--color-foreground)", fontFamily:"Futura T OT, serif" }}>
                        {card.title}</h3>
                      <p className="text-center text-sm font-regular" style={{ color: "var(--color-title)" }}>{card.subtitle}</p>
                      <p className="text-gray-500 text-sm mt-2">
                        {card.description}
                      </p>
                    </div>

                 <Quote className="w-6 h-6  float-right" style={{ color: "var(--color-title)",fill: "currentColor" }} />
              </div>
              <div className="text-white text-center py-2 rounded-bl-xl rounded-br-xl" style={{ backgroundColor: "var(--color-paragraph)" }}>
                {card.footer}
              </div>
            </motion.div>
          );
        })}
      </div>
    
        {/* Indicator */}
      <div className="flex items-center justify-between w-full mt-6 rounded-md max-w-md mx-auto px-4 py-2 rounded-md">
        {/* Left number */}
        <span className="text-sm font-semibold text-gray-800">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>

        {/* Progress bar */}
        <div className="relative flex-1 mx-2 h-[3px] bg-[#ffffff] rounded">
          <motion.div
            animate={{
              width: `${((activeIndex + 1) / cards.length) * 100}%`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-full bg-black rounded"
          />
        </div>

        {/* Right number */}
        <span className="text-sm font-semibold text-gray-800">
          {String(cards.length).padStart(2, "0")}
        </span>
      </div>



    </div>
  );
}
