import { Skeleton, Stack, useMediaQuery } from "@mui/material";
import React, { Fragment } from "react";

export default function MoviesListMainSkeleton() {
    const isMobile = useMediaQuery("(max-width: 320px)");

    return (
        <>
            <Skeleton
                animation="wave"
                variant="rounded"
                height="32px"
                width="200px"
                sx={{ mt: 2, mb: 2 }}
            />
            <Stack
                mt={2}
                mb={2}
                sx={{ flexDirection: { sm: "column", md: "row" }, gap: 1 }}
            >
                <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={isMobile ? "50%" : "25%"}
                    height={40}
                />
                <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={isMobile ? "50%" : "25%"}
                    height={40}
                />
                <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={isMobile ? "50%" : "25%"}
                    height={40}
                />
                <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={isMobile ? "100%" : "25%"}
                    height={40}
                />
            </Stack>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {Array(15)
                    .fill(null)
                    .map((_, index) => (
                        <Fragment key={index}>
                            <Stack flexDirection="column">
                                <Skeleton
                                    variant="rectangular"
                                    animation="wave"
                                    height="322px"
                                    width="215px"
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    width={132}
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    width={132}
                                />
                            </Stack>
                        </Fragment>
                    ))}
            </Stack>
        </>
    );
}
