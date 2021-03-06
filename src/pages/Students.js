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
import FormStudent from "../components/Forms/FormStudent";
import DetailStudent from "../components/Detail/DetailStudent";
import Error from "../components/Error";
import Loader from "../components/Loader";
import useStyles from "./style";

const Students = () => {
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const [snackBar, setSnackBar] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const tableRows = ["Name", "Last Name", "Age", "Actions"];
  const loading = useSelector((state) => state.ui.loading);
  const open = useSelector((state) => state.ui.openModal);
  const error = useSelector((state) => state.ui.error);
  const data = useSelector((state) => state.students);

  const openModalAdd = () => {
    dispatch(openModal());
    setTitleModal("Add new student");
    setContentModal(<FormStudent setSnackBar={setSnackBar} />);
  };

  const openModalEdit = (student) => {
    dispatch(openModal());
    setTitleModal(`Edit ${student.name}`);
    setContentModal(
      <FormStudent setSnackBar={setSnackBar} student={student} />
    );
  };

  const openModalDetail = (student) => {
    dispatch(openModal());
    setTitleModal(`Detail ${student.name}`);
    setContentModal(<DetailStudent student={student} />);
  };

  if (error) return <Error error={error} />;

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Students
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
                type="students"
              />
            ) : (
              <Typography className={classes.info} align="center">
                There is not students registered yet
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

export default Students;
