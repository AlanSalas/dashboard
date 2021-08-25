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
import FormAd from "../components/Forms/FormAd";
import Error from "../components/Error/";
import Loader from "../components/Loader";
import useStyles from "./style";

const Ads = () => {
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const [snackBar, setSnackBar] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const tableRows = ["Description", "Lesson", "Actions"];
  const lessons = useSelector((state) => state.lessons);
  const ads = useSelector((state) => state.ads);
  const loading = useSelector((state) => state.ui.loading);
  const open = useSelector((state) => state.ui.openModal);
  const error = useSelector((state) => state.ui.error);

  const data = ads.map((ad) => {
    return {
      id: ad.id,
      description: ad.description,
      lesson: lessons.find((lesson) =>
        lesson.id === ad.lessonId ? lesson.name : null
      ),
      lessonId: ad.lessonId,
    };
  });

  const openModalAdd = () => {
    dispatch(openModal());
    setTitleModal("Add new ad");
    setContentModal(<FormAd setSnackBar={setSnackBar} />);
  };

  const openModalEdit = (ad) => {
    dispatch(openModal());
    setTitleModal(`Edit ${ad.description}`);
    setContentModal(<FormAd setSnackBar={setSnackBar} ad={ad} />);
  };

  if (error) return <Error error={error} />;

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Ads
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
                type="ads"
              />
            ) : (
              <Typography className={classes.info} align="center">
                There is not ads registered yet
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

export default Ads;
