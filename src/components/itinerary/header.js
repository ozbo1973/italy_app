import { useContext } from "react";
// import { ItineraryContext } from "../../contexts/intinerary.context";
import { Grid, Fab, Divider } from "@material-ui/core";
import { PlaylistAddCheck, Add, Edit, Cancel } from "@material-ui/icons";
import useStyles from "../../styles/itinerary.style";

const Header = ({ addForm, panel }) => {
  const classes = useStyles();
  const { panelOpen, handleOpenPanel } = panel;
  const { addFormOpen, onHandleAddFormOpen } = addForm;
  const disabledEditAll = !!panelOpen && panelOpen.split("_")[1] !== "all";

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
          disabled={disabledEditAll}
          variant="extended"
          onClick={handleOpenPanel("itin_all")}
          className={classes.fab}
          size="small"
        >
          {panelOpen === "itin_all" ? <Cancel /> : <Edit />} All
        </Fab>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default Header;
