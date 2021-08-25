import { makeStyles } from "@material-ui/core/styles";
import { purple, deepPurple, blue, teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
  },
  courseName: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  empty: {
    color: theme.palette.info.main,
  },
  chip__course: {
    backgroundColor: deepPurple[100],
    marginRight: theme.spacing(2),
  },
  chip__lesson: {
    backgroundColor: purple[100],
    marginRight: theme.spacing(2),
  },
  chip__students: {
    backgroundColor: blue[100],
    marginRight: theme.spacing(2),
  },
  chip__ads: {
    backgroundColor: teal[100],
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
