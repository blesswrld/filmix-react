import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { store } from "./app/store";
import { Provider } from "react-redux";

import { CssBaseline } from "@mui/material";

import ToggleColorMode from "./context/ToggleColorMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/* Оборачиваем приложение в контекст темы */}
        <ToggleColorMode>
            <CssBaseline />
            <App />
        </ToggleColorMode>
    </Provider>
);
