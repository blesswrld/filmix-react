import {
    useGetFilmsQuery,
    useGetFilmsTopQuery,
} from "../services/kinopoiskApi";
import { TOP_LISTS } from "../components/constants";
import { useSelector } from "react-redux";

export default function useMoviesQuery() {
    const { countries, order, year, page } = useSelector(
        (state) => state.currentMovieSlice
    );

    const responsePopular = useGetFilmsTopQuery({
        type: TOP_LISTS[0].value,
        page,
    });

    const responseBest = useGetFilmsTopQuery({
        type: TOP_LISTS[1].value,
        page,
    });

    const responseFilms = useGetFilmsQuery({
        type: "FILM",
        countries,
        genreId: "1",
        order,
        year,
        page,
    });

    const responseSerials = useGetFilmsQuery({
        type: "TV_SERIES",
        countries,
        genreId: "1",
        order,
        year,
        page,
    });

    const responseCartoons = useGetFilmsQuery({
        type: "FILM",
        countries,
        genreId: "18",
        order,
        year,
        page,
    });

    const isLoading =
        responsePopular.isFetching ||
        responseBest.isFetching ||
        responseFilms.isFetching ||
        responseSerials.isFetching ||
        responseCartoons.isFetching;

    const hasError =
        responsePopular.error ||
        responseBest.error ||
        responseFilms.error ||
        responseSerials.error ||
        responseCartoons.error;

    return {
        isLoading,
        hasError,
        responsePopular,
        responseBest,
        responseFilms,
        responseSerials,
        responseCartoons,
    };
}
