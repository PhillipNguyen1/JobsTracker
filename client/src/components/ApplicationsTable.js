import React, { useState, useEffect } from "react";
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

  // This async function gets called whenever the page loads and will update the data accordingly
  async function fetchData() {
    const result = await axios("http://localhost:4000/api/applications");
    try {
      console.log(result.data)
      setApplications(result.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  // List of header
  const headers = [
    "Position",
    "Application Date",
    "Status",
    "Response",
    "How Far",
    "Portal Link",
    "Job Board",
    "Actions"
  ];

<<<<<<< Updated upstream
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            {/* Iterates through the headers array to create headers */}
            {headers.map(header => (
              <TableCell key={header} align="right">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {applications.map(app => (
            <TableRow key={app.companyName}>
              <TableCell component="th" scope="row">
                {app.companyName}
              </TableCell>
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
=======
  function increment() {
    setCount(count + 1);
  };

  const deleteApp = async (id) => {
    const res = await axios.delete(`http://localhost:4000/api/applications/${id}`)
    console.log(res)
    setTimeout(increment(), 500)
  }

  return (
    <div>
      
      <Button onClick={increment} align="middle" variant="contained" color="primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z"/></svg></Button>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              {/* Iterates through the headers array to create headers */}
              {headers.map(header => (
                <TableCell key={header} align="right">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {applications.map(app => (
              <TableRow key={app.companyName}>
                <TableCell component="th" scope="row">
                  {app.companyName}
                </TableCell>
                <TableCell align="right">{app.position}</TableCell>
                <TableCell align="right">{app.applicationDate}</TableCell>
                <TableCell align="right">{app.status}</TableCell>
                <TableCell align="right">{app.response}</TableCell>
                <TableCell align="right">{app.howFar}</TableCell>
                <TableCell align="right">{app.portalLink}</TableCell>
                <TableCell align="right">{app.JobBoard}</TableCell>
                <TableCell key={app._id} align="right">
                {<Button onClick={() => {console.log(app._id)}}>Edit</Button>}
                |
                {<Button onClick={() => {deleteApp(app._id); }} >Delete</Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
>>>>>>> Stashed changes
  );
};

export default ApplicationsTable;
