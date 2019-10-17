import { useState } from "react";
import Rain from "@material-ui/icons/BeachAccess";
import ClearDay from "@material-ui/icons/WbSunny";
import Cloudy from "@material-ui/icons/WbCloudy";

export const useWeatherIcons = () => {
  const weatherIcons = {
    rain: <Rain />,
    clearday: <ClearDay />,
    clearnight: <ClearDay />,
    cloudy: <Cloudy />,
    partlycloudynight: <Cloudy />,
    partlycloudyday: <Cloudy />
  };

  const getIcon = weather => {
    return weatherIcons[weather.split("-").join("")];
  };

  return [getIcon];
};
