import StarIcon from "@mui/icons-material/Star";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FloodOutlinedIcon from "@mui/icons-material/FloodOutlined";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ReorderIcon from "@mui/icons-material/Reorder";
import FortIcon from "@mui/icons-material/Fort";

export const iconComponents = {
    StarIcon,
    StarPurple500Icon,
    BloodtypeIcon,
    MenuBookIcon,
    FamilyRestroomIcon,
    FavoriteBorderIcon,
    CoronavirusIcon,
    FloodOutlinedIcon,
    LiveTvIcon,
    LocalMoviesIcon,
    ReorderIcon,
    FortIcon,
};

export const TOP_LISTS = [
    {
        title: "ТОП 100 популярных фильмов",
        icon: "StarIcon",
        url: "/popular-films",
        value: "TOP_POPULAR_MOVIES",
    },
    {
        title: "ТОП 250 лучших фильмов",
        icon: "StarPurple500Icon",
        url: "/best-films",
        value: "TOP_250_MOVIES",
    },
    {
        title: "Вампиры",
        icon: "BloodtypeIcon",
        url: "/vampire-films",
        value: "VAMPIRE_THEME",
    },
    {
        title: "Комиксы",
        icon: "MenuBookIcon",
        url: "/comics",
        value: "COMICS_THEME",
    },
    {
        title: "Семейные",
        icon: "FamilyRestroomIcon",
        url: "/family-films",
        value: "FAMILY",
    },
    {
        title: "Романтика",
        icon: "FavoriteBorderIcon",
        url: "/romantic-films",
        value: "LOVE_THEME",
    },
    {
        title: "Зомби",
        icon: "CoronavirusIcon",
        url: "/zombie-films",
        value: "ZOMBIE_THEME",
    },
    {
        title: "Катастрофы",
        icon: "FloodOutlinedIcon",
        url: "/catastrophe-films",
        value: "CATASTROPHE_THEME",
    },
    {
        title: "Популярные Сериалы",
        icon: "LiveTvIcon",
        url: "/popular-serials",
        value: "POPULAR_SERIES",
    },
];

export const MOVIE_LISTS = [
    {
        title: "Фильмы",
        icon: "LocalMoviesIcon",
        url: "/films",
        value: "FILM",
    },
    {
        title: "Сериалы",
        icon: "ReorderIcon",
        url: "/serials",
        value: "TV_SERIES",
    },
    {
        title: "Мультфильмы",
        icon: "FortIcon",
        url: "/cartoons",
        value: "FILM",
    },
];
