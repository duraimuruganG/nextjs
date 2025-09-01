import React from "react";

export default function Achievements() {
  return (
    <section className="px-[40px] py-12">
        <div className="text-center mb-8">
            <h2
            className="text-2xl md:text-3xl font-regular mb-4 text-center"
            style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
            >
            Achievements and <span style={{ color: "var(--color-paragraph)" }}>awards</span>
            </h2>
            <hr
            className="w-16 border-t-2 mb-6 mx-auto"
            style={{ borderColor: "var(--color-title)" }}
            />
        </div>

        <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-5/12 p-4 self-start text-center">
               <img src="/images/about/achievers.png" width="350px" height="auto" className="mx-auto" title="Left Column Content"></img>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-7/12 p-4">
                 <h3
            className=" text-xl font-bold mb-4 text-center"
            style={{ color: "var(--color-title)", fontFamily: "Futura T OT ,sans-serif" }}
            >
            Tech Visionary of the Year 2024
            </h3>
                <p className="mb-2" style={{color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif"}}>
                  In a proud moment at the renowned <b>Global Technology Summit 2024, Vasudevan Parthasarathy</b>, the visionary leader of Fronseye, was honored with the highly coveted Tech Visionary of the Year 2024 award. This prestigious recognition is a testament to his unparalleled contributions to the tech industry, his drive to deliver transformative solutions, and his ability to lead innovation in an ever-evolving digital landscape.</p>

                  <p>Since founding Fronseye, <b>Vasudevan Parthasarathy</b> has spearheaded groundbreaking advancements in digital transformation. By integrating cutting-edge technologies and fostering a culture of creativity, he has redefined how businesses approach technology adoption. His leadership has empowered the Fronseye team to deliver impactful mobile applications and web platforms tailored to address complex challenges across a range of industries.</p>

                  <p><b>The award particularly acknowledges his forward-thinking strategies,</b> which have driven Fronseye to become a global force in delivering customized, agile, and scalable digital solutions. Under his guidance, Fronseye has not only met but exceeded industry benchmarks, creating technology solutions that prioritize user experience, security, and innovation.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-4/12 p-4  self-center">
              <img src="/images/about/Award_1.png" className="mx-auto" title="Left Column Content"></img>
              <p className="mt-2 text-center" style={{ color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif" }}>Best Innovation in Tech 2024</p>
            </div>
            <div className="w-full md:w-4/12 p-4  self-center">
              <img src="/images/about/Award_2.png" className="mx-auto" title="Left Column Content"></img>
              <p className="mt-2 text-center" style={{ color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif" }}>Top Web Development Partner</p>  
            </div>
            <div className="w-full md:w-4/12 p-4  self-center">
              <img src="/images/about/Award_3.png" className="mx-auto" title="Left Column Content"></img>
              <p className="text-center mt-2" style={{ color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif" }}>Design Excellence Award 2024</p>
            </div>
        </div>
    </section>
  );
}