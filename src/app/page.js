'use client';

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import StatsBar from "@/components/home/StatsBar";
import IntroSection from "@/components/home/IntroSection";
import ImageGridSlider from "@/components/home/ImageGridSlider";
import Specialization from "@/components/home/Specialization";
import Products from "@/components/home/Products";
import BannerCTA from "@/components/home/BannerCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseStudiesSlider from "@/components/home/CaseStudiesSlider";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import ClientsMap from "@/components/home/ClientsMap";
import {IMAGE_BASE_PATH} from "@/lib/constants";

const homeSlides = [
  {
    title: "We are",
    brand:  (
     <h1 className="text-[2.5rem] md:text-[3.5rem] font-regular mb-4"
        style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
      >FRONSEYE</h1>
  ),
    description: `In today’s digital landscape, transformation isn’t just an option it’s a necessity. With over 80% of customers engaging online, your business must adapt to meet their expectations. At Fronseye, we specialize in custom software development tailored specifically for your unique needs.`,
    button: "Contact us today!!",
  },
  {
    title: "We are",
    brand:  (
     <h1 className="text-[2.5rem] md:text-[3.5rem] font-regular mb-4"
        style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
      >FRONSEYE</h1>
  ),
    description: `In today’s digital landscape, transformation isn’t just an option it’s a necessity. With over 80% of customers engaging online, your business must adapt to meet their expectations. At Fronseye, we specialize in custom software development tailored specifically for your unique needs.`,
    button: "Contact us todays!!",
  },
];

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

export default function HomePage() {
  return (
    <>
  <Header />
  <Hero slides={homeSlides} bgimg={`${IMAGE_BASE_PATH}/Home_banner.png}`} style={{
    cursor: "grab",
    backgroundImage: `url(${IMAGE_BASE_PATH}/Home_banner.png)`,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "30% 100%",
  }} 
  
  
  mobileStyle={{
      cursor: "grab",
      backgroundImage: `url(${IMAGE_BASE_PATH}/Home_banner.png)`,
      backgroundSize: "cover",
      backgroundPosition: "right center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "45% 100%",
    }}

  />
  <StatsBar />
  <IntroSection />
  <ImageGridSlider />
  <Specialization />
  <Products />
  <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg" />
  <WhyChooseUs />
  <CaseStudiesSlider />
  <TestimonialsSlider />
  <ClientsMap />
  <Footer />
    </>
  );
}
