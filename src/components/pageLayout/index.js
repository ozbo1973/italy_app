import { useTheme } from "@material-ui/core/styles";
import { ItineraryProvider } from "../../contexts/intinerary.context";
import { LinksAndDocsProvider } from "../../contexts/linksanddocs.context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";
import { WeatherProvider } from "../../contexts/weather.context";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ItineraryProvider>
      <LinksAndDocsProvider>
        <WeatherProvider>
          {!isDeskTop ? (
            <PageLayoutMobile page={page} imgSrc={imgSrc} />
          ) : (
            <PageLayoutDesk page={page} imgSrc={imgSrc} />
          )}
        </WeatherProvider>
      </LinksAndDocsProvider>
    </ItineraryProvider>
  );
};

export default PageLayout;
