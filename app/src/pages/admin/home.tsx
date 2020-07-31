import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography } from "@material-ui/core";

import Card from "../../components/card";
import Table from "../../components/table";

import AdminFunctions from '../../tools/functions/applications';

export default function AdminPage() {
  const [applications, setApplications] = useState({});

  useEffect(() => {
    AdminFunctions.getAll().then((apps) => {
      console.log(apps); setApplications(apps)
    }).catch(err => console.log(err));
  }, [])

  return (
    <React.Fragment>
      <Container>
        <Typography variant='h2' component='h1'>
          STET Admin
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              no={12}
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
              no={12}
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
              no={12}
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
            <Button variant="contained" color="primary">
              Button 2
          </Button>
          </Grid>
        </Grid>
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h5" component="p" style={{ marginBottom: "1rem" }}>
            User Details
        </Typography>
          <Table />
        </div>
      </Container>
    </React.Fragment>
  );
}
