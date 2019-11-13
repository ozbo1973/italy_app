import FlightIcon from "@material-ui/icons/Flight";
import TrainIcon from "@material-ui/icons/Train";
import HotelIcon from "@material-ui/icons/Hotel";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ExploreIcon from "@material-ui/icons/Explore";
import LocalBarIcon from "@material-ui/icons/LocalBar";

const icons = {
  listItemsData: [
    { cat: 1, catName: "flights", icon: <FlightIcon /> },
    { cat: 2, catName: "trains", icon: <TrainIcon /> },
    { cat: 3, catName: "lodging", icon: <HotelIcon /> },
    { cat: 4, catName: "luggage", icon: <LocalMallIcon /> },
    { cat: 5, catName: "events", icon: <LocalBarIcon /> },
    { cat: 6, catName: "other", icon: <ExploreIcon /> },
    { cat: 7, catName: "photos", icon: <PhotoCameraIcon /> }
  ]
};

export const useIcons = iconset => icons[iconset];
