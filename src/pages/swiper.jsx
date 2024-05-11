import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FiPlay } from 'react-icons/fi';

export const SwiperJs = () => {
  return (
    <>
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
        className="mySwiper"
      >


        <SwiperSlide>
          
          <div className="relative">
            <img className="absolute inset-0 w-full h-full object-cover" src="src/assets/images/playlistBanner.jpeg" alt="Playlist Banner" />
            <div className="absolute top-0 w-full bg-red-20 bg-opacity-50 p-5">
              <h1 className="text-lg font-semibold">Playlist Title</h1>
              <p className="text-sm text-gray-600 mb-2">Playlist Description</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Total Tracks: 10</p>
                <button className="bg-red-400 text-white rounded-full p-3 flex items-center justify-center">
                  <FiPlay className="mr-2" />
                  Play
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
