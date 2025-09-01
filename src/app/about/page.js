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

const homeSlides = [
  {
    title: "Welcome to Fronseye",
    brand: "Where Innovation Meets Insight",
    description: `At Fronseye, we believe in analyzing deeply and acting decisively. Our journey is rooted in the art of  observation identifying gaps, optimizing processes, and crafting solutions that redefine business potential`,
    button: "Contact us today!!",
  },
];

export default function about() {
  return (
    <>
  <Header />
  <Hero slides={homeSlides} bgimg="/images/about/about.jpg" />
  <AboutSection/>
  <Story/>
  <Mission/>
  <Achievements/>
  <Vision/>
  <BannerCTA/>
  <TestimonialsSlider />
  <ClientsMap />
  <Footer />
</>
  );
}