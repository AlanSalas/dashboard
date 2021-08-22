import { Container, Typography, Grid, Tooltip, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Table from "../components/Table";
import useStyles from "./style";

const Lessons = () => {
  const classes = useStyles();
  const tableRows = ["Name", "Course", "Actions"];
  const data = [
    {
      id: "1",
      name: "Class 1",
      course: "Course 2",
    },
    {
      id: "2",
      name: "Class 2",
      course: "Course 1",
    },
    {
      id: "3",
      name: "Class 3",
      course: "Course 3",
    },
  ];

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Lessons
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
        onClick={() => console.log("Open Modal")}
      >
        <Fab className={classes.add}>
          <Add />
        </Fab>
      </Tooltip>
    </Container>
  );
};

export default Lessons;
