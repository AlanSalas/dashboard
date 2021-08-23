import { Button, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { courseSchema } from "../../schemas";
import useStyles from "./style";

const FormCourses = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: courseSchema,
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
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default FormCourses;
