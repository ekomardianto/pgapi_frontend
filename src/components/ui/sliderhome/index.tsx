// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function MySlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay, EffectCreative]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      creativeEffect={{
        prev: {
          shadow: true,
          opacity: 0.5,
        },
        next: {
          shadow: true,
          opacity: 0.5,
        },
      }}
    >
      <SwiperSlide>
        <Image
          src="/images/slide1.jpg"
          width={1680}
          height={945}
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slide2.jpg"
          width={1680}
          height={945}
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slide3.jpg"
          width={1680}
          height={945}
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
}
