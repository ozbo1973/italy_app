import ActiveLink from "./activeLink";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 ${theme.spacing(4)}px`
  }
}));

const DisplayMenuLinks = ({ isMobile }) => {
  const classes = useStyles();
  const items = ["rome", "florence", "cinque terre", "venice"];
  const page = n => n.split(" ").join("-");

  const desk = items.map(n => (
    <div className={classes.root}>
      <Typography key={n} variant="h6">
        <ActiveLink href={`/${page(n)}`}>{n}</ActiveLink>
      </Typography>
    </div>
  ));
  const mobile = items.map(n => (
    <MenuItem>
      <Typography key={n} variant="h6">
        <ActiveLink href={`/${page(n)}`}>{n}</ActiveLink>
      </Typography>
    </MenuItem>
  ));

  return isMobile ? mobile : desk;
};

export default DisplayMenuLinks;
