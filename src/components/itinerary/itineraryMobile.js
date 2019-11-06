import { useEffect, useContext } from "react";
import { ItineraryContext } from "../../contexts/intinerary.context";
import useStyles from "../../styles/itinerary.style";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";
import Header from "../mobile-panel/header";
import DisplayContent from "../mobile-panel/displayContent";
import DisplayAddForm from "../mobile-panel/displayAddForm";
import FormFields from "./formFields";
import {
  Container,
  List,
  CircularProgress,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";

const ItineraryMobile = () => {
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
          const isOpen =
            panel.panelOpen === `${config.apiToUse}_all` ||
            panel.panelOpen === `${config.apiToUse}Rec_${recNum}`;

          return (
            <DisplayContent
              key={`${recNum}_${config.apiToUse}ListItem`}
              dataRecord={{ rec, recNum }}
              config={config}
              isOpen={isOpen}
              panel={panel}
              snacks={snacks}
              formFields={formProps => (
                <FormFields {...formProps} recNum={recNum} />
              )}
            />
          );
        })}
      </List>
      <DisplayAddForm
        newFormTitle={newFormTitle}
        isAddFormOpen={isAddFormOpen}
        config={config}
        snacks={snacks}
        formFields={formProps => (
          <FormFields {...formProps} recNum={{ recNum: "new" }} />
        )}
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
