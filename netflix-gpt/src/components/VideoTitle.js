import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='video pt-36 px-12'>

        <h1 className='text-5xl font-bold'>{title}</h1>

        <p className='py-6  w-1/4'>{overview}</p>

        <div className='buttons flex gap-4'>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg font-semibold'>Play</button>
            <button className='bg-neutral-500 text-white font-semibold p-4 px-12 text-xl rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle