import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const DocsMenu = () => {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Link href="/docsData?cat=1" as="/docsData/flights">
            <a>Flight</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link href="/docsData?cat=3" as="/docsData/lodging">
            <a>Lodging</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link href="/docsData?cat=2" as="/docsData/Trains">
            <a>Trains</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link href="/docsData?cat=4" as="/docsData/Luggage">
            <a>Luggage Storage</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link href="/docsData?cat=5" as="/docsData/Events">
            <a>Events / Venues</a>
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Link href="/docsData?cat=6" as="/other">
            <a>Other</a>
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default DocsMenu;