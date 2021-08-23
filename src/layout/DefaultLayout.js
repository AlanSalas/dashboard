import { useState } from "react";
import { Grid } from "@material-ui/core";
import LoadRoute from "../components/LoadRoute";
import NavBar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./styles";

const DefaultLayout = ({ routes }) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container className={classes.container}>
        <Grid item xs={2} sm={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sm={10} className={classes.content}>
          <LoadRoute
            routes={routes}
            openModal={openModal}
            handleOpenModal={handleOpenModal}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DefaultLayout;
