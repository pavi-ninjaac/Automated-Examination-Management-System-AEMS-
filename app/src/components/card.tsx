import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

function Card(props: any) {
  return (
    <div>
      <Paper elevation={3} style={props.style}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6} sm={8}>
            <Typography variant="h5" component="h3">
              {props.name}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography variant="h3" component="p" align='right'>
              {props.no}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Card;
