import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [newUserResult, setNewUserResult] = useState('waiting');
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: 0,
    password: "",
    cPassword: ""
  } as NewUser);

  const handleChange = (event: any) => {
    const { key, value } = event.target;
    setDetails(prevState => {
      return { ...prevState, [key]: value }
    });
  }

  const submitForm = (submitEvent: any) => {
    submitEvent.preventDefault();
    setNewUserResult('processing');
    setNewUserResult(AuthFunctions.signUp(details));
  }

  return (
    <CenterContainer>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={submitForm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined" id="Name" autoComplete="name"
                  name="name" label="Name"
                  onChange={handleChange}
                  required fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined" id="email" autoComplete="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  fullWidth required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined" size="small" id="mobile" type="tel" autoComplete="phone"
                  label="Mobile Number"
                  name="phone"
                  onChange={handleChange}
                  fullWidth required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined" id="password" type="password" size="small" autoComplete="current-password"
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  required fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined" type="password" size="small" id="cPassword"
                  name="cPassword"
                  label="Confirm Password"
                  onChange={handleChange}
                  required fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="verify" color="primary" />}
                  label="Verify email right now"
                />
              </Grid>
            </Grid>
            <Button type="submit" className={classes.submit}
              variant="contained" color="primary" fullWidth>
              {
                (newUserResult === 'processing') ?
                  <CircularProgress color='secondary' size={20} /> : 'Sign up'
              }
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </CenterContainer>
  );
}
