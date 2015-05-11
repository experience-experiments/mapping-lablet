'use strict';
(function(){

var React = require('react/addons');
var Leaflet = require('react-leaflet');

// CSS
require('../../node_modules/leaflet/dist/leaflet.css');

var Map = Leaflet.Map;
var TileLayer = Leaflet.TileLayer;


module.exports = React.createClass({

	getInitialState: function(){
		return {
      lat: this.props.lat,
      lng: this.props.lon,
      zoom: this.props.defaultZoom
    };
	},

  render: function() {
  	var position = [this.state.lat, this.state.lng];
    return (
     	<Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tiles.mapbox.com/v4/rma.d1ede389/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm1hIiwiYSI6IlBmeG5LajgifQ.Wy2W04j0Hn69yf0YeZD6UA"
          attribution="RMA Consulting"
        />
	    </Map>
    );
  }
});

})();
