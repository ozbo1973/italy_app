import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: "5px"
  },
  gridList: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  tableWrapper: {
    overflow: "auto",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: "5px"
  },
  progress: {
    margin: theme.spacing(2),
    width: "100%"
  }
}));
