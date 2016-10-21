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
    			<img src={this.props.imgUrl} />
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
      imgUrl: state.imgUrl,
      nextTime: state.nextTime
    };
};

var Container = connect(mapStateToProps)(Display);

module.exports = Container;
