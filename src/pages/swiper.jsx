import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FiPlay } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Slide } from './slide';

export const PlaylistSwiper = () => {
  const playlists = useSelector(state => state.playlists.playlists)
   const [slideChane, setSlideChane]=useState(false)
   console.log("again playlist swiper")
  /*const changePlayList =(id)=>{
    console.log(id)
  }
  */
 const onSlide =()=>{
  console.log("sdhsbdhs")
 }
  return (
    <>
      <Swiper
        effect={"coverflow"}
        preventClicks={false}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        onSlideChange={() => setSlideChane((prev)=>!prev)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
     
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

<SwiperSlide onClick={()=>console.log("dd")}>Slide 1</SwiperSlide>


        {playlists.filter(l => l.playlistName.trim() !== '').map(list =>

          <SwiperSlide    onClick={()=>console.log("dddnn")}  key={Math.random()}>
          
            <Slide  onClick={()=>onSlide}  list={list}/>
          </SwiperSlide>
        )}




      </Swiper>
    </>
  );
}
