'use client';

import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
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
          <span style={{ color: "var(--color-title)" }}>Scalable Enterprise Solutions</span>
        </span>
      </h1>
    ),
    description:
      "Transform your enterprise with cutting-edge software solutions that streamline operations, enhance productivity, and drive growth",
    button: "Contact us today!!",
  },
];

// CAT Content
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
    title: "Increased Operational Efficiency",
    desc: "Reduce manual efforts and accelerate processes",
    bg: "bg-[#FAF5F8]",
    image: "/images/EnterpriseApplicationDevelopment/efficiency.svg",
  },
  {
    title: "Seamless Integration",
    desc: "Connect different enterprise tools, such as ERP, CRM, HRMS, and more",
    bg: "bg-[#FAF5F8]",
    image: "/images/EnterpriseApplicationDevelopment/seamless.svg",
  },
  {
    title: "Better Resource Management",
    desc: "Optimize workforce, supply chain, and financial processes",
    bg: "bg-[#FAF5F8]",
    image: "/images/EnterpriseApplicationDevelopment/resource.svg",
  },
  {
    title: "Data-Driven Decision Making",
    desc: "Leverage AI-driven insights for smarter business strategies",
    bg: "bg-[#FAF5F8]",
    image: "/images/EnterpriseApplicationDevelopment/decision.svg",
  },
  {
    title: "Cost Savings in the Long Run",
    desc: "Automate processes, minimize errors, and reduce operational costs",
    bg: "bg-[#FAF5F8]",
    image: "/images/EnterpriseApplicationDevelopment/cost.svg",
  },
  {
    title: "Enhanced User Experience",
    desc: "Provide employees and customers with a smooth, intuitive interface",
    bg: "bg-[#FAF5F8]",
    image: "/images/EnterpriseApplicationDevelopment/user.svg",
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
        bgimg={`/EnterpriseApplicationDevelopment/mainbanner.svg`}
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
            url(${IMAGE_BASE_PATH}/EnterpriseApplicationDevelopment/mainbanner.svg)
          `,
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "67% 140%",
        }}
        mobileStyle={{
          cursor: "grab",
          backgroundImage: `url(${IMAGE_BASE_PATH}/EnterpriseApplicationDevelopment/mainbanner.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ---------------- Main Content ---------------- */}
      <main>

         <div className="mb-4 text-center sarcolenta mt-[68px]">
            <span className="text-[#C32C7B] text-[50px] font-[400] inline-block align-baseline">About</span>
            <span className="text-[#3A3A3A] text-[50px] font-[400] ml-2 align-baseline">the Service</span>
            <div className="w-[200px] border-b-2 border-[#C32C7B] mt-[21px] mx-auto"></div>
          </div>

        <div className="min-h-screen py-10 px-4">
      <div className="mx-auto flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Illustration */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={`${IMAGE_BASE_PATH}/EnterpriseApplicationDevelopment/aboutservice.svg`}
            alt="Enterprise Illustration"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 w-full mt-8 lg:mt-2 mx-auto lg:mx-0 px-2 lg:px-0">
          {/* Section tag/headline with underline */}

          {/* Main Title */}
          <h2 className="text-[30px] font-[600] mb-[18px] futuratot !text-[#3A3A3A]">
            Empowering Businesses with Scalable Enterprise Solutions
          </h2>

          {/* Intro Paragraph */}
          <p className="text-[20px] text-[#3A3A3AB2] font-400 mb-6 leading-relaxed futuratot">
            In today’s fast-paced digital world, enterprises need robust, scalable, and secure software solutions to streamline operations, enhance productivity, and drive business growth. Enterprise Application Development plays a crucial role in modernizing workflows, integrating systems, and improving overall efficiency. Whether it’s ERP, CRM, HRM, or custom enterprise solutions, having a well-built application can transform the way your organization operates
          </p>

          {/* Why Section */}
          <h3 className="text-[30px] font-[600] !text-[#3A3A3A] mt-[58px] mb-[8px] futuratot">
            Why is <span className="text-[#C32C7B] font-bold">Enterprise Application Development</span> Important?
          </h3>
          <p className="text-[20px] text-[#3A3A3A] font-[400] mb-[28px]">
            Enterprises deal with complex processes, massive data, and multiple teams working across various departments. A well-structured enterprise application
          </p>

          {/* Feature List with Dotted Line */}
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="absolute left-[5.2px] top-3 bottom-3 w-0.5 border-l-2 border-solid border-[#C32C7B] z-0" />
            <ul className="space-y-2 relative z-10 text-[20px] text-[#3A3A3A] futuratot">
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-3 h-3 rounded-full bg-[#C32C7B] inline-block flex-shrink-0 z-10"></span>
                <span>
                  <span className="font-bold text-[#3A3A3A]">Optimizes Business Processes:</span>
                  <span className="text-[#3A3A3A]"> Automates tasks and eliminates inefficiencies</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-3 h-3 rounded-full bg-[#C32C7B] inline-block flex-shrink-0 z-10"></span>
                <span>
                  <span className="font-bold text-[#3A3A3A]">Improves Collaboration:</span>
                  <span className="text-[#3A3A3A]"> Enables seamless communication across teams &amp; departments</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-3 h-3 rounded-full bg-[#C32C7B] inline-block flex-shrink-0 z-10"></span>
                <span>
                  <span className="font-bold text-[#3A3A3A]">Enhances Decision-Making:</span>
                  <span className="text-[#3A3A3A]"> Provides real-time analytics and business insights</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-3 h-3 rounded-full bg-[#C32C7B] inline-block flex-shrink-0 z-10"></span>
                <span>
                  <span className="font-bold text-[#3A3A3A]">Boosts Scalability &amp; Flexibility:</span>
                  <span className="text-[#3A3A3A]"> Grows alongside your expanding business needs</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-3 h-3 rounded-full bg-[#C32C7B] inline-block flex-shrink-0 z-10"></span>
                <span>
                  <span className="font-bold">Ensures Security &amp; Compliance:</span>
                  <span className="text-[#3A3A3A]"> Protects sensitive business data and meets industry regulations</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 

        {/* ---------------- Customers Benefit Section ---------------- */}

        <h2 className="text-[30px] md:text-[50px] !font-[400] !text-[#3A3A3A] text-center mb-2">
        What Does{" "}
        <span className="!font-[400] text-[#C32C7B]">Your Organization Gain?</span>
        </h2>
        <div className="flex justify-center">
          <div className="h-[2px] w-28 bg-[#C32C7B] rounded-full my-2" />
        </div>
        
         <p className="text-[20px] text-[#3A3A3A] text-center font-[400] mt-[35px]">
            Implementing a custom enterprise application unlocks numerous benefits for your business
          </p>

        <BenefitSoftware cards={cards} />

        {/* ---------------- Why Choose Us Section ---------------- */}
        <section className="mydiv">
          {/* Heading */}
          <h2 className="!text-[#3a3a3a] text-[30px] md:text-[50px] font-light text-center mb-2">
            Why Choose Us for
            <span className="!font-[400] text-[#C32C7B]">
              {" "}
              Enterprise Application Development?
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-36 bg-[#C32C7B] rounded-full"></div>
          </div>

          {/* Subheading */}
          <p className="text-center text-gray-600 md:ml-[50px] md:mr-[50px] mx-auto mb-[136px] leading-relaxed">
            At Fronseye, we specialize in designing and developing
            high-performing, scalable, and user-friendly CMS solutions tailored
            to your business needs. Our expertise in custom CMS development,
            third-party integrations, and digital transformation ensures that
            your business stays ahead in managing content effectively
          </p>

        {/* Two Rows */}
        <div className="mycls">
          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-1 md:pb-[125px] md:grid-cols-4 gap-[110px] md:gap-[60px] lg:gap-[60px] justify-self-center">
            {[
              {
                title: "Custom-Tailored Solutions",
                text: "Designed to align with your specific business needs",
                image: `/images/EnterpriseApplicationDevelopment/custom.svg`,
              },
              {
                title: "Cloud-Ready & Scalable Architecture",
                text: "Ensuring future growth without limitations",
                image: `/images/EnterpriseApplicationDevelopment/cloud.svg`,
              },
              {
                title: "Secure & Compliant",
                text: "Implementing best-in-class security standards and compliance measures",
                image: `/images/EnterpriseApplicationDevelopment/secure.svg`,
              },
              {
                title: "Seamless System Integration",
                text: "Connecting various enterprise tools for unified operations",
                image: `/images/EnterpriseApplicationDevelopment/system.svg`,
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
                title: "Agile & DevOps Approach",
                text: "Fast development cycles with continuous improvements",
                image: `/images/EnterpriseApplicationDevelopment/agile.svg`,
              },
              {
               title: "Cross-Platform Accessibility",
                text: "Web-based, mobile, & desktop apps for enterprise mobility",
                image: `/images/EnterpriseApplicationDevelopment/cross-platform.svg`,
              },
              {
                title: "24/7 Support & Maintenance",
                text: "Keeping your enterprise application secure and up to date",
                image: `/images/EnterpriseApplicationDevelopment/support.svg`,
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


      <section className="flex justify-center mb-[75px] px-0 min-w-0">
      <div className="w-full md:px-[80px] lg:px-[160px]">
        <div className="border bg-[#FAF5F8] border-[#C32C7B] rounded-lg px-[42px] py-[20px] mb-[155px] mt-[50px] md:mt-[0px] text-center">
          <p className="text-[#3A3A3A] text-[20px] font-[400]">
            With years of experience in{' '}
            <span className="text-[#C32C7B] font-bold">
              developing mission-critical enterprise applications
            </span>
            , we empower businesses to{' '}
            <span className="text-[#C32C7B] font-bold">
              stay ahead in the competitive landscape
            </span>
            . Whether you need a{' '}
            <span className="text-[#C32C7B] font-bold">
              custom ERP solution, workflow automation software, or a data-driven enterprise platform
            </span>
            , we deliver solutions that{' '}
            <span className="text-[#C32C7B] font-bold">
              scale, adapt, and drive success
            </span>
            .
          </p>
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
