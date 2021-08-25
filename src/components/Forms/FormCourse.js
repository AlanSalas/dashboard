import { useDispatch } from "react-redux";
import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { courseSchema } from "../../schemas";
import useStyles from "./style";
import { addCourse, updateCourse } from "../../redux/actions/courses";
import { closeModal } from "../../redux/actions/ui";

const FormCourses = ({ setSnackBar, course }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: course ? course.name : "",
    },
    validationSchema: courseSchema,
    onSubmit: (values) => {
      if (course) {
        dispatch(updateCourse(course.id, values));
      } else {
        dispatch(addCourse(values));
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
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default FormCourses;
