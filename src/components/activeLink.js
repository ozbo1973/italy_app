import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.linkPrimary.main,
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }
  },
  rootActive: {
    color: theme.palette.linkPrimary.active
  }
}));

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const classes = useStyles();
  const { pathname } = router;

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };
  const style =
    pathname === href ? `${classes.root} ${classes.rootActive}` : classes.root;

  useEffect(() => {
    router.prefetch(href);
  });

  return (
    <span className={style} onClick={handleClick}>
      {children}
    </span>
  );
};

export default ActiveLink;
