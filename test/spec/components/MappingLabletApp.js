'use strict';

describe('MappingLabletApp', function () {
  var React = require('react/addons');
  var MappingLabletApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MappingLabletApp = require('components/MappingLabletApp.js');
    component = React.createElement(MappingLabletApp);
  });

  it('should create a new instance of MappingLabletApp', function () {
    expect(component).toBeDefined();
  });
});
