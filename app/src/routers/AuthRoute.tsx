import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthRoute = (RouteProps: any) => {
  const { component: Component, authenticated: isAuth, ...rest } = RouteProps;
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default AuthRoute;
