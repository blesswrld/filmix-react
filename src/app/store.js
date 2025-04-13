import { configureStore } from "@reduxjs/toolkit";
import currentMovieReducer from "../features/currentMovieSlice";
import { kinopoiskApi } from "../services/kinopoiskApi";
import searchMovieReducer from "../features/searchMovieSlice";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,

        currentMovieSlice: currentMovieReducer,
        searchMovieSlice: searchMovieReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
