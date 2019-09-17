import Link from "next/link";
import { useRouter } from "next/router";
import DataTable from "./dataTable";
import useStyles from "../../static/styles/dataTable.style";
import { Paper } from "@material-ui/core";

const linksAndDocsData = pathname => ({
  columns: [
    {
      title: "Category",
      field: "category",
      lookup: { 1: "Flight", 2: "Train", 3: "Lodging", 4: "Event", 5: "Other" }
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
  data: [
    {
      category: 1,
      description: "Flight Itinerary for Rome.",
      url:
        "https://docs.google.com/document/d/1exhSHPk13ZakLIqrymcYIrtsUvEsmZ2O/edit",
      id: 12345
    }
  ]
});

const LinksAndDocs = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <DataTable
          tableData={linksAndDocsData(router.pathname)}
          dataTitle="Docs and Links"
        />
      </div>
    </Paper>
  );
};

export default LinksAndDocs;
