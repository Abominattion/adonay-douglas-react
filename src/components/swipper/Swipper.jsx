// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipper.css";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

function SwiperJs() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080?random=1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080?random=2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080?random=3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080?random=4" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperJs;
