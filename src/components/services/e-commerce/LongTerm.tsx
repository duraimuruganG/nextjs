import Image from "next/image";

export default function LongTerm() {
  const details = [
    {
      imgSrc: "/images/E-Commerce/Product.svg",
      title: "Strategic Planning & Roadmap",
      description: "Understanding your goals and defining success metrics",
    },
    {
      imgSrc: "/images/E-Commerce/Agile.svg",
      title: "Agile Development & Deployment",
      description: "Quick go-to-market strategies for rapid business launch",
    },
    {
      imgSrc: "/images/E-Commerce/Optimization.svg",
      title: "Continuous Support & Optimization",
      description: "Post-launch maintenance and updates for smooth operations",
    },
    {
      imgSrc: "/images/E-Commerce/Scalability.svg",
      title: "Scalable Growth Strategies",
      description: "Helping you expand to new markets and customer segments",
    },
  ];

  return (
    <section className="px-30">
      {/* Background image */}
      <Image
        src="/images/E-Commerce/Vector-Line.svg"
        alt="Vector Line"
        width={100}
        height={100}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "505px",
          position: "relative",
          overflow: "visible",
          left: 0,
          top:"490px"
        }}
        className="hj"
      />

      {/* Iterate over the details array */}
      {details.map((item, i) => {
        // Define section-specific styles
        let sectionStyle = {};
        if (i === 0) {
          sectionStyle = { paddingTop: "1px", marginLeft: "17px" };
        } else if (i === 1) {
          sectionStyle = { paddingTop: "20px" , marginRight: "45px"};
        } else if (i === 2) {
          sectionStyle = { paddingTop: "26px", marginRight: "22px" };
        } else if (i === 3) {
          sectionStyle = { paddingTop: "26px", marginLeft: "47.6%" };
        }

        return (
          <div
            key={i}
            className="flex justify-center gap-8"
            style={{
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              justifyContent: i === 0 || i === 3 ? "flex-start" : undefined,
              ...sectionStyle, // Apply the custom styles here
            }}
          >
            {/* Text content */}
            <div className={`max-w-md ${i % 2 === 0 ? "text-right" : "text-left"}`}>
              <h4 className="text-[25px] font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-[18px]">{item.description}</p>
            </div>

            {/* Icon image */}
            <div
              className="w-25 h-25 relative p-4 rounded-full text-center flex justify-center items-center"
              style={{ backgroundColor: "#C32C7B" }}
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
