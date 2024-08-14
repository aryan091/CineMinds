import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {

  const getNowPlayingMovies = async () => {


try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`, API_OPTIONS)
      const response = await data.json()
      console.log(response)
} catch (error) {
  console.log(error)
}
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])

  return (
    <div>
        <Header/>
    </div>
  )
}

export default Browse