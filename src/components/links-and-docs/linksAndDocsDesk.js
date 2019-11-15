import { useContext } from "react";
import { LinksAndDocsContext } from "../../contexts/linksanddocs.context";
import { useDataTableCols } from "../../helpers/hooks/useDataColumns";
import { crudAPI } from "../../helpers/hooks/useAPI";
import useStyles from "../../styles/api-datatable.style";
import MaterialTable from "material-table";
import { useTheme, Paper, Typography } from "@material-ui/core";
import {
  Edit,
  DeleteForever,
  Add,
  SaveOutlined,
  Clear
} from "@material-ui/icons";

const LinksAndDocsDesk = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { isLoading, config, data, errMsg } = useContext(LinksAndDocsContext);
  const dataTitle = "Links and Documents";
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
          title={
            <Typography variant="h6" color="secondary">
              {dataTitle}
            </Typography>
          }
          columns={cols}
          data={data}
          options={{
            sorting: true,
            headerStyle: {
              backgroundColor: theme.palette.secondary.main,
              fontSize: "1em",
              color: "#fff"
            }
          }}
          icons={{
            Edit: () => <Edit color="primary" />,
            Delete: () => <DeleteForever color="primary" />,
            Add: () => <Add color="primary" fontSize="large" />,
            Clear: () => <Clear color="primary" />,
            Check: () => <SaveOutlined color="primary" />
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

export default LinksAndDocsDesk;
