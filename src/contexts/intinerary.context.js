import { createContext, useState, useReducer, useEffect } from "react";
import itinReducer from "../reducers/itinerary.reducer";
import { useTableData } from "../helpers/hooks/useTableData";
import { usePlacesData } from "../helpers/hooks/useStaticData";

export const ItineraryContext = createContext();

export function ItineraryProvider(props) {
  const defaultValue = { data: [{}], errMsg: null, isLoading: true };
  const [itinState, itinDispatch] = useReducer(itinReducer, {
    ...defaultValue,
    apiToUse: "itin"
  });

  return (
    <ItineraryContext.Provider value={{ itinState, itinDispatch }}>
      {props.children}
    </ItineraryContext.Provider>
  );
}
