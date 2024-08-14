import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterUrl}) => {
  return (
    <div className='w-60 h-32'>
        <img src={IMG_CDN_URL + posterUrl}
        className='w-full h-full'
        alt="Movie Card" />
    </div>
  )
}

export default MovieCard