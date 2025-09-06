"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import BannerCTA from "@/components/home/BannerCTA";
import Benefitsofmobileapps from "@/components/services/moblileapplication/Benefitsofmobileapps";
import WhyChoose from "@/components/services/moblileapplication/Whychoose";
import {IMAGE_BASE_PATH} from "@/lib/constants";
import Hero from "@/components/common/Hero";
import Mobileappbusiness from "@/components/services/moblileapplication/Mobileappbusiness";

const Bannerslides = [
  {
    black: 'Let’s Build Your',
    pink: "Next-Gen Mobile App!",
    discription: "Get in touch with us today to discuss your project",
    button: "Contact us today!!",
    CustomClass: "mobile",
    link:'about',
  },
]; 

const homeSlides = [
  {
    title: "",
    brand:  (
     <h1 className="text-[2.5rem] md:text-[3.5rem] font-regular mb-4"
        style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
      >Transform Your Business with <span style={{ color: "var(--color-paragraph)"}}> Cutting-Edge Mobile Apps </span></h1>
  ),
    description: 'Transform your enterprise with cutting-edge software solutions that streamline operations, enhance productivity, and drive growth',
    button: "Contact us today!!",
  }
];

      const cardData = [
        {
          id: 1,
          title: "Custom App Solutions",
          desc: "Designed to fit your business model perfectly",
          image: `${IMAGE_BASE_PATH}/Booking.svg`,
        },
        {
          id: 2,
          title: "Native & Cross-Platform Development",
          desc: "Ensuring a seamless experience across devices",
          image: `${IMAGE_BASE_PATH}/Cross-platform.svg`,
        },
        {
          id: 3,
          title: "Agile Development Approach",
          desc: "Rapid delivery with continuous improvements",
          image: `${IMAGE_BASE_PATH}/Agile.svg`,
        },
        {
          id: 4,
          title: "UI/UX Excellence",
          desc: "Intuitive, user-friendly, and engaging app designs",
          image: `${IMAGE_BASE_PATH}/Ux-design.svg`,
        },
        {
          id: 5,
          title: "Advanced Security & Compliance",
          desc: "Implementing the latest security measures",
          image: `${IMAGE_BASE_PATH}/Secure-shield.svg`,
        },
        {
          id: 6,
          title: "Integration & Scalability",
          desc: "Apps that grow with your business needs",
          image: `${IMAGE_BASE_PATH}/Technology.svg`,
        },
        {
          id: 7,
          title: "Post-Launch Support & Maintenance",
          desc: "Keeping your app updated and running smoothly",
          image: `${IMAGE_BASE_PATH}/Support.svg`,
        },
      ];

export default function MobileAppDevelopment() {
 
  return (
    <>
      <Header />
          <Hero slides={homeSlides} contentwidth={"60%"} bgimg={`${IMAGE_BASE_PATH}/services/social-media-marketing-concept_.svg`} 
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
              url(${IMAGE_BASE_PATH}/services/social-media-marketing-concept_.svg)
            `,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "67% 140%",
          }}
        
          mobileStyle={{
            cursor: "grab",
            backgroundImage: `url(${IMAGE_BASE_PATH}/services/social-media-marketing-concept_.svg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
      />
      <Mobileappbusiness/>
      <Benefitsofmobileapps/> 
      <WhyChoose cardData = {cardData}/>
      <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg" />   
     <Footer />
    </>
  );
}
 
