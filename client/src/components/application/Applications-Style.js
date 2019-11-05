import { makeStyles } from "@material-ui/core/styles";

export const ApplicationFormStyle = makeStyles(theme => ({
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

export const ApplicationModalStyle = makeStyles(theme => ({
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

// material UI styling. similar to CSS
export const ApplicationTableStyle = makeStyles(theme => ({
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
