import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Grid,
  Tooltip,
  Fab,
  CircularProgress,
  Box,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Table from "../components/Table";
import Modal from "../components/Modal";
import FormCourse from "../components/Forms/FormCourse";
import useStyles from "./style";

const Courses = ({ openModal, handleOpenModal }) => {
  const classes = useStyles();
  const tableRows = ["Name", "Actions"];
  const data = useSelector((state) => state.courses);
  const loading = useSelector((state) => state.ui.loading);

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
        title="Add new Course"
      >
        <FormCourse />
      </Modal>
    </Container>
  );
};

export default Courses;
