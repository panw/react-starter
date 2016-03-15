import React from 'react';
import $ from 'jquery';
import SearchInput from './search_input';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
    this.setSearchResults = (results) => this._setSearchResults(results);
  }
  _setSearchResults(results) {
    this.setState({searchResults: results});
  }
  render() {
    let {searchResults} = this.state;
    return (
      <div>
        <SearchInput
          setResults={this.setSearchResults}
        />

        <ul>
        {searchResults.map((result, i) => {
          return <li key={i}><img src={result.artworkUrl30}/></li>
        })}
        </ul>
      </div>
    );
  }
}
