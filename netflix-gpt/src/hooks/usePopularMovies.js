import { useDispatch , useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=1`,
        API_OPTIONS
      );
      const response = await data.json();
      dispatch(addPopularMovies(response.results));
    } catch (error) {
    }
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;