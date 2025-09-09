

const cardData = [
  {
    letter: 'A',
    title: 'Expertise in multiple technologies',
    desc: 'Java, Python, PHP, React, Angular, Node.js, and more.',
  },
  {
    letter: 'B',
    title: 'Agile development approach',
    desc: 'Faster delivery with iterative development cycles.',
  },
  {
    letter: 'C',
    title: 'Seamless integration capabilities',
    desc: 'Connecting with your existing tools and systems.',
  },
  {
    letter: 'D',
    title: 'Cloud-based and on-premise solutions',
    desc: 'Flexibility to choose the best deployment option.',
  },
  {
    letter: 'E',
    title: 'Dedicated support & maintenance',
    desc: 'Continuous improvements and security updates.',
  },
];

export default function Cone() {
  
  // Border color for Circle
  const borderRound = {
    A: { border: '5px solid #AF286F' },
    B: { border: '5px solid #C32C7B' },
    C: { border: '5px solid #C43E84'},
    D: { border: '5px solid #C32C7B' },
    E: { border: '5px solid #AF286F' },
  };
  
  // Circle text color
  const CircleColor = {
    A: { color: '#C32C7B' },
    B: { color: '#C55D93' },
    C: { color: '#C13D82' },
    D: { color: '#C55D93' },
    E: { color: '#C32C7B' },
  };
  // Desktop & Tablet Colors
  const bgColors = {
    A: '#C32C7B',
    B: '#DB67A3',
    C: '#D64490',
    D: '#DB67A3',
    E: '#C32C7B',
  };

  // Desktop Heights
  const heights = {
    A: 'h-[480px]',
    B: 'h-[540px]',
    C: 'h-[557px]',
    D: 'h-[540px]',
    E: 'h-[480px]',
  };

  // Desktop Side Borders
  const borderStyles = {
    A: { borderRight: '5px solid #AF286F' },
    B: { borderRight: '5px solid #C32C7B' },
    C: {},
    D: { borderLeft: '5px solid #C32C7B' },
    E: { borderLeft: '5px solid #AF286F' },
  };
  
  // Mobile uniform height
  const Mobileheights = {
    A: 'h-52',
    B: 'h-52',
    C: 'h-52',
    D: 'h-52',
    E: 'h-52',
  };

  // Optional: Mobile widths (custom shape)
  const Mobilewidth = {
    A: 'w-[50%]',
    B: 'w-[70%]',
    C: 'w-[85%]',
    D: 'w-[70%]',
    E: 'w-[50%]',
  };

  const Position = {
    A: 'bottom-[65px]',
    B: 'bottom-[75px]',
    C: 'bottom-[90px]',
    D: 'bottom-[75px]',
    E: 'bottom-[70px]',
  };


  // Mobile top/bottom borders
  const MobileborderStyles = {
    A: { borderBottom: '5px solid #AF286F' },
    B: { borderBottom: '5px solid #C32C7B' },
    C: {},
    D: { borderTop: '5px solid #C32C7B' },
    E: { borderTop: '5px solid #AF286F' },
  };

  const flexMobilegap = {
    A: 'gap-1',
    B: 'gap-3',
    C: 'gap-15',
    D: 'gap-3',
    E: 'gap-1',
  };

  const flexMobilewidth = {
    A: 'w-[63%]',
    B: 'w-[70%]',
    C: 'w-[47%] ml-7',
    D: 'w-[70%]',
    E: 'w-[63%]',
  };

  return (
    <section >
      {/* DESKTOP & TABLET VIEW */}
    <div className="text-center py-10 md:py-20 md:mb-10 lg:py-5 lg:mb-10 px-4">
      <span
        className="mx-auto w-[90%] md:w-[70%] text-[35px] md:text-[40px] lg:text-[50px] text-[#3A3A3A] font-normal leading-tight"
        style={{ fontFamily: 'var(--font-title)' }}
      >
        Why Choose Us for{' '}
        <span className="text-[#C32C7B] font-normal">Custom Software Development?</span>
      </span>

      <hr className="mt-3 mb-6 w-[36%] lg:w-[8%] md:w-[20%] mx-auto border-t-2 border-[#C32C7B]" />


      <span
        className="block md:w-[72%] lg:w-[100%] mx-auto text-[20px] md:text-base color-p leading-relaxed"
        style={{ fontFamily: 'var(--font-paragraph)' }}
      >
        At Fronseye, we specialize in building powerful, scalable, and secure custom software solutions that align with your business objectives. Our team of expert developers, designers, and strategists work closely with you to understand your vision and transform it into a high-performance application.
      </span>
    </div>

    <div className="hidden sm:flex items-end justify-center py-10 pc-1440">
        {cardData.map(({ letter, title, desc }) => (
          <div
            key={letter}
            className={`lg:w-[267px] relative transition-top duration-300 ease-in-out hover:-top-5 w-56 text-white text-center shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-top-5 ${heights[letter]} smooth-shape`}
            style={{
              backgroundColor: bgColors[letter],
              ...borderStyles[letter],
            }}
          >
            {/* Letter Circle */}
            <div className="relative lg:top-[140px] md:top-[140px]  left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[155px] !h-[155px] bg-white rounded-full flex items-center justify-center text-[70px] font-[700]   shadow-md z-10"
            
              style={{ 
                ...borderRound[letter], 
                ...CircleColor[letter] 
              }}
             
            >
              {letter}
            </div>

            {/* Text Content */}
            <div className={`relative lg:w-[267px] px-4 flex flex-col items-center justify-center h-full leading-normal ${Position[letter]}`}>
              <span className="mb-2 font-semibold text-lg md:text-[20px] !leading-[27px] text-[#fff] leading-normal tracking-[1px]">{title}  </span>
              <hr className=" w-[30%] mx-auto h-[1.5px] bg-white mb-[20px] mb-[8px] font-[600] rounded-full" />
           
              
              <span className="text-[20px] text-[#fff] lg:text-[20px] font-normal leading-normal tracking-[1px]">{desc}</span>
            </div>
          </div>
        ))}
      </div>

        {/* MOBILE VIEW */}
      <div className="sm:hidden flex flex-col items-start py-12 ">
        {cardData.map(({ letter, title, desc }) => (
          <div
            key={letter}
            className={`relative transition-top duration-300 ease-in-out hover:-right-5 text-white text-left shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${Mobileheights[letter]} ${Mobilewidth[letter]} smooth-shape-mobile`}
            style={{
              borderRadius: '0px 100px 100px 0px',
              backgroundColor: bgColors[letter],
              ...MobileborderStyles[letter],
            }}
          >
            {/* Flex container for Circle + Content */}
            <div className={`flex items-center h-full px-4 text-center leading-normal ${flexMobilegap[letter]}`}>
      
              {/* Text Content */}

              <div className={`flex flex-col justify-center ${flexMobilewidth[letter]} `}>
                <span className="mb-1 font-semibold text-base text-[#fff] text-[13px] leading-normal tracking-[1px]">{title}  </span>
                <hr className=" w-[60%] mx-auto h-[1.5px] bg-white mb-2 font-[600] rounded-full" />
                <span className="text-sm font-normal text-[#fff] text-[13px] leading-normal tracking-[1px]">{desc}</span>
              </div>
              
              {/* Letter Circle */}

              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold  shadow-md z-10" 
                style={{ 
                  ...borderRound[letter], 
                  ...CircleColor[letter] 
                }}
              >
                {letter}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  );
}
