import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { lessonSchema } from "../../schemas";
import useStyles from "./style";

const FormCourses = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      courseId: "",
    },
    validationSchema: lessonSchema,
    onSubmit: (values) => {
      console.log(values);
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
            <MenuItem value="1">Course 1</MenuItem>
            <MenuItem value="2">course 2</MenuItem>
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
