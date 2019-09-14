import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper, Typography, Link } from "@material-ui/core";

const linksAndDocsData = {
  columns: [
    {
      title: "Category",
      field: "category",
      lookup: { 1: "Flight", 2: "Train", 3: "Lodging", 4: "Event", 5: "Other" }
    },
    { title: "Description", field: "description" },
    { title: "View", field: "view" }
  ],
  data: [
    {
      category: 1,
      description: "Flight Itinerary for Rome.",
      view: <Link href="/">view</Link>
    }
  ]
};

const LinksAndDocs = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <DataTable tableData={linksAndDocsData} dataTitle="Docs and Links" />
      </div>
    </Paper>
  );
};

export default LinksAndDocs;
