import React, { Component } from 'react';

import './seach-panel.css';

class SearchPanel extends Component {
  inputChange = (e) => {
    this.props.onFilter(e.target.value);
  }
  render(){
    return (
      <input type="text"
            className="form-control search-input"
            placeholder="type to search"
            onChange={this.inputChange} />
    );
  }
};

export default SearchPanel;