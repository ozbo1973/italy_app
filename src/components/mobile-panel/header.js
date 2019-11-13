import { Grid, Fab, Divider } from "@material-ui/core";
import { PlaylistAddCheck, Add, Edit, Cancel } from "@material-ui/icons";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";
import useStyles from "../../styles/api-datatable.style";

const Header = ({ panel, isAddFormOpen, config }) => {
  const classes = useStyles();
  const { handleOpenPanel, toggleState } = usePanelOps(config);

  return (
    <Grid container>
      <Grid item xs={4}>
        <PlaylistAddCheck className={classes.icon} />
      </Grid>
      <Grid item xs={8} className={classes.buttonGroup}>
        <Fab
          disabled={isAddFormOpen}
          onClick={toggleState("ADDFORM_OPEN", isAddFormOpen)}
          size="small"
          color="primary"
          className={classes.fab}
        >
          <Add />
        </Fab>
        <Fab
          disabled={panel.disableEditAll}
          variant="extended"
          onClick={handleOpenPanel(`${config.apiToUse}_all`, panel.panelOpen)}
          className={classes.fab}
          size="small"
        >
          {panel.allOpen ? <Cancel /> : <Edit />} All
        </Fab>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default Header;
