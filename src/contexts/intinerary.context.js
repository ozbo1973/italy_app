import { createContext, useReducer } from "react";
import { useRouter } from "next/router";
import itinReducer from "../reducers/itinerary.reducer";
import { useTheme, useMediaQuery } from "@material-ui/core";

export const ItineraryContext = createContext();
export const ItineraryDispatch = createContext();

export function ItineraryProvider(props) {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const defaultValue = {
    data: [{}],
    errMsg: null,
    isLoading: true,
    panel: { panelOpen: "", disableEditAll: false, allOpen: false },
    isAddFormOpen: false,
    snacks: { isSnackOpen: false, snackMsg: "" },
    config: {
      apiToUse: "itin",
      pageRoute: router.pathname,
      newRecord: {
        title: "",
        date: new Date(),
        description: "",
        tickets: 2
      }
    },
    isDesktop
  };

  const [itinState, itinDispatch] = useReducer(itinReducer, {
    ...defaultValue
  });

  return (
    <ItineraryContext.Provider value={itinState}>
      <ItineraryDispatch.Provider value={itinDispatch}>
        {props.children}
      </ItineraryDispatch.Provider>
    </ItineraryContext.Provider>
  );
}
