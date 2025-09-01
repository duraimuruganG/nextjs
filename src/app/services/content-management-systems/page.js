'use client';

import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import {IMAGE_BASE_PATH} from "@/lib/constants";
import CmsTab from '@/components/services/CmsTab';

const homeSlides = [
{
  title: "",
  brand: (
     <h1 className="text-[2.5rem] md:text-[3.5rem] uppercase font-regular leading-[0] mb-[15px]"
                style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif",lineHeight: "60px" }}>
    <span style={{ color: "var(--color-paragraph)" }}>
      Empower Your Digital Presence with{" "}
      <span style={{ color: "var(--color-title)" }}>
        a Robust CMS
      </span>
    </span> </h1>
  ),
  description:
    "Seamlessly create, manage, and optimize content with scalable and user-friendly solutions, ensuring efficiency and innovation at every step",
  button: "Contact us today!!",
}
];

export default function ContentManagementSystemsPage() {
  return (
    <div>
      <Header />
      <Hero slides={homeSlides} contentwidth={"40%"} bgimg={`${IMAGE_BASE_PATH}/cms/cms_banner.svg`} 
       style={{
    cursor: "grab",
    backgroundImage: `
      linear-gradient(
        to right,
        #fff 0%,
        #fff 25%,
        rgba(255,255,255,0.7) 45%,
        rgba(255,255,255,0) 65%
      ),
      url(${IMAGE_BASE_PATH}/cms/cms_banner.svg)
    `,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "67% 140%",
  }}

  mobileStyle={{
    cursor: "grab",
    backgroundImage: `url(${IMAGE_BASE_PATH}/cms/cms_banner.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  
  />
      <main>
  
        {/* counter Section */}
         <CmsTab />
       
      </main>
      <Footer />
    </div>
  );
}