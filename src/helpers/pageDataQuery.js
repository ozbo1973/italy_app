import axios from "axios";
import { docsData } from "../../server/tempData";
import { getPageTitle } from "./pageHelpers";
import { getGeoData, getWeather } from "../api/weatherAPI";
import { getYelpList } from "../api/yelpAPI";

export const pageDNLData = pathname => {
  const page = getPageTitle(pathname);
  return docsData.filter(d => d.place === page);
};

export const dataTableAPI = tbl => {
  // try {
  //   const { data } = await axios.get(`/api/itin/italy/${page}`);
  //   return data;
  // } catch (error) {
  //   return console.log(error);
  // }
  return axios.create({
    baseURL: `/api/${tbl}/italy`
  });
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
