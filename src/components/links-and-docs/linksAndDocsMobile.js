import { useEffect, useContext } from "react";
import { LinksAndDocsContext } from "../../contexts/linksanddocs.context";
import useStyles from "../../styles/api-datatable.style";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";
import { useIcons } from "../../helpers/hooks/useIcons";
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

const LinksAndDocsMobile = () => {
  const classes = useStyles();
  const ctx = useContext(LinksAndDocsContext);
  const { config, data, errMsg, isLoading, panel, isAddFormOpen, snacks } = ctx;
  const { handleSnackOpen } = usePanelOps(config);
  const listItemsData = useIcons("listItemsData");

  const newFormTitle = "Add New Links/Documents";
  const newFormFields = formProps => (
    <FormFields {...formProps} recNum={{ recNum: "new" }} />
  );
  const newDataRecord = { rec: config.newRecord, recNum: "new" };
  console.log(panel);
  const onSnackClose = () => {
    handleSnackOpen("", snacks.isSnackOpen);
  };

  useEffect(() => {}, [isLoading]);

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
      <List component="nav" aria-labelledby="nested-linksdocs">
        {data.map((rec, recNum) => {
          const isOpen =
            panel.panelOpen === `${config.apiToUse}_all` ||
            panel.panelOpen === `${config.apiToUse}Rec_${recNum}`;

          const icon = listItemsData.filter(
            item => item.cat === rec.category && item
          )[0];

          const dataRecord = {
            rec,
            recNum,
            recTitleDisplay: {
              left: icon ? icon.icon : "",
              right: rec.description
            }
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

export default LinksAndDocsMobile;
