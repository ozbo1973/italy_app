import { useRouter } from "next/router";
import LinksAndDocs from "../src/components/linksAndDocs";
import DocsMenu from "../src/components/docsMenu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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

const DocsData = () => {
  const classes = useStyles();
  const router = useRouter();
  const { category = 0 } = router.query;

  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Grid container>
            <Grid item md={3} xs={12}>
              <DocsMenu />
            </Grid>
            <Grid item md={9} xs={12}>
              <LinksAndDocs page={category} docsData />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DocsData;
