// components/MobileBenefits.js
"use client";

import Image from "next/image";
import {IMAGE_BASE_PATH} from "@/lib/constants";
import autoprefixer from "autoprefixer";

  const points = [
    {
      id: 1,
      title: "Instant Accessibility",
      desc: "Stay connected with your customers anytime, anywhere",
      offset: "translate-x-0 sm:translate-x-6",
    },
    {
      id: 2,
      title: "Enhanced Customer Experience",
      desc: "Personalized interaction and seamless navigation",
      offset: "translate-x-0 sm:translate-x-14",
    },
    {
      id: 3,
      title: "Brand Visibility & Recognition",
      desc: "Strengthen brand identity and customer trust",
      offset: "translate-x-0 sm:translate-x-18",
    },
    {
      id: 4,
      title: "Competitive Advantage",
      desc: "Stay ahead with innovative mobile solutions",
      offset: "translate-x-0 sm:translate-x-14",
    },
    {
      id: 5,
      title: "Higher Engagement & Conversions",
      desc: "Convert leads into loyal customers",
      offset: "translate-x-0 sm:translate-x-6",
    },
  ];


export default function MobileBenefits() {

  return (
         <section className="px-4 py-12">
             <div className="text-center mb-10">
               <span style={{ fontFamily: "Sarcolenta" }} className="text-3xl md:text-4xl font-normal">
                 Why {" "}
                 <span className="text-[#C32C7B] font-normal" style={{ fontFamily: "Sarcolenta" }}>
                   Mobile App Development
                 </span>{" "}
                is Important?
               </span>
   
               <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-[#3A3A3AB2] mt-4 text-center">
                 With billions of smartphone users worldwide, mobile apps serve as a
                 direct bridge between businesses and customers. A well-designed app
                 provides
               </p>
             </div>
   
             <div className="flex flex-col lg:flex-row justify-center gap-0 md:gap-20"> 
                <Image
                  src="/images/mobile.svg"
                  alt="Mobile Illustration"
                  width={300}
                  height={300}
                  className="object-contain mb-2 md:mb-8"
                />
              <div className="relative sm:max-w-[530px]">
                 <Image className="curved_line hidden sm:block" style={{
                   position: "absolute",
                   height: "306px",
                   left: "-94px",
                   top: "55px",
                 }} src={`${IMAGE_BASE_PATH}/services/curve_line.svg`} alt="curve line" width={300} height={700} />
                 {points.map((item) => {
                   let marginTop = "0px";
                   if (item.id === 1) marginTop = "20px";
                   else if (item.id === 2) marginTop = "15px";
                   else if (item.id === 3) marginTop = "9px";
                   else if (item.id === 4) marginTop = "4px";
                   else if (item.id === 5) marginTop = "0px";
   
                   let marginTops = item.id === 5 ? "10px" : "0px";
   
                   return (
                     <div
                       key={item.id}
                       className={`flex items-start space-x-4 ${item.offset} mt-5`}
                     >
                       <div
                         className="w-8 h-8 step rounded-full bg-[#C32C7B] text-white flex items-center justify-center font-bold shadow-md"
                         style={{ marginTop }}
                       >
                         {item.id}
                       </div>
                       <div style={{ marginTop: marginTops }}>
                         <span className="font-semibold text-[25px] text-[#C32C7B]">
                           {item.title}
                         </span>
                         <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-600">{item.desc}</p>
                       </div>
                     </div>
                   );
                 })}
               </div>
             </div>
           </section>
  );
}
