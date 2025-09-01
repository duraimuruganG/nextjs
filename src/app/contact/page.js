'use client';

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Contact } from "lucide-react";
import ContactInformation from "@/components/contact/ContactInformation";
import Map from "@/components/contact/Map";
import Social from "@/components/contact/Social";

export default function contact() {
  return (
    <>
      <Header />
      <ContactInformation />
      <Map />
      <Social />
      <Footer />
    </>
  );
}