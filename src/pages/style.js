import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  add: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.grey[100],
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(10),
    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
    [theme.breakpoints.down("md")]: {
      right: theme.spacing(5),
    },
  },
  info: {
    color: theme.palette.info.main,
  },
}));

export default useStyles;
