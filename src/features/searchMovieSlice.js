import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: "",
    genreId: "",
    order: "NUM_VOTE",
    type: "",
    year: "",
    page: 1,
    keyword: "",
};

export const searchMovieSlice = createSlice({
    name: "currentMovieSlice",
    initialState,
    reducers: {
        setSearchMovie: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    },
});

export const { setSearchMovie } = searchMovieSlice.actions;

export default searchMovieSlice.reducer;
