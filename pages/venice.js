import Head from "next/head";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";
import { usePlacesData } from "../src/helpers/hooks/useStaticData";

const Venice = ({ getPage }) => {
  const { properPlace, fromRoute } = usePlacesData();

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${properPlace(getPage)}`} </title>
      </Head>
      <Container>
        <PageLayout page={fromRoute(getPage)} imgSrc="/static/img/venice.jpg" />
      </Container>
    </div>
  );
};

Venice.getInitialProps = async ({ pathname }) => {
  return { getPage: pathname };
};
export default Venice;
