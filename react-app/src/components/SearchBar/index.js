import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";

export default () => {
  const [filters, setFilters] = useState("");

  const handleFilterClick = () => console.log(filters);

  const handleInputChange = ({ target: { value } }) => setFilters(value);

  return (
    <Grid container className="search-box" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4">Campervans</Typography>
      </Grid>
      <Grid
        item
        xs={9}
        md={4}
        className="input-field"
        style={{ alignSelf: "end" }}
      >
        <TextField label="Filter" onChange={handleInputChange} fullWidth />
      </Grid>
      <Grid
        item
        xs={3}
        md={1}
        className="filter-button"
        style={{ alignSelf: "end" }}
      >
        <Button variant="contained" color="primary" onClick={handleFilterClick}>
          Filter
        </Button>
      </Grid>
    </Grid>
  );
};
