import Head from "next/head";
import DocsMenu from "../src/components/docsMenu";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  headingContainer: {
    padding: theme.spacing(3)
  },
  imgContainer: {
    height: "100vh",
    width: "100%",
    background: 'no-repeat top/100% url("./static/img/italy_graphic2.gif")'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Our Italy Trip - home</title>
      </Head>
      <Container className={classes.root}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Grid container>
              <Grid item md={3} xs={12}>
                <DocsMenu />
              </Grid>
              <Grid item md={9} xs={12}>
                <Container className={classes.imgContainer}></Container>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
