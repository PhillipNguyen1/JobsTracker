import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import LoadingSpinner from "../../shared/LoadingSpinner";
import UpdateApp from "./Application-modal";
import initialformState from "../../shared/initalFormState";
import { applicationTableStyles } from "./Applications-Style";

// Recieve list of applications as props
const ApplicationsTable = props => {
  const classes = applicationTableStyles();
  const { applications, isLoaded, handleDelete, handleEdit } = props;
  const [open, setOpen] = React.useState(false);
  const [modalApp, setModalApp] = React.useState(initialformState);

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

  // renders loading spinner
  const renderSpinner = LoadingSpinner();

  // renders table
  const renderTable = (
    <div>
      <h1>Applications</h1>
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
                <TableCell align="right">
                  {
                    <Button
                      onClick={() => {
                        setModalApp(app);
                        setOpen(!open);
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
                        handleDelete(app._id);
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

      <UpdateApp
        open={open}
        setOpen={setOpen}
        app={modalApp}
        handleEdit={handleEdit}
      />
    </div>
  );

  // Conditionally renders table or loading spinner
  return isLoaded ? renderTable : renderSpinner;
};

export default ApplicationsTable;
