import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10000,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 800,
    },
}));

function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <Typography className={classes.title}>CCMP</Typography>
                {/* <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography> */}
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
