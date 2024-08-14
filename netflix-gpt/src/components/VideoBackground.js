import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { json } from "react-router-dom";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {


    const dispatch = useDispatch();

    const trailerId = useSelector(store => store.movies?.trailerVideo);

    console.log(" trailer id : ",trailerId);
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const response = await data.json();

    const filterData = response.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId?.key }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
