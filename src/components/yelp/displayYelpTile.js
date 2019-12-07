import { useContext } from "react";
import { YelpContext } from "../../contexts/yelp.context";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton
} from "@material-ui/core";
import useStyles from "../../styles/yelp.style";
import { Info } from "@material-ui/icons";

const DisplayYelpTile = ({ cols }) => {
  const classes = useStyles();
  const { data } = useContext(YelpContext);

  return (
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
        <ListSubheader component="div">Places to Eat (Yelp)</ListSubheader>
      </GridListTile>
      {data.businesses.map(tile => (
        <GridListTile cols={cols} key={tile.id}>
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
                onClick={e => window.open(tile.url, "_blank")}
              >
                <Info />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default DisplayYelpTile;
