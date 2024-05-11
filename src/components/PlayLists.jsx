import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { EffectCoverflow, Pagination } from "swiper/modules";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import slide_image_1 from "../assets/images/logo.png";
import Playlist from "./PlayList";

const Data = Array.from({ length: 5 }, () => slide_image_1).map((img) => ({
  path: img,
  id: Math.random(),
}));

function Playlists() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="px-4"
      >
        {Data.map((data) => (
          <SwiperSlide
            key={data.id}
            className="w-[17rem] md:w-[20rem] h-[22rem] md:h-[26rem] rounded-md overflow-hidden"
          >
            <Playlist data={data}  />
          </SwiperSlide>
        ))}

        <div className="h-[7rem] relative ">
          <div className="swiper-pagination left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  *:cursor-pointer w-[6rem] flex items-center justify-center gap-x-1 "></div>
        </div>
      </Swiper>
    </div>
  );
}

export  {Playlists};