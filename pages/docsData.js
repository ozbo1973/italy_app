import { useEffect, useContext } from "react";
import { LinksAndDocsDispatch } from "../src/contexts/linksanddocs.context";
import Head from "next/head";
import LinksAndDocs from "../src/components/links-and-docs";
import DocsMenu from "../src/components/nav/docsMenu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  dataRoot: {
    marginTop: theme.spacing(4)
  }
}));

const DocsData = ({ getQuery }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useContext(LinksAndDocsDispatch);
  const { category } = getQuery;

  useEffect(() => {
    dispatch({
      type: "UPDATE_CONFIG",
      payload: { apiToUse: "docsData", pageRoute: `/${category}` }
    });
  }, [category]);

  return !category ? (
    <div>Loading</div>
  ) : (
    <div>
      <Head>
        <title>{`Docs - Links | ${category}`}</title>
      </Head>
      <Grid container direction="column" className={classes.root}>
        <Grid item container spacing={1}>
          <Grid item md={3} xs={12}>
            <DocsMenu />
          </Grid>
          <Grid item md={9} xs={12}>
            <div className={classes.dataRoot}>
              <LinksAndDocs docsData isDeskTop={isDeskTop} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

DocsData.getInitialProps = async ({ query }) => {
  return { getQuery: query };
};

export default DocsData;
