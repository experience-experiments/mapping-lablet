'use strict';
(function(){

var React = require('react/addons');
var MapView = require('./MapView.js');

// CSS
require('../styles/main.css');

var logoURL = require('../images/rma.png');

var MappingLabletApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <img className='logo' src={logoURL} />
        <MapView lat='51.5' lon='-0.1' defaultZoom='13'/>
      </div>
    );
  }
});

module.exports = MappingLabletApp;

})();
