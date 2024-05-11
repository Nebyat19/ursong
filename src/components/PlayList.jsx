import { useSwiperSlide } from "swiper/react";


const Playlist = ({ data }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div className=" overflow-hidden shadow h-[400px] w-[400px] bg-black/15 relative">
     {/* <img
        className="h-full w-full blur-[.15rem]"
      //  src={data.path}
        alt="playlist photo"
      /> */}
      
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-5 bg-white/20 py-4 flex flex-col h-[55%] ">
        <h2 className="font-semibold text-xl md:text-2xl uppercase text-white/90  mb-3">
          Heading
        </h2>
        <p className="line-clamp-2 text-sm text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          cupiditate? Eius sequi voluptate perspiciatis saepe cum.
        </p>

        
        {/* Tag place */}
        <div className="flex gap-2 flex-wrap mt-auto">
          {["pop", "doro"].map((l) => (
            <span
              className="px-4 py-1.5 text-xs text-white rounded-sm bg-black/20 "
              key={l}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/50 font-bold text-neutral-800 size-[3rem] grid place-items-center rounded-full z-[100]">
        10
      </span>
      {swiperSlide.isActive && (
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/50 max-w-fit py-2.5 rounded-md px-5 uppercase font-medium text-sm">
          Play now
        </button>
      )}
    </div>
  );
};

export default Playlist;