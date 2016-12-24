var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var actions = require('./client/actions');
var store = require('./client/store');
var Provider = require('react-redux').Provider;

var Display = require('./client/components/display');
var Menu = require('./client/components/menu');

var App = function() {
    return (
        <div>
        <h1>Gesture Drawing Tool</h1>
        <div id="content">
          <Menu />
          <Display />
        </div>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
});
