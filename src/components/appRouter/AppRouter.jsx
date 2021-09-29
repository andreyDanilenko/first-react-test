import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../../router/routes";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(route =>
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      )}
    </Switch>
  )
}

export default AppRouter;