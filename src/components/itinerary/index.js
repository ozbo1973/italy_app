import ItineraryDesk from "./itineraryDesk";
import ItineraryMobile from "./itineraryMobile";
import { useTheme, useMediaQuery } from "@material-ui/core";

const Itinerary = ({ page }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return matches ? (
    <ItineraryDesk page={page} />
  ) : (
    <ItineraryMobile page={page} />
  );
};

export default Itinerary;
