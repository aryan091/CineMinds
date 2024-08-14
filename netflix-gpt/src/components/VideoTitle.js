import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { GrCircleInformation } from "react-icons/gr";

const VideoTitle = ({title , overview}) => {
  return (
    <div className='video w-screen aspect-video pt-[18.5%] px-24 absolute bg-gradient-to-r from-black'>


        <h1 className='text-4xl font-bold text-white'>{title}</h1>

        <p className='py-6 w-2/5 text-white'>{overview}</p>

        <div className="buttons flex gap-2 items-center">
  <button className="bg-white text-black py-2 px-6 text-lg rounded-md font-semibold flex items-center justify-center hover:bg-opacity-50 ">
    <span><IoMdPlay className="inline" size={34} /></span>
    Play
  </button>
  <button className="bg-gray-500 text-white py-2 px-6 text-lg rounded-md font-semibold flex items-center justify-center gap-2 bg-opacity-50 hover:bg-gray-600">
    <span><GrCircleInformation className="inline" color='white' size={34} /></span>
    More Info
  </button>
</div>
    </div>
  )
}

export default VideoTitle