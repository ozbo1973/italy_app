import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(-0.5),
    padding: "3px",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2)
    }
  },
  progress: {
    margin: theme.spacing(2)
  },
  divider: {
    marginTop: ".5rem",
    marginBottom: ".7rem",
    [theme.breakpoints.up("md")]: {
      margin: "10px 0px"
    }
  },
  avatar: {
    width: 60,
    height: 60,
    marginTop: ".2rem",
    [theme.breakpoints.up("md")]: {
      width: 100,
      height: 100,
      marginRight: "1rem"
    }
  },
  header: {
    padding: ".2rem 1rem"
  },
  tempTitle: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px",
      textAlign: "center"
    }
  },
  forecastDay: {
    fontWeight: "bold"
  },
  forecastHiLow: {
    marginLeft: ".5rem"
  },
  forecastSummary: {
    marginRight: "3.5rem"
  }
}));
