import React from 'react';
import $ from 'jquery';

export default class SearchInput extends React.Component {
  constructor() {
    super();
    this.handleSubmit = (e) => this._handleSubmit(e);
  }
  _handleSubmit(e) {
    e.preventDefault();
    let {setResults} = this.props;

    $.ajax({
      url: 'https://itunes.apple.com/search',
      data: {
        term: 'taylor swift'
      },
      dataType: 'jsonp'
    })
    .done((response) => {
      console.log(response);
      setResults(response.results);
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Search for an album'/>
        <input type='submit' value='Search'/>
      </form>
    );
  }
}
