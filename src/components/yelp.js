import { useState, useEffect } from "react";
import Link from "next/link";
import { otherAPI } from "../helpers/pageDataQuery";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";
import YelpDialog from "./yelpDialog";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: "5px"
  },
  gridList: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  tableWrapper: {
    overflow: "auto",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: "5px"
  }
}));

const Yelp = ({ page }) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTile, setSelectedTile] = useState({});
  const [yelpData, setYelpData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = "yelp";

  const handleInfoOpen = (e, tile) => {
    // setSelectedTile(tile);
    // setDialogOpen(true);
    e.preventDefault();
    window.open(tile.url, "_blank");
  };
  const handleInfoClose = e => setDialogOpen(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await otherAPI(baseURL).get(`/${page.pageTitle}`);
        setYelpData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    isLoading && getData();
  }, [isLoading]);

  return isLoading ? (
    <Paper className={classes.root}>
      <CircularProgress />
    </Paper>
  ) : (
    <DisplayYelp
      isOpen={dialogOpen}
      handleInfoClose={handleInfoClose}
      selectedTile={selectedTile}
      handleInfoOpen={handleInfoOpen}
      yelpData={yelpData}
    />
  );
};

const DisplayYelp = ({
  isOpen,
  handleInfoClose,
  selectedTile,
  handleInfoOpen,
  yelpData
}) => {
  const classes = useStyles();
  return isOpen ? (
    <YelpDialog
      onClose={handleInfoClose}
      selectedValue={selectedTile}
      open={isOpen}
    />
  ) : (
    <Paper className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Places to Eat (Yelp)</ListSubheader>
        </GridListTile>
        {yelpData.businesses.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.image_url} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={
                <div>
                  <span>({tile.price})</span> <span>rating: {tile.rating}</span>{" "}
                  <span>reviews: {tile.review_count}</span>
                </div>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.name}`}
                  className={classes.icon}
                  onClick={e => handleInfoOpen(e, tile)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
  {
  }
};

export default Yelp;
