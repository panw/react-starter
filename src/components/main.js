import React from 'react';
import $ from 'jquery';
window.jQuery = $;
window.Tether = require('tether');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
    this.setSearchResults = (results) => this._setSearchResults(results);
  }
  componentDidMount() {
  }
  _setSearchResults(results) {
    this.setState({searchResults: results});
  }
  render() {
    let {searchResults} = this.state;
    return (
      <div>
        I work!
      </div>
    );
  }
}
