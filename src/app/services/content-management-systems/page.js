'use client';

import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import CmsTab from '@/components/services/cms/CmsTab';
//import Image from "next/image";
import BannerCTA from "@/components/home/BannerCTA";
import BenefitSoftware from "@/components/services/Software/Benefits-Software";

const IMAGE_BASE_PATH = "/images"; // Base path for images

// ---------------------------------------------
// Hero Slider Content
// ---------------------------------------------
const homeSlides = [
  {
    title: "",
    brand: (
      <h1
        className="text-[2.5rem] md:text-[3.5rem] uppercase font-regular leading-[0] mb-[15px]"
        style={{
          color: "var(--color-title)",
          fontFamily: "Sarcolenta, serif",
          lineHeight: "60px",
        }}
      >
        <span style={{ color: "var(--color-black-dark-paragraph)" }}>
          Empower Your Digital Presence with{" "}
          <span style={{ color: "var(--color-title)" }}>a Robust CMS</span>
        </span>
      </h1>
    ),
    description:
      "Seamlessly create, manage, and optimize content with scalable and user-friendly solutions, ensuring efficiency and innovation at every step",
    button: "Contact us today!!",
  },
];


const Bannerslides = [
  {
    black: 'Take Control of Your Digital Content with',
    pink: "Fronseye!",
    discription: "",
    button: "Contact us today!!",
    CustomClass: "Software",
    link:'contact',
  },
];  

// ---------------------------------------------
// Benifits Cards Content
// ---------------------------------------------

const cards = [
  {
    title: "Easy Content Creation & Management",
    desc: "Update, modify, and publish content without coding skills",
    bg: "bg-[#FAF5F8]",
    image: "/images/cms/contenttwo.png",
  },
  {
    title: "SEO & Digital Marketing Friendly",
    desc: "Built-in tools to optimize content for search engines",
    bg: "bg-[#FAF5F8]",
    image: "/images/cms/seo-mk.png",
  },
  {
    title: "Customizable & Scalable",
    desc: "Adaptable to business needs with plugins and extensions",
    bg: "bg-[#FAF5F8]",
    image: "/images/cms/scalable.png",
  },
  {
    title: "Improved Collaboration",
    desc: "Role-based access for teams to manage different aspects of content",
    bg: "bg-[#FAF5F8]",
    image: "/images/cms/collabration.png",
  },
  {
    title: "Secure & Reliable",
    desc: "Regular updates, security patches, and role-based permissions",
    bg: "bg-[#FAF5F8]",
    image: "/images/cms/reliable.png",
  },
  {
    title: "Omnichannel Content Distribution",
    desc: "Deliver content seamlessly across websites, apps, and digital platforms",
    bg: "bg-[#FAF5F8]",
    image: "/images/cms/omni.png",
  },
];  

// ---------------------------------------------
// Page Component
// ---------------------------------------------
export default function ContentManagementSystemsPage() {
  return (
    <div>
      {/* ---------------- Header ---------------- */}
      <Header />

      {/* ---------------- Hero Section ---------------- */}
      <Hero
        slides={homeSlides}
        contentwidth={"40%"}
        bgimg={`/cms/cms_banner.svg`}
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

      {/* ---------------- Main Content ---------------- */}
      <main>
        {/* Intro Section */}
        <section className="max-w-full mx-auto px-[15px] md:px-[50px] pt-[164px] pb-[64px]">
          <h2
            style={{ fontFamily: "var(--font-paragraph)" }}
            className="text-[25px] md:text-[30px] font-[700] mb-4"
          >
            <span className="text-[#C32C7B]">Streamline &amp; Manage</span>
            <span className="text-[#3A3A3A]">
              {" "}
              Your Digital Content with a Robust CMS
            </span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-2">
            In today’s digital landscape, businesses need an efficient,
            scalable Content Management System (CMS) to create, manage, and
            optimize content seamlessly. A well-designed CMS allows
            organizations to maintain their website, publish content, and
            engage their audience without technical expertise. Whether for a
            blog, corporate website, e-commerce store, or enterprise solution,
            a CMS empowers you to control your online presence with ease.
          </p>
        </section>

        {/* cms tab Section */}
        <CmsTab />

        {/* ---------------- Customers Benefit Section ---------------- */}

        <h2 className="text-[30px] md:text-[50px] !font-[400] !text-[#3A3A3A] mt-[98px] text-center mb-2">
        Benefits of{" "}
        <span className="!font-[400] text-[#C32C7B]">Custom Software</span> for
        Your Industry
      </h2>
      <div className="flex justify-center">
        <div className="h-[2px] w-28 bg-[#C32C7B] rounded-full my-2" />
      </div>
        
        <BenefitSoftware cards={cards} />

        {/* ---------------- Why Choose Us Section ---------------- */}
        <section className="md:!py-[125px]">
          {/* Heading */}
          <h2 className="!text-[#3a3a3a] text-[30px] md:text-[50px] font-light text-center mb-2">
            How Fronseye Helps You
            <span className="!font-[400] text-[#C32C7B]">
              {" "}
              Achieve CMS Success
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-36 bg-[#C32C7B] rounded-full"></div>
          </div>

          {/* Subheading */}
          <p className="text-center text-gray-600 md:ml-[50px] md:mr-[50px] mx-auto mb-10 leading-relaxed">
            At Fronseye, we specialize in designing and developing
            high-performing, scalable, and user-friendly CMS solutions tailored
            to your business needs. Our expertise in custom CMS development,
            third-party integrations, and digital transformation ensures that
            your business stays ahead in managing content effectively
          </p>

          {/* Why Choose Us Title */}
         <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[24px] md:text-[30px] !font-[600] !text-[#3A3A3A] !mb-[80px] text-center">
          Why Choose{" "}
          <span className="!font-[600] text-[#C32C7B]">Us?</span>
        </h3>
        {/* Two Rows */}
        <div className="mycls">
          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-1 md:pb-[125px] md:grid-cols-4 gap-[110px] md:gap-[60px] lg:gap-[60px] justify-self-center">
            {[
              {
                title: "Custom CMS Solutions",
                text: "Tailored platforms that align with your industry & content goals",
                image: `/images/cms/customcms.png`,
              },
              {
                title: "Scalability & Flexibility",
                text: "Solutions that grow with your business needs",
                image: `/images/cms/scalability.png`,
              },
              {
                title: "Security & Performance",
                text: "End-to-end encryption, secure hosting, and performance optimization",
                image: `/images/cms/security.png`,
              },
              {
                title: "SEO & Marketing Ready",
                text: "Built-in SEO, analytics, and marketing automation tools",
                image: `/images/cms/seo.png`,
              },
            ].map((card, idx) => (
               <div
                key={idx}
                className="relative flex flex-col items-start"
              >
                 <div className="flex flex-col justify-center px-[25px] w-[243px] !h-[270px] bg-[#FAF5F8] border-2 border-dotted border-[#C32C7B] rounded-tl-[130px] rounded-tr-[130px]">
                  <div className="mt-[-70px] mb-[12px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover"
                    />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[#C32C7B] !font-[600] !text-[20px] text-left mb-1">
                    {card.title}
                  </h4>
                  <p className="font-400 text-[18px] text-left">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 cards centered */}
          <div className="grid grid-cols-1 md:pb-[125px] md:grid-cols-3 gap-[60px] justify-self-center gap-[110px] md:gap-[60px] lg:gap-[60px]">
            {[
              {
                title: "Mobile & Cloud-Optimized",
                text: "Responsive & cloud-ready CMS for seamless access",
                image: `/images/cms/mobileCloud.png`,
              },
              {
               title: "Omnichannel Content Strategy",
                text: "Deliver content across web, mobile, & social channels",
                image: `/images/cms/omnichannel.png`,
              },
              {
                title: "Third-Party Integration",
                text: "Smooth integration with CRMs, ERPs, payment gateways, & marketing tools",
                image: `/images/cms/thirdparty.png`,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-start"
              >
                 <div className="flex flex-col justify-center px-[25px] w-[243px] !h-[270px] bg-[#FAF5F8] border-2 border-dotted border-[#C32C7B] rounded-tl-[130px] rounded-tr-[130px]">
                  <div className="mt-[-70px] mb-[12px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover"
                    />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[#C32C7B] !font-[600] !text-[20px] text-left mb-1">
                    {card.title}
                  </h4>
                  <p className="font-400 text-[18px] text-left">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

         <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg" />


      </main>

      {/* ---------------- Footer ---------------- */}
      <Footer />
    </div>
  );
}
