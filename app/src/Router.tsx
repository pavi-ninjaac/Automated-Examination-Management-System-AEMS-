import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import CenterContainer from './containers/CenterContainer';

import ProtectedRoute from './routers/ProtectedRoute';
import AuthRoute from './routers/AuthRoute';
import AdminRoute from './routers/AdminRoute';

/* Pages */
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import LogOut from './pages/auth/LogOut';
import Application from './pages/client/Registration/Registration';

import AdminHome from './pages/admin/home';

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
  const [isAdmin, setAdmin] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const session = window.localStorage.getItem('stetUser');
    if (!session) { setAuth(false); setAdmin(false); setLoad(false); }
    if (!!session) {
      axios.get('/api/auth/validate-token', {
        headers: { authorization: JSON.parse(window.localStorage.getItem('stetUser') as string).token }
      })
        .then((res) => {
          console.log(res.data);
          setAuth(!!res.data.id);
          if (res.data.type === 'admin') {
            setAdmin(true);
          } else {
            setAdmin(false);
          }
          setLoad(false);
        })
        .catch((err) => {
          setAuth(false);
          setLoad(false);
        });
    }
  }, []);

  function AppRouter() {
    return (
      <Router>
        <Switch>
          <AuthRoute path='/auth/signin' exact authenticated={auth} component={SignIn} />
          <AuthRoute path='/auth/signup' exact authenticated={auth} component={SignUp} />
          <ProtectedRoute path='/auth/logout' exact authenticated={auth} component={LogOut} />

          <AdminRoute path='/admin' exact isAdmin={isAdmin} component={AdminHome} />

          <ProtectedRoute path='/registration' exact authenticated={auth} component={Application} />
          <ProtectedRoute path='/' exact authenticated={auth} component={Application} />

          <Route path='/reg' exact component={Application} />

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
