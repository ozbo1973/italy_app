import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "white"
  },
  card: {
    width: "340px"
  },
  media: {
    height: 140
  }
});

const YelpDialog = ({ onClose, selectedValue, open }) => {
  const classes = useStyles();

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby={selectedValue.name}
      open={open}
      onClose={onClose}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={selectedValue.image_url}
            title={selectedValue.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {selectedValue.name}(Yelp)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              <p>
                Rating of {selectedValue.rating} stars with{" "}
                {selectedValue.review_count} reviews.
              </p>
              <ul>
                <li>Price: {selectedValue.price}</li>
                <li>Phone Number: {selectedValue.phone}</li>
                <li>
                  Open/Closed: {!selectedValue.is_closed ? "Open" : "Closed"}
                </li>
                <li>Distance: {selectedValue.distance} miles</li>
              </ul>
              <p>
                {selectedValue.location.address1} <br />
                {selectedValue.location.city}, {selectedValue.location.country}
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link size="small" color="primary"></Link>
          <Link href={selectedValue.url} target="_blank" color="primary">
            View full Yelp
          </Link>
        </CardActions>
      </Card>
    </Dialog>
  );
};
export default YelpDialog;
