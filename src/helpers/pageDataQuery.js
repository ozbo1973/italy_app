import {
  docsData,
  itinData,
  weatherData,
  yelpData
} from "../../server/tempData";
import { getPageTitle } from "./pageHelpers";
import { getGeoData, getWeather } from "../api/weatherAPI";
import { getYelpList } from "../api/yelpAPI";

export const pageDNLData = pathname => {
  const page = getPageTitle(pathname);
  return docsData.filter(d => d.place === page);
};

export const pageItinData = pathname => {
  const page = getPageTitle(pathname);
  return itinData.filter(d => d.place === page);
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
  const itnData = await pageItinData(pathname);
  return { dnlData, itnData, weatherData, yelpData };
};
