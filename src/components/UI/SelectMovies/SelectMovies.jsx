import {
    Stack,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Box,
} from "@mui/material";
import React from "react";

export default function SelectMovies({
    currentFilters,
    countryOptions = [],
    genreOptions = [],
    // TODO доработать фильтрацию с годами
    /* yearOptions = [],  */ // получаем динамический список из пропсов
    onFilterChange,
    onResetFilters,
}) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (onFilterChange) {
            onFilterChange(name, value);
        }
    };

    const handleReset = () => {
        if (onResetFilters) {
            onResetFilters();
        }
    };

    const sortOptions = [
        { value: "RATING", label: "По рейтингу" },
        { value: "NUM_VOTE", label: "По оценкам" },
        { value: "YEAR", label: "Новые" },
    ];

    return (
        <Stack
            component="form"
            direction="row"
            flexWrap="wrap"
            gap={2}
            sx={{ mt: 2, mb: 3 }}
            onSubmit={(e) => e.preventDefault()}
        >
            {/* Сортировка */}
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="sort-select-label">Сортировка</InputLabel>
                <Select
                    labelId="sort-select-label"
                    value={currentFilters.sort || ""}
                    label="Сортировка"
                    name="sort"
                    onChange={handleChange}
                    displayEmpty
                >
                    {sortOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Страна */}
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="country-select-label">Страна</InputLabel>
                <Select
                    labelId="country-select-label"
                    value={currentFilters.country || ""}
                    label="Страна"
                    name="country"
                    onChange={handleChange}
                    к
                    displayEmpty
                    disabled={
                        !Array.isArray(countryOptions) ||
                        countryOptions.length === 0
                    }
                >
                    {Array.isArray(countryOptions) &&
                        countryOptions.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.country}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

            {/* Жанр */}
            <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="genre-select-label">Жанр</InputLabel>
                <Select
                    labelId="genre-select-label"
                    value={currentFilters.genre || ""}
                    label="Жанр"
                    name="genre"
                    onChange={handleChange}
                    displayEmpty
                    disabled={
                        !Array.isArray(genreOptions) ||
                        genreOptions.length === 0
                    }
                >
                    {Array.isArray(genreOptions) &&
                        genreOptions.map((genre) => (
                            <MenuItem key={genre.id} value={genre.id}>
                                {genre.genre}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

            {/* Год */}
            {/* <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel>Год</InputLabel>
                <Select
                    value={currentFilters.year || ""}
                    label="Год"
                    name="year"
                    onChange={handleChange}
                    displayEmpty
                    disabled={
                        !Array.isArray(yearOptions) || yearOptions.length === 0
                    }
                >
                    {Array.isArray(yearOptions) &&
                        yearOptions.map((year) => (
                            <MenuItem key={year} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl> */}

            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="outlined" onClick={handleReset} size="medium">
                    Сбросить
                </Button>
            </Box>
        </Stack>
    );
}
