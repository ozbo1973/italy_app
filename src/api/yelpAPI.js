import axios from "axios";
const { YELP_KEY } = process.env;

export const getYelpList = async ({ lat, lng }, { YELP_KEY }) => {
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
