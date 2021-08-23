import { Container, Typography, Grid, Tooltip, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Table from "../components/Table";
import Modal from "../components/Modal";
import useStyles from "./style";

const Ads = ({ openModal, handleOpenModal }) => {
  const classes = useStyles();
  const tableRows = ["Description", "Lesson", "Actions"];
  const data = [
    {
      id: "1",
      description: "This is the ad 1",
      lesson: "Lesson 1",
    },
    {
      id: "2",
      description: "This is the ad 2",
      lesson: "Lesson 3",
    },
    {
      id: "3",
      description: "This is the ad 3",
      lesson: "Lesson 2",
    },
  ];

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Ads
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <Table color="#d1c4e9" tableRows={tableRows} data={data} />
        </Grid>
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
      <Modal openModal={openModal} handleOpenModal={handleOpenModal}>
        <h1>Add Ads</h1>
      </Modal>
    </Container>
  );
};

export default Ads;
