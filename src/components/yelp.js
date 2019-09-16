import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";
import YelpDialog from "./yelpDialog";

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

const yelpData = {
  total: 8228,
  businesses: [
    {
      rating: 4,
      price: "$",
      phone: "+14152520800",
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      alias: "four-barrel-coffee-san-francisco",
      is_closed: false,
      categories: [
        {
          alias: "coffee",
          title: "Coffee & Tea"
        }
      ],
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275
      },
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      location: {
        city: "San Francisco",
        country: "US",
        address2: "",
        address3: "",
        state: "CA",
        address1: "375 Valencia St",
        zip_code: "94103"
      },
      distance: 1604.23,
      transactions: ["pickup", "delivery"]
    },
    {
      rating: 4,
      price: "$",
      phone: "+14152520800",
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      alias: "four-barrel-coffee-san-francisco",
      is_closed: false,
      categories: [
        {
          alias: "coffee",
          title: "Coffee & Tea"
        }
      ],
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275
      },
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      location: {
        city: "San Francisco",
        country: "US",
        address2: "",
        address3: "",
        state: "CA",
        address1: "375 Valencia St",
        zip_code: "94103"
      },
      distance: 1604.23,
      transactions: ["pickup", "delivery"]
    },
    {
      rating: 4,
      price: "$",
      phone: "+14152520800",
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      alias: "four-barrel-coffee-san-francisco",
      is_closed: false,
      categories: [
        {
          alias: "coffee",
          title: "Coffee & Tea"
        }
      ],
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275
      },
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      location: {
        city: "San Francisco",
        country: "US",
        address2: "",
        address3: "",
        state: "CA",
        address1: "375 Valencia St",
        zip_code: "94103"
      },
      distance: 1604.23,
      transactions: ["pickup", "delivery"]
    },
    {
      rating: 4,
      price: "$",
      phone: "+14152520800",
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      alias: "four-barrel-coffee-san-francisco",
      is_closed: false,
      categories: [
        {
          alias: "coffee",
          title: "Coffee & Tea"
        }
      ],
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275
      },
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      location: {
        city: "San Francisco",
        country: "US",
        address2: "",
        address3: "",
        state: "CA",
        address1: "375 Valencia St",
        zip_code: "94103"
      },
      distance: 1604.23,
      transactions: ["pickup", "delivery"]
    },
    {
      rating: 4,
      price: "$",
      phone: "+14152520800",
      id: "E8RJkjfdcwgtyoPMjQ_Olg",
      alias: "four-barrel-coffee-san-francisco",
      is_closed: false,
      categories: [
        {
          alias: "coffee",
          title: "Coffee & Tea"
        }
      ],
      review_count: 1738,
      name: "Four Barrel Coffee",
      url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275
      },
      image_url:
        "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      location: {
        city: "San Francisco",
        country: "US",
        address2: "",
        address3: "",
        state: "CA",
        address1: "375 Valencia St",
        zip_code: "94103"
      },
      distance: 1604.23,
      transactions: ["pickup", "delivery"]
    }
    // ...
  ],
  region: {
    center: {
      latitude: 37.767413217936834,
      longitude: -122.42820739746094
    }
  }
};

const Yelp = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleInfoOpen = e => setDialogOpen(true);
  const handleInfoClose = e => setDialogOpen(false);

  return (
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
                  onClick={handleInfoOpen}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
            <YelpDialog
              onClose={handleInfoClose}
              selectedValue={tile}
              open={dialogOpen}
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
};

export default Yelp;
