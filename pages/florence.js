import { pageDNLData } from "../src/helpers/pageDataQuery";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const Florence = ({ dnlData }) => {
  return (
    <Container>
      <PageLayout tData={{ dnlData }} />
    </Container>
  );
};

Florence.getInitialProps = async ({ pathname }) => {
  const dnlData = await pageDNLData(pathname);
  return { dnlData };
};

export default Florence;
