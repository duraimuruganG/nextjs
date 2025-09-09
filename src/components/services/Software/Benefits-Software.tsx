const cards = [
  {
    title: "Retail & E-commerce",
    desc: "Personalized shopping experiences, inventory management, & seamless payment integrations",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Cart.svg",
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant patient management, telemedicine, & electronic health records (EHR)",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Heart.svg",
  },
  {
    title: "Finance & Banking",
    desc: "Secure transaction processing, fraud detection, & automated financial reporting",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Storage.svg",
  },
  {
    title: "Manufacturing & Logistics",
    desc: "Smart supply chain management, real-time tracking, and automation",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Global.svg",
  },
  {
    title: "Education & E-learning",
    desc: "Interactive learning platforms, student management systems, & AI-driven analytics",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Cap.svg",
  },
  {
    title: "Real Estate",
    desc: "Property listing portals, automated contract generation, and CRM solutions",
    bg: "bg-[#FAF5F8]",
    image: "/images/software/Home.svg",
  },
];
 
export default function BenefitSoftware({ cards }) {
  return (
    <section className="px-10 py-20">

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative ${card.bg} rounded-lg px-7 py-7 shadow-md flex flex-col min-h-[200px] group hover:!bg-[#c32c7b]`}
          >
            <span className="group-hover:bg-[#E6B2D1] absolute left-0 top-5 h-12 w-2 bg-[#C32C7B] rounded-r-md inline-block -scale-x-100 -ml-[9px]"></span>

            {/* Image + Title */}
            <div className="flex flex-col items-start mb-3">
              <img
                src={card.image}
                alt={card.title}
                className="w-15 h-15 mb-5 self-center white-icon-hover"
              />
              <h3 className="font-[600] text-[18px] text-[#3A3A3A] leading-snug hover:!text-[#fff] futuratot">
                {card.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[18px] text-gray-700">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}