import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { dataTableAPI } from "../helpers/apis";
import useStyles from "../../static/styles/dataTable.style";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";

const columns = pathname => [
  {
    title: "Category",
    field: "category",
    lookup: {
      1: "Flight",
      2: "Train",
      3: "Lodging",
      4: "Luggage",
      5: "Events",
      6: "Other",
      7: "pics"
    }
  },
  { title: "Description", field: "description" },
  {
    title: "View",
    field: "url",
    render: rowData => (
      // <Link
      //   href={`/fileViewer?descr=${rowData.description}&url=${rowData.url}&from=${pathname}`}
      //   as={`/fileViewer/${rowData._id}`}
      // >
      //   <a>View</a>
      // </Link>
      <a href={rowData.url} target="_blank">
        View
      </a>
    )
  }
];

const columns_docsdata = pathname => [
  {
    title: "Place",
    field: "place",
    lookup: {
      rome: "rome",
      florence: "florence",
      cinqueterre: "cinque-terre",
      venice: "venice"
    }
  },
  { title: "Description", field: "description" },
  {
    title: "View",
    field: "url",
    render: rowData => (
      // <Link
      //   href={`/fileViewer?descr=${rowData.description}&url=${rowData.url}&from=${pathname}`}
      //   as={`/fileViewer/${rowData._id}`}
      // >
      //   <a>View</a>
      // </Link>
      <a href={rowData.url} target="_blank">
        View
      </a>
    )
  }
];

const LinksAndDocs = ({ page, docsData }) => {
  const classes = useStyles();
  const router = useRouter();
  const [tblData, setTblData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const tbl = docsData ? "docsData" : "linksdocs";
  const apiData = { tbl, trip: "italy" };
  const dataTitle = docsData
    ? `Links and Docs - ${router.query.catName}`
    : "Links And Docs";
  const pageRoute = docsData ? `/${page}` : `/${page.page}`;
  const useColumns = docsData ? columns_docsdata : columns;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await dataTableAPI(apiData).get(pageRoute);
        setTblData({ columns: useColumns(pageRoute), data });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    docsData && getData();
    isLoading && getData();
  }, [isLoading, pageRoute]);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <MaterialTable
          isLoading={isLoading}
          title={dataTitle}
          columns={tblData.columns}
          data={tblData.data}
          options={{
            sorting: true
          }}
          editable={{
            onRowAdd: async newData => {
              let place = docsData ? newData.place : page.page;
              place = place.split("-").join("");
              await dataTableAPI(apiData).post(pageRoute, {
                ...newData,
                place
              });
              setIsLoading(true);
            },
            onRowUpdate: async (newData, oldData) => {
              await dataTableAPI(apiData).patch(
                `${pageRoute}/${oldData._id}`,
                newData
              );
              setIsLoading(true);
            },
            onRowDelete: async oldData => {
              await dataTableAPI(apiData).delete(`${pageRoute}/${oldData._id}`);
              setIsLoading(true);
            }
          }}
        />
      </div>
    </Paper>
  );
};

export default LinksAndDocs;
