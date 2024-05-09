import {  HeartIcon, LogoImage, MusicIcon, VerticalDot } from "../constants"
import { FaTrash } from "react-icons/fa6";


const SongCardh = () => {

    return (

        <div className="text-sm flex justify-between w-[50%]  
    bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 p-2 rounded-lg mt-10">
            <div className="flex gap-3 items-center">
                <div className="relative  w-20 h-20">
                    <img className="absolute h-full w-full " src={MusicIcon} alt="" />
                </div>
                <div className="flex flex-col">

                    <h1 className="text-lg font-semibold text-gray-50">Meyyr mosasi</h1>
                    <span className="text-sm text-gray-100">#pop #rock ...</span>

                </div>
            </div>
            <div className="flex flex-col justify-between items-end ">
                <span className="right"><img className="h-5 w-5" src={VerticalDot} alt="" /></span>
                <div className="flex gap-5 ">
                    <span><FaTrash/></span>
                    <span><img className="h-5 w-5" src={HeartIcon} alt="" /></span>
                </div>
            </div>
        </div>
    )


}
export { SongCardh }