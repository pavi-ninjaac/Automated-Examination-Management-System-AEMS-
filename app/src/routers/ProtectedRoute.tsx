import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Verify from '../pages/auth/Verify';

const ProtectedRoute = (RouteProps: any) => {
  const { component: Component, authenticated: isAuth, verified, ...rest } = RouteProps;
  if (Component === Verify) {
    console.log('verify', verified);

    return <Verify />
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        (isAuth && verified) ? <Component {...props} /> :
          (isAuth && !verified) ? <Redirect to="/auth/verify" /> :
            <Redirect to='/auth/signin' />
      }
    />
  );
}

export default ProtectedRoute;
