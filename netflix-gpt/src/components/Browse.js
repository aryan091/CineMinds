import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  {
    /* 
        Main Container
          - VideoBackground
          - Video Title
        Secondary Container
          - Movie List * n
            - Movie Card * n */
  }

  return (
    <>
      <Header />
      <GPTSearch />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
