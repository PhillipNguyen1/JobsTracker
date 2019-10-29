import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

// material UI styling. similar to CSS
// I think this is called CSS in JS if you want to look it up
// makeStyles & theme are a material UI thing
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  appList: {
    margin: theme.spacing(1)
  }
}));

// Functional component
const ApplicationsTable = () => {
  const classes = useStyles(); // This is how we can access the styling. ex) "classes.button"

  // applications is an array of objects
  const [applications, setApplications] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // list is initial invisible

  // This async function gets called whenever the page loads and will update the data accordingly
  async function fetchData() {
    const result = await axios("http://localhost:4000/api/applications");
    try {
      setApplications(result.data);
    } catch (err) {
      console.error(err);
    }
    // setApplications(result.data);
    console.log(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Adds an application to the hook state
  const handleNewApplication = event => {
    console.log("Adding Application...");

    // Create a new Application
    const newApplication = {
      id: applications.length + 1,
      companyName: "Example",
      position: "software engineer"
    };

    // Append the new application to the end of the list
    setApplications([...applications, newApplication]);

    // Click on 'List Applications in console' button to see new hook state
  };

  // lists applications in console
  const handleListApplications = event => {
    console.log("Listing Applications...");
    setIsVisible(!isVisible); // toggles between true & false
  };

  // clears the list of application
  const handleClear = event => {
    console.log("Clearing Applications...");
    setApplications([]);
  };

  // returns the list of application
  const listApplications = (
    <div className={classes.appList}>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Aplication Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Response</TableCell>
              <TableCell align="right">How far</TableCell>
              <TableCell align="right">Portal Link</TableCell>
              <TableCell align="right">Job Board</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {applications.map(app => (
              <TableRow key={app.companyName}>
                <TableCell component="th" scope="row">{app.companyName}</TableCell>
                <TableCell align="right">{app.position}</TableCell>
                <TableCell align="right">{app.applicationDate}</TableCell>
                <TableCell align="right">{app.status}</TableCell>
                <TableCell align="right">{app.response}</TableCell>
                <TableCell align="right">{app.howFar}</TableCell>
                <TableCell align="right">{app.portalLink}</TableCell>
                <TableCell align="right">{app.JobBoard}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );

  return (
    <div>
      {/* Displays list of applications in console */}
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleListApplications} // onClick will fire an event and call the handleListApplications() function
      >
        Toggle Application List
      </Button>

      {/* Adds application to hook state */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleNewApplication} // Different syntax but does the same thing as the previous onClick. This calls the handleNewApplication() function
      >
        Add Application
      </Button>

      {/* Adds application to hook state */}
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleClear} // Different syntax but does the same thing as the previous onClick. This calls the addApplication() function
      >
        Clear Applications
      </Button>

      {/* if isVisible, display list of applications. Else, display nothing */}
      {isVisible ? listApplications : null}
    </div>
  );
};

export default ApplicationsTable;
