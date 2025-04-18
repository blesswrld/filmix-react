import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: "",
    genreId: "",
    order: "NUM_VOTE",
    type: "",
    year: "",
    page: 1,
};

export const currentMovieSlice = createSlice({
    name: "currentMovieSlice",
    initialState,
    reducers: {
        selectMovie: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        resetMovie: () => ({
            ...initialState,
        }),
    },
});

export const { selectMovie, resetMovie } = currentMovieSlice.actions;

export default currentMovieSlice.reducer;
