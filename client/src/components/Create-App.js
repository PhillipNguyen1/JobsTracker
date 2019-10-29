import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1)
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

  const [formState, setformState] = useState({
    companyName: "",
    position: "",
    applicationDate: "",
    status: "",
    response: "",
    howFar: "",
    portalLink: "",
    jobBoard: "",
    salary: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
    // const data = JSON.stringify(mapValues(fields, x => x.input.value), null, 2);
    // alert(data);
  }


  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="standard-name"
        label="Company Name"
        // value={formState.companyName}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-uncontrolled"
        label="Position"
        defaultValue=""
        value={formState.position}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Aplpication Date"
        defaultValue=""
        value={formState.applicationDate}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Status"
        defaultValue=""
        value={formState.status}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Response?"
        defaultValue=""
        value={formState.response}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="How Far?"
        defaultValue=""
        value={formState.howFar}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Portal Link"
        defaultValue=""
        value={formState.portalLink}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-dense"
        label="Job Board"
        defaultValue=""
        value={formState.jobBoard}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-number"
        label="Salary"
        type="number"
        defaultValue=""
        value={formState.salary}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
      />

      <Button 
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={handleSubmit}
      >
      Submit
      </Button>
    </form>
  );
}
