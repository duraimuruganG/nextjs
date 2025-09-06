

interface Slide {
  black: string;
  pink: string;
  discription:string;
  button: string;
  customClass:string;
  link:string;
}

interface BannerCta {
  slides: Slide[];
  bgimg: string;
}


export default function BannerCTA({ slides, bgimg }: BannerCta) {

    if (!slides || slides.length === 0) {
    return null; // or loading UI
  }
    const { black, pink, button , discription, customClass , link } = slides[0];  
    //console.log(bgimg);
  return (
    <section className={`${customClass} px-5 `}>


       <div className="flex-1 flex  items-center justify-center md:hidden">
          <img
            src={bgimg}
            alt="Banner visual"
            style={{ height:'400px'}}
          />
       </div>

      <div style={{ position : 'relative' }} className="bg-[#FDE6F2] p-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 rounded-xl my-0 md:my-8 ">
        <div className="flex-1 flex items-center justify-center hidden md:flex">
         <img 
            src={bgimg}
            alt="Banner visual"
            className="absolute bottom-0   left-[-41px] h-[305px] md:h-[305px] md:left-[-41px] lg:h-[465px] lg:left-[-63px]"
          />

        </div>
        <div className="flex-1 flex-col text-left py-6">
          <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-[45px] font-regular mb-1 uppercase dark-black" 
          style={{ lineHeight:'1.2', fontFamily: "Sarcolenta, serif" }}>
           {black} <span style={{ color: "var(--color-title)" }}>{pink}</span>
          </h3>
          {/* <hr className="intro-underline"></hr> */}
          <p className="mb-8 text-[23px]" style={{ color: 'rgba(58, 58, 58, 0.7)' }}>{discription}</p>

          <a href={`/${link}`} className="bg-[#C13B7B] hover:bg-[#a82e6a] text-white text-lg px-8 py-3 rounded-md font-medium transition-colors duration-200 mt-4">
            {button}
          </a>
        </div>
      </div>
    </section>
  );
}
