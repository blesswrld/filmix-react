import React from "react";
import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

export default function Layout() {
    return (
        <Container
            fixed
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            {/* <Box sx={{ p: 4 }} /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </Container>
    );
}
