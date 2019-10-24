import { useTableData, useDataCols } from "../../helpers/hooks/useTableData";
import { usePlacesData } from "../../helpers/hooks/useStaticData";
import useStyles from "../../styles/itinerary.style";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";

const ItineraryDesk = ({ page }) => {
  const classes = useStyles();
  const { placeRoute, trip, api } = usePlacesData();
  const apiData = { tbl: api.itin, trip };
  const dataTitle = "Itinerary";
  const pageRoute = placeRoute(page);
  const [isLoading, tblData, crud] = useTableData({
    apiData,
    pageRoute
  });
  const [cols] = useDataCols(apiData.tbl);

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <MaterialTable
          isLoading={isLoading}
          title={dataTitle}
          columns={cols}
          data={tblData}
          options={{
            sorting: true
          }}
          editable={{
            onRowAdd: async newData => {
              await crud.create(newData);
            },
            onRowUpdate: async (newData, oldData) => {
              await crud.update(newData, oldData);
            },
            onRowDelete: async oldData => {
              await crud.deleteRecord(oldData);
            }
          }}
        />
      </div>
    </Paper>
  );
};

export default ItineraryDesk;
