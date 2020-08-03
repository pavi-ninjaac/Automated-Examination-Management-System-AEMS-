import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Grid, Typography } from "@material-ui/core";

import Card from "../../components/Card";
import Table from "../../components/Table";

import AdminFunctions from '../../tools/functions/applications';

export default function AdminPage() {
  const [applications, setApplications] = useState([]);
  const [verified, setVerified] = useState([]);
  const [unverified, setUnverified] = useState([]);

  useEffect(() => {
    AdminFunctions.getAll().then((apps) => {
      console.log(apps); setApplications(apps);
      setVerified(apps.filter((appl: any) => appl.isVerified));
      setUnverified(apps.filter((appl: any) => !appl.isVerified));
    }).catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Typography variant='h2' component='h1' style={{ marginBottom: '2rem' }}>
          STET Admin
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              no={applications.length}
              name={"Submitted"}
              style={{
                backgroundColor: "dodgerblue",
                color: "white",
                padding: "1.5rem"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              no={verified.length}
              name={"Verified"}
              style={{
                backgroundColor: "#009688",
                color: "white",
                padding: "1.5rem"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              no={unverified.length}
              name={"Unverified"}
              style={{
                backgroundColor: "#ff1744",
                color: "white",
                padding: "1.5rem"
              }}
            />
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={3}>
          <Grid item>
            <Button variant="contained" color="primary">
              Verify
          </Button>
          </Grid>
          <Grid item>
            <Link to='/admin/results'>
              <Button variant="contained" color="primary">
                Results
            </Button>
            </Link>
          </Grid>
        </Grid>
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h5" component="p" style={{ marginBottom: "1rem" }}>
            Verified forms
          </Typography>
          <Table rows={verified} />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h5" component="p" style={{ marginBottom: "1rem" }}>
            Unverified forms
          </Typography>
          <Table rows={unverified} />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h5" component="p" style={{ marginBottom: "1rem" }}>
            Submitted forms
          </Typography>
          <Table rows={applications} />
        </div>
      </Container>
    </React.Fragment>
  );
}
