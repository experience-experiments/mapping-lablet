'use strict';

var React = require('react/addons');
var TheMap = require('./MapView.js');

// CSS
require('../styles/main.css');

var imageURL = require('../images/rma.png');

var MappingLabletApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <img className='logo' src={imageURL} />
        <TheMap />
      </div>
    );
  }
});

module.exports = MappingLabletApp;
