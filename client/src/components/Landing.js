import React, { useEffect, useState } from "react";
import { Container, Button } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useRedirect } from "hookrouter";
import { decode } from "punycode";

const Landing = () => {
  const headerStyles = {
    marginLeft: "5px",
    marginBottom: "0px",
    marginCenter: "100px"
  };

  const { toRedirect, settoRedirect } = useState(false);

  const herro = () => {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);
      // console.log(decoded);
      window.localStorage.setItem("userInfo", JSON.stringify(decoded));
      //   console.log("Redirecting");
    } else {
      console.log("Not here");
    }
  };

  useEffect(() => {
    herro();
  }, []);

  // if (toRedirect){
  //   useRedirect('/', '/dashboard')
  // }

  return (
    <Container style={headerStyles} fixed>
      <h1>WELCOME TO JOBSTRACKER (THAT'S RIGHT PURAL BITCH)</h1>
      <p>
        Please register or login to begin your long tedius and stupid job hunt.
        Fuck you
      </p>
      <Button variant="contained" color="primary" href="/register">
        Register
      </Button>
    </Container>
  );
};
export default Landing;
