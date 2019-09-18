import Link from "next/link";
import { useRouter } from "next/router";
import { docsData } from "../../tempData";
import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper } from "@material-ui/core";

const linksAndDocsData = (pathname, data) => ({
  columns: [
    {
      title: "Category",
      field: "category",
      lookup: {
        1: "Flight",
        2: "Train",
        3: "Lodging",
        4: "Luggage",
        5: "Events",
        6: "Other"
      }
    },
    { title: "Description", field: "description" },
    {
      title: "View",
      field: "url",
      render: rowData => (
        <Link
          href={`/fileViewer?descr=${rowData.description}&url=${rowData.url}&from=${pathname}`}
          as={`/fileViewer/${rowData.id}`}
        >
          <a>View</a>
        </Link>
      )
    }
  ],
  data
});

const LinksAndDocs = ({ data }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <DataTable
          tableData={linksAndDocsData(router.pathname, data)}
          dataTitle="Docs and Links"
          dataComponent="LinksAndDocs"
        />
      </div>
    </Paper>
  );
};

export default LinksAndDocs;
