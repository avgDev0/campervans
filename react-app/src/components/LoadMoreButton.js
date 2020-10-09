import React from "react";
import { Grid, Button } from "@material-ui/core";

export default () => {
  return (
    <Grid item xs={12} style={{ alignSelf: "end" }}>
      <Grid container justify="center">
        <Grid item xs={8} md={4}>
          Testington
        </Grid>
      </Grid>
    </Grid>
  );
};
