 
import Image from "next/image";

 

const rightItems = [
  {
    title: "Custom E-Commerce Solutions",
    description: "Tailored platforms for single-vendor & multi-vendor businesses",
    dot: <div className="absolute left-[-51%] top-[15%] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,
    dotline: <div className="absolute left-[-47%] top-[19%] w-[46%] border-t-2 border-dashed border-black-600"></div>,
    Key:"A",
  },
  {
    title: "Scalable & Future-Ready",
    description: "We build platforms that grow with your business",
    dot: <div className="absolute left-[-50.3%] top-[15%] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,   

    dotline: <div className="absolute left-[-46%]  top-[19%] w-[45%] border-t-2 border-dashed border-black-600"></div>,
    Key:"B",
  },
  {
    title: "Secure & Reliable",
    description: "End-to-end encryption, secure payment gateways, and fraud prevention",
    dot: <div className="absolute left-[-50%] top-[15%] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,
    dotline: <div className="absolute left-[-46%] top-[19%] w-[45%] border-t-2 border-dashed border-black-600"></div>,
    Key:"C",
  },
];

const bottomItem = {
  title: "SEO & Marketing Ready",
  description: "Built-in SEO optimization, social media integrations, and digital marketing tools",
  dot: <div className="absolute top-[10%] left-[-43%] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,
  dotline: <div className="absolute top-[14%] left-[-40%] w-[39%] border-t-2 border-dashed border-black-600"></div>,
  Key:"D",
};

const leftItems = [
  {
    title: "Advanced Analytics & Reporting",
    description: "Real-time insights to optimize sales and customer engagement",
    dot: <div className="absolute top-[15%] left-[calc(80%+150px)] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,
    dotline: <div className="absolute top-[15%] left-[80%] w-[150px] border-t-2 border-dashed border-gray-600"></div>,
    Key:"E",
  },
  {
    title: "Mobile-Optimized & PWA",
    description: "Seamless shopping experience across web, mobile, and tablets",
    dot: <div className="absolute top-[45%] left-[calc(80%+150px)] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,
    dotline: <div className="absolute top-[45%] left-[80%] w-[150px] border-t-2 border-dashed border-gray-600"></div>,
    Key:"F",
  },
  {
    title: "Omnichannel Capabilities",
    description: "Sync with physical stores, warehouses, & inventory",
    dot: <div className="absolute top-[75%] left-[calc(80%+150px)] w-[10px] h-[10px] bg-gray-700 rounded-full"></div>,
    dotline: <div className="absolute top-[75%] left-[80%] w-[150px] border-t-2 border-dashed border-gray-600"></div>,
    Key:"G",
  },
];

 export default function BulbSection() {
  return (
    <section className="text-center mt-20">
      <span className="text-center text-[30px] lg:text-[50px] md:text-[40px] text-[#3A3A3A] font-normal mb-1 sarcolenta">
        How Fronseye Helps You Achieve{" "}
        <span className="text-[30px] lg:text-[50px] md:text-[40px]sarcolenta text-[#C32C7B] font-normal">
          E-Commerce Success
        </span>
      </span>
      <div className="w-25 h-1 bg-[#C32C7B] mx-auto mt-2 mb-15 rounded-full"></div>

      <p className="text-[20px] mb-20">
        At Fronseye, we specialize in building scalable, high-performance, and secure e-commerce platforms tailored to your business needs. Our expertise in custom development, third-party integrations, and advanced analytics ensures you stay ahead in the competitive online marketplace
      </p>

      <span className="text-center text-[20px] lg:text-[30px] md:text-[25px] text-[#C32C7B] font-semibold b-1 futuratot ">
        Why Choose Fronseye{" "}
        <span className="text-[20px] lg:text-[30px] md:text-[25px] futuratot text-[#3A3A3A] font-semibold">
          for E-Commerce Development?
        </span>
      </span>

      <div className="relative w-full flex justify-center items-center bg-white py-20">
        <div className="relative">
          <Image
            src="/images/E-Commerce/Bulb/Full-bulb.svg"
            alt=""
            width={400}
            height={350}
          />
        </div>

        {/* Left Texts */}
        <div className="absolute left-4 top-[41%] -translate-y-1/2 space-y-12 text-left max-w-xs">
          {leftItems.map((item) => (
            <div key={item.Key} className={`${item.Key}-key`}>
              {item.dotline}
              {item.dot}
              <span className="font-bold text-[20px] text-[#3A3A3A]">{item.title}</span>
              <p className="text-[18px] text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Texts */}
        <div className="absolute right-4 top-[38.57%] -translate-y-1/2 space-y-12 max-w-xs text-left">
          {rightItems.map((item) => (
            <div key={item.Key} className={`${item.Key}-key relative`}>
              {item.dot}
              {item.dotline}
              <span className="font-bold text-[20px] text-[#3A3A3A] Right">{item.title}</span>
              <p className="text-[18px] text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Center Text */}
        <div className={` absolute bottom-40 left-[67%] max-w-sm text-left top-[65%]`} >
           
          <span className="font-bold text-[20px] text-[#3A3A3A]">{bottomItem.title}</span>
          <p className="text-gray-600 text-[18px]">{bottomItem.description}</p>
          {bottomItem.dotline}
          {bottomItem.dot}
        </div>
      </div>
    </section>
  );
}


