import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tableWrapper: {
    overflow: "auto"
  }
}));

const Yelp = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Typography variant="h6">Places to Eat(yelp)</Typography>
      <div className={classes.tableWrapper}>
        <Table>
          <TableHead>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>View</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Mario's Pizza Joint</TableCell>
              <TableCell>
                A delicious place to eat for everyone who enjoys pizza
              </TableCell>
              <TableCell>view full</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default Yelp;
