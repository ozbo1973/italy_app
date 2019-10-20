import { useState, useEffect } from "react";
import moment from "moment";
import { formatDate } from "../../helpers/pageHelpers";

export const usePlacesData = () => {
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

  return { places, page, properPlace, fromRoute, placeRoute, trip, api };
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
  const short = date => moment(date).format("MMM D, h:mA");
  return { long, short };
};

const columns = {
  itin: [
    {
      title: "Date",
      field: "date",
      type: "datetime",
      defaultSort: "asc",
      render: rowData => formatDate(rowData.date)
    },
    {
      title: "Title",
      field: "title",
      render: rowData => <strong>{rowData.title}</strong>
    },
    {
      title: "Description",
      field: "description"
    },
    {
      title: "Tickets Required",
      field: "tickets",
      lookup: { 1: "yes", 2: "no" }
    }
  ]
};

export const useDataCols = api => {
  const [cols, setCols] = useState();
  useEffect(() => {
    setCols(columns[api]);
  }, [api]);

  return [cols];
};
