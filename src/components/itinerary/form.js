import { useState, useEffect } from "react";
import ActionButtons from "./actionButtons";
import FormFields from "./formFields";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "200px"
  },
  buttonGroup: {
    textAlign: "right"
  },
  hide: { display: "none" }
}));

const InputForm = ({ isEditing, dataRecord, panel, snacks, actionButtons }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ ...dataRecord.rec });
  const [selectedDate, handleDateChange] = useState(new Date(values.date));
  const { handleOpenPanel } = panel;
  const {
    crud: { deleteRecord, update, create },
    recNum
  } = dataRecord;
  const { handleSnackOpen } = snacks;

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDelete = async e => {
    e.preventDefault();
    await deleteRecord(values);
    handleOpenPanel();
    handleSnackOpen("Record Deleted");
  };

  const handleSave = async e => {
    e.preventDefault();
    let message;
    if (isEditing) {
      await update(values, values);
      message = "Record updated";
    } else {
      await create(values);
      handleOpenPanel();
      message = "Record Saved";
    }

    handleSnackOpen(message);
  };

  useEffect(() => {
    values.date !== selectedDate &&
      setValues({ ...values, date: selectedDate });
  }, [selectedDate]);

  return (
    <form className={classes.root}>
      {isEditing && actionButtons({ handleSave, handleDelete })}
      <Grid container>
        <FormFields
          values={values}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
          recNum={recNum}
        />
      </Grid>
      {!isEditing && actionButtons({ handleSave, handleDelete })}
    </form>
  );
};

export default InputForm;
