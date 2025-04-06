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
        // TODO add actions
    },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default currentMovieSlice.reducer;
