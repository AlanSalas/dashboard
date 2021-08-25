import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@material-ui/core";
import InfoCard from "../components/InfoCard";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  const courses = useSelector((state) => state.courses);
  const lessons = useSelector((state) => state.lessons);
  const ads = useSelector((state) => state.ads);
  const students = useSelector((state) => state.students);
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
          <InfoCard
            color={colors.courses}
            title="Courses"
            total={courses.length}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard
            color={colors.lessons}
            title="Lessons"
            total={lessons.length}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard color={colors.ads} title="Ads" total={ads.length} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <InfoCard
            color={colors.students}
            title="Students"
            total={students.length}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
