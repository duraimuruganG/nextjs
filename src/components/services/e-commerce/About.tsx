
 
export default function EcommerecAbout() {
  return (

  <section className="px-4 md:px-10 lg:px-20 py-12 max-w-[1440px] mx-auto">
  {/* Title */}
  <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-pink-600 mb-4 text-center">
    About<span className="text-black"> the Service</span>
  </h1>

  {/* Divider */}
  <div className="w-[20%] h-[4px] bg-[#C32C7B] mx-auto lg:mb-12 mb-5"></div>

  {/* Main Content */}
  <div className="flex flex-col md:flex-row-reverse lg:flex-row items-center lg:items-center justify-between gap-10 md:gap-2 lg:mt-30">
    
    {/* Image Block */}
    <div className="w-full md:w-1/2 flex justify-center lg:justify-start px-4 md:px-0">
      <img 
        src="/images/E-Commerce/Ecommerce-About.svg"
        alt="Ecommerce About"
        className="max-w-full h-[600]"
      />
    </div>

    {/* Text Block */}
    <div className="w-full md:w-1/2 text-gray-700 text-center md:text-left lg:text-left px-4 md:px-0">
      <span className="text-[24px] lg:text-[28px] font-bold mb-4 text-[#3A3A3A] leading-snug">
        Transforming Your Business with{' '}
        <span className="text-[#C32C7B] font-bold">
          Scalable & High-Performance E-Commerce Solutions
        </span>
      </span>

      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-gray-600">
        In the digital era, having an e-commerce platform is not just an option but a necessity.
        Businesses, whether startups or enterprises, need a robust, scalable, and feature-rich online
        store to reach a wider audience and increase revenue. Whether you need a single-vendor store,
        multi-vendor marketplace, or a custom-built e-commerce ecosystem, a well-developed e-commerce
        platform can revolutionize your business operations and drive consistent growth.
      </p>
    </div>
  </div>
</section>


  )
}