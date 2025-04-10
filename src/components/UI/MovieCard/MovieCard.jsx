import React from "react";

import { Box, Rating, Stack, Tooltip, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
    return (
        <Stack>
            <RouterLink to={`/movie/${movie.kinopoiskId}`}>
                <img
                    src={movie.posterUrlPreview}
                    alt={movie.nameRu}
                    className={styles.img}
                />
            </RouterLink>
            <Link
                component={RouterLink}
                to={`/movie/${movie.kinopoiskId}`}
                textAlign="center"
                margin="0 auto"
                sx={{ width: "200px" }}
            >
                {movie.nameRu ? movie.nameRu : movie.nameOriginal}
            </Link>

            {movie.ratingKinopoisk && (
                <Stack alignItems="center">
                    <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
                        <Box>
                            <Rating
                                name="read-only"
                                value={movie.ratingKinopoisk / 2}
                                readOnly
                                precision={0.5}
                            />
                        </Box>
                    </Tooltip>
                </Stack>
            )}
        </Stack>
    );
}
