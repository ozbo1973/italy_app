import { Grid, Fab, Divider } from "@material-ui/core";
import { PlaylistAddCheck, Add, Edit, Cancel } from "@material-ui/icons";
import useStyles from "../../styles/itinerary.style";

const Header = ({ panel, addForm, apiToUse }) => {
  const classes = useStyles();
  const { panelOpen, handleOpenPanel, disableEditAll } = panel;
  const { addFormOpen, onHandleAddFormOpen } = addForm;

  return (
    <Grid container>
      <Grid item xs={4}>
        <PlaylistAddCheck className={classes.icon} />
      </Grid>
      <Grid item xs={8} className={classes.buttonGroup}>
        <Fab
          disabled={addFormOpen}
          onClick={onHandleAddFormOpen}
          size="small"
          color="primary"
          className={classes.fab}
        >
          <Add />
        </Fab>
        <Fab
          disabled={disableEditAll}
          variant="extended"
          onClick={handleOpenPanel(`${apiToUse}_all`)}
          className={classes.fab}
          size="small"
        >
          {panelOpen === `${apiToUse}_all` ? <Cancel /> : <Edit />} All
        </Fab>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default Header;
