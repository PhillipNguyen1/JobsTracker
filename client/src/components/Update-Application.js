import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function UpdateApp(props) {
  // const url = "http://localhost:4000/api/applications/";
  
  const classes = useStyles();

  const { open, setOpen, app} = props
  

  const initialformState = {
    companyName: "",
    position: "",
    applicationDate: "",
    status: "",
    response: "",
    howFar: "",
    portalLink: "",
    jobBoard: "",
    salary: ""
  };

  const [formState, setFormState] = React.useState(initialformState)

  React.useEffect(() => {
    // console.log("GETTING DATA")
    // axios(url + "5dbeb356ba865856389bba36").then(res => setFormState(res.data));
    console.log(app)
    setFormState(app);
  })

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please supply updated information
          </DialogContentText>
          <TextField
            required
            id="form-company-name"
            name="companyName"
            label="Company Name"
            className={classes.textField}
            defaultValue={formState.companyName}
            // onChange={handleChange}
            // value={formState.companyName}
            margin="normal"
          />
          <TextField
            required
            id="form-position"
            label="Position"
            className={classes.textField}
            name="position"
            defaultValue={formState.position}
            // onChange={handleChange}
            // value={formState.position}
            margin="normal"
          />
          <TextField
            required
            id="fomr-date"
            label="Application Date"
            type="date"
            className={classes.textField}
            name="applicationDate"
            defaultValue={formState.applicationDate}
            // onChange={handleChange}
            // value={formState.applicationDate}
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
            defaultValue={formState.status}
            // onChange={handleChange}
            // value={formState.status}
            margin="normal"
          />
          <TextField
            id="form-response"
            label="Response?"
            className={classes.textField}
            name="response"
            defaultValue={formState.response}
            // onChange={handleChange}
            // value={formState.response}
            margin="normal"
          />
          <TextField
            id="form-how-far"
            label="How Far?"
            name="howFar"
            defaultValue={formState.howFar}
            // onChange={handleChange}
            className={classes.textField}
            // value={formState.howFar}
            margin="normal"
          />
          <TextField
            id="form-portal-link"
            label="Portal Link"
            name="portalLink"
            defaultValue={formState.portalLink}
            // onChange={handleChange}
            // value={formState.portalLink}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="form-job-board"
            label="Job Board"
            name="jobBoard"
            defaultValue={formState.jobBoard}
            // onChange={handleChange}
            // value={formState.jobBoard}
            margin="normal"
            className={clsx(classes.textField, classes.dense)}
          />
          <TextField
            id="form-salary"
            label="Salary"
            type="number"
            name="salary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
            defaultValue={formState.salary}
            // onChange={handleChange}
            // value={formState.salary}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{

          }} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
/*
Two possible solutions:
1) Get the ID, then make a get request for all that information for that given ID and fill out the form as the defaultValue field
2) Pass in all the information for that given field directly from the table row (again in the defaultValue field)
*/