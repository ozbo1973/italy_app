import { useRouter } from "next/router";
import ItineraryDesk from "./itineraryDesk";
import ItineraryMobile from "./itineraryMobile";
import { ItineraryContext } from "../../contexts/intinerary.context";
import { getAll } from "../../helpers/hooks/useAPI";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { useContext, useEffect } from "react";

const Itinerary = ({ page }) => {
  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { itinState, itinDispatch } = useContext(ItineraryContext);
  const config = {
    apiToUse: itinState.apiToUse,
    pageRoute: router.pathname,
    dispatch: itinDispatch
  };

  useEffect(() => {
    const itinData = async () =>
      await getAll(config, { payload: { isLoading: false } });
    itinData();
  }, []);

  return (
    <>
      {matches ? (
        <ItineraryDesk page={page} />
      ) : (
        <ItineraryMobile page={page} config={config} />
      )}
    </>
  );
};

export default Itinerary;
