import React from "react";
import SearchBar from "../components/SearchBar";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchResults from "../components/SearchResults";
import { Grid } from "@material-ui/core";

export default function () {
  return (
    <Grid container className="container" spacing={1} direction="column">
      <SearchBar />
      <SearchResults />
      <LoadMoreButton />
    </Grid>
  );
}
