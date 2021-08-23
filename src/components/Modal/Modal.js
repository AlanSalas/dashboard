import { Container, Modal as ModalUi, Typography } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import useStyles from "./style";

const Modal = ({ openModal, handleOpenModal, title, children }) => {
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
            {title}
          </Typography>
          {children}
        </Container>
      </Fade>
    </ModalUi>
  );
};

export default Modal;
