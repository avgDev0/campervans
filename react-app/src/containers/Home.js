import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchResults from "../components/SearchResults";
import { getRentals } from "../api/requests";

export default function () {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    setRentals(getRentals());
  });

  return (
    <Grid container className="container" spacing={1} direction="column">
      <SearchBar />
      <SearchResults rentals={rentals} />
      <LoadMoreButton />
    </Grid>
  );
}
