import React from "react";
import ReactDOM from "react-dom";
import DashboardApp from "./DashboardApp";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <DashboardApp />
  </Provider>,
  root
);
