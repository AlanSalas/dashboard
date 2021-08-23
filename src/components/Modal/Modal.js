import {
  Container,
  Grid,
  Modal as ModalUi,
  Typography,
} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import useStyles from "./style";

const Modal = ({ openModal, handleOpenModal, children }) => {
  const classes = useStyles();

  return (
    <ModalUi
      className={classes.modal}
      open={openModal}
      onClose={handleOpenModal}
    >
      <Fade in={openModal}>
        <Container className={classes.content}>
          <Typography className={classes.title} variant="h6">
            Title
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </ModalUi>
  );
};

export default Modal;
