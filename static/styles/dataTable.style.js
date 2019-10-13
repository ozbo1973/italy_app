import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  tableWrapper: {
    // overflow: "auto",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: "5px"
  },
  regularTable: {
    backgroundColor: "white"
  },
  regularTableTitle: {
    padding: theme.spacing(2)
  }
}));

export default style;
