import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import userForm from 'react-hook-from';
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

  function handleSubmit (e) {
  
    console.log(e);
  };


  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 1500 }}>
      
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
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Aplpication Date"
        defaultValue=""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Status"
        defaultValue=""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Response?"
        defaultValue=""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="How Far?"
        defaultValue=""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Portal Link"
        defaultValue=""
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-dense"
        label="Job Board"
        defaultValue=""
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-number"
        label="Salary"
        type="number"
        defaultValue=""
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
    </div>
  );
}
