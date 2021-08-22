import { makeStyles, TableCell, TableRow, withStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  detail: {
    color: theme.palette.info.main,
  },
  edit: {
    color: theme.palette.warning.main,
  },
  delete: {
    color: theme.palette.error.main,
  },
}));

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: deepPurple[100],
    color: theme.palette.common.black,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default useStyles;
