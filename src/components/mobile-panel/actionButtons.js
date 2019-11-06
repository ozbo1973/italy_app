import { crudAPI } from "../../helpers/hooks/useAPI";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import { Save, Delete, Cancel } from "@material-ui/icons";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    textAlign: "right"
  },
  hide: { display: "none" }
}));

const ActionButtons = ({
  isEditing,
  panel,
  dataRecord,
  config,
  values,
  snacks,
  hasAddForm
}) => {
  const classes = useStyles();
  const { handleOpenPanel, toggleState, handleSnackOpen } = usePanelOps(config);
  const actionConfig = {
    type: "CRUD_OPERATION",
    payload: { req: values }
  };

  const handleDelete = async e => {
    e.persist();
    await crudAPI(config, actionConfig, "delete");
    handleOpenPanel()(e);
    handleSnackOpen("Record Deleted", snacks.isSnackOpen);
  };

  const handleCancel = isEditing
    ? handleOpenPanel(`itinRec_${dataRecord.recNum}`, panel.panelOpen)
    : () => toggleState("ADDFORM_OPEN", hasAddForm);

  const handleSave = async e => {
    e.preventDefault();
    let message;
    if (isEditing) {
      await crudAPI(config, actionConfig, "patch");
      message = "Record updated";
    } else {
      await crudAPI(config, actionConfig, "post");
      toggleState("ADDFORM_OPEN", hasAddForm);
      message = "Record Saved";
    }

    handleSnackOpen(message, snacks.isSnackOpen);
  };

  return (
    <Grid item container>
      <Grid item xs={12} className={classes.buttonGroup}>
        <IconButton onClick={handleSave}>
          <Save color="secondary" />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          className={`${!isEditing && classes.hide}`}
        >
          <Delete color="error" />
        </IconButton>
        <IconButton
          onClick={handleCancel}
          className={`${hasAddForm && classes.hide}`}
        >
          <Cancel color={isEditing ? "primary" : "error"} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
