import { usePlacesData } from "../../helpers/hooks/useStaticData";
import Weather from "../weather";
import Itinerary from "../itinerary";
import LinksAndDocs from "../linksAndDocs";
import Yelp from "../yelp";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3)
  }
}));

const PageLayoutDesk = ({ page, imgSrc }) => {
  const classes = useStyles();
  const { properPlace } = usePlacesData();

  return (
    <Grid container direction="column" spacing={5} className={classes.root}>
      <Grid item container spacing={3}>
        <Grid item md={3} xs={12} container direction="column">
          <Grid item container>
            <Typography variant="h3" component="h1">
              {`${properPlace(page)}`}
            </Typography>
          </Grid>
          <Grid item>
            <Weather page={page} imgSrc={imgSrc} />
          </Grid>
        </Grid>
        <Grid item md={9} xs={12}>
          <Itinerary page={page} />
        </Grid>
      </Grid>
      <Grid item spacing={4} container>
        <Grid item md={6} xs={12}>
          <LinksAndDocs page={page} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Yelp page={page} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageLayoutDesk;
