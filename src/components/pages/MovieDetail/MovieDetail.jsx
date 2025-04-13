import React from "react";
import {
    useGetFilmQuery,
    useGetSequelsAndPrequelsQuery,
    useGetStaffQuery,
} from "../../../services/kinopoiskApi";
import { useNavigate, useParams, Link as ReactRouter } from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    CircularProgress,
    Container,
    Grid,
    Stack,
    Typography,
    Divider,
    Link,
} from "@mui/material";
import ErrorMessage from "../../UI/ErrorMessage";
import { ArrowBack, Language, Movie } from "@mui/icons-material";
import MovieCard from "../../UI/MovieCard/MovieCard";
import VideoPlayer from "../../UI/VideoPlayer";

// Вспомогательный компонент для чистоты кода
function DetailRow({ label, value, isBlock = false }) {
    if (!value) return null;

    return (
        <Grid container spacing={1} sx={{ mb: 1 }}>
            <Grid xs={12} sm={4} md={3} lg={2}>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    component="span"
                    sx={{ display: "block", fontWeight: 500 }}
                >
                    {label}
                </Typography>
            </Grid>
            <Grid xs={12} sm={8} md={9} lg={10}>
                <Typography
                    variant="body1"
                    component={isBlock ? "div" : "span"}
                >
                    {value}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const responseFilm = useGetFilmQuery(id);
    const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id);
    const responseStaff = useGetStaffQuery(id);

    if (
        responseFilm.isLoading ||
        responseSequelsAndPrequels.isLoading ||
        responseStaff.isLoading
    ) {
        return (
            <Box display="flex" justifyContent="center" height="80vh">
                <CircularProgress size={36} />
            </Box>
        );
    }

    if (responseFilm.error || responseStaff.error) {
        return <ErrorMessage message="Не удалось загрузить данные о фильме." />;
    }

    const film = responseFilm.data;
    const staff = responseStaff.data;
    const sequels = responseSequelsAndPrequels.data;
    const validSequels = Array.isArray(sequels) ? sequels : [];

    return (
        <Container maxWidth="lg" sx={{ py: 3 }}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid xs={12} md={4}>
                    <Stack
                        component="img"
                        src={film.posterUrlPreview || film.posterUrl}
                        alt={film.nameRu || film.nameOriginal || "Постер"}
                        sx={{
                            height: "auto",
                            borderRadius: 2,
                            display: "block",
                            maxWidth: "100%",
                            mx: "auto",
                        }}
                    />
                </Grid>

                <Grid xs={12} md={8}>
                    <Stack direction="row" alignItems="flex-start" mb={2.5}>
                        <Button
                            startIcon={<ArrowBack />}
                            size="medium"
                            onClick={() => navigate(-1)}
                            sx={{ mr: 1, mt: 0.5 }}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h4" component="h1">
                                {film.nameRu || film.nameOriginal}
                            </Typography>
                            {film.nameOriginal &&
                                film.nameRu &&
                                film.nameOriginal !== film.nameRu && (
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        component="span"
                                        sx={{ display: "block" }}
                                    >
                                        {film.nameOriginal}
                                    </Typography>
                                )}
                        </Box>
                    </Stack>

                    <DetailRow label="Год:" value={film.year} />
                    <DetailRow
                        label="Страна:"
                        value={film.countries?.map((c) => c.country).join(", ")}
                    />
                    <DetailRow
                        label="Жанры:"
                        value={film.genres?.map((g) => g.genre).join(", ")}
                    />
                    <DetailRow
                        label="Режиссеры:"
                        value={
                            staff
                                ?.filter((p) => p.professionKey === "DIRECTOR")
                                .map((p) => p.nameRu)
                                .join(", ") || "Нет данных"
                        }
                    />
                    <DetailRow
                        label="Время:"
                        value={
                            film.filmLength
                                ? `${film.filmLength} мин.`
                                : "Нет данных"
                        }
                    />
                    <DetailRow
                        label="Описание:"
                        value={film.description || "Описание отсутствует"}
                        isBlock
                    />

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
                            В главных ролях:
                        </Typography>
                        <Stack spacing={0.5}>
                            {staff
                                ?.filter((el) => el.professionKey === "ACTOR")
                                .slice(0, 10)
                                .map(({ staffId, nameRu }) => (
                                    <div key={nameRu}>
                                        <Link
                                            component={ReactRouter}
                                            to={`/actor/${staffId}`}
                                            variant="body1"
                                            key={staffId}
                                        >
                                            {nameRu}
                                        </Link>
                                    </div>
                                ))}
                            {staff?.filter((el) => el.professionKey === "ACTOR")
                                .length === 0 && (
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Нет данных об актерах
                                </Typography>
                            )}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <ButtonGroup variant="outlined" size="medium">
                    {film.webUrl && (
                        <Button
                            target="_blank"
                            rel="noopener noreferrer"
                            href={film.webUrl}
                            startIcon={<Language />}
                        >
                            Кинопоиск
                        </Button>
                    )}
                    {film.imdbId && (
                        <Button
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.imdb.com/title/${film.imdbId}`}
                            startIcon={<Movie />}
                        >
                            IMDB
                        </Button>
                    )}
                </ButtonGroup>
            </Box>

            <Box sx={{ my: 4 }}>
                <Typography
                    textAlign="center"
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 2 }}
                >
                    Смотреть онлайн
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <VideoPlayer />
                </Box>
            </Box>

            {validSequels.length > 0 && (
                <Box sx={{ my: 4 }}>
                    <Divider sx={{ mb: 3 }} />
                    <Typography
                        textAlign="center"
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 3 }}
                    >
                        Сиквелы и Приквелы
                    </Typography>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        sx={{ gap: 2 }}
                    >
                        {validSequels.map((el) => (
                            <MovieCard key={el.filmId || el.id} movie={el} />
                        ))}
                    </Stack>
                </Box>
            )}
            {validSequels.length === 0 &&
                !responseSequelsAndPrequels.isLoading &&
                !responseSequelsAndPrequels.error && (
                    <Box sx={{ my: 4 }}>
                        <Divider sx={{ mb: 3 }} />
                        <Typography
                            textAlign="center"
                            color="text.secondary"
                            sx={{ mb: 3 }}
                        >
                            Сиквелы и приквелы отсутствуют.
                        </Typography>
                    </Box>
                )}
        </Container>
    );
}
