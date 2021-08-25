import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
