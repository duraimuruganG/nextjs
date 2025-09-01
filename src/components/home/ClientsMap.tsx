"use client";
import { useState } from "react";

interface Location {
  country: string;
  top: string;   // use % only
  left: string;  // use % only
}

const locations: Location[] = [
  { country: "United States", top: "30%", left: "25%" },
  { country: "Germany", top: "28%", left: "52%" },
  { country: "India", top: "50%", left: "68.8%" },     
  { country: "Australia", top: "75%", left: "85%" },
  { country: "South Africa", top: "70%", left: "50%" },
  // ➕ Add more places as needed
];

export default function ClientsMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Background Map */}
      <img
        src="/images/home/map.png"
        alt="World Map"
        className="w-full h-auto"
      />

      {/* Dots */}
      {locations.map((loc, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{ top: loc.top, left: loc.left }}
          onMouseEnter={() => setHovered(loc.country)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Blinking Dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
          </span>

          {/* Tooltip */}
          {hovered === loc.country && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded-md shadow-md whitespace-nowrap">
              {loc.country}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
