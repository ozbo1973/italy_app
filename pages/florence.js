import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
const Florence = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1">
        Florence
      </Typography>
    </div>
  );
};

export default Florence;
