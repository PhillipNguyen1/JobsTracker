import React, { useState } from "react";
import { Container, TextField, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { applicationFormStyles } from "../application/Applications-Style";
import axios from "axios";
import jwtdecode from 'jwt-decode';

const LoginPage = () => {
  const url = "http://localhost:4000/api/users/login";
  const [Users, setUsers] = useState([]);
  const classes = applicationFormStyles();

  const initialUserState = {
    email: "",
    password: ""
  };

  // Handles user input
  const handleChange = event => {
    const { name, value } = event.target;

    setUsers({ ...Users, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    LogIn(Users);
    handleReset();
  };

  const handleReset = () => {
    setUsers(initialUserState);
  };

  const LogIn = async userData => {
    try {
      const res = await axios.post(url, userData);
      const {token} = res.data;
      window.localStorage.setItem("jwtToken", token);
    } catch (err) {
      for (var prop in err.response.data) {
        if (err.response.data.hasOwnProperty(prop)) {
          window.alert(`${prop} : ${err.response.data[prop]}`);
        }
      }
    }
  };

  const marginStyles = {
    marginLeft: "8px",
    marginBottom: "0px"
  };

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <h2 style={marginStyles}>
              <b>Login</b>
            </h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="form-Email"
              label="Email"
              className={classes.textField}
              name="email"
              onChange={handleChange}
              value={Users.email || ""}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Login
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default LoginPage;