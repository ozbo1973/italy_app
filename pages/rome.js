import Head from "next/head";
import { getPageTitleProper, getPageTitle } from "../src/helpers/pageHelpers";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const Rome = ({ getPage }) => {
  const pageTitle = getPageTitleProper(getPage);
  const page = getPageTitle(getPage);

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${pageTitle}`} </title>
      </Head>
      <Container>
        <PageLayout page={{ page, pageTitle }} imgSrc="/static/img/rome.jpg" />
      </Container>
    </div>
  );
};

Rome.getInitialProps = async ({ pathname }) => {
  return { getPage: pathname };
};
export default Rome;
