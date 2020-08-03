import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from 'axios';

import { CircularProgress, Fab } from '@material-ui/core';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import CenterContainer from './containers/CenterContainer';

import ProtectedRoute from './routers/ProtectedRoute';
import AuthRoute from './routers/AuthRoute';
import AdminRoute from './routers/AdminRoute';

/* Pages */
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import LogOut from './pages/auth/LogOut';
import Verify from './pages/auth/Verify';

import SignedInNavBar from "./components/SignedInNavBar";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';

import Materials from "./pages/Materials";
import ResultView from './pages/ResultView';
import Home from './pages/Home';

import Registration from './pages/client/Registration/Registration';

import AdminHome from './pages/admin/AdminHome';
import Result from './pages/admin/Result';

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
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const session = window.localStorage.getItem('stetUser');
    if (!session) { setAuth(false); setAdmin(false); setLoad(false); }
    if (!!session) {
      axios.get('/api/auth/validate-token', {
        headers: { authorization: JSON.parse(session).token }
      })
        .then((res) => {
          console.log(res.data);
          setVerified(res.data.isVerified);
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
        {!load && (!auth ? <SignedInNavBar /> : <NavBar />)}
        <Switch>
          <AuthRoute path='/auth/signin' exact authenticated={auth} component={SignIn} />
          <AuthRoute path='/auth/signup' exact authenticated={auth} component={SignUp} />
          <Route path='/auth/logout' exact verified={verified} authenticated={auth} component={LogOut} />

          <AdminRoute path='/admin' exact isAdmin={isAdmin} component={AdminHome} />
          <AdminRoute path='/admin/results' exact isAdmin={isAdmin} component={Result} />

          <ProtectedRoute path='/registration' exact verified={verified} authenticated={auth} component={Registration} />
          <ProtectedRoute path='/auth/verify' exact verified={verified} authenticated={auth} component={Verify} />

          <Route path='/' exact component={Home} />
          <Route path='/materials' exact component={Materials} />
          <Route path='/results' exact component={ResultView} />
          <Route path='*' component={Page404} />
        </Switch>
      </Router>
    );
  }

  return (
    <Fragment>
      {load ?
        <CenterContainer>
          <Loading />
        </CenterContainer>
        :
        <>
          <AppRouter />

          <Fab color="primary" aria-label="add" style={{ position: 'fixed', right: '3rem', bottom: '3rem' }} onClick={() => { window.open('https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=545c0a11-e926-4871-9dbe-d8d9bd0c520b&serviceInstanceID=5b16323a-7f43-4f60-8f3d-47d0c2a43fa2', '_blank') }}>
            <ForumOutlinedIcon />
          </Fab>

          <Footer />
        </>
      }
    </Fragment>
  );
}

export default AppController;
