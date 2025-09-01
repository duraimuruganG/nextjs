"use client";
import { useState, useRef, useEffect } from "react";

interface Slide {
  black: string;
  pink: string;
  description: string;
  button: string;
}

interface HeroProps { 
  slides: Slide[];      
  bgimg: string;
}

export default function banner({ slides, bgimg }: HeroProps) {
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
      className="w-full flex flex-col md:flex-row items-center justify-between min-h-[550px] md:min-h-[550px] py-8 md:py-0 bg-white relative overflow-hidden select-none px-10"
      style={{
        cursor: "grab",
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Slide container */}
      <div className="flex w-full h-full">
        <div
          key={current}
          className={`flex flex-col md:flex-row items-center justify-between w-full h-full transition-all duration-350 ease-in-out
            ${animating ? (direction === 1 ? "animate-fadeInRight" : "animate-fadeInLeft") : ""}
          `}
          style={{ minHeight: 420 }}
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center max-w-[550px] relative" style={{ minHeight: 220 }}>
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
            <div className="relative z-10 w-fit">
              <h1
                className="text-[20px] mb-[30px] uppercase leading-[50px] md:text-[50px] font-regular mb-4"
                style={{
                  color: "var(--color-paragraph)",
                  fontFamily: "Sarcolenta, serif",
                }}
              >
                {slides[current].black} <span style={{
                  color: "var(--color-title)",
                    fontFamily: "Sarcolenta, serif",
                  }}>{slides[current].pink}</span>
              </h1>
              <p  style={{
                  color: "var(--color-paragraph)",
                  fontFamily: "Futura T OT",
                }} className=" !text-[#3A3A3AB2] !font-[400] text-[15px] max-w-[536px]  md:text-[20px] mb-[30px] text-justify text-base md:text-lg mb-6 leading-relaxed">
                {slides[current].description}
              </p>
              <button className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-lg px-8 py-3 rounded-md font-medium transition-colors duration-200 w-fit shadow-md">
                {slides[current].button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
