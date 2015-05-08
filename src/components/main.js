'use strict';

var MappingLabletApp = require('./MappingLabletApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={MappingLabletApp}>
    <Route name="/" handler={MappingLabletApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
