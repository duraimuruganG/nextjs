"use client";
import React from "react";

const images = [
  {
    src: "/images/home/fronseye_innovation.jpg",
    label: "Innovation Since 2017",
    gridClass: "col-span-2 md:row-span-2",
  },
  {
    src: "/images/home/fronseye_teamwork.png",
    label: "Teamwork",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "/images/home/fronseye_projects_completed.png",
    label: "300+ Projects completed",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "/images/home/fronseye_ourvision.jpg",
    label: "Our Vision",
    gridClass: "col-span-2 row-span-1",
  },
  {
    src: "/images/home/fronseye_product.png",
    label: "Your Product is on us",
    gridClass: "col-span-2 md:col-span-4 row-span-1", 
  },
];


export default function ImageGrid() {
  return (
    <section className="w-full py-10 bg-white px-4 md:px-12">
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gridAutoFlow: "dense" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${img.gridClass}`}
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover"
            />

            {/* Label */}
            <span
              className="absolute left-4 bottom-4 bg-white px-4 py-2 rounded-full text-xs md:text-sm font-medium text-gray-900 shadow"
            >
              {img.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
