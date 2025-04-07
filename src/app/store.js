import { configureStore } from "@reduxjs/toolkit";
import currentMovieReducer from "../features/currentMovieSlice";
import { kinopoiskApi } from "../services/kinopoiskApi";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,

        currentMovieSlice: currentMovieReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
