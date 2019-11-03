import { useTheme } from "@material-ui/core/styles";
import { ItineraryProvider } from "../../contexts/intinerary.context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";
import Container from "@material-ui/core/Container";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ItineraryProvider>
      {matches ? (
        <PageLayoutMobile page={page} imgSrc={imgSrc} />
      ) : (
        <Container>
          <PageLayoutDesk page={page} imgSrc={imgSrc} />
        </Container>
      )}
    </ItineraryProvider>
  );
};

export default PageLayout;
