import { useContext } from "react";
import { ItineraryContext } from "../../contexts/intinerary.context";
import { useDataTableCols } from "../../helpers/hooks/useDataColumns";
import { crudAPI } from "../../helpers/hooks/useAPI";
import useStyles from "../../styles/api-datatable.style";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";

const ItineraryDesk = () => {
  const classes = useStyles();
  const { isLoading, config, data, errMsg } = useContext(ItineraryContext);
  const dataTitle = "Itinerary";
  const cols = useDataTableCols(config.apiToUse);
  const actionConfig = { type: "CRUD_OPERATION" };

  return errMsg ? (
    <Paper className={classes.root}>
      <div>{errMsg}</div>
    </Paper>
  ) : (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <MaterialTable
          isLoading={isLoading}
          title={dataTitle}
          columns={cols}
          data={data}
          options={{
            sorting: true
          }}
          editable={{
            onRowAdd: async newData => {
              await crudAPI(
                config,
                { ...actionConfig, payload: { req: newData } },
                "post"
              );
            },
            onRowUpdate: async newData => {
              await crudAPI(
                config,
                { ...actionConfig, payload: { req: newData } },
                "patch"
              );
            },
            onRowDelete: async oldData => {
              await crudAPI(
                config,
                { ...actionConfig, payload: { req: oldData } },
                "delete"
              );
            }
          }}
        />
      </div>
    </Paper>
  );
};

export default ItineraryDesk;
