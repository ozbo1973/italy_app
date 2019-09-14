import useStyles from "../../static/styles/dataTable.style";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";

const Yelp = () => {
  const classes = useStyles();
  return (
    <Paper className={`${classes.root} ${classes.tableWrapper}`}>
      <div className={classes.regularTable}>
        <Typography variant="h6" className={classes.regularTableTitle}>
          Places to Eat(yelp)
        </Typography>
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
