import { useEffect, useContext } from "react";
import { ItineraryContext } from "../../contexts/intinerary.context";
import { usePanelOperations } from "../../helpers/hooks/usePanelOperations";
import useStyles from "../../styles/itinerary.style";
import AddForm from "./addForm";
import Header from "./header";
import Content from "./content";
import InputForm from "./form";
import ActionButtons from "./actionButtons";
import FormFields from "./formFields";
import {
  Container,
  List,
  CircularProgress,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";

const ItineraryMobile = ({ page }) => {
  const classes = useStyles();
  const {
    config,
    data,
    errMsg,
    isLoading,
    panel,
    isAddFormOpen,
    snacks
  } = useContext(ItineraryContext);
  const { handleSnackOpen } = usePanelOps(config);
  console.log(isAddFormOpen);
  const newFormTitle = "Add New Itinerary";
  const onSnackClose = () => {
    handleSnackOpen("", snacks.isSnackOpen);
  };

  useEffect(() => {}, [panel.panelOpen]);

  return isLoading || errMsg ? (
    <div className={classes.root}>
      <Container className={classes.progress}>
        <CircularProgress color="primary" />
        {errMsg && <div>{errMsg}</div>}
      </Container>
    </div>
  ) : (
    <div className={classes.root}>
      <Header panel={panel} isAddFormOpen={isAddFormOpen} config={config} />
      <List component="nav" aria-labelledby="nested-itin">
        {data.map((rec, recNum) => {
          return (
            <Content
              key={`${recNum}_${config.apiToUse}ListItem`}
              dataRecord={{ rec, recNum }}
              config={config}
              panel={panel}
              inputForm={
                <InputForm
                  dataRecord={{ rec }}
                  isEditing
                  actionButtons={values => (
                    <ActionButtons
                      isEditing
                      panel={panel}
                      config={config}
                      snacks={snacks}
                      dataRecord={{ recNum }}
                      values={values}
                    />
                  )}
                  formFields={formProps => (
                    <FormFields {...formProps} recNum={recNum} />
                  )}
                />
              }
            />
          );
        })}
      </List>
      <AddForm
        title={newFormTitle}
        isAddFormOpen={isAddFormOpen}
        config={config}
        inputForm={
          <InputForm
            dataRecord={{ rec: config.newRecord }}
            actionButtons={values => (
              <ActionButtons
                panel={panel}
                config={config}
                snacks={snacks}
                dataRecord={{ recNum: "new" }}
                values={values}
                hasAddForm={true}
              />
            )}
            formFields={formProps => (
              <FormFields {...formProps} recNum={{ recNum: "new" }} />
            )}
          />
        }
      />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key={`${"bottom"},${"center"}_${config.apiToUse}`}
        open={snacks.isSnackOpen}
        autoHideDuration={3000}
        onClose={onSnackClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
      >
        <SnackbarContent
          message={<span id="message-id">{snacks.snackMsg}</span>}
          className={classes.success}
        />
      </Snackbar>
    </div>
  );
};

export default ItineraryMobile;
