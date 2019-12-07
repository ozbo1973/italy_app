import { useContext } from "react";
import { YelpContext } from "../../contexts/yelp.context";
import useStyles from "../../styles/yelp.style";
import DisplayYelpTile from "./displayYelpTile";
import { Paper, CircularProgress, Typography } from "@material-ui/core";

const YelpDesk = () => {
  const classes = useStyles();
  const { errMsg, isLoading } = useContext(YelpContext);

  return isLoading || errMsg ? (
    <Paper className={classes.root}>
      <CircularProgress className={classes.progress} />
      <Typography variant="h4" color="error" className={classes.error}>
        {errMsg}
      </Typography>
    </Paper>
  ) : (
    <Paper className={classes.root}>
      <DisplayYelpTile cols={1} />
    </Paper>
  );
};

export default YelpDesk;
