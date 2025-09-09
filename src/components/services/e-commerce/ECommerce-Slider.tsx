'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef,useState,useEffect } from 'react';
 

const cardData = [
  {
    title: 'Single-Vendor E-Commerce Store',
    points: [
      'A dedicated online store owned & managed by a single business, ideal for brands and retailers',
      'Full control over product listings and pricing',
      'Direct customer relationships and personalized experience',
      'Secure payment gateway integration',
      'Secure payment gateway integrationInventory & order management automation',
    ],
    icon: '/images/E-Commerce/vendor.svg',
    key: 'A',
  },
  {
    title: 'Multi-Vendor Marketplace',
    points: [
      'A platform where multiple sellers list their products, like Amazon or Flipkart, managed by an admin',
      'More product variety from different vendors',
      'Commission-based revenue model for marketplace owners',
      'Vendor-specific dashboards for easy product and order management',
      'Customer reviews, ratings, and seamless logistics integration',
    ],
    icon: '/images/E-Commerce/Shopping-cart.svg',
     key: 'B',
  },
  {
    title: 'B2B & B2C E-Commerce Solutions',
   points: [
        '<strong>B2B (Business-to-Business)</strong> – Wholesale transactions, bulk orders, and customized pricing',
        '<strong>B2C (Business-to-Consumer)</strong> – Direct sales to consumers with personalized experiences',
        '<strong>D2C (Direct-to-Consumer)</strong> – Manufacturers sell directly, eliminating middlemen',
    ],
    icon: '/images/E-Commerce/Online-shop.svg',
    key: 'C',
  },
  {
    title: 'B2B & B2C E-Commerce Solutions',
   points: [
        '<strong>B2B (Business-to-Business)</strong> – Wholesale transactions, bulk orders, and customized pricing',
        '<strong>B2C (Business-to-Consumer)</strong> – Direct sales to consumers with personalized experiences',
        '<strong>D2C (Direct-to-Consumer)</strong> – Manufacturers sell directly, eliminating middlemen',
    ],
    icon: '/images/E-Commerce/Online-shop.svg',
    key: 'D',
  },
];

export default function EcommerceTypes() {
  const swiperRef = useRef(null);
  const [showD, setShowD] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const slidesToShow = showD ? cardData : cardData.filter(card => card.key !== 'D');

  const handleTouchStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setShowD(false); // Hide D immediately once sliding starts
    }
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

const [dotOrder, setDotOrder] = useState([0, 1, 2]);

useEffect(() => {
  const total = slidesToShow.length;
  const center = currentIndex;
  const left = (center + total - 1) % total;
  const right = (center + 1) % total;
  setDotOrder([left, center, right]);
}, [currentIndex]);




const desktopCards = cardData.filter(card => card.key !== 'D');

    return (
        <section className="bg-[#FAF5F8] py-20 lg:px-4 md:px-4 md:px-10 max-w-[1440px] mx-auto overflow-hidden lg:mx-[50px] rounded">
            {/* Title */}
            <div className="text-center mb-12">
                <span className="text-[30px] md:text-[40px] lg:text-[50px] text-[#000] font-bold mb-4 text-center">
                Types of <span className="text-[#C32C7B] font-bold">E-Commerce Platforms</span>
                </span>
                <p className="text-gray-500 mt-2 text-[16px] md:text-[20px] lg:text-[20px]">
                Choosing the right e-commerce model is essential to align with your business goals
                </p>
            </div>

            {/* Desktop & Tablet View */}
            <div className="hidden md:flex justify-center gap-10 ">
                {desktopCards.map((card, idx) => (
                    <div
                        key={idx}
        
                        className={`relative w-[348px] md:w-[80%] lg:w-[30%] rounded-[10px] shadow-md border border-[#E4E4E4] bg-white justify-between ${card.key === 'B' ? 'h-[740px] md:h-[670px] lg:h-[740px] mt-0' : 'h-[700px] md:h-[700px] mt-10'}`}
                    >
                    {/* Top Pink Shape */}
                    <div
                        className="h-[80px] md:h-[140px] lg:h-[200px] bg-[#C32C7B] flex items-center justify-center"
                        style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
                        }}
                    >
                        <Image
                        src={card.icon}
                        alt="icon"
                        width={60}
                        height={60}
                        className="text-white"
                        />
                    </div>

                    {/* Content */}
                    <div className="lg:p-6 md:p-4 p-2 pb-[60px]">
                        <h3 className="text-[20px] lg:text-[25px] font-semibold text-[#C32C7B] mb-4 md:leading-6 lg:leading-8">{card.title}</h3>
                        <ul className="space-y-4 text-[20px] text-gray-700">
                        {card.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                            <img src="/images/E-Commerce/Next.svg" alt="next" className="w-[20px] mt-1" />
                            <span className="text-[16px] lg:text-[20px] lg:leading-6 md:leading-5" dangerouslySetInnerHTML={{ __html: point }} />
                            </li>
                        ))}
                        </ul>
                    </div>

                    
                    <div 
                        style={{
                            top: card.key === 'B' ? '97.2%' : '97%',
                        }}
                        className="absolute bottom-0 inset-x-0 h-[40px] bg-[#C32C7B] rounded-t-[10px] lg:w-[106%] lg:left-[-11px] "></div> 
                    </div>

                ))}
            
            </div>

            {/* Mobile View - Slider */}
           <div className="block overflow-visible md:hidden">
   <Swiper
       onSlideChange={handleSlideChange}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setCurrentIndex(swiper.realIndex);
       
      }}

    modules={[Pagination]}
    // pagination={{ clickable: true,renderBullet: (index, className) => {
    //   return `<span class="${className} custom-dot dot-${index}"></span>`;
    // },}}
    pagination={false}
    slidesPerView={'auto'}
    centeredSlides={true}
    loop={true}
    loopedSlides={cardData.length}
    initialSlide={0}
    onTouchStart={handleTouchStart}  
  >

  {slidesToShow.map((card, idx) => (
    <SwiperSlide key={idx} className="!w-[85%] ">
      <div className="slide-div relative h-[580px] bg-white rounded-[10px] shadow-md border border-[#E4E4E4]  pb-[50px] 
    ">
      
        <div
          className="w-full h-[120px] bg-[#C32C7B] flex items-center justify-center"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
          }}
        >
          <Image
            src={card.icon}
            alt="icon"
            width={60}
            height={60}
            className="text-white"
          />
        </div>

        {/* Content */}
        <div className="p-6 pb-2">
          <h3 className="text-[18px] font-semibold text-[#C32C7B] mb-4">
            {card.title}
          </h3>
          <ul className="space-y-3 text-[14px] text-gray-700">
            {card.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <img
                  src="/images/E-Commerce/Next.svg"
                  alt="next"
                  className="w-[18px] mt-1"
                />
                <span
                  className="text-[14px] leading-[22px]"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-[#C32C7B] rounded-t-[10px]  rounded-b-[5px] transform scale-x-[1.06]" />

       


      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="relative h-4 mt-4 flex justify-center items-center overflow-hidden w-[100px] mx-auto">
  {[...Array(3)].map((_, i) => {
    const total = slidesToShow.length;
    const center = currentIndex;
    const left = (center + total - 1) % total;
    const right = (center + 1) % total;

    // i: 0 (left), 1 (center), 2 (right)
    const index = [left, center, right][i];

    // Positioning: center = 0, left = -30px, right = +30px
    const positionClass = i === 0
      ? '-translate-x-6'
      : i === 2
      ? 'translate-x-6'
      : 'translate-x-0';

    const scaleClass = i === 1 ? 'scale-125 opacity-100' : 'scale-100 opacity-50';

    return (
      <span
        key={index}
        className={`absolute transition-all duration-500 ease-in-out h-3 w-3 rounded-full bg-[#C32C7B] ${positionClass} ${scaleClass}`}
        style={{ left: '50%', transform: `translateX(-50%)` }}
      />
    );
  })}
</div>

    </div>

        </section>
  );
}
