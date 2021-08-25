import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/actions/ui";
import {
  Container,
  Typography,
  Grid,
  Tooltip,
  Fab,
  Snackbar,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Table from "../components/Table";
import Modal from "../components/Modal";
import FormCourse from "../components/Forms/FormCourse";
import DetailCourse from "../components/Detail/DetailCourse";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useStyles from "./style";

const Courses = () => {
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const [snackBar, setSnackBar] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const tableRows = ["Name", "Actions"];
  const data = useSelector((state) => state.courses);
  const loading = useSelector((state) => state.ui.loading);
  const open = useSelector((state) => state.ui.openModal);
  const error = useSelector((state) => state.ui.error);

  const openModalAdd = () => {
    dispatch(openModal());
    setTitleModal("Add new course");
    setContentModal(<FormCourse setSnackBar={setSnackBar} />);
  };

  const openModalEdit = (course) => {
    dispatch(openModal());
    setTitleModal(`Edit ${course.name}`);
    setContentModal(<FormCourse setSnackBar={setSnackBar} course={course} />);
  };

  const openModalDetail = (course) => {
    dispatch(openModal());
    setTitleModal(`Detail ${course.name}`);
    setContentModal(<DetailCourse course={course} />);
  };

  if (error) return <Error error={error} />;

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Courses
      </Typography>
      {loading ? (
        <Grid item xs={12} sm={12} lg={12}>
          <Loader />
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
                type="courses"
              />
            ) : (
              <Typography className={classes.info} align="center">
                There is not courses registered yet
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

export default Courses;
