import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
  // Only 3 things per object for example purposes
  const [applications, setApplications] = useState([
    {
      id: 1,
      companyName: "Apple",
      position: "software engineer"
    },
    {
      id: 2,
      companyName: "Google",
      position: "software engineer"
    },
    {
      id: 3,
      companyName: "Amazon",
      position: "senior engineer"
    }
  ]);
  const [isVisible, setIsVisible] = useState(false); // list is initial invisible

  // EXAMPLE FUNCTIONS //
  // syntax for example function
  const exampleFunction = () => {
    console.log("hi");
  };

  // different syntax. Same functionality as above
  function exampleFunction2() {
    console.log("hi");
  }

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
      <h1>List of Applications</h1>
      {/* Lists applications */}
      {applications.map(app => (
        <h3 key={app.id}>
          {app.id}: {app.companyName}
        </h3>
      ))}
    </div>
  );

  return (
    <div>
      {/* Displays list of applications in console */}
      <Button
        variant="contained"
        className={classes.button}
        onClick={event => handleListApplications()} // onClick will fire an event and call the handleListApplications() function
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
