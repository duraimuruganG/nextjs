// components/MobileBenefits.tsx
"use client";

import Image from "next/image";
import { inter } from "@/app/font";

interface Whychoose {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export default function Whychoose({ cardData }: { cardData: Whychoose[] }) {
  function Card({ card }: { card: Whychoose }) {
    return (
      <div
        className="group cursor-pointer border-t-[2px] border-l-[2px] border-r-0 border-b-[10px] 
        border-[#C32C7B] rounded-[12px] px-4 py-8 text-center text-sm 
        min-h-[230px] max-h-[300px] w-full min-w-[240px] max-w-[250px] flex flex-col items-center 
        transition duration-300 hover:bg-[#c32c7b] hover:text-white bg-[#FAF5F8]"
      >
        {card.image && (
          <Image
            src={card.image}
            width={50}
            height={50}
            alt={card.title}
            className="white-icon-hover"
          />
        )}
        <h4
          className={`${inter.className} text-[20px] font-semibold mt-2 group-hover:text-white`}
        >
          {card.title}
        </h4>
        <p className="mt-1 group-hover:text-white">{card.desc}</p>
      </div>
    );
  }

  return (
    <section className="px-2 py-12">
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

     
      <div className="mt-20 flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
          {cardData.map((card) => (
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
  );
}
