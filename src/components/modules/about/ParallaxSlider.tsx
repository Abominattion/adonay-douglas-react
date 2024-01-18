// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { STACK_CONSTANTS } from "../../constants/StacksConstants";

export default function ParallaxSlider() {
  return (
    <>
      <Swiper
        style={{}}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/thumbnails/001/618/458/original/abstract-hi-tech-bouncing-particles-background-video.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {STACK_CONSTANTS.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="title" data-swiper-parallax="-300">
              {category.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              {category.description}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
