import axios from "axios";

const MAPBOX_KEY =
  "pk.eyJ1Ijoib3pibzE5NzMiLCJhIjoiY2swM3R4czA1MmNoYzNia2lvanN1aDk4MyJ9.pSgG6iqJWBkbIB1LJhJ5ag";

const WeatherKey = "c3961f7d806124363bb8163b70d9641f";

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
  const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${WeatherKey}/${lat},${lng}`;

  try {
    const { data } = await axios.get(weatherURL);

    return data;
  } catch (error) {
    console.log(error);
  }
};
