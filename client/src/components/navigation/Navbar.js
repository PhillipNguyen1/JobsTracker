import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { navbarStyles } from "./Navigation-Style";
import { Redirect } from "react-router-dom";

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
            component="a"
            style={{
              textDecoration: "none"
            }}
            href="/"
          >
            Job-Tracker
          </Typography>

          <Button color="inherit" href="/register">
            Register
          </Button>
          <Button color="inherit" href="/login">
            Login
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Navbar;
