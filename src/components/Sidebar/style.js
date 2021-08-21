import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    paddingTop: theme.spacing(3),
  },
  link: {
    color: theme.palette.grey[100],
    textDecoration: "none",
  },
  link__item: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  link__icon: {
    color: theme.palette.grey[100],
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  link__text: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  active: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

export const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "none",
      color: "white",
    },
    "&$selected:hover": {
      backgroundColor: "none",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#009688",
      color: "white",
    },
  },
})(MuiListItem);

export default useStyles;
