import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchResults from "../components/SearchResults";

export default function () {
  return (
    <Grid container className="container" spacing={1} direction="column">
      <SearchBar />
      <SearchResults />
      <LoadMoreButton />
    </Grid>
  );
}
