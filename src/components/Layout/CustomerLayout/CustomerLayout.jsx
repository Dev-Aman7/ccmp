import { Box, Grid } from "@material-ui/core";
import React from "react";

import NavBar from "../../NavBar";
import Sidebar from "../../Sidebar/Sidebar";

function CustomerLayout(props) {
    const { children } = props;
    return (
        <>
            {" "}
            <NavBar />
            <Grid container>
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                    <Box mt="64px">{children}</Box>
                </Grid>
            </Grid>
        </>
    );
}

export default CustomerLayout;
