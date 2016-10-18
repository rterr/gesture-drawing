var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');

var Menu = React.createClass({
    startSession: function(event) {
        event.preventDefault();
        var category = this.refs.input.value;
        var timer =
        console.log("submitted")
        this.props.dispatch(actions.fetchImages());
        this.props.dispatch(actions.startSession(category, timer));
    },

    endSession: function(event) {
        event.preventDefault();
        console.log("submitted")
        this.props.dispatch(actions.endSession());
    },

    panel: function(e) {
      if (this.props.sessionOn == false) {
                return (
            <form onSubmit={this.startSession}>
            <span>What would you like to draw?</span>
            <div className="category">
              <label>
              <input type="radio" value="option1" />
              Hands
              </label>
              </div>
              <div className="radio">
              <label>
              <input type="radio" value="option2" />
              Heads
              </label>
              </div>
              <div className="radio">
              <label>
              <input type="radio" value="option3" />
              Torsos
              </label>
              </div>

              <span>For how long should each image stay?</span>
              <div className="category">
                <label>
                <input type="radio" value="option1" />
                30 Seconds
                </label>
                </div>
                <div className="radio">
                <label>
                <input type="radio" value="option2" />
                1 Minute
                </label>
                </div>
                <div className="radio">
                <label>
                <input type="radio" value="option3" />
                2 Minutes
                </label>
                </div>
                <input type="submit" id="inputButton" className="button btn btn-primary" name="submit" value="Begin"/>
            </form>

        );

      }
      else {
        return (
          <div>
          <h1>Session Completed</h1>
            <form onSubmit={this.newSession}>
             <input type="submit" id="newSessionButton" className="button btn btn-primary" name="newSession" value="New Session"/>
            </form>
          </div>
        )
      }
    },



    render: function() {
        return (
            <div>{this.panel()}</div>
        );
    }

});


var mapStateToProps = function(state) {
    return {
      sessionOn: state.sessionOn
    };
};

var Container = connect(mapStateToProps)(Menu);

module.exports = Container;
