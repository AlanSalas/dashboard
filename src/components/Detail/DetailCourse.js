import { Chip, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./style";

const DetailCourse = ({ course }) => {
  const classes = useStyles();
  const lessons = useSelector((state) => state.lessons);
  const lessonsInThisCourse = lessons.filter(
    (lesson) => lesson.courseId === course.id
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography className={classes.subtitle} variant="subtitle1">
          Lessons in this Course:
        </Typography>
        <Grid container>
          {lessonsInThisCourse.map((lesson) => (
            <Grid key={lesson.id} item>
              <Chip className={classes.chip__lesson} label={lesson.name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailCourse;
