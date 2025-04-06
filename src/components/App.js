import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";

import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import ActorDetail from "./pages/ActorDetail";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Movies />,
                },
                {
                    path: "/movie/:id",
                    element: <MovieDetail />,
                },
                {
                    path: "/actor/:id",
                    element: <ActorDetail />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
