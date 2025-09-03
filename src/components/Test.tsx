"use client";

import { motion } from "framer-motion";
import { BarChart, Users, Zap, Gift, Star } from "lucide-react";
import {IMAGE_BASE_PATH} from "@/lib/constants";

const orbitItems = [
  { icon: <BarChart size={24} />, angle: 0 },
  { icon: <Zap size={24} />, angle: 72 },
  { icon: <Gift size={24} />, angle: 144 },
  { icon: <Users size={24} />, angle: 216 },
  { icon: <Star size={24} />, angle: 288 },
];

export default function BenefitsOrbit() {
  const radius = 180;
  const center = 250;
  const circumference = 2 * Math.PI * radius;
  const duration = 40;

  return (
    <div className="relative flex items-center justify-center h-[600px] w-full overflow-hidden">
      {/* Central Circle */}
      <div className="absolute z-20 flex shadow-lg bg-[#ECEEF0] mx-auto p-[14px] rounded-[104px]">
      <div className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
        <img
          src="/images/services/export_privilege.svg"
          alt="Benefits"
          className="w-12 h-12 mb-2"
        />
        <p className="text-lg font-bold text-pink-600">Benefits</p>
      </div>
    </div>


      {orbitItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute w-[500px] h-[500px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration }}
          style={{ rotate: `${item.angle}deg` }}
        >
          {/* Trail */}
          <svg
            className="absolute top-0 left-0"
            width="500"
            height="500"
            viewBox="0 0 500 500"
          >
            <defs>
              <linearGradient
                id={`trail-${idx}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={`url(#trail-${idx})`}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * 0.85}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration }}
              style={{ transformOrigin: "50% 50%" }}
            />
          </svg>

          {/* Orbiting icon (rotates with trail) */}
          <div
            className="absolute w-16 h-16 flex items-center justify-center bg-white rounded-full border-2 border-pink-500 shadow-md z-10"
            style={{
              left: `${center + radius - 32}px`, // 32 = half icon size
              top: `${center - 32}px`,
            }}
          >
            {item.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
