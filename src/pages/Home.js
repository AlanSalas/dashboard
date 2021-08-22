import { Container, Grid, Typography } from "@material-ui/core";
import InfoCard from "../components/InfoCard";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  const colors = {
    courses: "#d1c4e9",
    lessons: "#e1bee7",
    ads: "#b2dfdb",
    students: "#bbdefb",
  };
  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard color={colors.courses} title="Courses" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard color={colors.lessons} title="Lessons" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard color={colors.ads} title="Ads" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard color={colors.students} title="Students" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
