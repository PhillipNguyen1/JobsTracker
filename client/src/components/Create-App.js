import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function CreateApplication() {
  const classes = useStyles();


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="standard-name"
        label="Company Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-uncontrolled"
        label="Position"
        defaultValue = ""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Aplpication Date"
        defaultValue = ""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Status"
        defaultValue = ""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Response?"
        defaultValue = ""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="How Far?"
        defaultValue = ""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Portal Link"
        defaultValue = ""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-dense"
        label="Job Board"
        defaultValue = ""
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-number"
        label="Salary"
        type="number"
        defaultValue = ""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </form>
  );
}
