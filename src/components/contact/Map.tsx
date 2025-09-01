import React from "react";

export default function Map() {
  return (
    <section  className="w-full p-6">
      <div className="text-center mb-8 px-9">
        <h2
          className="text-2xl md:text-3xl font-regular mb-4 text-center"
          style={{
            color: "var(--color-title)",
            fontFamily: "Sarcolenta, serif",
          }}
        >
          We are 
          <span style={{ color: "var(--color-paragraph)" }}> Here</span>
        </h2>
        <p
          style={{
            color: "var(--color-paragraph)",
            fontFamily: "Futura T OT ,sans-serif",
          }}
        >
          Find us at our location or connect with us online. We’re here to assist you, wherever you are!
        </p>
        <hr
          className="w-16 border-t-2 mb-6 mx-auto"
          style={{ borderColor: "var(--color-title)" }}
        />
      </div>

     <div className="flex w-full justify-center px-12 mb-10 border-8 border-[#fff] ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6681817.921711684!2d76.68484066591662!3d13.479350357371235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261ae71c49917%3A0x5f042e63c564dea0!2sFronseye%20Tech%20n%20Trade%20Pvt%20LTD!5e0!3m2!1sen!2sin!4v1756379368154!5m2!1sen!2sin"
    width="750"
    height="450"
    loading="lazy"
    className="rounded-xl shadow-2xl"
  />
</div>



    </section>
  );
}