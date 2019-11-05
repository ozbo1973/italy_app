import ItineraryDesk from "./itineraryDesk";
import ItineraryMobile from "./itineraryMobile";
import { ItineraryDispatch } from "../../contexts/intinerary.context";
import { ItineraryContext } from "../../contexts/intinerary.context";
import { getAll } from "../../helpers/hooks/useAPI";
import { useContext, useEffect } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";

const Itinerary = ({ page, isDeskTop }) => {
  const itinDispatch = useContext(ItineraryDispatch);
  const { config } = useContext(ItineraryContext);
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  console.log(isDeskTop);
  useEffect(() => {
    itinDispatch({
      type: "UPDATE_CONFIG",
      payload: itinDispatch
    });
    (async () =>
      await getAll(
        { ...config, dispatch: itinDispatch },
        { payload: { isLoading: false } }
      ))();
  }, []);

  return isDeskTop ? <ItineraryDesk page={page} /> : <ItineraryMobile />;
};

export default Itinerary;
