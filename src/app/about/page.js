'use client';

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import AboutSection from "@/components/about/AboutSection";
import Story from "@/components/about/Story";
import BannerCTA from "@/components/home/BannerCTA";
import ClientsMap from "@/components/home/ClientsMap";
import Mission from "@/components/about/Mission";
import Achievements from "@/components/about/Achievements";
import Vision from "@/components/about/Vision";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import {IMAGE_BASE_PATH} from "@/lib/constants";

const homeSlides = [
  {
    title: "Welcome to Fronseye",
     brand:  (
     <h1 className="text-[2.5rem] md:text-[3.5rem] font-regular mb-4"
        style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" , lineHeight: '1.1'}}
      >Where <span style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}>Innovation</span> Meets Insight</h1>
  ),
    description: `At Fronseye, we believe in analyzing deeply and acting decisively. Our journey is rooted in the art of  observation identifying gaps, optimizing processes, and crafting solutions that redefine business potential`,
    button: "Contact us today!!",
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

export default function about() {
  return (
    <>
  <Header />
  <Hero slides={homeSlides} bgimg={`${IMAGE_BASE_PATH}/about/about.jpg}`} style={{
      cursor: "grab",
      backgroundImage: `url(${IMAGE_BASE_PATH}/about/about.jpg)`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }} />

  <AboutSection/>
  <Story/>
  <Mission/>
  <Achievements/>
  <Vision/>
  <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg"/>
  <TestimonialsSlider />
  <ClientsMap />
  <Footer />
</>
  );
}