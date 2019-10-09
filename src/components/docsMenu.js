import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const DocsMenu = () => {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=1&catName=Flights"
            as="/docsData/flights"
          >
            <a>Flight</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=3&catName=Lodging"
            as="/docsData/lodging"
          >
            <a>Lodging</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=2&catName=Trains"
            as="/docsData/Trains"
          >
            <a>Trains</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=4&catName=Luggage"
            as="/docsData/Luggage"
          >
            <a>Luggage Storage</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=5&catName=Events"
            as="/docsData/Events"
          >
            <a>Events / Venues</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=6&catName=Other"
            as="/docsData/other"
          >
            <a>Other</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link
            href="/docsData?trip=italy&category=7&catName=Photos"
            as="/docsData/photos"
          >
            <a>Photos</a>
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default DocsMenu;
