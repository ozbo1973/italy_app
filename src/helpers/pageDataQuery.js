import axios from "axios";
import { docsData, itinData } from "../../server/tempData";
import { getPageTitle } from "./pageHelpers";
import { getGeoData, getWeather } from "../api/weatherAPI";
import { getYelpList } from "../api/yelpAPI";

export const pageDNLData = pathname => {
  const page = getPageTitle(pathname);
  return docsData.filter(d => d.place === page);
};

export const pageItinData = async page => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/itin/italy/${page}`
    );
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const pageWeatherData = async page => {
  const location = await getGeoData(`${page},Italy`);
  const weatherData = await getWeather(location);

  return weatherData;
};

export const pageYelpData = async page => {
  const location = await getGeoData(`${page},Italy`);
  const yelpData = await getYelpList(location);

  return yelpData;
};

export const getAllPageData = async pathname => {
  const dnlData = await pageDNLData(pathname);
  return { dnlData };
};
