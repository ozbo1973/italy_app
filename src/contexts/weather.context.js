import { createContext, useEffect, useReducer } from "react";
import weatherReducer from "../reducers/weather.reducer";
import { useRouter } from "next/router";

export const WeatherContext = createContext();
export const WeatherContextDispatch = createContext();

export const WeatherProvider = props => {
  const router = useRouter();

  const [weatherState, weatherDispatch] = useReducer(weatherReducer, {
    data: {},
    errMsg: "",
    isLoading: true,
    pageRoute: router.pathname,
    api: "weather",
    trip: "italy",
    day: { 0: "Today", 1: "Tomorrow", 2: "Next Day" },
    imgSrc: `/static/img${router.pathname}.jpg`
  });

  useEffect(() => {
    console.log("render weather context");
  }, []);

  return (
    <WeatherContext.Provider value={weatherState}>
      <WeatherContextDispatch.Provider value={weatherDispatch}>
        {props.children}
      </WeatherContextDispatch.Provider>
    </WeatherContext.Provider>
  );
};
