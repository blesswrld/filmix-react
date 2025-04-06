import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import PoolIcon from "@mui/icons-material/Pool";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ReorderIcon from "@mui/icons-material/Reorder";
import FortIcon from "@mui/icons-material/Fort";

export const iconComponents = {
    AutoAwesomeIcon,
    StarPurple500Icon,
    BloodtypeIcon,
    MenuBookIcon,
    FamilyRestroomIcon,
    VolunteerActivismIcon,
    MoodBadIcon,
    PoolIcon,
    LiveTvIcon,
    LocalMoviesIcon,
    ReorderIcon,
    FortIcon,
};

export const TOP_LISTS = [
    {
        title: "ТОП 100 популярных фильмов",
        icon: "AutoAwesomeIcon",
        url: "/popular-films",
    },
    {
        title: "ТОП 250 лучших фильмов",
        icon: "StarPurple500Icon",
        url: "/best-films",
    },
    {
        title: "Вампиры",
        icon: "BloodtypeIcon",
        url: "/vampire",
    },
    {
        title: "Комиксы",
        icon: "MenuBookIcon",
        url: "/comics",
    },
    {
        title: "Семейные",
        icon: "FamilyRestroomIcon",
        url: "/family",
    },
    {
        title: "Романтика",
        icon: "VolunteerActivismIcon",
        url: "/romantic",
    },
    {
        title: "Зомби",
        icon: "MoodBadIcon",
        url: "/zombie",
    },
    {
        title: "Катастрофы",
        icon: "PoolIcon",
        url: "/disaster",
    },
    {
        title: "Популярные Сериалы",
        icon: "LiveTvIcon",
        url: "/popular-shows",
    },
];

export const MOVIE_LISTS = [
    {
        title: "Фильмы",
        icon: "LocalMoviesIcon",
        url: "/films",
    },
    {
        title: "Сериалы",
        icon: "ReorderIcon",
        url: "/shows",
    },
    {
        title: "Мультфильмы",
        icon: "FortIcon",
        url: "/cartoons",
    },
];
