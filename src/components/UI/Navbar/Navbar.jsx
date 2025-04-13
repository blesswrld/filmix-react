import React, { useContext, useState } from "react";
import {
    AppBar,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
    Link,
    Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Link as RouterLink } from "react-router-dom";

import { iconComponents, MOVIE_LISTS, TOP_LISTS } from "../../constants";
import Search from "../Search";
import { ColorModeContext } from "../../../context/ToggleColorMode";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Icon = ({ iconName }) => {
    const IconComponent = iconComponents[iconName];
    if (!IconComponent) {
        return null;
    }
    return <IconComponent />;
};

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const { toggleColorMode, mode } = useContext(ColorModeContext);

    const trigger = useScrollTrigger({
        target: window,
    });

    const handleDrawerToggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Container maxWidth="lg">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    mr: 2,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Stack
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                                width="100%"
                            >
                                <Typography
                                    sx={{
                                        color: "white",
                                        textDecoration: "none",
                                        flexGrow: 1,
                                        "@media (max-width: 600px)": {
                                            fontSize: "1.925rem",
                                        },
                                    }}
                                    component={RouterLink}
                                    variant="h4"
                                    to={"/"}
                                >
                                    filmix
                                </Typography>

                                <Search />
                                <IconButton
                                    color="inherit"
                                    onClick={toggleColorMode}
                                >
                                    {mode === "dark" ? (
                                        <LightModeIcon />
                                    ) : (
                                        <DarkModeIcon />
                                    )}
                                </IconButton>
                            </Stack>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
            <Toolbar />
            <Drawer
                variant="temporary"
                open={isOpen}
                onClose={handleDrawerToggle}
            >
                <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                    <List>
                        {TOP_LISTS.map((item) => (
                            <Link
                                key={item.title}
                                component={RouterLink}
                                to={item.url}
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Icon iconName={item.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {MOVIE_LISTS.map((item) => (
                            <Link
                                key={item.title}
                                component={RouterLink}
                                to={item.url}
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Icon iconName={item.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
