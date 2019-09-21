import axios from "axios";
import { MAPBOX_KEY, WEATHER_KEY } from "../../keys/api.keys";

export const getGeoData = async address => {
  const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${MAPBOX_KEY}`;
  try {
    const { data } = await axios.get(geoURL);
    const lat = data.features[0].center[1];
    const lng = data.features[0].center[0];
    const location = { lat, lng };
    return location;
  } catch (error) {
    console.log(error);
  }
};

export const getWeather = async ({ lat, lng }) => {
  const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${WEATHER_KEY}/${lat},${lng}`;

  try {
    const { data } = await axios.get(weatherURL);

    return data;
  } catch (error) {
    console.log(error);
  }
};
