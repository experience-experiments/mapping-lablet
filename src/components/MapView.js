'use strict';

var React = require('react/addons');
var Leaflet = require('react-leaflet');

var Map = Leaflet.Map;
var TileLayer = Leaflet.TileLayer;


var TheMap = React.createClass({

	getInitialState: function(){
		return {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
	},

  render: function() {
  	var position = [this.state.lat, this.state.lng];
    return (
     	<Map center={position} zoom={this.state.zoom}>
	      <TileLayer
	        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
	        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'/>
	    </Map>
    );
  }
});

module.exports = TheMap;
