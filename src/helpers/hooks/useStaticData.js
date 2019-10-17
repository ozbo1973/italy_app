import { useState, useEffect } from "react";
import moment from "moment";

export const usePlacesData = () => {
  const places = ["rome", "florence", "cinque terre", "venice"];
  const page = pg => pg.split(" ").join("-");
  const properPlace = pg =>
    pg
      .split("")
      .map((t, i) => (i === 0 ? t.toUpperCase() : t))
      .join("");

  const fromRoute = place => place.split("/")[1];
  const placeRoute = place => `/${place}`;

  return { places, page, properPlace, fromRoute, placeRoute };
};

export const useFormatItalyDate = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(
      moment()
        .utcOffset(8)
        .format("ddd MMM D, hA")
    );
  });
  return { itDate: date };
};
