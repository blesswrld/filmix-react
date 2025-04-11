import React from "react";
import {
    useGetFilmQuery,
    useGetSequelsAndPrequelsQuery,
    useGetStaffQuery,
} from "../../../services/kinopoiskApi";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    CircularProgress,
    Grid,
    Typography,
} from "@mui/material";
import ErrorMessage from "../../UI/ErrorMessage";
import { ArrowBack, Language, Movie } from "@mui/icons-material";

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
            <Box display="flex" justifyContent="center" margin="auto">
                <CircularProgress size={36} />
            </Box>
        );
    }

    if (
        responseFilm.error ||
        /* responseSequelsAndPrequels.error || */
        responseStaff.error
    ) {
        return <ErrorMessage />;
    }
    return (
        // TODO ADD SOME STYLES
        <>
            <Grid container spacing={2} mt={2}>
                <Grid size={{ xs: 4, md: 4 }}>
                    <img
                        src={responseFilm.data.posterUrl}
                        alt={responseFilm.data.nameRu}
                        width="100%"
                    />
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 2 }}>
                            <Button
                                startIcon={<ArrowBack />}
                                size="large"
                                onClick={() => navigate(-1)}
                            />
                        </Grid>
                        <Grid xs={{ xs: 4 }} alignContent="center">
                            <Typography variant="h5">
                                {responseFilm.data.nameRu}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>Год</Typography>
                        </Grid>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>
                                {responseFilm.data.year}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>Страна</Typography>
                        </Grid>
                        <Grid xs={{ xs: 6 }}>
                            {responseFilm.data.countries.map(({ country }) => (
                                <Typography gutterBottom key={country}>
                                    {country}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>Жанры</Typography>
                        </Grid>
                        <Grid xs={{ xs: 6 }}>
                            {responseFilm.data.genres.map(({ genre }) => (
                                <Typography gutterBottom key={genre}>
                                    {genre}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>Режисеры</Typography>
                        </Grid>
                        <Grid xs={{ xs: 6 }}>
                            {responseStaff.data
                                .filter(
                                    (el) => el.professionText === "Режиссеры"
                                )
                                .map(({ nameRu }) => (
                                    <Typography gutterBottom key={nameRu}>
                                        {nameRu}
                                    </Typography>
                                ))}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>Время</Typography>
                        </Grid>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>
                                {responseFilm.data.filmLength} мин
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>Описание:</Typography>
                        </Grid>
                        <Grid xs={{ xs: 6 }}>
                            <Typography gutterBottom>
                                {responseFilm.data.description
                                    ? responseFilm.data.description
                                    : "Описание отсутствует"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 2, md: 4 }}>
                    <Typography gutterBottom variant="h6">
                        В главных ролях
                    </Typography>
                    {responseStaff.data
                        .filter((el) => el.professionText === "Актеры")
                        .slice(0, 10)
                        .map(({ nameRu }) => (
                            <Typography gutterBottom key={nameRu}>
                                {nameRu}
                            </Typography>
                        ))}
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
            >
                <Grid size={{ xs: 2, md: 4 }}>
                    <ButtonGroup variant="outlined" size="small">
                        <Button
                            target="_blank"
                            href={responseFilm.data.webUrl}
                            endIcon={<Language />}
                        >
                            Кинопоиск
                        </Button>
                        <Button
                            target="_blank"
                            href={`https://www.imdb.com/title/${responseFilm.data.imdbId}`}
                            endIcon={<Movie />}
                        >
                            IMDB
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </>
    );
}
