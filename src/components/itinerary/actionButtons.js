import { crudAPI } from "../../helpers/hooks/useAPI";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import { Save, Delete, Cancel } from "@material-ui/icons";

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
  values,
  snacks,
  addForm
}) => {
  const classes = useStyles();
  const { handleOpenPanel, allFormOpen } = panel;
  const { recNum, crud, config } = dataRecord;
  const { handleSnackOpen } = snacks;
  const actionConfig = {
    type: "CRUD_OPERATION",
    payload: { req: values }
  };

  const handleDelete = async e => {
    e.persist();
    await crudAPI(config, actionConfig, "delete");
    handleOpenPanel()(e);
    handleSnackOpen("Record Deleted");
  };

  const handleCancel = isEditing
    ? handleOpenPanel(`itinRec_${recNum}`)
    : () => addForm.onHandleAddFormOpen();

  const handleSave = async e => {
    e.preventDefault();
    let message;
    if (isEditing) {
      await crudAPI(config, actionConfig, "patch");
      message = "Record updated";
    } else {
      await crudAPI(config, actionConfig, "post");
      addForm.onHandleAddFormOpen();
      message = "Record Saved";
    }

    handleSnackOpen(message);
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
          className={`${allFormOpen && classes.hide}`}
        >
          <Cancel color={isEditing ? "primary" : "error"} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
