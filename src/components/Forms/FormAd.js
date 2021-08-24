import { useDispatch, useSelector } from "react-redux";
import { addAd, updateAd } from "../../redux/actions/ads";
import { closeModal } from "../../redux/actions/ui";
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { adSchema } from "../../schemas";
import useStyles from "./style";

const FormAd = ({ setSnackBar, ad }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);

  const formik = useFormik({
    initialValues: {
      description: ad ? ad.description : "",
      lessonId: ad ? ad.lessonId : "",
    },
    validationSchema: adSchema,
    onSubmit: (values) => {
      if (ad) {
        dispatch(updateAd(ad.id, values));
      } else {
        dispatch(addAd(values));
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
            {lessons.map((lesson) => (
              <MenuItem key={lesson.id} value={lesson.id}>
                {lesson.name}
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

export default FormAd;
