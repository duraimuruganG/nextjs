"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import BannerCTA from "@/components/home/BannerCTA";

const Bannerslides = [
  {
    black: 'Let’s Build Your',
    pink: "Next-Gen Mobile App!",
    discription: "Get in touch with us today to discuss your project",
    button: "Contact us today!!",
    CustomClass: "mobile",
    link:'about',
  },
];

export default function MobileAppDevelopment() {
 

  const points = [
    {
      id: 1,
      title: "Instant Accessibility",
      desc: "Stay connected with your customers anytime, anywhere",
      offset: "translate-x-6",
    },
    {
      id: 2,
      title: "Enhanced Customer Experience",
      desc: "Personalized interaction and seamless navigation",
      offset: "translate-x-18",
    },
    {
      id: 3,
      title: "Brand Visibility & Recognition",
      desc: "Strengthen brand identity and customer trust",
      offset: "translate-x-22",
    },
    {
      id: 4,
      title: "Competitive Advantage",
      desc: "Stay ahead with innovative mobile solutions",
      offset: "translate-x-20",
    },
    {
      id: 5,
      title: "Higher Engagement & Conversions",
      desc: "Convert leads into loyal customers",
      offset: "translate-x-6",
    },
  ];

  const cardData = [
    {
      id: 1,
      title: "Custom App Solutions",
      desc: "Designed to fit your business model perfectly",
      image: "images/Booking.svg",
    },
    {
      id: 2,
      title: "Native & Cross-Platform Development",
      desc: "Ensuring a seamless experience across devices",
      image: "images/Cross-platform.svg",
    },
    {
      id: 3,
      title: "Agile Development Approach",
      desc: "Rapid delivery with continuous improvements",
      image: "images/Agile.svg",
    },
    {
      id: 4,
      title: "UI/UX Excellence",
      desc: "Intuitive, user-friendly, and engaging app designs",
      image: "images/Ux-design.svg",
    },
    {
      id: 5,
      title: "Advanced Security & Compliance",
      desc: "Implementing the latest security measures",
      image: "images/Secure-shield.svg",
    },
    {
      id: 6,
      title: "Integration & Scalability",
      desc: "Apps that grow with your business needs",
      image: "images/Technology.svg",
    },
    {
      id: 7,
      title: "Post-Launch Support & Maintenance",
      desc: "Keeping your app updated and running smoothly",
      image: "images/Support.svg",
    },
  ];

  function Card({ card, isLast }) {
    return (
      <div
        className={`group cursor-pointer border-t-[2px] border-l-[2px] border-r-0 border-b-[10px] border-[#C32C7B] rounded-[12px] px-4 py-4 text-center text-sm h-[230px] w-full max-w-[235px] flex flex-col items-center transition duration-300 hover:bg-[#c32c7b] hover:text-white bg-[#FAF5F8]
        ${isLast ? "md:mr-[53px]" : ""}
      `}
      >
        <img
          src={card.image}
          width={50}
          height={50}
          alt={card.title}
          className="white-icon-hover"
        />
        <h4
          style={{ fontFamily: "inter" }}
          className="text-[20px] font-semibold mt-2 group-hover:text-white"
        >
          {card.title}
        </h4>
        <p className="mt-1 group-hover:text-white">{card.desc}</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 md:px-10 lg:pl-20 lg:pr-10 lg:mb-60 md:mb-40 sm:mb-30">
        <section>
          <div className="text-center mb-10">
            <span style={{ fontFamily: "Sarcolenta" }} className="text-3xl md:text-4xl font-normal">
              Why is{" "}
              <span className="text-[#C32C7B] font-normal" style={{ fontFamily: "Sarcolenta" }}>
                Mobile App Development
              </span>{" "}
              Important?
            </span>

            <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-[#3A3A3AB2] mt-4 text-center">
              With billions of smartphone users worldwide, mobile apps serve as a
              direct bridge between businesses and customers. A well-designed app
              provides
            </p>
          </div>

          <div className="flex justify-center gap-20 flex-wrap">
            <Image
              src="/images/mobile.svg"
              alt="Mobile Illustration"
              width={300}
              height={700}
              className="mb-8"
            />

            <div className="relative top-10 max-w-xl">
              {points.map((item) => {
                let marginTop = "0px";
                if (item.id === 1) marginTop = "20px";
                else if (item.id === 2) marginTop = "15px";
                else if (item.id === 3) marginTop = "9px";
                else if (item.id === 4) marginTop = "4px";
                else if (item.id === 5) marginTop = "0px";

                let marginTops = item.id === 5 ? "10px" : "0px";

                return (
                  <div
                    key={item.id}
                    className={`flex items-start space-x-4 ${item.offset} mt-5`}
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-[#C32C7B] text-white flex items-center justify-center font-bold shadow-md"
                      style={{ marginTop }}
                    >
                      {item.id}
                    </div>
                    <div style={{ marginTop: marginTops }}>
                      <span className="font-semibold text-[25px] text-[#C32C7B]">
                        {item.title}
                      </span>
                      <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-30"></section>

        <section>
          <p
            style={{ fontFamily: "var(--font-paragraph)" }}
            className="text-[30px] font-semibold text-center mb-6"
          >
            Why Choose Us for{" "}
            <span className="text-pink-500 font-normal">
              Mobile App Development?
            </span>
          </p>
          <hr className="border-t border-2 border-pink-600 w-24 md:w-30 mx-auto mb-10" />

          <p className="mt-2 text-center w-[85%] m-auto">
            At Fronseye, we specialize in building high-performance mobile
            applications tailored to your business needs. Our expertise spans
            across iOS, Android, and cross-platform applications, using
            cutting-edge technologies like Flutter, React Native, Swift, Kotlin,
            and more.
          </p>
 
            <div className="flex mt-20 lg:justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:mb-15 md:mb-10 sm:mb-5">
                {cardData.slice(0, 4).map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </div>

         
            <div className="flex lg:justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 last md:last-child-adjust">
                {cardData.slice(4).map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </div>

 

          <div
            style={{ fontFamily: "var(--font-paragraph)" }}
            className="bg-[#FAF5F8] border-[2px] border-[#C32C7B] rounded-[12px] w-[59%] mt-20 p-4 text-center max-w-4xl mx-auto"
          >
            Whether you need an{" "}
            <span className="font-semibold text-[#C32C7B]">
              enterprise mobility solution, an eCommerce app, an on-demand service
              platform, or a fintech application
            </span>
            , our team has the expertise to bring your ideas to life.
          </div>
        </section>

      </div>
      <BannerCTA slides={Bannerslides} bgimg="/images/Girl.svg" />
     
 
  



 

      <Footer />
    </>
  );
}
 
