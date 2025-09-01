import { useState } from 'react';

const tabs = [
  { label: 'Open-Source CMS' },
  { label: 'Proprietary CMS' },
  { label: 'Headless CMS' },
  { label: 'E-Commerce CMS' },
];

const cards = [
  {
    title: 'WordPress',
    desc: 'Most widely used CMS, perfect for blogs, websites, & e-commerce',
  },
  {
    title: 'Drupal',
    desc: 'Highly customizable and secure, preferred for enterprise solutions',
  },
  {
    title: 'Joomla',
    desc: 'Great for social networking sites and e-commerce platforms',
  },
];

export default function ExactCmsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
      {/* Left Panel */}
      <div className="relative bg-[#C32C7B] rounded-l-3xl w-full md:w-80 text-white flex flex-col px-8 py-10">
        <h3 className="text-2xl font-light border-b border-white/30 pb-2 w-fit mb-12">
          Types of CMS Platforms
        </h3>

        <ul className="space-y-6">
          {tabs.map((tab, idx) => (
            <li key={tab.label} className="relative">
              <button
                onClick={() => setActive(idx)}
                className={`relative text-lg font-medium ${
                  idx === active
                    ? 'text-[#C32C7B] bg-white shadow-lg rounded-full px-6 py-2'
                    : ''
                }`}
                style={idx === active ? { zIndex: 10 } : {}}
              >
                {tab.label}
              </button>

              {/* Floating pill shadow effect for active tab */}
              {idx === active && (
                <span
                  className="absolute top-0 left-full h-full w-6 bg-white rounded-r-full shadow-[4px_0_12px_#fff3]"
                  style={{ transform: 'translateX(-5px)' }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 px-10 flex flex-col mt-10 md:mt-0">
        <p className="text-gray-700 text-sm max-w-xl mb-8">
          Popular for flexibility, customization, and community support. Ideal for businesses looking for full control over their content.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {cards.map(({ title, desc }) => (
            <div
              key={title}
              className="border border-[#F6EEF7] rounded-lg bg-white shadow-[0_3px_12px_#F6EEF7] py-8 px-4 flex flex-col items-center"
            >
              {/* Placeholder for icon */}
              <div className="mb-6 h-12 w-12 bg-[#C32C7B] rounded-full" />
              <h4 className="font-semibold text-[#C32C7B] mb-2">{title}</h4>
              <p className="text-gray-600 text-xs text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
