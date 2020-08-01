import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (RouteProps: any) => {
  const { component: Component, authenticated: isAuth, isVerified, ...rest } = RouteProps;
  return (
    <Route
      {...rest}
      render={(props) =>
        (isAuth && isVerified) ? <Component {...props} /> :
          (isAuth && !isVerified) ? <Redirect to="/auth/verify" /> :
            <Redirect to='/auth/signin' />
      }
    />
  );
}

export default ProtectedRoute;
