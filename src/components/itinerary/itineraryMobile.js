import { useEffect, useContext } from "react";
import { ItineraryContext } from "../../contexts/intinerary.context";
import useStyles from "../../styles/api-datatable.style";
import { useFormatDate } from "../../helpers/hooks/useStaticData";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";
import Header from "../mobile-panel/header";
import FormFields from "./formFields";
import {
  Container,
  List,
  CircularProgress,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import Content from "../mobile-panel/content";
import AddForm from "../mobile-panel/addForm";
import InputForm from "../mobile-panel/form";

const ItineraryMobile = () => {
  const classes = useStyles();
  const ctx = useContext(ItineraryContext);
  const { config, data, errMsg, isLoading, panel, isAddFormOpen, snacks } = ctx;
  const { handleSnackOpen } = usePanelOps(config);
  const { short } = useFormatDate();

  const newFormTitle = "Add New Itinerary";
  const newFormFields = formProps => (
    <FormFields {...formProps} recNum={{ recNum: "new" }} />
  );
  const newDataRecord = { rec: config.newRecord, recNum: "new" };

  const onSnackClose = () => {
    handleSnackOpen("", snacks.isSnackOpen);
  };

  useEffect(() => {}, [isLoading, isAddFormOpen]);

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

          const dataRecord = {
            rec,
            recNum,
            recTitleDisplay: { left: short(rec.date), right: rec.title }
          };

          const formFields = formProps => (
            <FormFields {...formProps} recNum={recNum} />
          );

          return (
            <Content
              key={`${config.apiToUse}Rec_${recNum}`}
              ctx={ctx}
              dataRecord={dataRecord}
              isOpen={isOpen}
              form={initData => (
                <InputForm
                  ctx={ctx}
                  dataRecord={initData}
                  isEditing
                  formFields={formFields}
                />
              )}
            />
          );
        })}
      </List>
      {isAddFormOpen && (
        <AddForm
          title={newFormTitle}
          ctx={ctx}
          dataRecord={newDataRecord}
          form={initData => (
            <InputForm
              ctx={ctx}
              dataRecord={initData}
              formFields={newFormFields}
            />
          )}
        />
      )}

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
