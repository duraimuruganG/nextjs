import React from "react";

const reasons = [
  {
      icon: "images/home/1.png",
    title: "Futuristic Vision",
    description: "We deliver solutions enhancing you with anedge over competitors, always looking ahead to future trends and technologies.",
  },
  {
    icon: "images/home/2.png",
    title: "Business Growth",
    description: "Our digital solutions are focused on advancing your business and maximizing your ROI through innovation and efficiency.",
  },
  {
    icon: "images/home/3.png",
    title: "Process Standardization",
    description: "We help you standardize and automate your business processes for consistent, scalable, and reliable results.",
  },
];

export default function WhyChooseUs() {
  return (

     <section className="grid grid-cols-12 gap-4 w-full py-4 bg-white flex flex-col items-center px-[40px]">

      <div className="col-span-12 md:col-span-4">

        <h2 className="text-2xl md:text-3xl font-regular mb-4 text-left" 
        style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}>
          Why choose <span style={{ color: "var(--color-title)" }}>us ?</span> 
        </h2>
        <hr className="intro-underline"></hr>
        <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in  </p>
        
        <button className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-base px-8 py-3 rounded-md font-medium transition-colors duration-200">
        Work with us
        </button>

      </div>

     <div className="col-span-12 md:col-span-8 p-4">
  {reasons.map((reason, i) => (
    <div
      key={i}
      className="grid grid-cols-12 items-center bg-white rounded-xl px-6 py-8 gap-4 min-w-[220px]"
    >
      {/* Left (Image, 4 cols) */}
      <div className="col-span-4 flex justify-center">
        <img
          src={reason.icon}
          alt="Banner visual"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>

      {/* Right (Title + Description, 8 cols) */}
      <div className="col-span-8 text-center md:text-left">
        <h3
          className="text-lg font-bold mb-2"
          style={{ color: "var(--color-title)" }}
        >
          {reason.title}
        </h3>
        <p
          className="text-gray-500 text-sm"
          style={{ color: "var(--color-text)" }}
        >
          {reason.description}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>

  );
}
