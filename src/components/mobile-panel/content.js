import { memo } from "react";
import useStyles from "../../styles/api-datatable.style";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";
import {
  ListItem,
  ListItemText,
  Grid,
  Divider,
  IconButton,
  Collapse
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const Content = ({ ctx, dataRecord, form, isOpen }) => {
  const classes = useStyles();
  const { panelOpen } = ctx.panel;
  const { recNum, recTitleDisplay } = dataRecord;
  const { apiToUse } = ctx.config;
  const { handleOpenPanel } = usePanelOps(ctx.config);

  return (
    <div className={`${isOpen && classes.listItemRoot}`}>
      <ListItem
        id={`${apiToUse}Rec_${recNum}`}
        className={`${isOpen && classes.listOpen}`}
      >
        <ListItemText>
          <Grid container>
            <Grid xs={!isOpen && 4} item>
              <span className={`${classes.recData} ${isOpen && classes.hide}`}>
                {recTitleDisplay.left}
              </span>
            </Grid>
            <Grid xs={isOpen ? 11 : 7} item>
              <span
                className={`${classes.recData} ${isOpen &&
                  classes.recDataOpen}`}
              >
                {`${isOpen ? "Edit: " : ""} ${recTitleDisplay.right}`}
              </span>
            </Grid>
            <Grid xs={1} item>
              <IconButton
                onClick={handleOpenPanel(`${apiToUse}Rec_${recNum}`, panelOpen)}
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
          <Grid item>{form(dataRecord)}</Grid>
        </Grid>
      </Collapse>
      <Divider />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  const recMatch = prevProps.dataRecord.rec === nextProps.dataRecord.rec;
  const isOpenMatch = prevProps.isOpen === nextProps.isOpen;
  return recMatch && isOpenMatch;
}

export default memo(Content, areEqual);
