import { Span } from "next/dist/trace";
import React from "react";

const products = [
  {
    title: "DreamOps",
    description: "A platform to streamline your business operations and boost productivity with automation and analytics.",
    icon: "/images/home/fronseye_dreamops.png",
  },
  {
    title: "EngineerOps",
    description: "EngineerOps empowers your engineering teams with tools for collaboration, deployment, and monitoring.",
    icon: "/images/home/fronseye_engineerops.png",
  },
  {
    title: "ClientWideOps",
    description: "Manage your client relationships, projects, and feedback all in one place for seamless delivery.",
    icon: "/images/home/fronseye_clienteleops.png",
  },
];

function ProductCard({ title, description, icon, }: { title: string; description: string; icon: string; bgcolor: string }) {
  return (
    <div className={`flex flex-col items-center product-card rounded-xl shadow-lg px-6 py-8 m-2 min-w-[220px] transition-transform`} style={{ borderColor: "var(--color-title)" }}>
      <span className="text-4xl mb-3" style={{ color: "var(--color-title)" }}>
        <img src={icon} alt={title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
      </span>
      <h3 className="text-lg font-bold mb-2 text-center" style={{ color: "var(--color-title)" }}>{title}</h3>
      <p className="text-gray-500 text-center text-sm mb-4" style={{ color: "var(--color-text)" }}>{description}</p>
    </div>
  );
}

export default function Products() {
  return (
    <section className="w-full py-12 bg-white flex flex-col items-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}>
        <span style={{ color: "var(--color-title)" }}>Our</span> Products
      </h2>
      <p className="max-w-2xl text-base md:text-lg text-center mb-16" style={{ color: "var(--color-text)" }}>
        Our Digital Solutions for Your Business Needs.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-4xl">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <button className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-sm px-4 py-2 rounded-md font-medium transition-colors duration-200">View more details</button>
      </div>
    </section>
  );
}
