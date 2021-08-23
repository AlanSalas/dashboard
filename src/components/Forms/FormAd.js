import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { adSchema } from "../../schemas";
import useStyles from "./style";

const FormAd = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      description: "",
      lessonId: "",
    },
    validationSchema: adSchema,
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
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            fullWidth
            name="lessonId"
            label="Select a lesson"
            value={formik.values.lessonId}
            onChange={formik.handleChange}
            error={formik.touched.lessonId && Boolean(formik.errors.lessonId)}
            helperText={formik.touched.lessonId && formik.errors.lessonId}
            select
          >
            <MenuItem value="1">Lesson 1</MenuItem>
            <MenuItem value="2">Lesson 2</MenuItem>
          </TextField>
        </Grid>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default FormAd;
