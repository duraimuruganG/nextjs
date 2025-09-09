import React from "react";

const images = [
  { src: "/images/home/fronseye_innovation.jpg", marginTop:"inherit", height:"auto", label: "Innovation Since 2017", gridClass: "col-span-2 row-span-0" },
  { src: "/images/home/fronseye_teamwork.png", marginTop:"inherit", height:"auto", label: "Teamwork", gridClass: "col-span-1 row-span-1" },
  { src: "/images/home/fronseye_projects_completed.png", marginTop:"inherit", height:"auto", label: "300+ Projects Completed", gridClass: "col-span-1 row-span-1" },
  { src: "/images/home/fronseye_ourvision.png", marginTop:"inherit", height:"auto", label: "Our Vision", gridClass: "col-span-2 row-span-1" },
  { src: "/images/home/fronseye_product.png", marginTop:"-67px", height:"291px", label: "Your Product is our focus", gridClass: "col-span-2 row-span-1" },

];

export default function ImageGridSlider() {
  return (
    <section className="w-full py-8 bg-white flex flex-col items-center p-0">
      <div
  className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 px-[50px] p-0 items-start"
        style={{ gridAutoFlow: 'dense' }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`flex flex-col items-start justify-end bg-gray-50 overflow-hidden ${img.gridClass}`}
            style={{ marginTop: img.marginTop, height: img.height, minHeight: 'auto', position: 'relative', marginBottom: 0 }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover"
              style={{ width: '100%', objectFit: 'cover' }}
            />
            <a href="#">
              <span
                className="text-sm md:text-base font-semibold px-3 py-2 bg-white rounded-r-full text-left"
                style={{ color: "var(--foreground)", position: 'absolute', left: '0px', bottom: '12px' }}
              >
                {img.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
