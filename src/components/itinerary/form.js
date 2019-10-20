import { useState, useEffect } from "react";
import { useTableData } from "../../helpers/hooks/useTableData";
import {
  TextField,
  ButtonGroup,
  Grid,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { Save, Delete, Cancel } from "@material-ui/icons";
import { DateTimePicker } from "@material-ui/pickers";
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

const ActionButtons = ({ isEditing, actions, recNum, formAllOpen }) => {
  const classes = useStyles();
  const handleCancel = isEditing
    ? actions.handleOpen(`itinRec_${recNum}`)
    : () => actions.handleOpen();

  return (
    <Grid item container>
      <Grid item xs={12} className={classes.buttonGroup}>
        <IconButton>
          <Save onClick={actions.handleSave} color="secondary" />
        </IconButton>
        <IconButton>
          <Delete
            onClick={actions.handleDelete}
            color="error"
            className={`${!isEditing && classes.hide}`}
          />
        </IconButton>
        <IconButton
          onClick={handleCancel}
          className={`${formAllOpen && classes.hide}`}
        >
          <Cancel color={isEditing ? "primary" : "error"} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const InputForm = ({
  isEditing,
  formData,
  recNum,
  handleOpen,
  formAllOpen,
  crud
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({ ...formData });
  const [selectedDate, handleDateChange] = useState(new Date(values.date));

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDelete = async e => {
    e.preventDefault();
    await crud.deleteRecord(values);
    alert("deleted");
  };

  const handleSave = async e => {
    e.preventDefault();
    if (isEditing) {
      await crud.update(values, values);
    } else {
      await crud.create(values);
      handleOpen();
    }

    alert("saved");
  };

  useEffect(() => {
    values.date !== selectedDate &&
      setValues({ ...values, date: selectedDate });
  }, [selectedDate]);

  return (
    <form className={classes.root}>
      {isEditing && (
        <ActionButtons
          isEditing={isEditing}
          formAllOpen={formAllOpen}
          actions={{ handleSave, handleOpen, handleDelete }}
          recNum={recNum}
        />
      )}
      <Grid container>
        <Grid item xs={12}>
          <DateTimePicker
            label="Date"
            name="date"
            inputVariant="outlined"
            value={selectedDate}
            onChange={handleDateChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id={`title_${recNum}`}
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id={`description_${recNum}`}
            label="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id={`tickets_${recNum}`}
            name="tickets"
            select
            label="Tickets"
            value={values.tickets}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Select if need tickets"
            margin="normal"
            variant="outlined"
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={2}>No</MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      {!isEditing && (
        <ActionButtons
          isEditing={isEditing}
          actions={{ handleSave, handleOpen, handleDelete }}
          recNum={recNum}
        />
      )}
    </form>
  );
};

export default InputForm;
