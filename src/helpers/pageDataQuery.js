import { docsData, itinData, weatherData, yelpData } from "../../tempData";
import { getPageTitle } from "./pageHelpers";

export const pageDNLData = pathname => {
  const page = getPageTitle(pathname);
  return docsData.filter(d => d.place === page);
};

export const pageItinData = pathname => {
  const page = getPageTitle(pathname);
  return itinData.filter(d => d.place === page);
};

export const pageWeatherData = pathname => {
  const page = getPageTitle(pathname);
  return { weatherData };
};

export const pageYelpData = pathname => {
  return { yelpData };
};

export const getAllPageData = async pathname => {
  const dnlData = await pageDNLData(pathname);
  const itnData = await pageItinData(pathname);
  const weatherData = await pageWeatherData(pathname);
  const yelpData = await pageYelpData(pathname);
  return { dnlData, itnData, weatherData, yelpData };
};
