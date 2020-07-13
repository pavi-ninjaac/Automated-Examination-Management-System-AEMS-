import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (RouteProps: any) => {
  const { component: Component, authenticated: isAuth, ...rest } = RouteProps;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;
