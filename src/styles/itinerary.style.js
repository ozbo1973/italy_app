import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    width: "95%",
    margin: `${theme.spacing(1)}px auto`
  },
  divider: {
    color: theme.palette.primary.main
  },
  listItemRoot: {
    marginTop: theme.spacing(1)
  },
  tableWrapper: {
    // overflow: "auto",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: "5px"
  },
  hide: {
    display: "none"
  },
  regularTable: {
    backgroundColor: "white"
  },
  regularTableTitle: {
    padding: theme.spacing(2)
  },
  icon: {
    fontSize: "4rem",
    color: theme.palette.primary.main,
    margin: "0 auto"
  },
  listOpen: {
    backgroundColor: "#ccc",
    padding: "1rem",
    height: "1rem"
  },
  recDataOpen: {
    fontSize: ".7rem",
    color: theme.palette.secondary.main
  },
  buttonGroup: {
    flexGrow: 1,
    textAlign: "right"
  },
  fab: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    "&:hover": {
      color: "#fff",
      backgroundColor: theme.palette.primary.main
    }
  },
  recData: {
    fontSize: ".7rem",
    fontWeight: "700"
  },
  progress: {
    textAlign: "center"
  },
  collapseWrapper: {
    margin: "0 auto"
  }
}));
