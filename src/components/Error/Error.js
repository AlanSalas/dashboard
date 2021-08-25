import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";

const Error = ({ error }) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.error} align="center" variant="h3">
        {error}
      </Typography>
    </Container>
  );
};

export default Error;
