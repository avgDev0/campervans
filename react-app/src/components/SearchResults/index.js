import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ rentals }) => {
  return <div className="search-results">testing</div>;
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
