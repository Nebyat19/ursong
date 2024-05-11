import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSwiperSlide } from "swiper/react"
import { getSongsFetch } from "../store/songState"
import { useSongs } from "../store/hooks/useSong"
const Slide=({ list,slideChane, onChangeList })=> {
  
    
    return <div  className="relative">
      
        <img className="absolute  blur-sm inset-0 w-full h-full object-cover" src="src/assets/images/playlistBanner.jpeg" alt="Playlist Banner" />
        <div className="absolute  top-0 w-full bg-red-20 bg-opacity-50 p-5">
            <h1 className="text-lg font-semibold">{list.playlistName}</h1>
            <p className="text-lg font-semibold">{list.id}</p>
            {list.tags.split(",").map(tag => <span key={tag}>#{tag} </span>)}
          

        </div>
    </div>
}

export { Slide }