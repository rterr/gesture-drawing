var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');
var SimpleSlider = require('./slider');

var Display = React.createClass({
	// componentDidMount: function() {
	// this.props.dispatch(actions.fetchImages());
  // },

	render: function() {
    if (this.props.sessionOn == true) {
      return(
        <div>
    			<SimpleSlider />
    		</div>
      )
    }
    return(
      <div>
        Select your options!
      </div>
    )
  }
});

var mapStateToProps = function(state, props) {
    return {
      sessionOn: state.sessionOn,
      imgUrl: state.imgUrl
    };
};

var Container = connect(mapStateToProps)(Display);

module.exports = Container;
