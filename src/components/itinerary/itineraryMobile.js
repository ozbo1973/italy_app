import { useEffect } from "react";
import { usePlacesData } from "../../helpers/hooks/useStaticData";
import { useTableData } from "../../helpers/hooks/useTableData";
import { usePanelOperations } from "../../helpers/hooks/usePanelOperations";
import useStyles from "../../styles/itinerary.style";
import AddForm from "./addForm";
import Header from "./header";
import Content from "./content";
import DisplayInputForm from "./displayInputForm";
import {
  Container,
  List,
  CircularProgress,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";

const ItineraryMobile = ({ page, apiToUse }) => {
  const classes = useStyles();
  const [panel, addForm, snacks] = usePanelOperations(apiToUse);
  const { pageRoute, apiData } = usePlacesData(page, apiToUse);
  const [isLoading, tblData, crud] = useTableData({ pageRoute, apiData });
  const { snackOpen, handleSnackOpen, snackMessage } = snacks;
  const api = { pageRoute, apiData };
  const { panelOpen, setDisableEditAll } = panel;
  const newDataRecord = {
    rec: addForm.getNewRecord,
    crud,
    api,
    recNum: "new"
  };

  useEffect(() => {
    setDisableEditAll(!!panelOpen && panelOpen.split("_")[1] !== "all");
  }, [panelOpen]);

  return isLoading ? (
    <div className={classes.root}>
      <Container className={classes.progress}>
        <CircularProgress color="primary" />
      </Container>
    </div>
  ) : (
    <div className={classes.root}>
      <Header panel={panel} addForm={addForm} apiToUse={apiToUse} />
      <List component="nav" aria-labelledby="nested-itin">
        {tblData.map((rec, recNum) => {
          const dataRecord = { rec, recNum, crud, api };

          return (
            <Content
              key={`${recNum}_${apiToUse}ListItem`}
              dataRecord={dataRecord}
              panel={panel}
              apiToUse={apiToUse}
              inputForm={
                <DisplayInputForm
                  panel={panel}
                  dataRecord={dataRecord}
                  snacks={snacks}
                  isEditing={true}
                />
              }
            />
          );
        })}
      </List>
      <AddForm
        dialogOpts={{ title: "Add New Itinerary", addForm }}
        inputForm={
          <DisplayInputForm
            panel={panel}
            dataRecord={newDataRecord}
            snacks={snacks}
            isEditing={false}
            addForm={addForm}
          />
        }
      />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key={`${"bottom"},${"center"}`}
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackOpen}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
      >
        <SnackbarContent
          message={<span id="message-id">{snackMessage}</span>}
          className={classes.success}
        />
      </Snackbar>
    </div>
  );
};

export default ItineraryMobile;
