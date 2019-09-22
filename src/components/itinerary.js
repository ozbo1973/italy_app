import { useState, useEffect } from "react";
import { dataTableAPI } from "../helpers/pageDataQuery";
import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper, CircularProgress } from "@material-ui/core";

const itineraryData = data => ({
  columns: [
    { title: "Date", field: "date", type: "datetime" },
    { title: "Title", field: "title" },
    { title: "Description", field: "description" },
    {
      title: "Tickets Required",
      field: "tickets",
      lookup: { 1: "yes", 2: "no" }
    }
  ],
  data
});

const Itinerary = ({ page }) => {
  const classes = useStyles();
  const [itinData, setItinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = "itin";
  const dataTitle = "Itinerary";

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await dataTableAPI(baseURL).get(`/${page.page}`);
        setItinData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    isLoading && getData();
  }, [itinData]);

  return isLoading ? (
    <Paper className={classes.root}>
      <CircularProgress />
    </Paper>
  ) : (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <DataTable
          pageRoute={`/${page.page}`}
          baseURL={baseURL}
          tableData={itineraryData(itinData)}
          dataTitle={dataTitle}
        />
      </div>
    </Paper>
  );
};

export default Itinerary;
