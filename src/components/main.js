import React from 'react';
import $ from 'jquery';
window.jQuery = $;
window.Tether = require('tether');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        I work!
      </div>
    );
  }
}
