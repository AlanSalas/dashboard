import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    borderRadius: ".3rem",
    backgroundColor: "#eceff1",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    border: "none",
    outline: "none",
    width: "50%",
    height: "70%",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
