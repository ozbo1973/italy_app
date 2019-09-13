import Head from "next/head";
import { useRouter } from "next/router";
import Weather from "./weather";
import Itinerary from "./itinerary";
import LinksAndDocs from "./linksAndDocs";
import Yelp from "./yelp";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3)
  }
}));

const PageLayout = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  const pageTitle = router.pathname.split("/")[1];

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${pageTitle}`} </title>
      </Head>
      <Grid container direction="column" spacing={5} className={classes.root}>
        <Grid item container spacing={3}>
          <Grid item md={3} xs={12} container direction="column">
            <Grid item>
              <Typography variant="h3" component="h1">
                {`${pageTitle}`}
              </Typography>
            </Grid>
            <Grid item>
              <Weather location={pageTitle} />
            </Grid>
          </Grid>
          <Grid item md={9} xs={12}>
            <Itinerary />
          </Grid>
        </Grid>
        <Grid item spacing={4} container>
          <Grid item md={6} xs={12}>
            <LinksAndDocs />
          </Grid>
          <Grid item md={6} xs={12}>
            <Yelp />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageLayout;
