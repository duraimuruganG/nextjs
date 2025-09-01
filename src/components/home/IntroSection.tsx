import React from "react";

export default function IntroSection() {
  return (
    <section className="w-full py-12 bg-white flex flex-col items-center text-center px-4 md:px-10">
      <h2
        className="text-2xl md:text-3xl font-regular mb-4"
        style={{
          color: "var(--color-paragraph)",
          fontFamily: "Sarcolenta, serif",
        }}
      >
        Unveiling the wonders of{" "}
        <span style={{ color: "var(--color-title)" }}>Fronseye</span>!
      </h2>
      <hr className="intro-underline" />
      <p
        className="text-base md:text-lg"
        style={{
          fontFamily: "Futura T OT",
          color: "var(--color-black-paragraph)",
        }}
      >
        We are a technology consulting and software development company,
        delivering innovative solutions for digital success. Through our
        expertise and passion, we help businesses unlock their full potential in
        the digital age.
      </p>
    </section>
  );
}
