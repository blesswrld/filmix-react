import React from "react";
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom";
import { useGetStaffByIdQuery } from "../../../services/kinopoiskApi";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Stack,
    Typography,
    Link,
} from "@mui/material";
import ErrorMessage from "../../UI/ErrorMessage";
import { ArrowBack } from "@mui/icons-material";

export default function ActorDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetStaffByIdQuery(id);

    if (isLoading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="80vh"
            >
                <CircularProgress size={36} />
            </Box>
        );
    }

    if (error) return <ErrorMessage />;

    return (
        <>
            <Grid container spacing={4} pt={2}>
                <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                    <img
                        src={data.posterUrl}
                        style={{ maxWidth: "100%" }}
                        alt={data.nameRu}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Stack flexDirection="row">
                        <Button
                            startIcon={<ArrowBack />}
                            onClick={() => navigate(-1)}
                            color="primary"
                        ></Button>
                        <Stack flexDirection="column">
                            <Typography variant="h5">{data.nameRu}</Typography>
                            <Typography>{data.nameEn}</Typography>
                        </Stack>
                    </Stack>
                    <Typography gutterBottom variant="h5" mt={2}>
                        Об актере
                    </Typography>
                    <Grid container>
                        <Grid size={{ xs: 6 }}>
                            <Typography gutterBottom>Карьера:</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography>{data.profession}</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography gutterBottom>Рост:</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography>{data.growth}</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography gutterBottom>Дата рождения:</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography>
                                {data.birthday} ({data.age} лет)
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography gutterBottom>Всего фильмов:</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography>{data.films.length}</Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Typography gutterBottom>Факты:</Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            {data.facts.map((fact, index) => (
                                <Typography gutterBottom key={fact}>
                                    {index + 1}.{fact}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid size={{ xs: 12 }}>
                <Typography variant="h5">Фильмы</Typography>
            </Grid>
            <Stack>
                {data.films
                    /* Делаем фильтрацию для дублирующихся фильмов */
                    .filter(
                        (item, index, self) =>
                            index ===
                            self.findIndex((el) => el.filmId === item.filmId)
                    )
                    .map((film, index) => (
                        <Stack
                            key={film.filmId}
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography>{index + 1}.</Typography>
                            <Link
                                component={RouterLink}
                                to={`/movie/${film.filmId}`}
                            >
                                {film.nameRu ? film.nameRu : film.nameEn}
                            </Link>
                            <Typography>
                                {film.rating ? film.rating : "-"}
                            </Typography>
                        </Stack>
                    ))}
            </Stack>
        </>
    );
}
