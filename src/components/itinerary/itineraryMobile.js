import { useState } from "react";
import useStyles from "../../styles/itinerary.style";
import { useTableData } from "../../helpers/hooks/useTableData";
import AddForm from "./addForm";
import {
  usePlacesData,
  useFormatDate
} from "../../helpers/hooks/useStaticData";
import InputForm from "./form";
import Grid from "@material-ui/core/Grid";
import { Cancel, Edit, Add, PlaylistAddCheck } from "@material-ui/icons";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Collapse,
  CircularProgress,
  Divider,
  Fab,
  IconButton
} from "@material-ui/core";

const ItineraryMobile = ({ page }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [addFormOpen, handleAddFormOpen] = useState(false);
  const [selected, setSelected] = useState();
  const { placeRoute, trip, api } = usePlacesData();
  const { long, short } = useFormatDate();
  const apiData = { tbl: api.itin, trip };
  const pageRoute = placeRoute(page);
  const [isLoading, tblData, crud] = useTableData({
    apiData,
    pageRoute
  });
  const handleOpen = id => e => {
    e.preventDefault();
    if (!id) {
      return setOpen(!open);
    }
    if (id === selected) {
      return setSelected(null);
    }
    setSelected(id);
  };

  const onHandleAddFormOpen = () => {
    handleAddFormOpen(!addFormOpen);
  };

  return isLoading ? (
    <div className={classes.root}>
      <Container className={classes.progress}>
        <CircularProgress color="primary" />
      </Container>
    </div>
  ) : (
    <div className={classes.root}>
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
            variant="extended"
            onClick={handleOpen()}
            className={classes.fab}
            size="small"
          >
            {open ? <Cancel /> : <Edit />} All
          </Fab>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
      <List component="nav" aria-labelledby="nested-itin">
        {tblData.map((rec, i) => {
          const isOpen = open || selected === "itinRec_" + i;

          return (
            <div
              key={`${i}_itinListItem`}
              className={`${isOpen && classes.listItemRoot}`}
            >
              <ListItem
                id={`itinRec_${i}`}
                className={`${isOpen && classes.listOpen}`}
              >
                <ListItemText>
                  <Grid container>
                    <Grid xs={!isOpen && 4} item>
                      <span
                        className={`${classes.recData} ${isOpen &&
                          classes.hide}`}
                      >
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
                      <IconButton className={`${isOpen && classes.hide}`}>
                        <Edit
                          onClick={handleOpen(`itinRec_${i}`)}
                          color="primary"
                        />
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
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  spacing={1}
                >
                  <Grid item>
                    <InputForm
                      formData={rec}
                      formAllOpen={open}
                      recNum={i}
                      handleOpen={handleOpen}
                      api={{ pageRoute, apiData }}
                      crud={crud}
                      isEditing
                    />
                  </Grid>
                </Grid>
              </Collapse>
              <Divider />
            </div>
          );
        })}
      </List>
      <AddForm
        addFormOpen={addFormOpen}
        handleOpen={onHandleAddFormOpen}
        rec={{ title: "", date: new Date(), description: "", tickets: 2 }}
        crud={crud}
        dialogOpts={{ title: "Add New Itinerary" }}
        api={{ pageRoute, apiData }}
      />
    </div>
  );
};

export default ItineraryMobile;
