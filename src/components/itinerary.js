import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper } from "@material-ui/core";

const itineraryData = data => ({
  columns: [
    { title: "Date", field: "date" },
    { title: "Time", field: "time" },
    { title: "Description", field: "description" },
    {
      title: "Tickets Required",
      field: "tickets",
      lookup: { 1: "yes", 2: "no" }
    }
  ],
  data
});

const Itinerary = ({ data }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <DataTable tableData={itineraryData(data)} dataTitle="Itinerary" />
      </div>
    </Paper>
  );
};

export default Itinerary;
