import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper } from "@material-ui/core";

const itineraryData = {
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
  data: [
    {
      date: "2019-09-25",
      time: "8:00am",
      description: "Landing at Rome Airport, get to hotel area.",
      tickets: 1
    }
  ]
};

const Itinerary = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <DataTable tableData={itineraryData} dataTitle="Itinerary" />
      </div>
    </Paper>
  );
};

export default Itinerary;
