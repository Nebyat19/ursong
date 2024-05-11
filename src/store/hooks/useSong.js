import { useDispatch, useSelector } from "react-redux"


export const useSongs = () => {

 

const songs = useSelector((state) => state.songs.songs)

    return songs
}

