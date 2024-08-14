import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?page=1`,
        API_OPTIONS
      );
      const response = await data.json();
      dispatch(addTopRatedMovies(response.results));
    } catch (error) {
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;