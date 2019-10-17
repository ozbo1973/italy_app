import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { usePlacesData } from "../../helpers/hooks/useStaticData";
import Itinerary from "../itinerary";
import Weather from "../weather";
import LinksAndDocs from "../linksAndDocs";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Yelp from "../yelp";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  expansionRoot: {
    "&$expanded": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      minHeight: "0",
      height: "1.3rem"
    }
  },
  expansionPanel: {
    margin: ".5rem .3rem"
  },
  expanded: {},
  expansionPanelDetail: {
    padding: "5px 3px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "70.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary
  }
}));

const pageComponents = [
  {
    title: "Weather",
    panelTitle: "weather",
    subTitle: "Current and next couple of days weather report.",
    component: (page, imgSrc) => <Weather page={page} imgSrc={imgSrc} />
  },
  {
    title: "Links / Docs / Photos",
    panelTitle: "linksanddocs",
    subTitle: "List of documents, photos, and useful links.",
    component: (page, imgSrc) => <LinksAndDocs page={page} />
  },
  {
    title: "Itinerary",
    panelTitle: "itinerary",
    subTitle: "Our detailed Itinerary",
    component: (page, imgSrc) => <Itinerary page={page} />
  },
  {
    title: "Places to Eat(Yelp)",
    panelTitle: "yelp",
    subTitle: "list of places to eat in the area.",
    component: (page, imgSrc) => <Yelp page={page} />
  }
];

const PageLayoutMobile = ({ page, imgSrc }) => {
  const classes = useStyles();
  const { properPlace } = usePlacesData();
  const [expanded, setExpanded] = useState("weather");

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography variant="h3" component="h1">
            {`${properPlace(page)}`}
          </Typography>
        </Grid>
      </Grid>

      {pageComponents.map(exp => (
        <ExpansionPanel
          expanded={expanded === exp.panelTitle}
          onChange={handleChange(exp.panelTitle)}
          key={exp.panelTitle}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls={`${exp.panelTitle}-content`}
            id={`${exp.panelTitle}-header`}
            classes={{
              root: classes.expansionRoot,
              expanded: classes.expanded
            }}
          >
            <Typography className={classes.heading}>{exp.title}</Typography>
            {/* <Typography className={classes.secondaryHeading}>
              {exp.subTitle}
            </Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionPanelDetail}>
            {exp.component(page, imgSrc)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default PageLayoutMobile;
