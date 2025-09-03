import { useState } from 'react';


const IMAGE_BASE_PATH = "/images/cms";

type Tab = { label: string };

type Card = {
  title: string;
  desc: string;
  image: string;
};

const tabs: Tab[] = [
  { label: 'Open-Source CMS' },
  { label: 'Proprietary CMS' },
  { label: 'Headless CMS' },
  { label: 'E-Commerce CMS' },
];

const tabCards: Card[][] = [
  [
    { 
      title: 'WordPress', 
      desc: 'Most widely used CMS, perfect for blogs, websites, & e-commerce',
      image: `${IMAGE_BASE_PATH}/wordpress.png` 
    },
    { 
      title: 'Drupal', 
      desc: 'Highly customizable and secure, preferred for enterprise solutions',
      image: `${IMAGE_BASE_PATH}/drupal.png`
    },
    { 
      title: 'Joomla', 
      desc: 'Great for social networking sites and e-commerce platforms',
      image: `${IMAGE_BASE_PATH}/joomla.png`
    },
  ],
  [
    { 
      title: 'Sitecore', 
      desc: 'Enterprise-level CMS offering advanced personalization',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
    { 
      title: 'Adobe Experience Manager', 
      desc: 'Robust features for large organizations',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
    { 
      title: 'Kentico', 
      desc: 'Integrated marketing and commerce features',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
  ],
  [
    { 
      title: 'Strapi', 
      desc: 'Open-source headless CMS for flexible API-based content',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
    { 
      title: 'Contentful', 
      desc: 'Cloud-based headless CMS for scalable delivery',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
    { 
      title: 'Sanity', 
      desc: 'Real-time content editing, API first',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
  ],
  [
    { 
      title: 'Shopify', 
      desc: 'User-friendly, scalable e-commerce platform',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
    { 
      title: 'Magento', 
      desc: 'Powerful open-source solution for online stores',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
    { 
      title: 'BigCommerce', 
      desc: 'Comprehensive features for growing businesses',
      image: `${IMAGE_BASE_PATH}/wordpress.png`
    },
  ],
];

export default function ExactCmsSection() {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      <section className="flex flex-col md:flex-row max-w-full">
        {/* Left Panel */}
        <div
          style={{ borderTopRightRadius: '15px' }}
          className="relative aftercls bg-[#C32C7B] w-full md:w-[35%] text-white flex flex-col px-8 py-10"
        >
          <h3 className="text-[50px] !text-white !font-[400] border-b border-white/30 pb-2 w-fit mb-12">
            Types of CMS Platforms
          </h3>

          <ul className="space-y-6">
            {tabs.map((tab, idx) => (
              <li key={tab.label} className="relative">
                <button
                  onClick={() => setActive(idx)}
                  className={`relative text-left text-[30px] !font-[400] ${
                    idx === active
                      ? '!text-[#3A3A3A]  text-[#3A3A3A] font-[400] text-[18px] md:text-[30px] !bg-[#F5E7EF] !rounded-full w-full shadow-[4px_0_36px_#0005] !px-[30px] !py-[15px]'
                      : ''
                  }`}
                  style={idx === active ? { zIndex: 10 } : {}}
                  type="button"
                >
                  {tab.label}
                </button>

                {/* {idx === active && (
                  <span
                    className="absolute top-0 left-full h-full w-6 bg-white rounded-r-full shadow-[4px_0_12px_#fff3]"
                    style={{ transform: 'translateX(-35px)' }}
                  />
                )} */}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 pr-[50px] pl-[70px] flex flex-col mt-10 md:mt-0 bg-white">
          <p className="!text-[#3A3A3A] text-[20px] text-sm font-400 mb-[39px]">
            Popular for flexibility, customization, and community support. Ideal for businesses looking for full control over their content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[15px]">
          {tabCards[active].map(({ title, desc, image }) => (
            <div
              key={title}
              className="bg-white flex flex-col "
            >
              <img
                src={image}
                alt={title}
                className="mb-[17px]"
              />
              <h4 style={{ fontFamily: 'var(--font-paragraph)' }} className="font-[600] text-[18px] md:!text-[20px] text-left text-[#C32C7B] mb-2">{title}</h4>
              <p style={{
                fontFamily: "var(--font-paragraph)",
                color: "var(--color-black-dark-paragraph)",
              }} className="font-600 text-[18px] text-left">{desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
