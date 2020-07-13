import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthRouter = (RouteProps: any) => {
  const { component: Component, authenticated: isAuth, ...rest } = RouteProps;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default AuthRouter;
