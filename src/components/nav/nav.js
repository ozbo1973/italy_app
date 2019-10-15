import { useState } from "react";
import { usePlacesData } from "../../helpers/hooks/useStaticData";
import ActiveLink from "../activeLink";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Hidden,
  Button,
  Menu,
  MenuItem,
  Fade
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => {
  return {
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
    menuItems: {
      display: "flex"
    },
    deskTopRoot: {
      padding: `0 ${theme.spacing(4)}px`
    },
    mobileRoot: {
      textAlign: "center"
    },
    mobileMenuButton: {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.light,
      fontSize: ".5rem",
      borderRadius: "1rem",
      "&:hover": {
        color: theme.palette.headerPrimary.main,
        backgroundColor: theme.palette.secondary.main
      }
    },
    mobileMenuItem: {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main
      }
    },
    paper: {
      backgroundColor: theme.palette.secondary.main
    }
  };
});

const DisplayDesktop = () => {
  const classes = useStyles();
  const { places, page, properPlace } = usePlacesData();

  return places.map(place => (
    <div key={`${place}_dtNav`} className={classes.deskTopRoot}>
      <Typography variant="h6">
        <ActiveLink href={`/${page(place)}`}>{properPlace(place)}</ActiveLink>
      </Typography>
    </div>
  ));
};

const DisplayMobile = ({ close, placesEl }) => {
  const classes = useStyles();
  const { places, page, properPlace } = usePlacesData();
  const open = Boolean(placesEl);

  return (
    <Menu
      id="fade-menu"
      anchorEl={placesEl}
      keepMounted
      open={open}
      onClose={close}
      onClick={close}
      TransitionComponent={Fade}
      className={{ paper: classes.paper }}
    >
      {places.map(place => (
        <MenuItem
          onClick={close}
          key={`${place}_mbMenuItem`}
          className={classes.mobileMenuItem}
        >
          <Typography variant="h6">
            <ActiveLink href={`/${page(place)}`}>
              {properPlace(place)}
            </ActiveLink>
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

const Nav = () => {
  const classes = useStyles();
  const [placesEl, setPlacesEl] = useState(null);

  const handleMobilePlacesClick = e =>
    placesEl ? setPlacesEl(null) : setPlacesEl(e.currentTarget);

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
              <img src="static/img/italy.jpg" className={classes.homeImg} />
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
          <div className={classes.menuItems}>
            <Hidden smDown>
              <DisplayDesktop />
            </Hidden>

            <Hidden mdUp>
              <div className={classes.mobileRoot}>
                <Button
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={handleMobilePlacesClick}
                  className={classes.mobileMenuButton}
                >
                  View Places
                </Button>
              </div>
              {/* FUTURE <IconButton color="inherit">
                <MoreIcon />
              </IconButton> */}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <DisplayMobile close={handleMobilePlacesClick} placesEl={placesEl} />
    </div>
  );
};

export default Nav;
