import { useFormatDate } from "../../helpers/hooks/useStaticData";
import useStyles from "../../styles/itinerary.style";
import {
  ListItem,
  ListItemText,
  Grid,
  Divider,
  IconButton,
  Collapse
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";

const Content = ({ dataRecord, inputForm, panel, config, isOpen }) => {
  const classes = useStyles();
  const { rec, recNum } = dataRecord;
  const { handleOpenPanel } = usePanelOps(config);
  const { short } = useFormatDate();

  return (
    <div className={`${isOpen && classes.listItemRoot}`}>
      <ListItem
        id={`${config.apiToUse}Rec_${recNum}`}
        className={`${isOpen && classes.listOpen}`}
      >
        <ListItemText>
          <Grid container>
            <Grid xs={!isOpen && 4} item>
              <span className={`${classes.recData} ${isOpen && classes.hide}`}>
                {short(rec.date)}
              </span>
            </Grid>
            <Grid xs={isOpen ? 11 : 7} item>
              <span
                className={`${classes.recData} ${isOpen &&
                  classes.recDataOpen}`}
              >
                {`${isOpen ? `Edit: ${rec.title}` : rec.title}`}
              </span>
            </Grid>
            <Grid xs={1} item>
              <IconButton
                onClick={handleOpenPanel(
                  `${config.apiToUse}Rec_${recNum}`,
                  panel.panelOpen
                )}
                className={`${isOpen && classes.hide}`}
              >
                <Edit color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </ListItemText>
      </ListItem>
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        className={classes.collapseWrapper}
      >
        <Grid container alignItems="center" direction="column" spacing={1}>
          <Grid item>{inputForm}</Grid>
        </Grid>
      </Collapse>
      <Divider />
    </div>
  );
};

export default Content;
