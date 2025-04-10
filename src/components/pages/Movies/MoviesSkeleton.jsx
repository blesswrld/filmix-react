import { Box, Skeleton, Stack, useMediaQuery } from "@mui/material";
import React, { Fragment } from "react";

export default function MoviesSkeleton() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box mt={2}>
            {new Array(5).fill(null).map((_, index) => (
                <Fragment key={index}>
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="32px"
                        width="200px"
                    />
                    <Stack direction="row" justifyContent="center" m={5}>
                        {new Array(5).fill(null).map((_, index) => (
                            <Skeleton
                                key={index}
                                variant="rectangular"
                                animation="wave"
                                height={isMobile ? "269px" : "352px"}
                                width={isMobile ? "100%" : "230px"}
                            />
                        ))}
                    </Stack>
                </Fragment>
            ))}
        </Box>
    );
}
