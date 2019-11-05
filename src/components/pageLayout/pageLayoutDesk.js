import { usePlacesData } from "../../helpers/hooks/useStaticData";
import Weather from "../weather";
import Itinerary from "../itinerary";
import LinksAndDocs from "../linksAndDocs";
import Yelp from "../yelp";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
    <Container>
      <Grid container direction="column" spacing={5} className={classes.root}>
        <Grid item container spacing={3}>
          <Grid item lg={4} md={12} container direction="column">
            <Grid item container>
              <Typography variant="h3" component="h1">
                {`${properPlace(page)}`}
              </Typography>
            </Grid>
            <Grid item>
              <Weather page={page} imgSrc={imgSrc} />
            </Grid>
          </Grid>
          <Grid item lg={8} md={12}>
            <Itinerary isDeskTop page={page} />
          </Grid>
        </Grid>
        <Grid item spacing={4} container>
          <Grid item lg={6} md={12}>
            <LinksAndDocs isDeskTop page={page} />
          </Grid>
          <Grid item lg={6} md={12}>
            <Yelp isDeskTop page={page} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageLayoutDesk;
