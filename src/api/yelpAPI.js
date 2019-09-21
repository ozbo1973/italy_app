import axios from "axios";
import { YELP_KEY } from "../../keys/api.keys";

export const getYelpList = async ({ lat, lng }) => {
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
