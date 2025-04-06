import React from "react";
import useMoviesQuery from "../../../hooks/useMoviesQuery";

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

    // TODO add skeleton
    if (isLoading) return <p>Loading...</p>;

    // TODO add error component
    if (hasError) return <p>Error</p>;

    return <h1>Movies</h1>;
}
