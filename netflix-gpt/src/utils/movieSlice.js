import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            popularMovies: null,
            topRatedMovies: null,
            upcomingMovies: null,
            trailerVideo: null,
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
                return state;
            },
            addPopularMovies: (state, action) => {
                state.popularMovies = action.payload;
                return state;
            },
            addTopRatedMovies: (state, action) => {
                state.topRatedMovies = action.payload;
                return state;
            },
            addUpcomingMovies: (state, action) => {
                state.upcomingMovies = action.payload;
                return state;
            },
            addTrailerVideo: (state, action) => {
                state.trailerVideo = action.payload;
                return state;
            }
            
        },
    }
);

export const { addNowPlayingMovies, addTrailerVideo ,addPopularMovies , addTopRatedMovies , addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;