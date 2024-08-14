import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            trailerVideo: null
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
                return state;
            },
            addTrailerVideo: (state, action) => {
                state.trailerVideo = action.payload;
                return state;
            }
            
        },
    }
);

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;