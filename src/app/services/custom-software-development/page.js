'use client';

import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import {IMAGE_BASE_PATH} from "@/lib/constants";
import SoftwareAbout from "@/components/services/Software/SoftwareAbout";
import BenefitSoftware from "@/components/services/Software/Benefits-Software";
import Cone from "@/components/services/Software/Cone";
import Expertise from "@/components/services/Software/Expertise";
import BannerCTA from "@/components/home/BannerCTA";
const homeSlides = [
{
  title: "",
  brand: (
     <h1 className="text-[30px] md:text-[50px] lg:text-[50px] uppercase font-regular leading-[0] mb-[15px] color-pink"
                style={{ fontFamily: "Sarcolenta, serif",lineHeight: "60px" }}>
      Custom Software Development{" "}
      <span className="dark-black">
        Tailored Solutions for Your Business
      </span>
    </h1>
  ),
  description:
    (<span className="block  w-full lg:w-[60%]">Seamlessly create, manage, and optimize content with scalable and user-friendly solutions</span>),
  button: "Contact us today!!",
}
];
 
const Bannerslides = [
  {
    black: 'Ready to Build Your',
    pink: "Custom Software?",
    discription: "Let’s discuss your project and build something incredible together!",
    button: "Contact us today!!",
    CustomClass: "Software",
    link:'about',
  },
];

// ---------------------------------------------
// Benifits Cards Content
// ---------------------------------------------

const cards = [
  {
    title: "Retail & E-commerce",
    desc: "Personalized shopping experiences, inventory management, & seamless payment integrations",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Cart.svg",
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant patient management, telemedicine, & electronic health records (EHR)",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Heart.svg",
  },
  {
    title: "Finance & Banking",
    desc: "Secure transaction processing, fraud detection, & automated financial reporting",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Storage.svg",
  },
  {
    title: "Manufacturing & Logistics",
    desc: "Smart supply chain management, real-time tracking, and automation",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Global.svg",
  },
  {
    title: "Education & E-learning",
    desc: "Interactive learning platforms, student management systems, & AI-driven analytics",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Cap.svg",
  },
  {
    title: "Real Estate",
    desc: "Property listing portals, automated contract generation, and CRM solutions",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Home.svg",
  },
];  

export default function CustomSoftwareDevelop() {

    return (

        <div>
        <Header />
        <Hero slides={homeSlides} contentwidth={"40%"} bgimg={`${IMAGE_BASE_PATH}/software/software-banner.png`} 
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
                url(${IMAGE_BASE_PATH}/software/software-banner.png)
                `,
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "67% 140%",
            }}
             
            mobileStyle={{
                cursor: "grab",
                backgroundImage: `url(${IMAGE_BASE_PATH}/software/software-banner.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
               
        />

        <main className='lg:pb-40'>
         

         <SoftwareAbout />

          <h2 className="text-[30px] md:text-[50px] !font-[400] !text-[#3A3A3A] text-center mb-2">
                  Benefits of{" "}
                  <span className="!font-[400] text-[#C32C7B]">Custom Software</span> for
                  Your Industry
                </h2>
                <div className="flex justify-center">
                  <div className="h-[2px] w-28 bg-[#C32C7B] rounded-full my-2" />
          </div>

         <BenefitSoftware cards={cards} />
         <Cone />
         <Expertise />
         <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg" />
        </main>
        <Footer />
        </div>
    )
}