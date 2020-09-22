import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

export default class SearchBar extends Component {
  state = {
    text: "",
  };

  handleSubmit = () => console.log(this.state.text);

  handleInputChange = (ev) => {
    this.setState({ text: ev.target.value });
  };

  render() {
    return (
      <div className="search-box">
        <div className="input-field">
          <TextField
            label="Filter"
            onChange={this.handleInputChange}
            fullWidth
          />
        </div>
        <div className="filter-button">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Filter
          </Button>
        </div>
      </div>
    );
  }
}
