import { useState, useEffect } from "react";
import { dataTableAPI } from "../helpers/apis";
import useStyles from "../../static/styles/dataTable.style";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import { usePlacesData } from "../helpers/hooks/useStaticData";

const columns = [
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
      7: "Photos"
    }
  },
  { title: "Description", field: "description" },
  {
    title: "View",
    field: "url",
    render: rowData => (
      <a href={rowData.url} target="_blank">
        View
      </a>
    )
  }
];

const columns_docsdata = [
  {
    title: "Place",
    field: "place",
    lookup: {
      rome: "rome",
      florence: "florence",
      cinqueterre: "cinque-terre",
      venice: "venice"
    },
    render: rowData => (
      <a href={rowData.url} target="_blank">
        {rowData.place}
      </a>
    )
  },
  { title: "Description", field: "description" },
  {
    title: "URL",
    field: "url",
    render: rowData => "URL"
  }
];

const LinksAndDocs = ({ page, docsData }) => {
  const classes = useStyles();
  const { placeRoute } = usePlacesData();
  const [tblData, setTblData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const tbl = docsData ? "docsData" : "linksdocs";
  const apiData = { tbl, trip: "italy" };
  const dataTitle = "Links / Docs / Pics";
  const pageRoute = placeRoute(page);
  const useColumns = docsData ? columns_docsdata : columns;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await dataTableAPI(apiData).get(pageRoute);
        setTblData({ columns: useColumns, data });
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
