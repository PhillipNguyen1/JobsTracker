import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import LoadingSpinner from '../shared/LoadingSpinner';

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
// recieve list of applications as props
function ApplicationsTable(props) {
  const classes = useStyles(); // This is how we can access the styling. ex) "classes.button"
  const [isLoaded, setLoaded] = useState(false);
  const [applications, setApplications] = useState([]);
  const url = "http://localhost:4000/api/applications";

  // This async function gets called whenever the page loads and will update the data accordingly
  async function fetchData() {
    console.log("FETCHING DATA");
    const result = await axios(url);
    try {
      setApplications(result.data);
      setLoaded(true);
    } catch (err) {
      console.error(err);
      setLoaded(false);
    }
  }

  // Makes API request
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
    "Job Board"
  ];

  // renders loading spinner
  const renderSpinner = (LoadingSpinner());

  // renders table
  const renderTable = (
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

      {console.log(applications)}
    </Paper>
  );

  // Conditionally renders table or loading spinner
  return (
    isLoaded ? renderTable : renderSpinner
  );
}

export default ApplicationsTable;