import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: theme.spacing(2),
  },
  chip__course: {
    backgroundColor: deepPurple[100],
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
