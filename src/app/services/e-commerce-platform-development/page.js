'use client';

import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import {IMAGE_BASE_PATH} from "@/lib/constants";
import EcommerecAbout from "@/components/services/e-commerce/About";
import EcommerceTypes from "@/components/services/e-commerce/ECommerce-Slider";
import BenefitsSection from "@/components/services/e-commerce/BenefitsSection";
import BulbSection from "@/components/services/e-commerce/BulbSection";
import LongTerm from "@/components/services/e-commerce/LongTerm";
import BannerCTA from "@/components/home/BannerCTA";
 
  
const homeSlides = [
{
  title: "",
  brand: (
     <h1 className="text-[30px] md:text-[50px] lg:text-[50px] uppercase font-regular leading-[0] mb-[15px]"
                style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif",lineHeight: "60px" }}>
    <span style={{ color: "var(--color-paragraph)" }}>
     Scalable & High Performance{" "} <br/>
      <span style={{ color: "var(--color-title)" }}>
        E-Commerce Solutions
      </span>
    </span> </h1>
  ),
  description:
    (<span className="block  w-full lg:w-[60%]"> Transform your business with a powerful, feature-rich online store. Whether single-vendor or multi-vendor, we build secure, scalable platforms tailored to your success</span>),
  button: "Contact us today!!",
}
];
 
const Bannerslides = [
  {
    black: 'Let’s Build Your',
    pink: "E-Commerce Success Story!",
    discription: "Take your business online with a powerful, feature-rich, and scalable e-commerce platform",
    button: "Contact us today!!",
    CustomClass: "E-commerce",
    link:'about',
  },
];

export default function E_Commerce() {

    return (

        <div>
        <Header />
        <Hero slides={homeSlides} contentwidth={"40%"} bgimg={`${IMAGE_BASE_PATH}/E-Commerce/e-commerce-banner.png`} 
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
                url(${IMAGE_BASE_PATH}/E-Commerce/e-commerce-banner.png)
                `,
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "67% 140%",
            }}
             
            mobileStyle={{
                cursor: "grab",
                backgroundImage: `url(${IMAGE_BASE_PATH}/E-Commerce/e-commerce-banner.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
               
        />

        <main className='lg:pb-40'>


        <EcommerecAbout />
        <EcommerceTypes />
        <BenefitsSection />
        <BulbSection />
        <LongTerm />
        <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg" />
        

        
        </main>



        <Footer />
        </div>
    )
}