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

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:4000/api/applications", formState).then(res => {
      console.log(res.data);
    });
  }

  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 1500 }}>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="standard-name"
          name="companyName"
          label="Company Name"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-uncontrolled"
          label="Position"
          className={classes.textField}
          name="position"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="Aplpication Date"
          className={classes.textField}
          name="applicationDate"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="Status"
          className={classes.textField}
          name="status"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="Response?"
          className={classes.textField}
          name="response"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="How Far?"
          name="howFar"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-read-only-input"
          label="Portal Link"
          name="portalLink"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-dense"
          label="Job Board"
          name="jobBoard"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
          margin="normal"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-number"
          label="Salary"
          type="number"
          name="salary"
          onChange={event =>
            setformState({
              ...formState,
              [event.target.name]: event.target.value
            })
          }
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
