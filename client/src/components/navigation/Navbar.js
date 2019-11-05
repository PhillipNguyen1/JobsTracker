import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { navbarStyles } from './Navigation-Style';

const Navbar = () => {
  const classes = navbarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <Typography
            variant="subtitle1"
            color="inherit"
            className={classes.title}
          >
            Job Tracker
          </Typography>
          <Button color="inherit">Login</Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Navbar;
