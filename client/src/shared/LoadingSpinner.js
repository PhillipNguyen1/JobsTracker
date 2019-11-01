import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    position: "relative"
  }
}));

export default function LoadingSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={150} style={{ marginLeft: "45%", marginTop: "5%" }}/>
    </div>
  );
}
