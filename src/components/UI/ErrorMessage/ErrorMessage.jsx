import { Box, Typography } from "@mui/material";
import React from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ErrorMessage() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="auto"
        >
            <Typography variant="h6" textAlign="center">
                Произошла ошибка!
                <br />
                Попробуйте обновить страницу
            </Typography>
            <DotLottieReact
                src="https://lottie.host/ffc875a9-e317-4aa3-bfc0-11797c937f33/myfcMUWodZ.lottie"
                loop
                autoplay
            />
        </Box>
    );
}
