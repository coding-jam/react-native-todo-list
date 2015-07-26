'use strict';
var App = require('./src/components/App');

var React = require('react-native');

var ReactNativeTodoList = React.createClass({
  render: function() {
    return (
      <App></App>
    );
  }
});

React.AppRegistry.registerComponent('ReactNativeTodoList', () => ReactNativeTodoList);
