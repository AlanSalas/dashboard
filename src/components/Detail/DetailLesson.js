import { Chip, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./style";

const DetailLesson = ({ lesson }) => {
  const classes = useStyles();
  const students = useSelector((state) => state.students);
  const courses = useSelector((state) => state.courses);
  const ads = useSelector((state) => state.ads);
  const course = courses.find((course) => course.id === lesson.courseId);
  const studentsInThisLesson = students.filter((student) =>
    student.lessons.filter((item) => item === lesson.id)
  );

  console.log(studentsInThisLesson);

  const adsInThisLesson = ads.filter((ad) => ad.lessonId === lesson.id);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography className={classes.courseName} variant="subtitle1">
          {course.name}
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          Ads in this Lesson:
        </Typography>
        <Grid container>
          {adsInThisLesson.length > 0 ? (
            adsInThisLesson.map((ad) => (
              <Grid key={ad.id} item>
                <Chip className={classes.chip__ads} label={ad.description} />
              </Grid>
            ))
          ) : (
            <Typography className={classes.empty} variant="body2">
              There is not ads in this lesson yet
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography className={classes.subtitle} variant="subtitle1">
          Students in this Lesson:
        </Typography>
        <Grid container>
          {studentsInThisLesson.length > 0 ? (
            studentsInThisLesson.map((student) => (
              <Grid key={student.id} item>
                <Chip
                  className={classes.chip__students}
                  label={`${student.name} ${student.lastName}`}
                />
              </Grid>
            ))
          ) : (
            <Typography className={classes.empty} variant="body2">
              There is not students in this lesson yet
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailLesson;
