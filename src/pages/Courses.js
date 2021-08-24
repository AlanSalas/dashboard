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
import FormCourse from "../components/Forms/FormCourse";
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

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Courses
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
            <Table
              tableRows={tableRows}
              data={data}
              openModalEdit={openModalEdit}
              type="courses"
            />
          </Grid>
        )}
      </Grid>
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
