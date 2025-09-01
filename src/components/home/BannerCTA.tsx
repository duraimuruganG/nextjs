import React from "react";

export default function BannerCTA() {
  return (
    <section className="px-5 w-[1300]">


       <div className="flex-1 flex  items-center justify-center md:hidden">
          <img
            src="/images/home/bring_ideas.png"
            alt="Banner visual"
            style={{ height:'400px'}}
          />
       </div>

      <div style={{ position : 'relative' }} className="bg-[#FDE6F2] p-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 rounded-xl my-0 md:my-8  shadow-md">
        <div className="flex-1 flex items-center justify-center hidden md:flex">
         <img 
            src="/images/home/bring_ideas.png"
            alt="Banner visual"
            className="absolute bottom-0 left-[-41px] h-[305px] md:h-[305px] md:left-[-41px] lg:h-[400px] lg:left-[-54px]"
          />

        </div>
        <div className="flex-1 flex-col text-left py-6">
          <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-regular mb-0" 
          style={{ lineHeight:'1.2', color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}>
            KEEN TO BRING <span style={{ color: "var(--color-title)" }}>YOUR IDEAS TO LIFE?</span>
          </h3>
          <hr className="intro-underline"></hr>
          <button className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-lg px-8 py-3 rounded-md font-medium transition-colors duration-200 mt-4">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
