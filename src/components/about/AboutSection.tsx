 

export default function AboutSection() {
  return (
    <section className="px-[40px] py-12">
        <div className="text-center mb-8">
            <h2
            className="text-2xl md:text-3xl font-regular mb-4 text-center"
            style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
            >
            Fronseye&apos;s <span style={{ color: "var(--color-paragraph)" }}>Story</span>
            </h2>
            <hr
            className="w-16 border-t-2 mb-6 mx-auto"
            style={{ borderColor: "var(--color-title)" }}
            />
        </div>

        <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-6/12 p-4  self-center">
               <iframe src="https://youtu.be/5vFrD1kC46c?si=iDgRACRsBxSzh-Gm" className="w-full h-64" title="Left Column Content"></iframe>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-6/12 p-4">
                 <h3
            className=" text-xl font-bold mb-4 text-center"
            style={{ color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif" }}
            >
            How <span style={{ color: "var(--color-title)" , fontFamily: "Futura T OT ,sans-serif"}}>Fronseye</span> Started
            </h3>
                <p className="mb-2" style={{color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif"}}><b>The idea for Fronseye emerged in 2018</b>, and the company was officially registered in mid-2019. However, its early journey coincided with the pandemic&apos;s onset, which brought operations to a halt. Initially focused on product development, the company faced challenges in adapting to remote work and struggled to find resources. Progress was slow, and Fronseye operated for a time with just one full-time team member, leading to significant delays.</p>

                <p className="mb-2" style={{color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif"}}>Financial difficulties added to the challenges, with the founder relying on loans to sustain the business. Despite these obstacles, Fronseye persevered and secured its first client nearly a year later, following persistent efforts. This achievement marked a turning point, validating the team&apos;s resilience.</p>
 
                <p className="mb-2" style={{color: "var(--color-paragraph)", fontFamily: "Futura T OT ,sans-serif"}}>The success of its initial product also brought recognition, <b>with Fronseye being accredited by the Central Government&ldquo;s DPIIT as a  &quot;Start-Up &quot; company.</b> While the company has stabilized, it remains a work-in-progress, driven by the lessons learned during its challenging beginnings and a commitment to ongoing innovation</p>
            </div>
        </div>
    </section>
  );
}