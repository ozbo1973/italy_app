import { useEffect, useContext } from "react";
import { otherAPI } from "../../helpers/hooks/useAPI";
import WeatherDesk from "./weatherDesk";
import WeatherMobile from "./weatherMobile";
import {
  WeatherContext,
  WeatherContextDispatch
} from "../../contexts/weather.context";

const Weather = ({ isDeskTop, expanded }) => {
  const { isLoading, pageRoute, api, trip } = useContext(WeatherContext);
  const dispatch = useContext(WeatherContextDispatch);

  useEffect(() => {
    const getData = async () => {
      await dispatch({ type: "GET_WEATHER" });
      let data = {};
      let errMsg = "";
      try {
        data = await otherAPI({ api, trip }).get(pageRoute);
        data = data.data;
      } catch (error) {
        errMsg = error;
      }
      dispatch({
        type: "GOT_WEATHER",
        payload: { data, errMsg }
      });
    };

    (isLoading || expanded) && getData();
  }, [expanded, isDeskTop]);

  return isDeskTop ? <WeatherDesk /> : <WeatherMobile />;
};

export default Weather;
