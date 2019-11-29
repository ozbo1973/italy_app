import { TextField, Grid, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menu: {
    width: "200px"
  }
}));

const FormFields = ({ values, handleChange, recNum, config }) => {
  const classes = useStyles();
  const { apiToUse } = config;
  const menu = {
    docsData: {
      menu: ["rome", "florence", "cinque-terre", "venice"],
      id: `place${recNum}`,
      name: "place",
      label: "Place",
      helperText: "Select a location",
      value: values.place
    },
    linksdocs: {
      menu: [
        "Flight",
        "Train",
        "Lodging",
        "Luggage",
        "Events",
        "Other",
        "Photos"
      ],
      id: `category${recNum}`,
      name: "category",
      label: "Category",
      helperText: "Select category of link",
      value: values.category
    }
  };

  const menuOptions = menu[apiToUse].menu.map((opt, i) => (
    <MenuItem
      key={`ff_mi_${opt}`}
      value={apiToUse === "docsData" ? opt : i + 1}
    >
      {opt}
    </MenuItem>
  ));

  return (
    <>
      <Grid item xs={12}>
        <TextField
          id={menu[apiToUse].id}
          name={menu[apiToUse].name}
          select
          label={menu[apiToUse].label}
          value={menu[apiToUse].value}
          onChange={handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText={menu[apiToUse].helperText}
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
