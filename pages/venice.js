import Head from "next/head";
import { useRouter } from "next/router";
import { getPageTitleProper, getPageTitle } from "../src/helpers/pageHelpers";
import { getAllPageData } from "../src/helpers/pageDataQuery";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const Venice = ({ tData }) => {
  const router = useRouter();
  const pageTitle = getPageTitleProper(router.pathname);
  const page = getPageTitle(router.pathname);

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${pageTitle}`} </title>
      </Head>
      <Container>
        <PageLayout page={{ page, pageTitle }} tData={tData} />
      </Container>
    </div>
  );
};

Venice.getInitialProps = async ({ pathname }) => {
  const data = await getAllPageData(pathname);
  return { tData: data };
};
export default Venice;
