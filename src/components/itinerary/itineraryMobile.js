import { usePlacesData } from "../../helpers/hooks/useStaticData";
import { useTableData } from "../../helpers/hooks/useTableData";
import { usePanelOperations } from "../../helpers/hooks/usePanelOperations";
import useStyles from "../../styles/itinerary.style";
import AddForm from "./addForm";
import Header from "./header";
import Content from "./content";
import InputForm from "./form";
import ActionButtons from "./actionButtons";
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

  const newDataRecord = {
    rec: {
      title: "",
      date: new Date(),
      description: "",
      tickets: 2
    },
    crud,
    api
  };

  return isLoading ? (
    <div className={classes.root}>
      <Container className={classes.progress}>
        <CircularProgress color="primary" />
      </Container>
    </div>
  ) : (
    <div className={classes.root}>
      <Header addForm={addForm} panel={panel} />
      <List component="nav" aria-labelledby="nested-itin">
        {tblData.map((rec, recNum) => {
          const dataRecord = { rec, recNum, crud, api };

          return (
            <Content
              dataRecord={dataRecord}
              panel={panel}
              inputForm={
                <InputForm
                  dataRecord={dataRecord}
                  panel={panel}
                  snacks={snacks}
                  isEditing
                  actionButtons={actions => {
                    return (
                      <ActionButtons
                        isEditing
                        panel={panel}
                        dataRecord={dataRecord}
                        actions={actions}
                      />
                    );
                  }}
                />
              }
            />
          );
        })}
      </List>
      <AddForm
        dialogOpts={{ title: "Add New Itinerary", addForm }}
        inputForm={
          <InputForm
            dataRecord={newDataRecord}
            panel={panel}
            snacks={snacks}
            actionButtons={actions => (
              <ActionButtons
                panel={panel}
                dataRecord={newDataRecord}
                actions={actions}
              />
            )}
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
