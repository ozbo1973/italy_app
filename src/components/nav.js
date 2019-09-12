import { useState } from "react";
import MobileMenu from "./mobilemenu";
import DisplayMenuLinks from "./displayMenuLinks";
import ActiveLink from "./activeLink";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/Morevert";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  homeImg: {
    width: "60px",
    height: "60px"
  },
  title: {
    flexGrow: 1,
    marginTop: "1rem"
  },
  mainTitle: {
    color: theme.palette.headerPrimary.main,
    textShadow: "1px 1px 2px white"
  },
  subTitle: {
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  sectionDesk: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const Nav = () => {
  const classes = useStyles();
  const mobileMenuId = "menu-mobile";
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMobileMenuToggle = e => {
    setIsMobileOpen(!isMobileOpen);
    anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <ActiveLink href="/">
              <img
                src="static/img/italy_blank.svg"
                className={classes.homeImg}
              />
            </ActiveLink>
          </IconButton>
          <div className={classes.title}>
            <Grid container direction="column">
              <Grid item className={classes.mainTitle}>
                <Typography variant="h4">Our Trip to Italy</Typography>
              </Grid>
              <Grid item className={classes.subTitle}>
                <Typography variant="subtitle1">
                  Sept 25 - Oct 4 2019
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionDesk}>
            <DisplayMenuLinks />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuToggle}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        open={isMobileOpen}
        close={handleMobileMenuToggle}
        anchor={anchorEl}
      />
    </div>
  );
};

export default Nav;
