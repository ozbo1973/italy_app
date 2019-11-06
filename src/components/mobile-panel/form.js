import { useState, useEffect } from "react";
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

const InputForm = ({ isEditing, dataRecord, actionButtons, formFields }) => {
  const classes = useStyles();
  const [values, setValues] = useState({ ...dataRecord.rec });
  const [selectedDate, handleDateChange] = useState(new Date(values.date));

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    values.date !== selectedDate &&
      setValues({ ...values, date: selectedDate });
  }, [selectedDate]);

  return (
    <form className={classes.root}>
      {isEditing && actionButtons(values)}
      <Grid container>
        {formFields({ values, selectedDate, handleChange, handleDateChange })}
      </Grid>
      {!isEditing && actionButtons(values)}
    </form>
  );
};

export default InputForm;
