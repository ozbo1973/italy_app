import { useEffect, useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { LinksAndDocsDispatch } from "../../contexts/linksanddocs.context";
import { ItineraryProvider } from "../../contexts/intinerary.context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PageLayoutDesk from "./pageLayoutDesk";
import PageLayoutMobile from "./pageLayoutMobile";
import { WeatherProvider } from "../../contexts/weather.context";

const PageLayout = ({ page, imgSrc }) => {
  const theme = useTheme();
  const { pathname } = useRouter();
  const isDeskTop = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useContext(LinksAndDocsDispatch);

  dispatch({
    type: "UPDATE_API",
    payload: { apiToUse: "linksdocs", pageRoute: pathname }
  });

  return (
    <ItineraryProvider>
      <WeatherProvider>
        {!isDeskTop ? (
          <PageLayoutMobile page={page} imgSrc={imgSrc} />
        ) : (
          <PageLayoutDesk page={page} imgSrc={imgSrc} />
        )}
      </WeatherProvider>
    </ItineraryProvider>
  );
};

export default PageLayout;
