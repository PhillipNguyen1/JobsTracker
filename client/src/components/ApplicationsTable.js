import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import LoadingSpinner from "../shared/LoadingSpinner";

// material UI styling. similar to CSS
// I think this is called CSS in JS if you want to look it up
// makeStyles & theme are a material UI thing
const useStyles = makeStyles(theme => ({
  buttonEdit: {
    marginRight: theme.spacing(1)
  },
  buttonDelete: {
    marginLeft: theme.spacing(1)
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

  const [count, setCount] = useState(0);

  // This async function gets called whenever the page loads and will update the data accordingly
  async function fetchData() {
    console.log("FETCHING DATA");
    const result = await axios(url);
    try {
      console.log(result.data);
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
  }, [count]);

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

  const increment = () => {
    setCount(count + 1);
  }

  const deleteApp = async id => {
    const res = await axios.delete(
      `http://localhost:4000/api/applications/${id}`
    );
    console.log(res);
    setTimeout(increment(), 200);
  };

  // renders loading spinner
  const renderSpinner = LoadingSpinner();

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
            <TableRow key={app._id}>
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
                {
                  <Button
                    onClick={() => {
                      console.log(app._id);
                    }}
                    className={classes.buttonEdit}
                  >
                    Edit
                  </Button>
                }
                |
                {
                  <Button
                    onClick={() => {
                      deleteApp(app._id);
                    }}
                    className={classes.buttonDelete}
                    color="secondary"
                  >
                    Delete
                  </Button>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

  // Conditionally renders table or loading spinner
  return isLoaded ? renderTable : renderSpinner;
}

export default ApplicationsTable;