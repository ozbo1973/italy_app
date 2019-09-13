import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  tableWrapper: {
    overflow: "auto"
  }
}));

const Itinerary = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Typography variant="h6">Itinerary</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Tickets</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Thursday 09/25/2019</TableCell>
              <TableCell>8:00am</TableCell>
              <TableCell>Landing at Rome Airport, get to hotel area.</TableCell>
              <TableCell>N/a</TableCell>
              <TableCell>
                <Button>Edit</Button> <Button>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default Itinerary;
