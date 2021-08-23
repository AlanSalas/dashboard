import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import { studentSchema } from "../../schemas";
import useStyles from "./style";

const FormCourses = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      lessons: [],
    },
    validationSchema: studentSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const lessons = [
    {
      id: "1",
      name: "Class 1",
      course: "Course 2",
    },
    {
      id: "2",
      name: "Class 2",
      course: "Course 1",
    },
    {
      id: "3",
      name: "Class 3",
      course: "Course 3",
    },
    {
      id: "4",
      name: "Class 1",
      course: "Course 2",
    },
    {
      id: "5",
      name: "Class 2",
      course: "Course 1",
    },
    {
      id: "6",
      name: "Class 3",
      course: "Course 3",
    },
    {
      id: "7",
      name: "Class 1",
      course: "Course 2",
    },
    {
      id: "8",
      name: "Class 2",
      course: "Course 1",
    },
    {
      id: "9",
      name: "Class 3",
      course: "Course 3",
    },
  ];

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
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            fullWidth
            name="age"
            label="Age"
            inputProps={{ type: "number" }}
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>

        <Grid item xs={12} sm={12} lg={12}>
          <FormLabel>Select student lessons</FormLabel>
          <Box className={classes.groupCheckbox}>
            <Grid container>
              {lessons.map((lesson) => (
                <Grid key={lesson.id} item xs={12} sm={6} lg={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={lesson.id}
                        onChange={formik.handleChange}
                        name="lessons"
                      />
                    }
                    label={lesson.name}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default FormCourses;
