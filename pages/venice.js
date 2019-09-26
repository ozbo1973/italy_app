import Head from "next/head";
import { useRouter } from "next/router";
import { getPageTitleProper, getPageTitle } from "../src/helpers/pageHelpers";
import { getAllPageData } from "../src/helpers/pageDataQuery";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const apiKeys = {
  MAPBOX_KEY: process.env.MAPBOX_KEY,
  WEATHER_KEY: process.env.WEATHER_KEY,
  YELP_KEY: process.env.YELP_KEY
};

const Venice = ({ tData, apiKeys }) => {
  const router = useRouter();
  const pageTitle = getPageTitleProper(router.pathname);
  const page = getPageTitle(router.pathname);

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${pageTitle}`} </title>
      </Head>
      <Container>
        <PageLayout
          page={{ page, pageTitle }}
          tData={tData}
          apiKeys={apiKeys}
        />
      </Container>
    </div>
  );
};

Venice.getInitialProps = async () => {
  return { apiKeys };
};
export default Venice;
