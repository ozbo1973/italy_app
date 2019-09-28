require("dotenv").config();
const axios = require("axios");

const { MAPBOX_KEY, WEATHER_KEY, YELP_KEY } = process.env;

const getGeoData = async address => {
  const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${MAPBOX_KEY}`;
  console.log(address);
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

exports.pageWeatherData = async (req, res) => {
  const { place } = req.params;
  console.log(place);
  const location = await getGeoData(`${place},Italy`);
  const weatherData = await getWeather(location);
  res.send(weatherData);
};

const getYelpList = async ({ lat, lng }) => {
  const yelpURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
  const { data } = await axios.get(yelpURL, {
    params: {
      latitude: lat,
      longitude: lng,
      sort_by: "rating"
    },
    headers: { Authorization: `Bearer ${YELP_KEY}` }
  });
  return data;
};

// export const pageYelpData = async (page, apiKey) => {
//   const location = await getGeoData(`${page},Italy`, apiKey);
//   const yelpData = await getYelpList(location, apiKey);

//   return yelpData;
// };

exports.pageYelpData = async (req, res) => {
  res.send({ trip: req.params.trip });
};

module.exports = exports;