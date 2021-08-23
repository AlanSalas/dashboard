import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(3),
  },
  groupCheckbox: {
    maxHeight: "150px",
    overflow: "auto",
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
