import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { usePanelOps } from "../../helpers/hooks/usePanelOps";
import { crudAPI } from "../../helpers/hooks/useAPI";
import ActionButtons from "./actionButtons";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "200px"
  },
  buttonGroup: {
    textAlign: "right"
  },
  hide: { display: "none" }
}));

const InputForm = ({ isEditing, ctx, dataRecord, formFields }) => {
  const classes = useStyles();
  const { panel, snacks, config } = ctx;
  const [values, setValues] = useState({ ...dataRecord.rec });
  const [actionConfig, setActionConfig] = useState({
    type: "CRUD_OPERATION",
    payload: { req: values }
  });
  const [selectedDate, handleDateChange] = useState(
    moment(dataRecord.rec.date)
  );
  const { handleOpenPanel, toggleState, handleSnackOpen } = usePanelOps(config);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setActionConfig({
      ...actionConfig,
      payload: { req: { ...values, [e.target.name]: e.target.value } }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    e.persist();
    const submitConfig = isEditing
      ? { msg: "Updated", apiAction: "patch" }
      : { msg: "Saved", apiAction: "post" };

    await crudAPI(config, actionConfig, submitConfig.apiAction);

    handleSnackOpen(`Record ${submitConfig.msg}`, snacks.isSnackOpen);

    if (!isEditing) {
      handleOpenPanel(null, panel.panelOpen)(e);
      toggleState("ADDFORM_OPEN", true)();
    }
  };

  const handleDelete = async e => {
    await crudAPI(config, actionConfig, "delete");
    handleSnackOpen("Record Deleted", snacks.isSnackOpen);
  };

  const handleCancel = isEditing
    ? handleOpenPanel(
        `${config.apiToUse}Rec_${dataRecord.recNum}`,
        panel.panelOpen
      )
    : () => toggleState("ADDFORM_OPEN", true)();

  useEffect(() => {
    values.date !== selectedDate._i &&
      setValues({ ...values, date: selectedDate });
  }, [selectedDate]);

  return (
    <form onSubmit={handleOnSubmit} className={classes.root}>
      {isEditing && (
        <ActionButtons
          disableCancel={panel.allOpen}
          isEditing
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          handleOnSubmit={handleOnSubmit}
        />
      )}
      <Grid container>
        {formFields({
          values,
          selectedDate,
          handleChange,
          handleDateChange,
          config
        })}
      </Grid>
      {!isEditing && (
        <ActionButtons
          disableCancel={panel.allOpen}
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          handleOnSubmit={handleOnSubmit}
        />
      )}
    </form>
  );
};

export default InputForm;
