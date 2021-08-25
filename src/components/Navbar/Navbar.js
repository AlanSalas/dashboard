import React from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Dashboard Online
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
