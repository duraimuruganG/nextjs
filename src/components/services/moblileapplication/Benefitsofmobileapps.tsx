"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE_BASE_PATH } from "@/lib/constants";

const orbitItems = [
  { angle: 0 , cirlcle_style:{ left: '61px',top: '86px',zIndex: 10,width: "80px",height: "80px"},inner_circle_style:{ width: "65px",height: "65px" },trail_style:{ zIndex: 0, position: "absolute", top: "100px", left: "-23px", width: "202px", transform: "rotate(-116deg)"},circle_img:`${IMAGE_BASE_PATH}/services/Loyalty.svg`, arrow_class:"arrow_line absolute rotate-180 right-20 w-[135px] border border-dashed border-black" ,content:(<><h3 className="font-semibold" style={{ fontFamily:"Futura T OT", color:"var(--color-title)"}}
> Enhancing Customer Loyalty </h3> <p style={{color:"var(color-black-dark-paragraph)"}}>Push notifications, loyalty programs,
and real-time updates</p></>) ,content_class:"absolute font-normal right-[230px] w-[220px] text-left"},

  { angle: 0 , cirlcle_style:{ left: '33px',top: '305px',zIndex: 10,width: "80px",height: "80px"},inner_circle_style:{ width: "65px",height: "65px" },trail_style:{ zIndex: 0, position: "absolute", top: "293px", left: "32px", width: "202px", transform: "rotate(-186deg)"},circle_img:`${IMAGE_BASE_PATH}/services/Insight.svg` , arrow_class:"arrow_line absolute rotate-180 right-20 w-[135px] border border-dashed border-black", content:(<><h3 className="font-semibold" style={{ fontFamily:"Futura T OT", color:"var(--color-title)"}}> Providing Real-Time Data & Insights </h3> <p style={{color:"var(color-black-dark-paragraph)"}}>Leverage analytics to make data-driven decisions</p></>) ,content_class:"absolute font-normal right-[230px] w-[220px] text-left" },

   { angle: 0 , cirlcle_style:{ left: '229px',top: '402px',zIndex: 10,width: "80px",height: "80px"},inner_circle_style:{ width: "65px",height: "65px" },trail_style:{ zIndex: 0, position: "absolute", top: "309px", left: "237px", width: "202px", transform: "rotate(110deg)"},circle_img:`${IMAGE_BASE_PATH}/services/salary.svg`, arrow_class:"arrow_line absolute left-20 w-[135px] border border-dashed border-black" ,content:(<><h3 className="font-semibold" style={{ fontFamily:"Futura T OT", color:"var(--color-title)"}}> Increasing Revenue Opportunities </h3> <p style={{color:"var(color-black-dark-paragraph)"}}>In-app purchases, mobile commerce,
and subscription models</p></>) ,content_class:"absolute font-normal left-[230px] w-[220px] text-left" },
  
   { angle: 0 , cirlcle_style:{ right: '21px',top: '251px',zIndex: 10,width: "80px",height: "80px"},inner_circle_style:{ width: "65px",height: "65px" },trail_style:{ zIndex: 0, position: "absolute",  top: "120px", left: "320px", width: "202px", transform: "rotate(34deg)"},circle_img:`${IMAGE_BASE_PATH}/services/Technology.svg` , arrow_class:"arrow_line absolute left-20 w-[135px] border border-dashed border-black",content:(<><h3 className="font-semibold" style={{ fontFamily:"Futura T OT", color:"var(--color-title)"}}> Seamless Integration </h3> <p style={{color:"var(color-black-dark-paragraph)"}}>Connect with existing ERP, CRM, 
and third-party applications</p></>) ,content_class:"absolute font-normal left-[230px] w-[220px] text-left" },
  
   { angle: 0 , cirlcle_style:{ right: '129px',top: '45px',zIndex: 10,width: "80px",height: "80px"},inner_circle_style:{ width: "65px",height: "65px" },trail_style:{ zIndex: 0, position: "absolute", top: "-16px", left: "154px", width: "202px", transform: "rotate(-41deg)"},circle_img:`${IMAGE_BASE_PATH}/services/startup.svg` , arrow_class:"arrow_line absolute left-20 w-[135px] border border-dashed border-black",content:(<><h3 className="font-semibold" style={{ fontFamily:"Futura T OT", color:"var(--color-title)"}}> Boosting Operational Efficiency </h3> <p style={{color:"var(color-black-dark-paragraph)"}}>Automate workflows and reduce
manual efforts</p></>) ,content_class:"absolute font-normal left-[230px] w-[220px] text-left" },

];

export default function BenefitsOrbit() {
  const radius = 180;   // orbit distance from center
  const center = 250;   // half of orbit container
  const duration = 40;  // orbit speed

  return (
    <section className="w-full py-12 bg-white flex flex-col items-center text-center px-4 md:px-10">
      <h2
        className="text-2xl md:text-3xl font-regular mb-4"
        style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}
      >
        Benefits of{" "}
        <span style={{ color: "var(--color-title)" }}>Mobile Apps</span> for Businesses
      </h2>
      <hr className="intro-underline" />

      <div className="relative flex items-center justify-center h-[600px] hidden xl:block">
        {/* Orbit container */}
        <div className="relative w-[500px] h-[500px]">
          {/* Central Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex shadow-lg bg-[#ECEEF0] p-[14px] rounded-full w-[213px] h-[213px]">
            <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-full shadow-lg">
              <img
                src="/images/services/export_privilege.svg"
                alt="Benefits"
                className="w-12 h-12 mb-2"
              />
              <p className="text-lg font-bold text-pink-600">Benefits</p>
            </div>
          </div>

          {/* Trails + Orbiting Circles */}
          {orbitItems.map((item, idx) => {
            // Fix: Ensure position property is typed correctly for CSSProperties
            const trailStyle = {
              ...item.trail_style,
              position: "absolute" as const,
            };

            return (

              <motion.div
                key={idx}
                className=""
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration }}
                style={{ rotate: `${item.angle}deg` }}
              >
                {/* Trail aligned to orbit */}
                <Image
                  src={`${IMAGE_BASE_PATH}/services/tail.svg`}
                  alt="Orbit Path"
                  width={170}
                  height={170}
                  className=""
                  style={trailStyle}
                />

                {/* Orbiting Circle */}
                <div
                  className="absolute w-16 h-16 flex items-center justify-center bg-[#ECEEF0] rounded-full shadow-lg shadow-[rgba(133,131,131,0.59)] smooth-pulse"
                   style={item.cirlcle_style}
                >
                  <div className="flex items-center justify-center bg-white rounded-full"
                   style={item.inner_circle_style}
                  >
                   <Image
                  src={item.circle_img}
                  alt="Orbit Path"
                  width={35}
                  height={35}
                />
                 <span className={item.arrow_class}></span>
                 <div className={item.content_class}>{item.content}</div>
                  </div>
                </div>
              </motion.div>

            );
          })}
        </div>
      </div>



      {/* Mobile View */}
      <div className="w-full flex flex-col items-center justify-center space-y-8 xl:hidden mt-10">
               {/* Trails + Orbiting Circles */}
          {orbitItems.map((item, idx) => {
            return (
              <div key={idx} className="w-full flex items-center space-x-6 px-4">
                <div className="flex items-center w-[60px] h-[60px] justify-center bg-[#ECEEF0] rounded-full smooth-pulse">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full shadow-lg shadow-[rgba(133,131,131,0.59)]">

                  <Image
                    src={item.circle_img}
                    alt="Orbit Path"
                    width={25}
                    height={25}
                    
                  />

                  </div>
                </div>
                <div className="text-left">{item.content}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
}