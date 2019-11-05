import React, { useState } from "react";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import initialformState from "../../shared/initalFormState";
import { applicationFormStyles } from "./Applications-Style";

const ApplicationForm = props => {
  const classes = applicationFormStyles();
  const { handleCreate } = props;
  const [formState, setFormState] = useState(initialformState);

  function invalidForm() {
    const { companyName, position, applicationDate } = formState;
    return !companyName || !position || !applicationDate;
  }

  // Handles user input
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (invalidForm()) {
      window.alert("Invalid form");
    } else {
      handleCreate(formState);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormState(initialformState);
  };

  return (
    <div>
      <h1>Create an Application</h1>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="form-company-name"
          name="companyName"
          label="Company Name"
          onChange={handleChange}
          className={classes.textField}
          value={formState.companyName}
          margin="normal"
        />
        <TextField
          required
          id="form-position"
          label="Position"
          className={classes.textField}
          name="position"
          onChange={handleChange}
          value={formState.position}
          margin="normal"
        />
        <TextField
          required
          id="fomr-date"
          label="Application Date"
          type="date"
          className={classes.textField}
          name="applicationDate"
          onChange={handleChange}
          value={formState.applicationDate}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          required
          id="form-status"
          label="Status"
          className={classes.textField}
          name="status"
          onChange={handleChange}
          value={formState.status}
          margin="normal"
        />
        <TextField
          id="form-response"
          label="Response?"
          className={classes.textField}
          name="response"
          onChange={handleChange}
          value={formState.response}
          margin="normal"
        />
        <TextField
          id="form-how-far"
          label="How Far?"
          name="howFar"
          onChange={handleChange}
          className={classes.textField}
          value={formState.howFar}
          margin="normal"
        />
        <TextField
          id="form-portal-link"
          label="Portal Link"
          name="portalLink"
          onChange={handleChange}
          className={classes.textField}
          value={formState.portalLink}
          margin="normal"
        />
        <TextField
          id="form-job-board"
          label="Job Board"
          name="JobBoard"
          onChange={handleChange}
          margin="normal"
          className={clsx(classes.textField, classes.dense)}
          value={formState.JobBoard}
        />
        <TextField
          id="form-salary"
          label="Salary"
          type="number"
          name="salary"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
          onChange={handleChange}
          className={classes.textField}
          value={formState.salary}
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
          Create Application
        </Button>
      </form>
    </div>
  );
};

export default ApplicationForm;
