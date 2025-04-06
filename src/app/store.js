import { configureStore } from "@reduxjs/toolkit";
import currentMovieReducer from "../features/currentMovieSlice";
import { kinopoiskApi } from "../services/kinopoiskApi";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,

        currentMovie: currentMovieReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
