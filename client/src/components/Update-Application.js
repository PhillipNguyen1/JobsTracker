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
  
  const classes = useStyles();

  const { open, setOpen, app, handleEdit} = props
  
  const [formState, setFormState] = React.useState(app)

  React.useEffect(() => {
    console.log(app)
    setFormState(app);
  }, [open])


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };


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
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            id="form-position"
            label="Position"
            className={classes.textField}
            name="position"
            defaultValue={formState.position}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            id="form-response"
            label="Response?"
            className={classes.textField}
            name="response"
            defaultValue={formState.response}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            id="form-how-far"
            label="How Far?"
            name="howFar"
            defaultValue={formState.howFar}
            onChange={handleChange}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="form-portal-link"
            label="Portal Link"
            name="portalLink"
            defaultValue={formState.portalLink}
            onChange={handleChange}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="form-job-board"
            label="Job Board"
            name="JobBoard"
            defaultValue={formState.JobBoard}
            onChange={handleChange}
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
            onChange={handleChange}
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
            handleEdit(formState);
            handleClose();
          }} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
