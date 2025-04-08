import React from "react";
import useMoviesQuery from "../../../hooks/useMoviesQuery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Можно добавить Pagination, если нужно для всех

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination"; // Раскомментируйте, если используете Pagination

import "./MoviesCarousel.css"; // Убедитесь, что стили подходят для всех каруселей

import { Link as RouterLink } from "react-router-dom";
import { Link, Typography, Box } from "@mui/material"; // Используем Box для отступов
import ErrorMessage from "../../UI/ErrorMessage";
import MoviesSkeleton from "./MoviesSkeleton";

export default function Movies() {
    const {
        isLoading,
        hasError,
        responsePopular,
        responseBest,
        responseFilms,
        responseSerials,
        responseCartoons,
    } = useMoviesQuery();

    if (isLoading) return <MoviesSkeleton />;

    const queryError =
        hasError ||
        responsePopular.error ||
        responseBest.error ||
        responseFilms.error ||
        responseSerials.error ||
        responseCartoons.error;

    if (queryError) {
        return <ErrorMessage />; // компонент для сообщения с ошибкой
    }

    const renderMovieSlides = (movies) => {
        if (!Array.isArray(movies) || movies.length === 0) {
            return null;
        }
        return movies.map((movie) => {
            const movieUrl = `/movie/${movie.kinopoiskId ?? movie.filmId}`;
            const movieTitle =
                movie.nameRu ?? movie.nameOriginal ?? "Без названия";

            return (
                <SwiperSlide
                    key={
                        movie.kinopoiskId ??
                        movie.filmId ??
                        movie.id ??
                        movie.imdbId
                    }
                    className="movie-slide"
                >
                    <RouterLink to={movieUrl}>
                        <img
                            src={movie.posterUrlPreview}
                            alt={`${movieTitle}`}
                        />
                    </RouterLink>
                    <Link
                        component={RouterLink}
                        to={movieUrl}
                        variant="body2"
                        className="movie-slide-title-link"
                        title={movieTitle}
                        sx={{
                            display: "block",
                            overflow: "hidden",
                            padding: "8px",
                            textAlign: "center",
                            color: "inherit",
                            textDecoration: "none",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        {movieTitle}
                    </Link>
                </SwiperSlide>
            );
        });
    };

    const commonSwiperProps = {
        modules: [Navigation], // Pagination
        navigation: true,
        spaceBetween: 20,
        slidesPerView: 5,
        className: "movies-swiper",
        breakpoints: {
            // Адаптивность
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            480: { slidesPerView: 2.5, spaceBetween: 15 },
            768: { slidesPerView: 3.5, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
        },
    };

    // массив конфигураций секций
    const carouselSections = [
        {
            title: "Популярные",
            data: responsePopular?.data?.items,
            linkUrl: "/popular-films",
            id: "popular",
        },
        {
            title: "Лучшие",
            data: responseBest?.data?.items,
            linkUrl: "/best-films",
            id: "best",
        },
        {
            title: "Фильмы",
            data: responseFilms?.data?.items,
            linkUrl: "/films",
            id: "films",
        },
        {
            title: "Сериалы",
            data: responseSerials?.data?.items,
            linkUrl: "/serials",
            id: "serials",
        },
        {
            title: "Мультфильмы",
            data: responseCartoons?.data?.items,
            linkUrl: "/cartoons",
            id: "cartoons",
        },
    ];

    return (
        <Box className="movies-page-container" sx={{ padding: "20px" }}>
            {carouselSections.map((section) => {
                const hasData =
                    Array.isArray(section.data) && section.data.length > 0;

                return (
                    <Box
                        component="section"
                        className={`movies-section movies-section-${section.id}`}
                        key={section.id}
                        sx={{ mb: 4 }}
                    >
                        <Link
                            component={RouterLink}
                            to={section.linkUrl}
                            variant="h4"
                            underline="hover"
                            sx={{
                                display: "block",
                                mb: 2,
                            }}
                        >
                            {section.title}
                        </Link>
                        {hasData ? (
                            <Swiper {...commonSwiperProps}>
                                {renderMovieSlides(section.data)}
                            </Swiper>
                        ) : (
                            !isLoading &&
                            !queryError && (
                                <Typography sx={{ color: "grey" }}>
                                    Раздел "{section.title}" пока пуст.
                                </Typography>
                            )
                        )}
                    </Box>
                );
            })}
        </Box>
    );
}
