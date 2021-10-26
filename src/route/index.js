/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  Dashboard
} from "../pages";

const history = createBrowserHistory({
  /* pass a configuration object here if needed */
});

const publicRoutes = [
  {
    path: "/",
    component: Dashboard,
  },
];

const privateRoutes = [
  
]

const AppRouter = (props) => {

  return (
    <Router history={history}>
      {/* <Suspense> */}

      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={ route.component }
          />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
