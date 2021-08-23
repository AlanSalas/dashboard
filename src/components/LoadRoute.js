import { Route, Switch } from "react-router-dom";

const LoadRoute = ({ routes, openModal, handleOpenModal }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={() => (
            <route.component
              openModal={openModal}
              handleOpenModal={handleOpenModal}
            />
          )}
        />
      ))}
    </Switch>
  );
};

export default LoadRoute;
