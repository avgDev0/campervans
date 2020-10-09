import React, { Fragment } from "react";
import SearchBar from "../../components/SearchBar";
import { Grid } from "@material-ui/core";

export default function () {
  return (
    <Grid container className="container" spacing={1} direction="column">
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}
