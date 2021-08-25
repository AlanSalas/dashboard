import { useDispatch, useSelector } from "react-redux";
import { addLesson, updateLesson } from "../../redux/actions/lessons";
import { closeModal } from "../../redux/actions/ui";
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { lessonSchema } from "../../schemas";
import useStyles from "./style";

const FormCourses = ({ setSnackBar, lesson }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const formik = useFormik({
    initialValues: {
      name: lesson ? lesson.name : "",
      courseId: lesson ? lesson.courseId : "",
    },
    validationSchema: lessonSchema,
    onSubmit: (values) => {
      if (lesson) {
        dispatch(updateLesson(lesson.id, values));
      } else {
        dispatch(addLesson(values));
      }
      dispatch(closeModal());
      setSnackBar(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            className={classes.input}
            variant="outlined"
            fullWidth
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            fullWidth
            name="courseId"
            label="Select a course"
            value={formik.values.courseId}
            onChange={formik.handleChange}
            error={formik.touched.courseId && Boolean(formik.errors.courseId)}
            helperText={formik.touched.courseId && formik.errors.courseId}
            select
          >
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default FormCourses;
