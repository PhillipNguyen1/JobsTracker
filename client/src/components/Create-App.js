import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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

  function handleSubmit (event){
    event.preventDefault();
    console.log(event)
  }

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 1500 }}>
      
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {/* <input name="ASDA" ref={register}/> */}
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
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Aplpication Date"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Status"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Response?"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="How Far?"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Portal Link"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-dense"
        label="Job Board"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-number"
        label="Salary"
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
      />

      <Button 
      variant="contained"
      color="primary"
      type="submit"
      className={classes.button}
      >
      Submit
      </Button>
    </form>
    </div>
  );
}
