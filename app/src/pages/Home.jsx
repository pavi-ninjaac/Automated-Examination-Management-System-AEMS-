import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import illus from "../assets/images/professor.svg";

export default function homepage() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant='h2' component='h1' align='center'>TETOHA</Typography>
        <Grid container spacing={3} justify={"center"}>
          <Grid item style={{ textAlign: 'center' }} xs={12}>
            <img
              src={illus}
              style={{ maxWidth: "80%", maxHeight: '55vh', margin: "auto", objectFit: "cover" }}
              alt="illustration"
            />
          </Grid>
          <Grid item style={{ textAlign: 'center' }} xs={6}>
            <Link to='/auth/signin'>
              <Button variant="outlined" color="primary">
                Sign In
              </Button>
            </Link>
          </Grid>
          <Grid item style={{ textAlign: 'center' }} xs={6}>
            <Link to='/auth/signup'>
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid item style={{ textAlign: 'center' }} xs={4}>
            <Link to='/registration'>
              <Button variant="contained" color="secondary" size="large" fullWidth>
                Register
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
