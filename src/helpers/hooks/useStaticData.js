import { useState, useEffect } from "react";
import moment from "moment";

export const usePlacesData = (currentPage, apiToUse) => {
  const places = ["rome", "florence", "cinque terre", "venice"];
  const trip = "italy";
  const api = { itin: "itin", docsData: "docsData", linksdocs: "linksdocs" };

  const page = pg => pg.split(" ").join("-");
  const properPlace = pg =>
    pg
      .split("")
      .map((t, i) => (i === 0 ? t.toUpperCase() : t))
      .join("");

  const fromRoute = place => place.split("/")[1];
  const placeRoute = place => `/${place}`;
  const pageRoute = `/${currentPage}`;
  const apiData = { tbl: api[apiToUse], trip };

  return {
    pageRoute,
    places,
    page,
    properPlace,
    fromRoute,
    placeRoute,
    trip,
    api,
    apiData
  };
};

export const useFormatItalyDate = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(
      moment()
        .utcOffset(8)
        .format("ddd MMM D, h:mA")
    );
  });
  return { itDate: date };
};

export const useFormatDate = () => {
  const long = date => moment(date).format("ddd, MMM Do YYYY, h:mm a");
  const short = date => moment(date).format("MMM D, h:mmA");
  return { long, short };
};
