import { TextField, Grid, MenuItem } from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "200px"
  }
}));

const FormFields = ({
  values,
  selectedDate,
  handleChange,
  handleDateChange,
  recNum
}) => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};

export default FormFields;
