// components/Mission.tsx
"use client";


export default function Mission() {
  return (
<section className="w-full py-12 bg-white flex flex-col items-center px-4 md:px-10">
  <div>
    <h2
      className="text-2xl md:text-3xl font-regular mb-4 text-center"
      style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}
    >
      <span style={{ color: "var(--color-title)" }}>Our</span> Mission
    </h2>
    <hr
      className="w-16 border-t-2 mb-6 mx-auto"
      style={{ borderColor: "var(--color-title)" }}
    />
    <p
      className="font-400"
      style={{ color: "var(--color-paragraph)", fontFamily: "Futura T OT" }}
    >
      Turning Manual Processes into Seamless Digital Workflows
    </p>
  </div>

  {/* Center arrow image */}
  <div className="grid grid-cols-12 gap-4 w-full">
    <div className="col-span-12 flex justify-center absolute left-0 right-0 hidden md:flex lg:flex">
      <img
        src="images/about/arrow_lefttoright.png"
        alt="Why Digitization"
        className="max-w-full"
      />
    </div>
  </div>

  {/* Two columns */}
<div className="grid grid-cols-1 md:grid-cols-2 mt-[80px] gap-8 w-full">
  <div>
    <img
      src="images/about/why-digitization.svg"
      style={{ height: "150px" }}
      alt="Why Digitization"
    />
    <h3
      style={{ color: "var(--color-title)", fontFamily: "Futura T OT" }}
      className="text-lg font-semibold mt-4"
    >
      Why Digitization?
    </h3>
    <p>
      Manual processes can lead to inefficiencies, errors, and missed
      opportunities. Our solutions transform these challenges into strengths,
      giving you the tools to manage every aspect of your business seamlessly.
    </p>
  </div>

  <div className="grid grid-cols-12 gap-4 w-full flex md:hidden lg:hidden">
    <div className="col-span-12 flex justify-center">
      <img
        src="images/about/arrow_lefttoright.png"
        alt="Why Digitization"
        className="max-w-full rotate-90"
      />
    </div>
  </div>

  <div>
    <img
      style={{ height: "150px" }}
      src="images/about/digitalized.svg"
      alt="Transforming your business digitally"
    />
    <h3
      style={{ color: "var(--color-title)", fontFamily: "Futura T OT" }}
      className="text-lg font-semibold mt-4"
    >
      Transforming your business digitally
    </h3>
    <p>
      Break free from the limitations of manual processes with our cloud-based
      solutions. We empower you to manage your data, projects, and teams with
      ease and efficiency.
    </p>
  </div>
</div>

</section>

  );
}    