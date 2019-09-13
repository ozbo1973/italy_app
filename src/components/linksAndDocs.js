import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Link
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tableWrapper: {
    overflow: "auto"
  }
}));

const LinksAndDocs = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Typography variant="h6">Usefull Links and Docs</Typography>
      <div className={classes.tableWrapper}>
        <Table>
          <TableHead>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>View</TableCell>
            <TableCell>Actions</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Flight</TableCell>
              <TableCell>Flight Itenary for getting into Rome.</TableCell>
              <TableCell>
                <Link href="/">(view)</Link>
              </TableCell>
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

export default LinksAndDocs;
