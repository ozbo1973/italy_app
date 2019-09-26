require("dotenv").config();
const axios = require("axios");

const { MAPBOX_KEY, WEATHER_KEY } = process.env;

const getGeoData = async address => {
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

const getWeather = async ({ lat, lng }) => {
  const weatherURL = `https://api.darksky.net/forecast/${WEATHER_KEY}/${lat},${lng}`;

  try {
    const { data } = await axios.get(weatherURL);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// const pageWeatherData = async page => {
//   const location = await getGeoData(`${page},Italy`);
//   const weatherData = await getWeather(location);

//   return weatherData;
// };

exports.pageWeatherData = async (req, res) => {
  const { page } = req.params;
  const location = await getGeoData(`${page}`);
  const weatherData = await getWeather(location);
  res.send(weatherData);
};

module.exports = exports;
