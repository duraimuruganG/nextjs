import React from "react";

const services = [
  { icon: "/images/home/fronseye_erp.png", label: "ERP" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
  { icon: "/images/home/fronseye_seo.png", label: "SEO", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
  { icon: "/images/home/fronseye_mobile.png", label: "Mobile/Business App", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
  { icon: "/images/home/fronseye_consulting.png", label: "IT Consulting", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
];

export default function Specialization() {
  return (
    <section className="w-full py-12 bg-white flex flex-col items-center px-[40px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-center mx-auto">
        {/* Left Side: Text and Button */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h2
            className="text-2xl md:text-3xl font-regular mb-4 text-center md:text-left dark-black"
            style={{ fontFamily: "Sarcolenta, serif" }}>
            What <span style={{ color: "var(--color-title)" }}>we</span> specialize in?
          </h2>
          <p 
            className="max-w-2xl text-gray-500 text-base md:text-lg text-center md:text-left mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in aute irure dolor in ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          </p>
          <button
            className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-base px-6 py-2 rounded-md font-medium transition-colors duration-200 mb-8"
          >
            Explore
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center items-center px-2 md:px-8">
          <img
            src="/images/home/fronseye_specialization.png"
            alt="Specialization"
            className="w-full max-w-md h-auto rounded-xl object-cover"
            style={{ minHeight: '280px', background: '#f5f5f5' }}
          />
        </div>
      </div>

      {/* Services grid */}
      <div className="w-full overflow-x-auto mt-8">
        <div className="flex gap-8 min-w-[600px] md:min-w-0 justify-center">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white rounded-xl shadow-md px-2 py-2 w-[180px] min-w-[180px] max-w-[180px] border"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderImageSource: 'linear-gradient(180deg, #FF9ED1 40%, #FFFFFF 100%)',
                borderImageSlice: 1
              }}
            >
              <span className="mb-2" style={{ color: "var(--color-title)" }}>
                <img
                  src={service.icon}
                  alt={service.label}
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span className="text-base text-center" style={{ color: "var(--color-paragraph)" }}>
                {service.label}
              </span>
              <p className="text-sm text-center" style={{ color: "var(--color-paragraph)" }}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
