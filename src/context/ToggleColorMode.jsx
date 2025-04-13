import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext();

export default function ToggleColorMode({ children }) {
    const [mode, setMode] = useState("dark"); // Темная тема по умолчанию

    const theme = createTheme({ palette: { mode } });

    useEffect(() => {
        const modeFromLocalStorage = localStorage.getItem("theme");
        if (modeFromLocalStorage) {
            setMode(modeFromLocalStorage);
        } else {
            localStorage.setItem("theme", "dark");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", mode); // ключ - значение (mode)
    }, [mode]);

    const toggleColorMode = () => {
        setMode((prevState) => (prevState === "light" ? "dark" : "light"));
    };

    return (
        <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}
