import { createContext, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import yelpReducer from "../reducers/yelp.reducer";

export const YelpContext = createContext();
export const YelpDispatchContext = createContext();

export const YelpProvider = props => {
  const router = useRouter();
  const [yelpState, yelpDispatch] = useReducer(yelpReducer, {
    data: {},
    errMsg: "",
    isLoading: true,
    pageRoute: router.pathname,
    api: "yelp",
    trip: "italy"
  });

  useEffect(() => {
    console.log("render yelp context");
  }, []);

  return (
    <YelpContext.Provider value={yelpState}>
      <YelpDispatchContext.Provider value={yelpDispatch}>
        {props.children}
      </YelpDispatchContext.Provider>
    </YelpContext.Provider>
  );
};
