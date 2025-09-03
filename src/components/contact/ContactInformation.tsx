import React from "react";

export default function ContactInformation() {
  return (
    <section
      className="px-[40px] pt-12 pb-2"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 242, 249, 1) 42%, rgba(255, 255, 255, 1) 42%)",
      }}
    >
      <div className="text-center mb-8 px-9">
        <h2
          className="text-2xl md:text-3xl font-regular mb-4 text-center"
          style={{
            color: "var(--color-title)",
            fontFamily: "Sarcolenta, serif",
          }}
        >
          Let&apos;s{" "}
          <span style={{ color: "var(--color-paragraph)" }}>Connect</span>
        </h2>
        <p
          style={{
            color: "var(--color-paragraph)",
            fontFamily: "Futura T OT ,sans-serif",
          }}
        >
          Have questions, need support, or want to collaborate? At Fronseye, we’re always ready to help. Reach out to us through the options below!
        </p>
        <hr
          className="w-16 border-t-2 mb-6 mx-auto"
          style={{ borderColor: "var(--color-title)" }}
        />
      </div>

      <div className="contact-box mx-auto my-8 grid grid-cols-12 gap-4 shadow-xl rounded-xl max-w-4xl bg-white border-8 border-[#fff]">
         <div  style={{
    background: "var(--color-title) url('/images/contact_bg.png') no-repeat right bottom",
    backgroundSize: "36%", 
  }}className="col-span-12 md:col-span-6 p-8">
            <h3 style={{ color: "#fff" }} className="text-2xl mb-4 font-semibold mb-0 pb-0">
                Contact information
            </h3>
            <span className="text-[#fff] mb-6">
                &quot;LET&lsquo;S CONNECT – WE&lsquo;RE HERE FOR YOU&quot;
            </span>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-opacity-20">
                  <img
                    src="images/phone_.png"
                    alt="Phone Icon"
                    className="w-8 h-8 object-contain"
                  />
                </span>
                <span>+91 81482 71282</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-opacity-20">
                  <img
                    src="images/email_.png"
                    alt="Email Icon"
                    className="w-8 h-8 object-contain"
                  />
                </span>
                <span>hello@fronseye.com</span>
              </div>

             <div className="flex items-start gap-3 text-white">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-opacity-20">
                <img
                  src="images/Location_.png"
                  alt="Location Icon"
                  className="w-8 h-8 object-contain"
                />
              </span>
              <span className="flex-1">
                India: No 143, Guna Complex, 1 Flr, P.H. Road, Maduravoyal,
                Chennai 600 095
                <br />
                US: No 2, Glen Lane, Ellington, CT, 06029
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
            <form className="contact-right flex-1 p-8 flex flex-col justify-center">
                <h3 style={{ color: "var(--color-paragraph)" }} className="text-xl font-regular mb-4 ">
                    Let’s make{" "}
                    <span style={{ color: "var(--color-title)" }}>your project shine</span>
                </h3>
                <input
                    className="contact-input mb-3 bg-gray-200"
                    type="text" 
                    placeholder="Full name"
                />
                <input
                    className="contact-input mb-3 bg-gray-200"
                    type="text"
                    placeholder="Phone No"
                />
                <input
                    className="contact-input mb-3 bg-gray-200"
                    type="email"
                    placeholder="Email ID"
                />
                <textarea
                    className="contact-input mb-6 bg-gray-200"
                    placeholder="Message"
                    rows={4}
                />
                <button className="bg-pink-600 hover:bg-pink-700 text-white text-base px-8 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center w-fit self-end">
                    Submit <span className="ml-2">→</span>
                </button>
            </form>
        </div>
      </div>
      <style>{`
  @media (max-width: 768px) {
    section[style] {
      background: #fff !important;
    }
  }
`}</style>
    </section>
  );
}