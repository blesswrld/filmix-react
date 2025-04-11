import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Button,
    Stack,
    Typography,
    Box,
    CircularProgress,
} from "@mui/material";
import MoviesList from "../../UI/MoviesList/MoviesList";
import { ArrowBack } from "@mui/icons-material";
import ErrorMessage from "../../UI/ErrorMessage";
import { MOVIE_LISTS } from "../../constants";
import {
    useGetFilmsQuery,
    useGetGenresAndCountriesQuery,
} from "../../../services/kinopoiskApi";
import SelectMovies from "../../UI/SelectMovies";
import MoviesListMainSkeleton from "./MoviesListMainSkeleton";

const initialFilters = {
    sort: "",
    country: "",
    genre: "",
    /* year: "", */
};

export default function MoviesListMain() {
    const location = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState(initialFilters);

    const movieType = MOVIE_LISTS.find((el) => el.url === location.pathname);
    const genreId = movieType?.url === "/cartoons" ? 18 : filters.genre;

    /* const currentApiYear = new Date().getFullYear();
    const startApiYear = 1970; // Минимальный год из API
    const dynamicYearOptions = [];
    for (let year = currentApiYear; year >= startApiYear; year--) {
        dynamicYearOptions.push(year);
    } */

    const {
        data: genresAndCountriesData,
        error: filtersError,
        isLoading: filtersLoading,
    } = useGetGenresAndCountriesQuery();

    const {
        data: filmsResponse,
        error: filmsError,
        isLoading: filmsLoading,
        isFetching: filmsFetching,
    } = useGetFilmsQuery(
        {
            type: movieType?.value || "ALL",
            countries: filters.country,
            order: filters.sort,
            // TODO доработать фильтрацию с годами
            /* year: filters.year, */
            genreId: genreId,
            page,
        },
        {
            skip: !movieType,
        }
    );

    useEffect(() => {
        setPage(1);
    }, [location.pathname]);

    const handleFilterChange = useCallback((name, value) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
        setPage(1);
    }, []);

    const handleResetFilters = useCallback(() => {
        setFilters(initialFilters);
        setPage(1);
    }, []);

    if (filmsError || filtersError) {
        return <ErrorMessage />;
    }

    if (filmsLoading || filtersLoading) {
        return <MoviesListMainSkeleton />;
    }

    const countriesOptions = genresAndCountriesData?.countries || [];
    const genreOptions = genresAndCountriesData?.genres || [];
    const movies = filmsResponse?.items || [];
    const totalPages = filmsResponse?.totalPages || 1;

    return (
        <Box sx={{ paddingX: 2 }}>
            <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 2 }}>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate(-1)}
                    sx={{ mr: 1 }}
                />
                <Typography
                    variant="h4"
                    sx={{
                        "@media (max-width: 460px)": {
                            fontSize: "28px",
                        },
                    }}
                >
                    {movieType?.title || "Фильмы"}
                </Typography>
            </Stack>
            <SelectMovies
                currentFilters={filters}
                countryOptions={countriesOptions}
                genreOptions={genreOptions}
                /* yearOptions={dynamicYearOptions} */
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
            />
            {filmsFetching ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginY: 4,
                        minHeight: 60,
                    }}
                >
                    <CircularProgress size={36} />
                    <Typography variant="body1" sx={{ ml: 1.5 }}>
                        Загрузка...
                    </Typography>
                </Box>
            ) : movies.length > 0 ? (
                <MoviesList
                    movies={movies}
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                />
            ) : (
                <Typography sx={{ textAlign: "center", my: 4 }}>
                    Фильмы не найдены. Попробуйте изменить фильтры.
                </Typography>
            )}
        </Box>
    );
}
