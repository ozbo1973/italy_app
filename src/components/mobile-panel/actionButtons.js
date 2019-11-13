import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import { Save, Delete, Cancel } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    textAlign: "right"
  },
  hide: { display: "none" },
  disableButton: { color: theme.palette.disabled.main },
  primaryButton: { color: theme.palette.primary.main },
  errorButton: { color: theme.palette.error.main }
}));

const ActionButtons = ({
  isEditing,
  handleCancel,
  handleDelete,
  handleOnSubmit,
  disableCancel
}) => {
  const classes = useStyles();
  const getCancelColor = () => {
    const color = isEditing ? "primaryButton" : "errorButton";
    return disableCancel ? "disableButton" : color;
  };

  return (
    <Grid item container>
      <Grid item xs={12} className={classes.buttonGroup}>
        <IconButton onClick={handleOnSubmit}>
          <Save color="secondary" />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          className={`${!isEditing && classes.hide}`}
        >
          <Delete color="error" />
        </IconButton>
        <IconButton onClick={handleCancel} disabled={disableCancel}>
          <Cancel className={classes[getCancelColor()]} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
