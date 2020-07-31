import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AdminRoute = (RouteProps: any) => {
  const { component: Component, isAdmin, ...rest } = RouteProps;
  console.log(isAdmin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default AdminRoute;
