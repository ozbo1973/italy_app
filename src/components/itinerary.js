import { useState, useEffect } from "react";
import { pageItinData } from "../helpers/pageDataQuery";
import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper, CircularProgress } from "@material-ui/core";

const itineraryData = data => ({
  columns: [
    { title: "Date", field: "date", type: "date" },
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
  console.log(page);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await pageItinData(page.page);
        console.log(data);
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
        <DataTable tableData={itineraryData(itinData)} dataTitle="Itinerary" />
      </div>
    </Paper>
  );
};

export default Itinerary;
