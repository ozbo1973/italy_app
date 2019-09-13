import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const Weather = ({ location }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="span">
        Weather
      </Typography>
      <Typography variant="h5" component="span">
        75 &deg;
      </Typography>
      <Typography variant="body2">Sunny with no chance of rain.</Typography>
    </Paper>
  );
};

export default Weather;
