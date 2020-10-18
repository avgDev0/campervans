import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const SearchResults = ({ rentals }) => {
  return (
    <Grid className="search-results" container spacing={1} wrap="wrap">
      {[...Array(20)].map((a, i) => (
        <Grid className="result-item" item xs={12} md={3}>
          {`Testing ${i}`}
        </Grid>
      ))}
    </Grid>
  );
};

SearchResults.propTypes = {
  rentals: PropTypes.array.isRequired,
};

export default SearchResults;
/**
 * for specifics:
 *  relations contains a list of images relationships, we need to relate those ids + types with the included property of the payload
 *    from there, we'll obtain access to rental images and owner data (avatar_url and bussiness_name)
 */
