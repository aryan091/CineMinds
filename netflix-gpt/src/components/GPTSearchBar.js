import React, { useEffect, useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import openAI from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import {addGptMovieResult} from '../utils/gptSlice'
import lang from '../utils/languageConstants';

const GPTSearchBar = () => {

  const langKey = useSelector(store => store.config.lang); 
  const searchText = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(addGptMovieResult({movieNames: [], movieResults: []}));
    }
  })
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };


  const handleGPTSearch = async () => {
    // Make an API CALL

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query" + searchText.current.value + ". Only give names of Five Movies , comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });  
    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    let gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

    if(!gptMovies) {
      gptMovies = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"
      gptMovies = gptMovies.split(",");
    }


    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

  }
    
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form 
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={lang[langKey].gptSearchPlaceholder}className='p-4 m-4 col-span-9 ' ref={searchText}/>
            <button className=' text-white bg-transparent border border-white rounded-md font-semibold col-span-3 m-4 py-2 px-2 md:px-4'
            onClick={handleGPTSearch}
            >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar