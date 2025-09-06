


import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}




const ExpertiseData = [
  { title: 'Custom ERP system', key: 'A', imgSrc: '/images/software/erp.svg', imgAlt: 'Custom ERP system icon' },
  { title: 'SaaS platform', key: 'B', imgSrc: '/images/software/saas.svg', imgAlt: 'SaaS platform icon' },
  { title: 'Mobile app', key: 'C', imgSrc: '/images/software/Notification.svg', imgAlt: 'Mobile app icon' },
  { title: 'Enterprise solution', key: 'D', imgSrc: '/images/software/Solution.svg', imgAlt: 'Enterprise solution icon' },
];

export default function Expertise() {
    const width = useWindowWidth();

    const getVerticalStyles = (key) => {
        let verticalLineHeight = '67px';
        let verticalTop = '-68px';

        if (width >= 1024) {
            // Desktop
            if (key === 'A' || key === 'D') {
            verticalLineHeight = '109px';
            verticalTop = '-110px';
            } else{
                verticalLineHeight = '67px';
                verticalTop = '-68px';
            }
        } else if (width >= 640 && width < 1024) {
            // Tablet
            if (key === 'A' || key === 'D') {
            verticalLineHeight = '92px';
            verticalTop = '-94px';
            }else{
                verticalLineHeight = '67px';
                verticalTop = '-68px';
            }
        } else if (width <= 640 ){
            // Mobile (width < 640)
            if (key === 'A' || key === 'D') {
            verticalLineHeight = '86px';
            verticalTop = '-86px';
            }else{
                verticalLineHeight = '67px';
                verticalTop = '-68px';
            }
        }

        return { verticalLineHeight, verticalTop };
        };

    return (
        <section className="py-12">
        
            <div className="flex items-center justify-center mb-12 gap-4 w-[70%]  md:w-[60%] lg:w-[59%] mx-auto relative">

                <div className="flex-grow h-0.5 border-t-2 border-dotted border-[#C32C7B]"></div>
                <h2 className="lg:text-[70px] text-3xl md:text-[40px] text-pink-500 relative z-10 font-serif">Expertise</h2>
                <div className="flex-grow h-0.5 border-t-2 border-dotted border-[#C32C7B]"></div>
            </div>

        
            <div className="relative top-5 flex justify-center lg:gap-36 md:gap-12">
                {ExpertiseData.map(({ title, key, imgSrc, imgAlt }) => {
        
                const { verticalLineHeight, verticalTop } = getVerticalStyles(key);

                return (
                    <div key={key} className="flex flex-col items-center relative z-10">
        
                    <span
                        className="absolute left-1/2 -translate-x-1/2 border-l-2 border-dotted border-[#C32C7B]"
                        style={{ top: verticalTop, height: verticalLineHeight }}
                    />

                
                    {/* <div className="md:w-24 md:h-24 lg:h-24 lg:w-24 border-2 border-dotted border-[#C32C7B] rounded-full lg:p-4 md:p-4 mb-4 bg-[#FAF5F8] flex items-center justify-center">
                        <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="md:w-full md:h-full lg:object-contain md:object-contain sm:w-[30px] sm:h-[30px]"

                        />
                    </div> */}

                    <div className="md:w-24 md:h-24 lg:w-24 lg:h-24 border-2 border-dotted border-[#C32C7B] rounded-full p-4 mb-4 bg-[#FAF5F8] flex items-center justify-center">
                        <img
                            src={imgSrc}
                            alt={imgAlt}
                            className="w-[30px] h-[30px] md:w-full md:h-full object-contain"
                        />
                    </div>


                    
                    <span className="font-semibold text-[18px] text-center  text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-paragraph)' ,
                        color: 'rgba(58, 58, 58)' 
                    }}
                    >
                        {title}
                    </span>
                    </div>
                );
                })}
            </div>

            <div className="py-20 text-center text-[18px] lg:text-[20px] md:text-[20px] w-[73%] lg:w-[62%] md:w-[81%] mx-auto">
                <span 
                    style={{ fontFamily: 'var(--font-paragraph)' ,
                            color: 'rgba(58, 58, 58, 0.7)' 
                    }}
                >
                    Whether you need a custom<b style={{
                            color: 'rgba(58, 58, 58)' 
                    }}> ERP system, a SaaS platform, a mobile app, or an enterprise solution</b> , we have the <b style={{
                            color: 'rgba(58, 58, 58)' 
                    }}> expertise to deliver cutting-edge software </b> tailored to your needs
                </span>

            </div>

             
        </section>


    );
}
