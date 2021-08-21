import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const DashboardApp = () => {
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
