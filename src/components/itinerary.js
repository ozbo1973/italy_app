import { useState, useEffect } from "react";
import { dataTableAPI } from "../helpers/apis";
import { formatDate } from "../helpers/pageHelpers";
import useStyles from "../../static/styles/dataTable.style";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";

const columns = [
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
];

const Itinerary = ({ page }) => {
  const classes = useStyles();
  const [tblData, setTblData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const apiData = { tbl: "itin", trip: "italy" };
  const dataTitle = "Itinerary";
  const pageRoute = `/${page.page}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await dataTableAPI(apiData).get(`/${page.page}`);
        setTblData({ columns, data });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    isLoading && getData();
  }, [isLoading]);

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
              await dataTableAPI(apiData).post(pageRoute, newData);
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

export default Itinerary;
