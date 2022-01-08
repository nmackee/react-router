import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";

import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* {console.log(url)} */}
            {/* <Route exact path="/page1"> */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
