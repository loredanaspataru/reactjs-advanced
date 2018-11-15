import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm); 
  }, 300);

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => {
      // callback that fires after state is updated
      this.doSearch();
    });
  }

  render() {
    return (
      <input
        value={this.state.searchTerm}
        type="search"
        placeholder="Type your search term..."
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;