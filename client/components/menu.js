var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');

var Menu = React.createClass({
    startSession: function(event) {
        event.preventDefault();
        //Temporary parameter declaration until I figure out those radio buttons
        var category = "hands";
        var timer = 30;
        console.log("start session");
        this.props.dispatch(actions.startSession(category, timer));
        this.props.dispatch(actions.fetchImages());
    },

    endSession: function(event) {
        event.preventDefault();
        console.log("end session")
        this.props.dispatch(actions.endSession());
    },

    nextImage: function(event) {
        event.preventDefault();
        console.log("next image")
        this.props.dispatch(actions.nextImage());
        this.props.dispatch(actions.fetchImages());
    },

    previousImage: function(event) {
        event.preventDefault();
        console.log("previous image")
        this.props.dispatch(actions.previousImage());
        this.props.dispatch(actions.fetchImages());
    },



//Displays either the session options select (what category, what time length) or
//the session controls (next image, previous image, stop, pause) depending
//whether the "sessionOn" part of the redux state is true or false.

    panel: function(e) {
      if (this.props.sessionOn == false) {
                return (
            <form name="settings" onSubmit={this.startSession}>
            <span>What would you like to draw?</span>
            <div className="category">
              <label>
              <input type="radio" value="hands" name="category" ref="category" />
              Hands
              </label>
              </div>
              <div className="radio">
              <label>
              <input type="radio" value="heads" name="category" ref="category" />
              Heads
              </label>
              </div>
              <div className="radio">
              <label>
              <input type="radio" value="torsos" name="category" ref="category" />
              Torsos
              </label>
              </div>

              <span>For how long should each image stay?</span>
              <div className="timer">
                <label>
                <input type="radio" name="timer" value="30" />
                30 Seconds
                </label>
                </div>
                <div className="radio">
                <label>
                <input type="radio" name="timer" value="60" />
                1 Minute
                </label>
                </div>
                <div className="radio">
                <label>
                <input type="radio" name="timer" value="120" />
                2 Minutes
                </label>
                </div>
                <input type="submit" id="inputButton" name="submit" value="Begin"/>
            </form>
        );

      }
      else {
        return (
          <div className="controls">
          <input type="button" name="previous" value="Previous Image" onClick={this.previousImage} />
          <input type="button" name="pause" value="Pause Timer"/>
          <input type="button" name="next" value="Next Image" onClick={this.nextImage} />
          <input type="button" name="end" value="End Session" onClick={this.endSession} />
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
