import { useState } from 'react';

type Tab = { label: string };

type Card = {
  title: string;
  desc: string;
};

const tabs: Tab[] = [
  { label: 'Open-Source CMS' },
  { label: 'Proprietary CMS' },
  { label: 'Headless CMS' },
  { label: 'E-Commerce CMS' },
];

const tabCards: Card[][] = [
  [
    { title: 'WordPress', desc: 'Most widely used CMS, perfect for blogs, websites, & e-commerce' },
    { title: 'Drupal', desc: 'Highly customizable and secure, preferred for enterprise solutions' },
    { title: 'Joomla', desc: 'Great for social networking sites and e-commerce platforms' },
  ],
  [
    { title: 'Sitecore', desc: 'Enterprise-level CMS offering advanced personalization' },
    { title: 'Adobe Experience Manager', desc: 'Robust features for large organizations' },
    { title: 'Kentico', desc: 'Integrated marketing and commerce features' },
  ],
  [
    { title: 'Strapi', desc: 'Open-source headless CMS for flexible API-based content' },
    { title: 'Contentful', desc: 'Cloud-based headless CMS for scalable delivery' },
    { title: 'Sanity', desc: 'Real-time content editing, API first' },
  ],
  [
    { title: 'Shopify', desc: 'User-friendly, scalable e-commerce platform' },
    { title: 'Magento', desc: 'Powerful open-source solution for online stores' },
    { title: 'BigCommerce', desc: 'Comprehensive features for growing businesses' },
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
          <h3 className="text-[50px] !text-white !font-400 border-b border-white/30 pb-2 w-fit mb-12">
            Types of CMS Platforms
          </h3>

          <ul className="space-y-6">
            {tabs.map((tab, idx) => (
              <li key={tab.label} className="relative">
                <button
                  onClick={() => setActive(idx)}
                  className={`relative text-left text-lg font-medium ${
                    idx === active
                      ? '!text-[#C32C7B] !bg-white !rounded-full w-full shadow-[4px_0_12px_#fff3] px-6 py-2'
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
        <div className="flex-1 px-10 flex flex-col mt-10 md:mt-0 bg-white">
          <p className="!text-[#3A3A3A] text-[20px] text-sm font-400 mb-[39px]">
            Popular for flexibility, customization, and community support. Ideal for businesses looking for full control over their content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {tabCards[active].map(({ title, desc }) => (
              <div
                key={title}
                className="border border-[#F6EEF7] rounded-lg bg-white shadow-[0_3px_12px_#F6EEF7] py-8 px-4 flex flex-col items-center"
              >
                <div className="mb-6 h-12 w-12 bg-[#C32C7B] rounded-full" />
                <h4 className="font-semibold text-[#C32C7B] mb-2">{title}</h4>
                <p className="text-gray-600 text-xs text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
