import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

function Card(props) {
  return (
    <div>
      <Paper elevation={3} style={props.style}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" component="h2">
              {props.name}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h3" component="p">
              {props.no}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Card;
