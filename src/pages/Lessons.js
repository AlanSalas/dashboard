import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/actions/ui";
import {
  Container,
  Typography,
  Grid,
  Tooltip,
  Fab,
  CircularProgress,
  Box,
  Snackbar,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Table from "../components/Table";
import Modal from "../components/Modal";
import FormLesson from "../components/Forms/FormLesson";
import DetailLesson from "../components/Detail/DetailLesson";
import useStyles from "./style";

const Lessons = () => {
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const [snackBar, setSnackBar] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const tableRows = ["Name", "Course", "Actions"];
  const courses = useSelector((state) => state.courses);
  const lessons = useSelector((state) => state.lessons);
  const loading = useSelector((state) => state.ui.loading);
  const open = useSelector((state) => state.ui.openModal);

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

  const openModalAdd = () => {
    dispatch(openModal());
    setTitleModal("Add new lesson");
    setContentModal(<FormLesson setSnackBar={setSnackBar} />);
  };

  const openModalEdit = (lesson) => {
    dispatch(openModal());
    setTitleModal(`Edit ${lesson.name}`);
    setContentModal(<FormLesson setSnackBar={setSnackBar} lesson={lesson} />);
  };

  const openModalDetail = (lesson) => {
    dispatch(openModal());
    setTitleModal(`Detail ${lesson.name}`);
    setContentModal(<DetailLesson lesson={lesson} />);
  };

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Lessons
      </Typography>
      {loading ? (
        <Grid item xs={12} sm={12} lg={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress color="primary" />
          </Box>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            {data.length > 0 ? (
              <Table
                tableRows={tableRows}
                data={data}
                openModalEdit={openModalEdit}
                openModalDetail={openModalDetail}
                type="lessons"
              />
            ) : (
              <Typography className={classes.info} align="center">
                There is not lessons registered yet
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
      <Tooltip
        title="Add"
        placement="top"
        aria-label="add"
        onClick={openModalAdd}
      >
        <Fab className={classes.add}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open} title={titleModal}>
        {contentModal}
      </Modal>
      <Snackbar
        open={snackBar}
        autoHideDuration={4000}
        onClose={() => setSnackBar(false)}
        message="Saved!"
      ></Snackbar>
    </Container>
  );
};

export default Lessons;
