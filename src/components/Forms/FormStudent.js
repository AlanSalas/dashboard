import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../../redux/actions/students";
import { closeModal } from "../../redux/actions/ui";
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
import { useState } from "react";

const FormStudent = ({ setSnackBar, student }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);
  const [checkedState, setCheckedState] = useState(
    student
      ? lessons.map((lesson) => {
          return student.lessons.includes(lesson.id.toString());
        })
      : new Array(lessons.length).fill(false)
  );

  const formik = useFormik({
    initialValues: {
      name: student ? student.name : "",
      lastName: student ? student.lastName : "",
      age: student ? student.age : "",
      lessons: student ? student.lessons : [],
    },
    validationSchema: studentSchema,
    onSubmit: (values) => {
      console.log(values);
      if (student) {
        dispatch(updateStudent(student.id, values));
      } else {
        dispatch(addStudent(values));
      }
      dispatch(closeModal());
      setSnackBar(true);
    },
  });

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

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
              {lessons.map((lesson, index) => (
                <Grid key={lesson.id} item xs={12} sm={6} lg={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedState[index]}
                        value={lesson.id}
                        name="lessons"
                        onChange={formik.handleChange}
                        onClick={(e) => handleOnChange(index, e)}
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

export default FormStudent;
