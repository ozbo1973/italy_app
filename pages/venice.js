import Head from "next/head";
import { getPageTitleProper, getPageTitle } from "../src/helpers/pageHelpers";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const Venice = ({ getPage }) => {
  const pageTitle = getPageTitleProper(getPage);
  const page = getPageTitle(getPage);

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${pageTitle}`} </title>
      </Head>
      <Container>
        <PageLayout page={{ page, pageTitle }} />
      </Container>
    </div>
  );
};

Venice.getInitialProps = async ({ pathname }) => {
  return { getPage: pathname };
};
export default Venice;
