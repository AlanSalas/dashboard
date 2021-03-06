import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCourses } from "./redux/actions/courses";
import { getAllLessons } from "./redux/actions/lessons";
import { getAllAds } from "./redux/actions/ads";
import { getAllStudents } from "./redux/actions/students";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const DashboardApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getAllLessons());
    dispatch(getAllAds());
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component routes={route.routes} {...props} />}
  />
);

export default DashboardApp;
