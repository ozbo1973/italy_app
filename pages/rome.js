import { pageDNLData } from "../src/helpers/pageDataQuery";
import PageLayout from "../src/components/pageLayout";
import { Container } from "@material-ui/core";

const Rome = ({ dnlData }) => {
  return (
    <Container>
      <PageLayout tData={{ dnlData }} />
    </Container>
  );
};

Rome.getInitialProps = async ({ pathname }) => {
  const dnlData = await pageDNLData(pathname);
  return { dnlData };
};
export default Rome;
