import { useTheme } from "@material-ui/core/styles";
import { ItineraryProvider } from "../../contexts/intinerary.context";
import { LinksAndDocsProvider } from "../../contexts/linksanddocs.context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ItineraryProvider>
      <LinksAndDocsProvider>
        {!isDeskTop ? (
          <PageLayoutMobile page={page} imgSrc={imgSrc} />
        ) : (
          <PageLayoutDesk page={page} imgSrc={imgSrc} />
        )}
      </LinksAndDocsProvider>
    </ItineraryProvider>
  );
};

export default PageLayout;
