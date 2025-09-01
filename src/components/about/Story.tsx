// components/Timeline.tsx
"use client";
import React, { useEffect, useRef } from "react";

const timeline = [
  {
    year: "2018",
    title: "The Idea",
    description:
      "Fronseye was conceived in 2018 with a mission to innovate and create impactful tech solutions.",
  },
  {
    year: "2019",
    title: "Launch & Challenges",
    description:
      "Registered in mid-2019, Fronseye faced challenges from the pandemic but pushed forward to make the idea a reality.",
  },
  {
    year: "2020",
    title: "Growth",
    description: "Expanded our team and started working on global projects.",
  },
  {
    year: "2021",
    title: "Innovation",
    description:
      "Introduced new product lines and cutting-edge solutions.",
  },
  {
    year: "2022",
    title: "Scale",
    description:
      "Scaled delivery and matured processes across teams.",
  },
  {
    year: "2023",
    title: "Scale",
    description:
      "Scaled delivery and matured processes across teams.",
  },
  {
    year: "2024",
    title: "Scale",
    description:
      "Scaled delivery and matured processes across teams.",
  },
  {
    year: "2025",
    title: "Scale",
    description:
      "Scaled delivery and matured processes across teams.",
  },
];

export default function Timeline() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const state = useRef({ down: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      el.scrollBy({ left: delta, behavior: "smooth" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    state.current.down = true;
    el.classList.add("cursor-grabbing");
    state.current.startX = e.pageX - el.getBoundingClientRect().left;
    state.current.scrollLeft = el.scrollLeft;
  };

  const endDrag = () => {
    state.current.down = false;
    scrollerRef.current?.classList.remove("cursor-grabbing");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el || !state.current.down) return;
    e.preventDefault();
    const x = e.pageX - el.getBoundingClientRect().left;
    const walk = (x - state.current.startX) * 1.1;
    el.scrollLeft = state.current.scrollLeft - walk;
  };

  const onImageClick = () => {
  const el = scrollerRef.current;
  if (!el) return;

  const walk = 200 * 1.1; // You can adjust this "step" value
  const maxScrollLeft = el.scrollWidth - el.clientWidth;

  if (el.scrollLeft + walk >= maxScrollLeft) {
    // reached end → go back to start
    el.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    // otherwise scroll by step
    el.scrollBy({ left: walk, behavior: "smooth" });
  }
};

  return (
    <div className="w-full bg-white py-16">
       <div className="text-center mb-8">
            <h2
            className="text-2xl md:text-3xl font-regular mb-4 text-center"
            style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
            >
            The Big time things <span style={{ color: "var(--color-paragraph)" }}>Story</span>
            </h2>
            <p className="font-400" style={{ color: "var(--color-paragraph)" , fontFamily: "Futura T OT" }}>A Journey Through the Years</p>
            <br/>
            <hr
            className="w-16 border-t-2 mb-6 mx-auto"
            style={{ borderColor: "var(--color-title)" }}
            />
        </div>
        <div className="flex w-full">
            <img className="ml-auto" 
            style={{ cursor: "pointer" }} src="images/about/slide_handler.svg" alt="Timeline" onClick={onImageClick} />
        </div>
        <br/>
      <div
        ref={scrollerRef}
        className="
          relative overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory scroll-smooth
          cursor-grab select-none scrollbar-hide
        "
        style={{ overscrollBehavior: "contain" }}
        onMouseDown={onMouseDown}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onMouseMove={onMouseMove}
      >
         <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-6/12 p-4  self-center">
            </div>
            <div className="w-full md:w-6/12 p-4  self-center">
                <div 
                style = {{ 
                        position: 'relative',
                        color: '#C32C7B',
                        width: '174rem',
                        marginLeft: '8rem',
                 }}
                className="hidden md:block top-8 left-0 h-0.5 border-t-2 border-dashed pointer-events-none" />
            </div>
        </div>

        {/* Content row */}
        <div className="relative flex w-max items-start mt-[-17px] gap-24 px-[50%] min-h-[220px]">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="relative flex w-[300px] flex-shrink-0 snap-center flex-col items-center"
            >
              {/* Year circle on line */}
              <div 
              style={{
                        background:
                        "linear-gradient(203.9deg, #FFE0F0 -16.28%, #C32C7B 88.6%)",
                    }}
              className="relative z-10 mb-0 flex h-16 w-16 items-center justify-center rounded-full text-white font-bold">
                {item.year}
              </div>

              {/* Card */}
              <div className="mt-8 w-[250px] rounded-lg border border-pink-200 bg-white p-4 text-center shadow-md">
                <h3 className="font-semibold text-pink-600">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
