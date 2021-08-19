import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

const DashboardApp = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
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
