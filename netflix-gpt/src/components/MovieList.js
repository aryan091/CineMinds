import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  return (
    <div className='px-6 '>
                    <h1 className='text-2xl py-4 text-white'>{title}</h1>

        <div className='flex overflow-x-scroll'>
            <div className='flex flex-row  gap-2'>
                {
                    movies?.map(movie => <MovieCard posterUrl={movie?.poster_path}/>)
                }

            </div>
        </div>
    </div>
  )
}

export default MovieList