import { useState } from "react";

const IMAGE_BASE_PATH = "/images/cms";

type Tab = {
  label: string;
  desc: string;
};

type Card = {
  title: string;
  desc: string;
  image: string;
};

const tabs: Tab[] = [
  {
    label: "Open-Source CMS",
    desc: "Popular for flexibility, customization, and community support. Ideal for businesses looking for full control over their content.",
  },
  {
    label: "Proprietary CMS",
    desc: "Commercial platforms with premium features and dedicated support.",
  },
  {
    label: "Headless CMS",
    desc: "A modern CMS architecture that separates content management from content delivery",
  },
  {
    label: "E-Commerce CMS",
    desc: "For businesses that need an integrated CMS with e-commerce functionalities",
  },
];

const tabCards: Card[][] = [
  [
    {
      title: "WordPress",
      desc: "Most widely used CMS, perfect for blogs, websites, & e-commerce",
      image: `${IMAGE_BASE_PATH}/wordpress.png`,
    },
    {
      title: "Drupal",
      desc: "Highly customizable and secure, preferred for enterprise solutions",
      image: `${IMAGE_BASE_PATH}/drupal.png`,
    },
    {
      title: "Joomla",
      desc: "Great for social networking sites and e-commerce platforms",
      image: `${IMAGE_BASE_PATH}/joomla.png`,
    },
  ],
  [
    {
      title: "Adobe Experience Manager (AEM)",
      desc: "Advanced enterprise-level CMS with AI-powered personalization",
      image: `${IMAGE_BASE_PATH}/adobe.png`,
    },
    {
      title: "Sitecore",
      desc: "Robust digital experience platform for personalized content management",
      image: `${IMAGE_BASE_PATH}/sitescore.png`,
    },
    {
      title: "Kentico",
      desc: "All-in-one CMS, e-commerce, and marketing automation solution",
      image: `${IMAGE_BASE_PATH}/kentico.png`,
    },
  ],
  [
    {
      title: "Strapi",
      desc: "Open-source headless CMS for flexible API-based content",
      image: `${IMAGE_BASE_PATH}/strapi.png`,
    },
    {
      title: "Contentful",
      desc: "Cloud-based headless CMS for omnichannel experiences",
      image: `${IMAGE_BASE_PATH}/content.png`,
    },
    {
      title: "Sanity",
      desc: "API-driven CMS for fast and flexible content management",
      image: `${IMAGE_BASE_PATH}/sanity.png`,
    },
  ],
  [
    {
      title: "Magento",
      desc: "Feature-rich e-commerce platform with CMS capabilities",
      image: `${IMAGE_BASE_PATH}/magento.png`,
    },
    {
      title: "Shopify",
      desc: "Easy-to-use hosted e-commerce CMS for online stores",
      image: `${IMAGE_BASE_PATH}/shopify.png`,
    },
    {
      title: "WooCommerce",
      desc: "WordPress-based e-commerce CMS with flexibility",
      image: `${IMAGE_BASE_PATH}/woocommerce.png`,
    },
  ],
];

export default function ExactCmsSection() {
  const [active, setActive] = useState<number>(0);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  return (
    <>
      {/* DESKTOP/TABLET VERSION */}
      <section className="hidden md:flex flex-col md:flex-row max-w-full">
        {/* Left Panel */}
        <div
          style={{ borderTopRightRadius: "15px" }}
          className="relative aftercls bg-[#C32C7B] w-full md:w-[40%] text-white flex flex-col px-8 py-10"
        >
          <h3 className="text-[50px] !text-white !font-[400] border-b border-white/30 pb-2 w-fit mb-12">
            Types of CMS Platforms
          </h3>

          <ul className="space-y-6 myclass">
            {tabs.map((tab, idx) => (
              <li key={tab.label} className="relative">
                <button
                  onClick={() => setActive(idx)}
                  className={`relative text-left text-[30px] !pl-[30px] !font-[400] ${
                    idx === active
                      ? "!text-[#3A3A3A] font-[400] text-[18px] md:text-[30px] !bg-[#F5E7EF] !rounded-full shadow-[0px_19px_43px_0px_rgba(0,0,0,0.1)] !px-[30px] !py-[15px]"
                      : ""
                  }`}
                  style={
                    idx === active
                      ? {
                          zIndex: 10,
                          width: "calc(100% + 90px)", // make button wider
                        }
                      : {}
                  }
                  type="button"
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 pr-[50px] lg:pl-[120px] md:pl-[80px] py-[50px] flex flex-col mt-10 md:mt-0 bg-white">
          <p className="!text-[#3A3A3A] text-[20px] text-sm font-400 mb-[39px]">
            {tabs[active].desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[15px]">
            {tabCards[active].map(({ title, desc, image }) => (
              <div key={title} className="bg-white flex flex-col ">
                <img src={image} alt={title} className="mb-[17px]" />
                <h4
                  style={{ fontFamily: "var(--font-paragraph)" }}
                  className="font-[600] text-[18px] md:!text-[20px] text-left text-[#C32C7B] mb-2"
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-paragraph)",
                    color: "var(--color-black-dark-paragraph)",
                  }}
                  className="font-600 text-[18px] text-left"
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE ACCORDION VERSION */}
      <section className="block md:hidden px-4">
        {/* Title */}
        <h3 className="text-[22px] text-[#C32C7B] font-[400] text-center mb-2">
          Types of CMS Platforms
        </h3>

        {/* single underline */}
        <div className="flex justify-center mb-5">
          <div className="h-px w-28 bg-[#C32C7B]" />
        </div>

        {tabs.map((tab, idx) => (
          /* no rounded container, only divider between rows */
          <div key={idx} className={`${idx !== tabs.length - 1 ? "border-b border-gray-300" : ""}`}>
            {/* header row: transparent background, no rounded corners */}
            <button
              onClick={() => setAccordionOpen(accordionOpen === idx ? null : idx)}
              aria-expanded={accordionOpen === idx}
              className="w-full flex items-center justify-between !pl-[12px] !py-[12px] text-[20px] !text-[#3a3a3a] font-normal !bg-transparent rounded-none"
            >
              <span className="leading-none">{tab.label}</span>

              {/* chevron */}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${accordionOpen === idx ? "rotate-180" : ""}`}
                viewBox="0 0 12 8"
                fill="none"
                aria-hidden="true"
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* content */}
            {accordionOpen === idx && (
              <div className="pb-4">
                <p className="text-sm text-[#3A3A3A] leading-6 mb-4">{tab.desc}</p>

                <ul className="space-y-3">
                  {tabCards[idx].map(({ title, desc, image }) => (
                    <li key={title} className="flex items-start gap-3">
                      {/* image wrapper: NO border (removed) */}
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                        <img src={image} alt={title} className="object-cover !max-w-[68%]" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-[15px] font-semibold text-[#C32C7B]">{title}</h4>
                        <p className="text-xs text-[#4B4B4B] leading-5">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
