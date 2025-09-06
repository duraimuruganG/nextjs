"use client";

import React, { CSSProperties, ReactNode } from "react";
import { IMAGE_BASE_PATH } from "@/lib/constants";

interface OrbitItem {
  angle: number;
  cirlcle_style: CSSProperties;
  inner_circle_style: CSSProperties;
  trail_style: CSSProperties;
  circle_img: string;
  arrow_class: string;
  content: ReactNode;
  content_class: string;
}

const orbitItems: OrbitItem[] = [
  { 
    angle: 0,
    cirlcle_style: { 
      left: "61px", 
      top: "86px", 
      zIndex: 10, 
      width: "80px", 
      height: "80px" 
    },
    inner_circle_style: { 
      width: "65px", 
      height: "65px" 
    },
    trail_style: { 
      zIndex: 0, 
      position: "absolute", 
      top: "100px", 
      left: "-23px", 
      width: "202px", 
      transform: "rotate(-116deg)" 
    },
    circle_img: `${IMAGE_BASE_PATH}/services/Loyalty.svg`,
    arrow_class: "arrow_line absolute rotate-180 right-20 w-[135px] border border-dashed border-black",
    content: (
      <>
        <h3 
          className="font-semibold" 
          style={{ fontFamily: "Futura T OT", color: "var(--color-title)" }}
        >
          Enhancing Customer Loyalty
        </h3>
        <p style={{ color: "var(--color-black-dark-paragraph)" }}>
          Push notifications, loyalty programs, and real-time updates
        </p>
      </>
    ),
    content_class: "absolute font-normal right-[230px] w-[220px] text-left"
  },
  // You can add more orbitItems here...
];

export default function OrbitComponent() {
  return (
    <div className="relative w-full h-full">
      {orbitItems.map((item, index) => (
        <div 
          key={index} 
          className="absolute flex flex-col items-center"
          style={item.cirlcle_style}
        >
          {/* Circle Image */}
          <div 
            className="flex items-center justify-center rounded-full bg-white shadow-lg"
            style={item.inner_circle_style}
          >
            <img src={item.circle_img} alt="Orbit Path" className="w-8 h-8" />
          </div>

          {/* Trail */}
          <div 
            className="h-[2px] bg-gray-300" 
            style={item.trail_style}
          ></div>

          {/* Arrow */}
          <span className={item.arrow_class}></span>

          {/* Content */}
          <div className={item.content_class}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
