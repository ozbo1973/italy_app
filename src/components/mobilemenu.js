import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import DisplayMenuLinks from "./displayMenuLinks";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const MobileMenu = ({ id, open, close, anchor }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu
        anchorEl={anchor}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={id}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={close}
        onClick={close}
        classes={{ paper: classes.paper }}
      >
        <div>
          <DisplayMenuLinks isMobile />
        </div>
      </Menu>
    </div>
  );
};

export default MobileMenu;
