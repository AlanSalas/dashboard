import { createTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[700],
      light: teal[500],
    },
  },
});

export default theme;
