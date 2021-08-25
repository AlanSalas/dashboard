import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/ui";
import { Container, Modal as ModalUi, Typography } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import useStyles from "./style";

const Modal = ({ open, title, children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <ModalUi
      className={classes.modal}
      open={open}
      onClose={() => dispatch(closeModal())}
    >
      <Fade in={open}>
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
