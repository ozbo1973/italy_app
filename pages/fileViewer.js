import { forwardRef, useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  iframe: {
    height: "100vh",
    width: "100%"
  }
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FileViewer = ({ data }) => {
  const router = useRouter();
  const classes = useStyles();
  const [state, setState] = useState(true);

  const handleClose = e => {
    e.preventDefault();
    setState(false);
    router.push(data.from);
  };

  return (
    <Dialog
      open={state}
      onClose={handleClose}
      fullScreen
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {data.descr}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container direction="column">
        <Grid item>
          <iframe src={data.url} className={classes.iframe} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

FileViewer.getInitialProps = async ({ query }) => {
  console.log(query);
  return { data: query };
};

export default FileViewer;
