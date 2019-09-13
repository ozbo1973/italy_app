import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

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
                <List>
                  <ListItem>
                    <ListItemText>Flights</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Lodging</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Trains</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Luggage Storage</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Events and Venues</ListItemText>
                  </ListItem>
                </List>
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
