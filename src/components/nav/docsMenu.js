import { useState } from "react";
import { useRouter } from "next/router";
import { getPageTitleProper } from "../../helpers/pageHelpers";
import { useIcons } from "../../helpers/hooks/useIcons";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "1.5rem",
    marginRight: "1rem",
    padding: ".5rem"
  },
  mobileRoot: {
    textAlign: "center"
  },
  mobileMenuChoose: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "1rem",
    color: theme.palette.primary.main,
    borderRadius: "1rem",
    width: "95%",
    "&:hover": {
      color: theme.palette.headerPrimary.main,
      backgroundColor: theme.palette.secondary.main
    }
  },
  mobileButton: {
    margingBottom: "1rem"
  },
  mobileIcon: {
    marginRight: "1.5rem",
    fontSize: "50"
  },
  mobileText: {
    fontSize: "1.5rem"
  },
  desktopRoot: {
    padding: "1rem",
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.headerPrimary.main,
      backgroundColor: theme.palette.secondary.main
    }
  },
  deskTopIcon: {
    color: theme.palette.primary.main
  },
  activeSelected: {
    color: theme.palette.headerPrimary.main,
    backgroundColor: theme.palette.primary.main
  },
  activeSelectedIcon: {
    color: theme.palette.headerPrimary.main
  }
}));

const handleOnClick = (item, router) => {
  const href = `/docsData?trip=italy&category=${item.cat}&catName=${item.catName}`;
  const as = `/docsData/${item.catName}`;
  router.push(href, as);
};

const DisplayDesk = () => {
  const router = useRouter();
  const classes = useStyles();
  const listItemsData = useIcons("listItemsData");

  return listItemsData.map(l => (
    <ListItem
      key={`${l.catName}_docsMenuDT`}
      onClick={() => handleOnClick(l, router)}
      button
      className={`${classes.desktopRoot} ${router.query.catName === l.catName &&
        classes.activeSelected}`}
    >
      <ListItemIcon
        className={`${classes.deskTopIcon} ${router.query.catName ===
          l.catName && classes.activeSelectedIcon}`}
      >
        {l.icon}
      </ListItemIcon>
      <ListItemText>{getPageTitleProper(`/${l.catName}`)}</ListItemText>
    </ListItem>
  ));
};

const DisplayMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const router = useRouter();
  const listItemsData = useIcons("listItemsData");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showSelected = () => {
    const isHome = router.query.catName;
    const cat = isHome
      ? listItemsData.find(l => l.catName === router.query.catName)
      : null;
    return !isHome ? (
      "View Links / Docs"
    ) : (
      <>
        <Icon className={classes.mobileIcon}>{cat.icon}</Icon>
        <Typography component="span" className={classes.mobileText}>
          {cat.catName}
        </Typography>
      </>
    );
  };

  return (
    <div className={classes.mobileRoot}>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.mobileMenuChoose}
      >
        <div>{showSelected()}</div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {listItemsData.map(l => (
          <MenuItem
            key={`${l.catName}_docsMenuMB`}
            onClick={() => {
              handleOnClick(l, router);
              handleClose();
            }}
          >
            <span className="menu-icon">
              {<Icon className={classes.mobileIcon}>{l.icon}</Icon>}
            </span>
            <Typography component="span" className={classes.mobileText}>
              {l.catName}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const DocsMenu = () => {
  const classes = useStyles();
  return (
    <>
      <List component="nav" className={classes.root}>
        <Hidden smDown>
          <DisplayDesk />
        </Hidden>
      </List>
      <Hidden mdUp>
        <DisplayMobile />
      </Hidden>
    </>
  );
};

export default DocsMenu;
