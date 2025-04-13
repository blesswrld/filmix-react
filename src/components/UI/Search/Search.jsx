import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useGetFilmsQuery } from "../../../services/kinopoiskApi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie } from "../../../features/searchMovieSlice";
import { useNavigate } from "react-router-dom";

const movieTypes = {
    FILM: "Фильм",
    TV_SERIES: "Сериал",
    TV_SHOW: "ТВ-Шоу",
    MINI_SERIES: "Мини-Сериал",
};

export default function Search() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { countries, genreId, order, type, year, page, keyword } =
        useSelector((state) => state.searchMovieSlice);

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            dispatch(setSearchMovie({ keyword: input }));
        }, 500);

        return () => clearTimeout(setTimeoutId);
    }, [input]);

    const { data, isLoading, isFetching } = useGetFilmsQuery({
        countries,
        genreId,
        order,
        type,
        year,
        page,
        keyword,
    });

    return (
        <Autocomplete
            freeSolo
            sx={{
                width: 300,
                backgroundColor: "rgba(255,255,255, 0.15)",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        border: "none",
                    },
                },
            }}
            getOptionLabel={(option) =>
                `${option.nameRu} - ${movieTypes[option.type]}- ${option.year}`
            }
            options={data ? data.items : []}
            onInputChange={(_, value) => {
                setInput(value);
            }}
            onChange={(_, value) => {
                navigate(`/movie/${value.kinopoiskId}`);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Поиск"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <Fragment>
                                {isFetching ? (
                                    <CircularProgress
                                        size={20}
                                        color="inherit"
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
