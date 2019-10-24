import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import { Save, Delete, Cancel } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    textAlign: "right"
  },
  hide: { display: "none" }
}));

const ActionButtons = ({ isEditing, panel, dataRecord, actions }) => {
  const classes = useStyles();
  const { handleOpenPanel, allFormOpen } = panel;
  const { recNum } = dataRecord;
  const { handleSave, handleDelete } = actions;
  console.log(allFormOpen);
  const handleCancel = isEditing
    ? handleOpenPanel(`itinRec_${recNum}`)
    : () => handleOpen();

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
