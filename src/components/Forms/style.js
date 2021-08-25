import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  },
  groupCheckbox: {
    maxHeight: "150px",
    marginBottom: theme.spacing(3),
    overflow: "auto",
  },
}));

export default useStyles;
