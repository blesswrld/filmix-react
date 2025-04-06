import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

export default function Layout() {
    return (
        <Container fixed>
            <Navbar />
            <Outlet />
            <Footer />
        </Container>
    );
}
