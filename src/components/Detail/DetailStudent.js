import { Chip, Grid, Typography, Avatar, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./style";

const DetailStudent = ({ student }) => {
  const classes = useStyles();
  const initial = student.name.charAt(0);
  const lessons = useSelector((state) => state.lessons);
  const lessonsInThisStudent = lessons.filter((lesson) =>
    student.lessons.find((item) => item === lesson.id.toString())
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} lg={12}>
        <Box className={classes.student} display="flex" alignItems="center">
          <Avatar className={classes.student__avatar}>{initial}</Avatar>
          <Typography className={classes.subtitle} variant="subtitle1">
            Name: {`${student.name} ${student.lastName}`}
          </Typography>
        </Box>
        <Typography className={classes.subtitle} variant="subtitle1">
          Age: {student.age}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography className={classes.subtitle} variant="subtitle1">
          Lessons registered:
        </Typography>
        <Grid container>
          {lessonsInThisStudent.length > 0 ? (
            lessonsInThisStudent.map((lesson) => (
              <Grid key={lesson.id} item>
                <Chip className={classes.chip__lesson} label={lesson.name} />
              </Grid>
            ))
          ) : (
            <Typography className={classes.empty} variant="body2">
              There is not lessons registered yet
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailStudent;
