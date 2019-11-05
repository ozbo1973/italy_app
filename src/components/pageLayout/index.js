import { useTheme } from "@material-ui/core/styles";
import { ItineraryProvider } from "../../contexts/intinerary.context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ItineraryProvider>
      {!isDeskTop ? (
        <PageLayoutMobile page={page} imgSrc={imgSrc} />
      ) : (
        <PageLayoutDesk page={page} imgSrc={imgSrc} />
      )}
    </ItineraryProvider>
  );
};

export default PageLayout;
