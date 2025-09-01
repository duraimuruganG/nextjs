import React from "react";

const stats = [
  { value: "200+", label: "Satisfied Clients" },
  { value: "99%", label: "Client Retention" },
  { value: "5 Star", label: "Rating from our clients" },
  { value: "300+", label: "Projects Delivered" },
];

export default function StatsBar() {
  const [current, setCurrent] = React.useState(0);

  // Auto-slide for mobile/tablet
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === stats.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    // Reset to first stat on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) setCurrent(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{ backgroundColor: "#FFF2F9" }} className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-4 md:gap-38 py-8 border-b border-gray-100">
      {/* Mobile/Tablet: show single stat, auto-slide, no arrows */}
      <div className="w-full flex flex-col items-center md:hidden">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center px-6 w-full">
            <span
              className="text-3xl font-semibold mb-1"
              style={{ color: "var(--color-title)", fontFamily: "Futura T OT" }}
            >
              {stats[current].value}
            </span>
            <span className="text-base text-gray font-semibold text-center" style={{ color: "var(--color-black-paragraph)", fontFamily: "Futura T OT" }}>
              {stats[current].label}
            </span>
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex gap-2 mt-4">
          {stats.map((_, idx) => (
            <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-[#C13B7B]' : 'bg-gray-300'}`}></span>
          ))}
        </div>
      </div>
      {/* Desktop: show all stats */}
      <div className="hidden md:flex w-full items-center justify-center gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center px-6">
            <span
              className="text-4xl font-semibold mb-1"
              style={{ color: "var(--color-title)", fontFamily: "Futura T OT" }}
            >
              {stat.value}
            </span>
            <span className="text-lg text-gray font-semibold text-center" style={{ color: "var(--color-black-paragraph)", fontFamily: "Futura T OT" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
