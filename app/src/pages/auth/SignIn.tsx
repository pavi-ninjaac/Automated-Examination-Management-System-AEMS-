import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import Copyright from '../../components/Copyright';
import AuthFunctions from '../../tools/functions/auth';
import CenterContainer from '../../containers/CenterContainer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  avatarIcon: {
    fontSize: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [authResult, setAuthResult] = useState('no-auth' as AuthResult);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const submitForm = (submitEvent: React.FormEvent) => {
    submitEvent.preventDefault();
    setAuthResult('processing');
    setAuthResult(AuthFunctions.login(credentials));
  }

  const handleChange = (event: any) => {
    const { key, value } = event.target;
    setCredentials(prevState => {
      return { ...prevState, [key]: value }
    });
  }

  return (
    <CenterContainer>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlinedIcon className={classes.avatarIcon} fontSize='large' />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate onSubmit={submitForm}>
            <TextField
              variant="outlined" id="email" autoComplete="email"
              name="email" label="Email Address"
              value={credentials.email}
              onChange={handleChange}
              autoFocus required fullWidth
            />
            <TextField
              variant="outlined" type="password" id="password" autoComplete="password"
              name="password" label="Password"
              value={credentials.password}
              onChange={handleChange}
              fullWidth required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {
                (authResult === 'processing') ? <CircularProgress color='secondary' size={20} /> : 'Sign in'
              }
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/auth/forgot-password">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link to="/auth/signup">
                  Don't have an account? Sign Up
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </CenterContainer>
  );
}
