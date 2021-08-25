import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";

const InfoCard = ({ color, title, total }) => {
  const classes = useStyles({ color });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="body1">
          Registered {title}
        </Typography>
        <Typography className={classes.title} variant="body2">
          Total: {total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
