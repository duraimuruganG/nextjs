'use client';

import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import CmsTab from '@/components/services/CmsTab';
import Image from "next/image";

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

// ---------------------------------------------
// Customers Benefit Section Data
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

        {/* Counter Section */}
        <CmsTab />

        {/* ---------------- Customers Benefit Section ---------------- */}
        <section className="px-[50px]">
          {/* Heading */}
          <h2 className="text-[30px] md:text-[50px] !font-[400] !text-[#3A3A3A] text-center mb-2">
            How Customers{" "}
            <span className="!font-[400] text-[#C32C7B]">
              Benefit from a CMS
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="h-[2px] w-28 bg-[#C32C7B] rounded-full my-2" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`relative ${card.bg} rounded-lg px-[50px] pt-[56px] pb-[28px] shadow-md flex flex-col min-h-[200px]`}
              >
                <span className="absolute left-0 top-5 h-12 w-2 bg-[#C32C7B] rounded-r-md inline-block -scale-x-100 -ml-[9px]"></span>

                {/* Image + Title */}
                <div className="flex flex-col items-center mb-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-10 h-10 mb-2"
                  />
                  <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className="!font-[600] !text-[20px] !text-[#3A3A3A] leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[18px] !font-[400]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Why Choose Us Section ---------------- */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-14">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-light text-center mb-2">
            How Fronseye Helps You
            <span className="font-semibold text-[#C32C7B]">
              {" "}
              Achieve CMS Success
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-36 bg-[#C32C7B] rounded-full"></div>
          </div>

          {/* Subheading */}
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            At Fronseye, we specialize in designing and developing
            high-performing, scalable, and user-friendly CMS solutions tailored
            to your business needs. Our expertise in custom CMS development,
            third-party integrations, and digital transformation ensures that
            your business stays ahead in managing content effectively
          </p>

          {/* Why Choose Us Title */}
          <h3
            style={{ fontFamily: "var(--font-paragraph)" }}
            className="text-[30px] font-[600] text-center mb-8"
          >
            Why Choose <span className="text-[#C32C7B]">Us?</span>
          </h3>

          {/* Why Choose Us Cards */}
          <div className="space-y-12">
            {/* Row 1: 4 cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Custom CMS Solutions",
                  text: "Tailored platforms that align with your industry & content goals",
                  image: `/images/cms/cloud.png`,
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
                  className="relative flex flex-col items-center overflow-hidden"
                >
                  <div className="pt-12 flex flex-col items-center w-full bg-[#FAF5F8] border-2 border-dotted border-[#C32C7B] shadow-lg rounded-tl-[130px] rounded-tr-[130px]">
                    <div className="mt-2 mb-4">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={200}
                        height={200}
                        className="imageflex"
                      />
                    </div>
                    <h4 className="text-[#C32C7B] font-semibold text-lg text-center mb-1">
                      {card.title}
                    </h4>
                    <p className="text-gray-700 text-center text-sm mb-6 px-4">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 3 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                {
                  title: "Integration Support",
                  text: "Seamlessly connect with third-party apps and tools",
                },
                {
                  title: "User-Friendly Interface",
                  text: "Intuitive dashboards and workflows for easy management",
                },
                {
                  title: "Ongoing Maintenance",
                  text: "Regular updates and proactive system monitoring",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#FAF5F8] border-2 border-dotted border-[#C32C7B] rounded-tl-[130px] rounded-tr-[130px] shadow-lg flex flex-col items-center max-w-sm"
                >
                  <div className="pt-12 bg-[#FAF5F8] flex flex-col items-center w-full rounded-tl-[130px] rounded-tr-[130px]">
                    <div className="mt-2 mb-4">
                      <svg viewBox="0 0 64 64" className="w-20 h-20">
                        <circle cx="32" cy="32" r="30" fill="#FDE8F3" />
                        <text
                          x="32"
                          y="37"
                          fontSize="20"
                          fill="#C32C7B"
                          textAnchor="middle"
                        >
                          SVG
                        </text>
                      </svg>
                    </div>
                    <h4 className="text-[#C32C7B] font-semibold text-lg text-center mb-1">
                      {card.title}
                    </h4>
                    <p className="text-gray-700 text-center text-sm mb-6 px-4">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <Footer />
    </div>
  );
}
