import { navLinks } from "../mainData";
import { properName } from "../helpers";
import ActiveLink from "../components/activeLink";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import useStyles from "../../static/style/mobilemenu";

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
        <div>{displayPagesLinksMobile()}</div>
      </Menu>
    </div>
  );
};

const displayPagesLinksMobile = () =>
  navLinks.map(n => (
    <MenuItem key={n}>
      <Typography variant="h6">
        <ActiveLink href={`/${n}`}>{properName(n)}</ActiveLink>
      </Typography>
    </MenuItem>
  ));

export default MobileMenu;
