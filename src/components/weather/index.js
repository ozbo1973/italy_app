import { useState, useEffect } from "react";
import { otherAPI } from "../../helpers/apis";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import WeatherDesk from "./weatherDesk";
import WeatherMobile from "./weatherMobile";

const Weather = ({ page, imgSrc }) => {
  const [isLoading, setIsloading] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [weatherData, setWeatherData] = useState({});
  const apiOptions = { api: "weather", trip: "italy" };
  const day = { 0: "Today", 1: "Tomorrow", 2: "Next Day" };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await otherAPI(apiOptions).get(`/${page}`);
        setWeatherData({ currently: data.currently, daily: data.daily });
        setIsloading(false);
      } catch (error) {
        setIsloading(true);
        console.log(error);
      }
    };

    if (isLoading) {
      getData();
    }
  }, [isLoading]);

  return matches ? (
    <WeatherDesk
      page={page}
      imgSrc={imgSrc}
      weatherData={weatherData}
      isLoading={isLoading}
      day={day}
    />
  ) : (
    <WeatherMobile
      page={page}
      imgSrc={imgSrc}
      weatherData={weatherData}
      isLoading={isLoading}
      day={day}
    />
  );
};

export default Weather;
