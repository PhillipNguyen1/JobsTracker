import React, { useState } from "react";
import { Container, TextField, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { BrowserRouter } from "react-router-dom";
import { applicationFormStyles } from "../application/Applications-Style";
import axios from "axios";
// import { A } from "hookrouter";

const RegisterPage = () => {
  const url = "http://localhost:4000/api/users/register";
  const [Users, setUsers] = useState([]);
  const classes = applicationFormStyles();

  const initialUserState = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  // Handles user input
  const handleChange = event => {
    const { name, value } = event.target;

    setUsers({ ...Users, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    createNewUser(Users);
    handleReset();
  };

  const handleReset = () => {
    setUsers(initialUserState);
  };

  const createNewUser = async userData => {
    try {
      await axios.post(url, userData);
    } catch (err) {
      for (var prop in err.response.data) {
        if (err.response.data.hasOwnProperty(prop)) {
          window.alert(`${err.response.data[prop]}`);
        }
      }
    }
  };

  const marginStyle = {
    marginLeft: "8px",
    marginBottom: "0px"
  };

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <h2 style={marginStyle}>
              <b>Register</b>
            </h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="form-Name"
              name="name"
              label="Name"
              onChange={handleChange}
              className={classes.textField}
              value={Users.name || ""}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="form-Email"
              name="email"
              label="Email"
              onChange={handleChange}
              className={classes.textField}
              value={Users.email || ""}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            {" "}
            <TextField
              required
              id="form-Password"
              name="password"
              label="Password"
              onChange={handleChange}
              className={classes.textField}
              value={Users.password || ""}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="form-Password2"
              name="password2"
              label="Confirm Password"
              onChange={handleChange}
              className={classes.textField}
              value={Users.password2 || ""}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            {" "}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Register
            </Button>
          </Grid>

          <Grid item xs={12}>
            <BrowserRouter>
              <p style={marginStyle}>
                {/* Already have an account? <A href="/login">Log in</A> */}
              </p>
            </BrowserRouter>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default Register;
