import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';
import CenterContainer from './containers/CenterContainer';

import ProtectedRoute from './routers/ProtectedRoute';
import AuthRoute from './routers/AuthRoute';

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

  const checkAuthentication = () => {
    setAuth(!!window.localStorage.getItem('stet-auth'));
    setLoad(false);
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  function AppRouter() {
    return (
      <Router>
        <Switch>

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
