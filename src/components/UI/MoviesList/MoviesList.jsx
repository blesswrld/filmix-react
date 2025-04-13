import { Stack, Typography } from "@mui/material";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import Pagination from "@mui/material/Pagination";

export default function MoviesList({ movies, totalPages, page, setPage }) {
    if (!Array.isArray(movies)) {
        return (
            <Typography sx={{ textAlign: "center", my: 4 }}>
                Фильмы не найдены
            </Typography>
        );
    }

    return (
        <>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {movies.map((movie) => (
                    <MovieCard key={movie.kinopoiskId} movie={movie} />
                ))}
            </Stack>
            <Stack alignItems="center">
                <Pagination
                    count={totalPages}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    page={page}
                    onChange={(_, value) => setPage(value)}
                />
            </Stack>
        </>
    );
}
