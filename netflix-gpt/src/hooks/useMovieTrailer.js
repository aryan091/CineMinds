import  {useEffect} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
const useMovieTrailer = (movieId) => {

  const movieTrailer = useSelector(store => store?.movies?.trailerVideo);

    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
    
        const response = await data.json();
    
        const filterData = response.results.filter(
          (video) => video.type === "Trailer"
        );
    
        const trailer = filterData.length ? filterData[0] : response.results[0];
    
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        if(!movieTrailer) getMovieVideo();
      }, []);
    
}

export default useMovieTrailer