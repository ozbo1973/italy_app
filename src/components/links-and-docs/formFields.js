import { TextField, Grid, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "200px"
  }
}));

const FormFields = ({ values, handleChange, recNum }) => {
  const classes = useStyles();
  const menuOptions = [
    "Flight",
    "Train",
    "Lodging",
    "Luggage",
    "Events",
    "Other",
    "Photos"
  ].map((opt, i) => (
    <MenuItem key={`ff_mi_${opt}`} value={i + 1}>
      {opt}
    </MenuItem>
  ));

  return (
    <>
      <Grid item xs={12}>
        <TextField
          id={`category${recNum}`}
          name="category"
          select
          label="Category"
          value={values.category}
          onChange={handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Select category of link"
          margin="normal"
          variant="outlined"
        >
          {menuOptions}
          ))}
        </TextField>
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
          id={`url_${recNum}`}
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Grid>
    </>
  );
};

export default FormFields;
