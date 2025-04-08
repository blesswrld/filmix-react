import { Skeleton, Stack } from "@mui/material";
import React, { Fragment } from "react";

export default function MoviesListSkeleton() {
    // TODO Доработать стили для скелетона
    return (
        <>
            <Skeleton
                variant="rectangular"
                animation="wave"
                height="32px"
                width="200px"
                sx={{ mt: 2, mb: 2 }}
            />
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
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                            </Stack>
                        </Fragment>
                    ))}
            </Stack>
        </>
    );
}
