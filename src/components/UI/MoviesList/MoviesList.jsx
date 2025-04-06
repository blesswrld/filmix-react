import { Stack } from "@mui/material";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

export default function MoviesList({ movies, totalPages, page, setPage }) {
    console.log(movies);
    return (
        <>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {movies.map((movie) => (
                    <MovieCard key={movie.kinopoiskId} movie={movie} />
                ))}
            </Stack>
        </>
    );
}
