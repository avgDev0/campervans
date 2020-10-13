import React from "react";
import { Grid, Button } from "@material-ui/core";

export default () => {
  return (
    <Grid container className="load-more" justify="center" alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Load clik")}
        >
          Load More
        </Button>
      </Grid>
    </Grid>
  );
};
