import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import hero3 from "../../images/hero3.png";
import hero4 from "../../images/hero4.png";

const HeroSlider = () => {
  return (
    <div className="p-[5rem]">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        navigation
        autoplay={true}
        className="w-full h-full max-w-full"
      >
        <SwiperSlide className="w-full h-full">
          <img src={hero1} alt="Slide 1" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src={hero2} alt="Slide 2" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src={hero3} alt="Slide 3" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src={hero4} alt="Slide 4" className="w-full h-full" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HeroSlider;
