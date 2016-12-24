var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');

var Display = React.createClass({
	render: function() {
    if (this.props.sessionOn == true) {
      return(
        <div className="display">
    			<img src={this.props.imgUrl} />
    		</div>
      )
    }
    return(
      <div className="display">
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
