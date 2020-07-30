import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';
import CenterContainer from './containers/CenterContainer';

import ProtectedRoute from './routers/ProtectedRoute';
import AuthRoute from './routers/AuthRoute';

/* Pages */
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Application from './pages/client/Registration/Registration';

import Page404 from './pages/errors/404';

function Loading() {
  return (
    <CenterContainer>
      <CircularProgress size={45} />
    </CenterContainer>
  );
}

function AppController() {
  const [auth, setAuth] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // setAuth(!!window.localStorage.getItem('stetUser'));
    setLoad(false);
  }, []);

  function AppRouter() {
    return (
      <Router>
        <Switch>
          <AuthRoute path='/auth/signin' exact authenticated={auth} component={SignIn} />
          <AuthRoute path='/auth/signup' exact authenticated={auth} component={SignUp} />

          <Route path='/reg' exact component={Application} />

          <ProtectedRoute path='/registration' exact component={Application} />

          <Route path='*' component={Page404} />
        </Switch>
      </Router>
    );
  }

  return (
    <Fragment>
      {load ? <Loading /> : <AppRouter />}
    </Fragment>
  );
}

export default AppController;
