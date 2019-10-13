import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import LinksAndDocs from "../src/components/linksAndDocs";
import DocsMenu from "../src/components/nav/docsMenu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const DocsData = () => {
  const classes = useStyles();
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    !category && router.push("/");
  }, [category]);

  return (
    <div>
      <Head>
        <title>{`Docs - Links | ${category}`}</title>
      </Head>
      <Grid container direction="column" spacing={1} className={classes.root}>
        <Grid item container>
          <Grid item md={3} xs={12}>
            <DocsMenu />
          </Grid>
          <Grid item md={9} xs={12}>
            <LinksAndDocs page={category} docsData />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DocsData;
