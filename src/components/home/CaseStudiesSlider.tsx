import Icon from "@/components/common/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const caseStudies = [
  {
    title: "Medical Equipment System",
    image: "/images/home/medical-equipment-system.png",
    content:
      "Our medical equipment maintenance system designed with a view to simplify the maintenance and service calls entries for the installed medical equipment...",
  },
  {
    title: "Real Estate Listing app",
    image: "/images/home/medical-equipment-system.png",
    content:
      "A comprehensive platform for listing and managing real estate properties, featuring advanced search and filtering options.",
  },
  {
    title: "Event Booking Management",
    image: "/images/home/medical-equipment-system.png",
    content:
      "An event booking management system that allows users to create, manage, and book events seamlessly, with features for ticketing and scheduling.",
  },
];

function CaseStudyCard({
  title,
  image,
  content,
}: {
  title: string;
  image: string;
  content: string;
}) {
  return (
    <div className="shadow-xl rounded-lg p-4 text-left bg-white mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-contain mb-2"
      />
      <h4
        className="text-sm mt-4 font-semibold"
        style={{ color: "var(--color-title)" }}
      >
        {title}
      </h4>
      <p className="text-xs text-[#C13B7B] mt-4">{content}</p>
      <button className="mt-4 w-auto flex text-sm items-center gap-2">
        See More <Icon name="ArrowRight" />
      </button>
    </div>
  );
}

export default function CaseStudiesSlider() {
  return (
    <section className="w-full py-4 bg-white flex flex-col items-center px-4">
      <div className="w-full relative px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
        >
          {caseStudies.map((cs, i) => (
            <SwiperSlide key={i}>
              <CaseStudyCard {...cs} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="absolute -top-[60px] right-4 flex gap-4">
          {/* Prev Button */}
          <button
            className="custom-prev"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <Icon name="ArrowLeft" className="custom-prev-icon" />
          </button>

          {/* Next Button */}
          <button
            className="custom-next"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <Icon name="ArrowRight" className="custom-next-icon" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* Disabled button state */
        .swiper-button-disabled {
          pointer-events: none;
          opacity: 0.5;
          background-color: #f3f4f6 !important; /* light gray bg */
        }

        /* Default active colors */
        .custom-prev svg {
          color: #ec4899; /* pink-400 */
        }
        .custom-next svg {
          color: #db2777; /* pink-600 */
        }

        /* Disabled icon colors */
        .custom-prev.swiper-button-disabled svg,
        .custom-next.swiper-button-disabled svg {
          color: #e5a4c1 !important; /* light pink when disabled */
        }
      `}</style>
    </section>
  );
}
