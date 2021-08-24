import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Grid,
  Tooltip,
  Fab,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Table from "../components/Table";
import Modal from "../components/Modal";
import FormLesson from "../components/Forms/FormLesson";
import useStyles from "./style";

const Lessons = ({ openModal, handleOpenModal }) => {
  const classes = useStyles();
  const tableRows = ["Name", "Course", "Actions"];
  const courses = useSelector((state) => state.courses);
  const lessons = useSelector((state) => state.lessons);
  const loading = useSelector((state) => state.ui.loading);

  const data = lessons.map((lesson) => {
    return {
      id: lesson.id,
      name: lesson.name,
      course: courses.find((course) =>
        course.id === lesson.courseId ? course.name : null
      ),
      courseId: lesson.courseId,
    };
  });

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Lessons
      </Typography>
      <Grid container>
        {loading ? (
          <Grid item xs={12} sm={12} lg={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CircularProgress color="primary" />
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} lg={12}>
            <Table color="#d1c4e9" tableRows={tableRows} data={data} />
          </Grid>
        )}
      </Grid>
      <Tooltip
        title="Add"
        placement="top"
        aria-label="add"
        onClick={handleOpenModal}
      >
        <Fab className={classes.add}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        openModal={openModal}
        handleOpenModal={handleOpenModal}
        title="Add new Lesson"
      >
        <FormLesson />
      </Modal>
    </Container>
  );
};

export default Lessons;
