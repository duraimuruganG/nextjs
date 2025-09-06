import {IMAGE_BASE_PATH} from "@/lib/constants";
import Image from "next/image"; // Added import

export default function SoftwareAbout() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
        <main className="py-12">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold  text-pink-600 mb-6 text-center">
              About <span className="text-black">the Service</span>
            </h1>

            <div className="w-34 h-1 bg-[#C32C7B] mx-auto mb-12"></div>

            {/* Mobile only (below md) */}
            <div className="block md:hidden flex flex-col items-center justify-center gap-12">
                <div className="w-full max-w-sm sm:max-w-md">
                    <Image
                      src={`${IMAGE_BASE_PATH}/software/SoftwareAbout.png`}
                      alt="Tailored Solutions"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                </div>

                <div className="w-full text-left max-w-xl">
                    <span className="text-[20px] text-[#3A3A3A] font-semibold mb-4">
                    Tailored Solutions to Drive <span className="text-[#C32C7B] font-bold text-[20px]">Your Business Forward</span>
                    </span>

                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-700 leading-relaxed mb-8">
                    In today&apos;s fast-paced digital world, businesses need customized software solutions to stay ahead of the competition. Off-the-shelf software often lacks the flexibility and scalability required to meet specific business needs. That&apos;s where custom software development comes in — offering solutions built specifically for your unique challenges, processes, and goals.
                    </p>

                    <span className="text-[20px] font-semibold mb-4 text-[#3A3A3A]">
                    Why Do Businesses Need <span className="text-[#C32C7B] font-bold text-[20px]">Custom Software?</span>
                    </span>

                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-700 leading-relaxed mb-6">
                    Every business is different, and so are its requirements. Pre-built software may come with unnecessary features or lack critical functionalities, leading to inefficiencies. Custom software helps businesses:
                    </p>

                    <ul style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="list-none space-y-3 text-gray-700">
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }} >Automate workflows</strong> and streamline operations.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Improve efficiency</strong> with tailored features and integrations.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Enhance security</strong> with industry-specific compliance and protocols.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Scale seamlessly</strong> as the business grows.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Gain a competitive edge</strong> with technology designed around their needs.</li>
                    </ul>
                </div>
            </div>

            {/* Tablet only (md to lg) */}
           
            <div className="hidden md:flex lg:hidden flex-col gap-8 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* First flex block: Image + Text side by side */}
                <div className="flex flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2 text-left max-w-xl">
                    <span className="text-[25px] font-semibold mb-4 text-[#3A3A3A]">
                        Tailored Solutions to Drive <span className="text-[#C32C7B] font-bold text-[25px]">Your Business Forward</span>
                    </span>

                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-700 leading-relaxed mb-8 text-[20px]">
                        In today&apos;s fast-paced digital world, businesses need customized software solutions to stay ahead of the competition. Off-the-shelf software often lacks the flexibility and scalability required to meet specific business needs. That&apos;s where custom software development comes in — offering solutions built specifically for your unique challenges, processes, and goals.
                    </p>
                    </div>

                    <div className="w-full md:w-1/2 max-w-md">
                    <Image
                        src={`${IMAGE_BASE_PATH}/software/SoftwareAbout.png`}
                        alt="Tailored Solutions"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                    </div>
                </div>

                {/* Second text block below the flex container */}
                <div className="text-left">
                    <span className="text-[25px] font-semibold mb-4 text-[#3A3A3A]">
                    Why Do Businesses Need <span className="text-[#C32C7B] font-bold text-[25px]">Custom Software?</span>
                    </span>

                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-700 leading-relaxed mb-6 text-[20px]">
                    Every business is different, and so are its requirements. Pre-built software may come with unnecessary features or lack critical functionalities, leading to inefficiencies. Custom software helps businesses:
                    </p>

                    <ul style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="list-none space-y-3 text-gray-700 text-[20px]">
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Automate workflows</strong> and streamline operations.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Improve efficiency</strong> with tailored features and integrations.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Enhance security</strong> with industry-specific compliance and protocols.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Scale seamlessly</strong> as the business grows.</li>
                    <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Gain a competitive edge</strong> with technology designed around their needs.</li>
                    </ul>
                </div>
            </div>

                
            {/* Desktop only (lg and above) */}
            <div className="hidden lg:flex flex-row items-center justify-center gap-16">
                <div className="w-full lg:w-1/2 max-w-lg">
                    <Image
                      src={`${IMAGE_BASE_PATH}/software/SoftwareAbout.png`}
                      alt="Tailored Solutions"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-left max-w-xl">
                    <span className="text-[30px]  font-semibold mb-4 text-[#3A3A3A]">
                    Tailored Solutions to Drive <span className="text-[#C32C7B] font-bold text-[30px]">Your Business Forward</span>
                    </span>

                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-700 leading-relaxed mb-8 text-[20px]">
                    In today&apos;s fast-paced digital world, businesses need customized software solutions to stay ahead of the competition. Off-the-shelf software often lacks the flexibility and scalability required to meet specific business needs. That&apos;s where custom software development comes in — offering solutions built specifically for your unique challenges, processes, and goals.
                    </p>

                    <span className="text-[30px]  font-semibold mb-4 text-[#3A3A3A]">
                        Why Do Businesses Need <span className="text-[#C32C7B] font-bold text-[30px]">Custom Software?</span>
                    </span>

                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="text-gray-700 leading-relaxed mb-6 text-[20px]">
                        Every business is different, and so are its requirements. Pre-built software may come with unnecessary features or lack critical functionalities, leading to inefficiencies. Custom software helps businesses:
                    </p>

                    <ul style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="list-none space-y-3 text-gray-700 text-[20px]">
                        <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Automate workflows</strong> and streamline operations.</li>
                        <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Improve efficiency</strong> with tailored features and integrations.</li>
                        <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Enhance security</strong> with industry-specific compliance and protocols.</li>
                        <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Scale seamlessly</strong> as the business grows.</li>
                        <li><strong style={{ color: 'rgba(58, 58, 58)' }}>Gain a competitive edge</strong> with technology designed around their needs.</li>
                    </ul>
        
                </div>
            </div>

        </main>
    </div>
  )
}