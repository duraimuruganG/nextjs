 import {IMAGE_BASE_PATH} from "@/lib/constants";

export default function BenefitsSection() {
    const benefits = [
        {
        iconSrc: `${IMAGE_BASE_PATH}/E-Commerce/Clock.svg`,
        title: "24/7 Business Operations",
        description: "Customers can shop anytime, anywhere",
        },
        {
        iconSrc: `${IMAGE_BASE_PATH}/E-Commerce/Graph.svg`,
        title: "Global Reach & Scalability",
        description: "Sell products beyond geographical limitations",
        },
        {
        iconSrc:`${IMAGE_BASE_PATH}/E-Commerce/Chart.svg`,
        title: "Automated Sales & Inventory Management",
        description: "Real-time tracking and low stock alerts",
        },
        {
        iconSrc: `${IMAGE_BASE_PATH}/E-Commerce/Pay.svg`,
        title: "Seamless Payment & Logistics Integration",
        description: "Ensure smooth transactions and faster deliveries",
        },
        {
        iconSrc: `${IMAGE_BASE_PATH}/E-Commerce/AutoScaling.svg`,
        title: "Customer Insights & Personalization",
        description: "Leverage AI-driven recommendations to boost sales",
        },
        {
        iconSrc: `${IMAGE_BASE_PATH}/E-Commerce/Seo.svg`,
        title: "Marketing & SEO Optimization",
        description: "Increase brand visibility and customer engagement",
        },
    ];

    return (
        <section className="relative px-15 py-10 mt-40 bg-gradient-to-r from-pink-50 to-white rounded-lg border border-pink-200 overflow-hidden">

            {/* Bottom-left glow */}
           <div className="absolute -left-80 -bottom-80 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#C32C7B] via-[#C32C7B] to-transparent opacity-50 blur-[180px] z-0" />

            {/* Top-right glow */}
            <div className="absolute -right-80 -top-80 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#C32C7B] via-[#C32C7B] to-transparent opacity-50 blur-[180px] z-0" />


            {/*  Content - layered above background */}
            <div className="relative z-10">

                <span className="text-center text-[30px] lg:text-[47px] md:text-[40px] text-[#3A3A3A] font-normal my-2 sarcolenta">
                How Customers Benefit from an{" "}
                <span className="text-[30px] lg:text-[47px] md:text-[40px]sarcolenta text-[#C32C7B] font-normal">Online E-Commerce Store</span>
                </span>
                <div className="w-48 h-[3px] bg-[#C32C7B] mx-auto mt-2 mb-15 rounded-full"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 justify-items-center">
                {benefits.map(({ iconSrc, title, description }, index) => (
                    <div
                    key={index}
                     className="w-[300px] h-[160px] lg:w-[100%] lg:h-[280px] md:w-[350px] md:h-[210px]
             bg-white rounded-[10px]
             border-t-2 border-l-2 border-[#C32C7B]
             hover:border-t-2 hover:border-l-2 hover:border-white
             shadow-[6px_0px_12px_rgba(0,0,0,0.15)]
             p-[27px] flex flex-col space-y-2 group hover:bg-[#C32C7B]  transform transition-transform duration-500 ease-in-out hover:scale-105  "
                    >
                    {/* Centered image */}
                    <div className="self-center">
                        <img src={iconSrc} alt={title} className="h-20 w-20 mb-2 white-icon-hover" />
                    </div>

                    {/* Left-aligned text */}
                    <span className="text-[20px] text-black font-semibold">{title}</span>
                    <p className="text-[20px] text-gray-500">{description}</p>
                    </div>
                ))}
                </div>

            </div>
            </section>

    );
}
