import ItineraryDesk from "./itineraryDesk";
import ItineraryMobile from "./itineraryMobile";
import {
  ItineraryDispatch,
  ItineraryContext
} from "../../contexts/intinerary.context";
import { getAll } from "../../helpers/hooks/useAPI";
import { useContext, useEffect } from "react";

const Itinerary = ({ isDeskTop, expanded }) => {
  const itinDispatch = useContext(ItineraryDispatch);
  const { config } = useContext(ItineraryContext);

  useEffect(() => {
    const getData = async () =>
      await getAll(
        { ...config, dispatch: itinDispatch },
        { payload: { isLoading: false } }
      );

    itinDispatch({
      type: "UPDATE_CONFIG",
      payload: { dispatch: itinDispatch }
    });

    (isDeskTop || expanded) && getData();
  }, [expanded, isDeskTop]);

  return isDeskTop ? <ItineraryDesk /> : <ItineraryMobile />;
};

export default Itinerary;
