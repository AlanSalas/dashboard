import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fefefe",
    height: "100vh",
  },
  container: {
    height: "100vh",
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(7),
    },
  },
  content: {
    paddingTop: theme.spacing(3),
  },
}));
