import { useState } from "react";
import MobileMenu from "./mobilemenu";
import ActiveLink from "../components/activeLink";
import useStyles from "../../static/style/nav";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/Morevert";

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
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <ActiveLink href="/">
              <img src="/static/img/prp.svg" className={classes.homeImg} />
            </ActiveLink>
          </IconButton>
          <div className={classes.title}>
            <Grid container direction="column">
              <Grid item className={classes.mainTitle}>
                <Typography variant="h4">Patrick R. Parkinson</Typography>
              </Grid>
              <Grid item className={classes.subTitle}>
                <Typography variant="subtitle1">Aug 1973 - Oct 2016</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionDesk}>{displayPagesLinks()}</div>
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

const displayPagesLinks = () =>
  navLinks.map(n => (
    <Typography key={n} variant="h6">
      <ActiveLink href={`/${n}`}>{properName(n)}</ActiveLink>
    </Typography>
  ));

export default Nav;
