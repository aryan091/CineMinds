import { useDispatch , useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?page=1`,
        API_OPTIONS
      );
      const response = await data.json();
      dispatch(addUpcomingMovies(response.results));
    } catch (error) {
    }
  };

  useEffect(() => {
    if(!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;