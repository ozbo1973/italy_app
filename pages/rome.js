import Head from "next/head";
import { usePlacesData } from "../src/helpers/hooks/useStaticData";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const Rome = ({ getPage }) => {
  const { properPlace, fromRoute } = usePlacesData();

  return (
    <div>
      <Head>
        <title>{`Our Italy Trip | ${properPlace(getPage)}`} </title>
      </Head>
      <PageLayout page={fromRoute(getPage)} imgSrc="/static/img/rome.jpg" />
    </div>
  );
};

Rome.getInitialProps = async ({ pathname }) => {
  return { getPage: pathname };
};
export default Rome;
