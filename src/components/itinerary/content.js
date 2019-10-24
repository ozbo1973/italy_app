import { useState, useEffect } from "react";
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

const Content = ({ dataRecord, inputForm, panel }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState();
  const { short } = useFormatDate();
  const { panelOpen, handleOpenPanel } = panel;
  const { recNum, rec } = dataRecord;

  useEffect(() => {
    setIsOpen(panelOpen === "itin_all" || panelOpen === "itinRec_" + recNum);
  }, [panelOpen]);

  return (
    <div
      key={`${recNum}_itinListItem`}
      className={`${isOpen && classes.listItemRoot}`}
    >
      <ListItem
        id={`itinRec_${recNum}`}
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
                onClick={handleOpenPanel(`itinRec_${recNum}`)}
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
