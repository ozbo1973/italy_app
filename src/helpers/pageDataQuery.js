import axios from "axios";
import { docsData } from "../../server/tempData";
import { getPageTitle } from "./pageHelpers";
import { getGeoData, getWeather } from "../api/weatherAPI";
import { getYelpList } from "../api/yelpAPI";

export const pageDNLData = pathname => {
  const page = getPageTitle(pathname);
  return docsData.filter(d => d.place === page);
};

export const dataTableAPI = tbl =>
  axios.create({
    baseURL: `/api/${tbl}/italy`
  });

export const otherAPI = api =>
  axios.create({
    baseURL: `/api/other/${api}/italy`
  });

export const pageWeatherData = async (page, apiKey) => {
  const location = await getGeoData(`${page},Italy`, apiKey);
  const weatherData = await getWeather(location, apiKey);

  return weatherData;
};

export const pageYelpData = async (page, apiKey) => {
  const location = await getGeoData(`${page},Italy`, apiKey);
  const yelpData = await getYelpList(location, apiKey);

  return yelpData;
};

export const getAllPageData = async pathname => {
  const dnlData = await pageDNLData(pathname);
  return { dnlData };
};
