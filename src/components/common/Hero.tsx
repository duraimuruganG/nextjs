"use client";
import { useState, useRef, useEffect } from "react";

interface Slide {
  title: string;
  brand: string;
  description: string;
  button: string;
}

interface HeroProps {
   slides: Slide[];
   contentwidth: string;
   style?: React.CSSProperties;
   mobileStyle?: React.CSSProperties;
}

export default function Hero({ slides, mobileStyle, style, contentwidth }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);

  const goToSlide = (idx: number, dir = 1) => {
    if (animating || idx === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 350);
  };

  const nextSlide = () => goToSlide((current + 1) % slides.length, 1);
  const prevSlide = () => goToSlide((current - 1 + slides.length) % slides.length, -1);

  const wheelLock = useRef(false);
  const onWheel = (e: any) => {
    if (wheelLock.current || animating) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
      wheelLock.current = true;
      if (e.deltaX > 0) nextSlide();
      else if (e.deltaX < 0) prevSlide();
      setTimeout(() => {
        wheelLock.current = false;
      }, 400);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section
      ref={sectionRef}
      onWheel={onWheel}
      className="w-full flex flex-col md:flex-row items-center justify-between min-h-[420px] md:min-h-[420px] bg-white relative overflow-hidden select-none"
    >
      {/* Slide container */}

  {/* Mobile & Tablet */}
   <div className="block md:hidden">
    <div className="w-full h-full" style={mobileStyle}>
    <div  className="flex w-full lg:w-auto"
      style={{
       width: typeof window !== "undefined" && window.innerWidth >= 1024 ? contentwidth : "100%",
        }}>
                <div
                  key={current}
                  className={`flex flex-col md:flex-row items-center justify-between w-full h-full transition-all duration-350 ease-in-out
                    ${animating ? (direction === 1 ? "animate-fadeInRight" : "animate-fadeInLeft") : ""}
                  `}
                
                >
                  {/* Left: Text */}
                  <div className="flex-1 flex flex-col justify-center max-w-3xl relative" style={{ minHeight: 220 }}>
                  
                  </div>
                </div>
              </div>
          </div>
        {/* Text content */}
                    <div className="relative z-10 ml-[24px] mr-[24px] mt-[34px] mb-[30px]">
                      <span className="text-lg md:text-xl mb-2 font-light uppercase dark-black">{slides[current].title}</span>
                        {slides[current].brand}
                      <p className="text-gray-500 text-base md:text-lg mb-6 leading-relaxed">
                        {slides[current].description}
                      </p>
                      <button className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-lg px-8 py-3 rounded-md font-medium transition-colors duration-200 w-fit shadow-md">
                        {slides[current].button}
                      </button>
                    </div>
        </div>
  
  
  {/* Desktop */}
  <div className="hidden md:block w-full h-full" style={style}>

    <div  className="flex w-full lg:w-auto"
     style={{
      width: typeof window !== "undefined" && window.innerWidth >= 1024 ? contentwidth : "100%",
      }}>
          <div
            key={current}
            className={`flex flex-col md:flex-row items-center justify-between w-full h-full transition-all duration-350 ease-in-out
              ${animating ? (direction === 1 ? "animate-fadeInRight" : "animate-fadeInLeft") : ""}
            `}
            style={{ minHeight: 420 }}
          >
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl relative" style={{ minHeight: 220 }}>
              {/* Overlay for mobile */}
              <div
                className="md:hidden absolute inset-0 rounded-lg p-4 shadow-lg"
                style={{
                  left: 2,
                  right: 2,
                  backgroundColor: "rgba(220, 220, 220, 0.6)",
                  zIndex: 1,
                }}
              ></div>

              {/* Text content */}
              <div className="relative z-10 md:ml-[48px]">
                <span className="text-lg md:text-xl mb-2 font-light dark-black">{slides[current].title}</span>
                  {slides[current].brand}
                <p className="black text-base md:text-lg mb-6 leading-relaxed">
                  {slides[current].description}
                </p>
                <button className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-lg px-8 py-3 rounded-md font-medium transition-colors duration-200 w-fit shadow-md">
                  {slides[current].button}
                </button>
              </div>
            </div>
          </div>
        </div>

  </div>

      
<div className="hidden md:block">
{/* Navigation */}
{slides.length > 1 && (
  <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-sm font-light text-gray-700">
        {String(current + 1).padStart(2, "0")}
      </span>
      <div className="w-24 h-1 bg-gray-200 mx-2 relative">
        <div
          className="h-1 bg-[#C13B7B] absolute top-0 left-0 transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
      <span className="text-sm font-light text-gray-700">
        {String(slides.length).padStart(2, "0")}
      </span>
    </div>
  </div>
)}
</div>
    </section>
  );
}
