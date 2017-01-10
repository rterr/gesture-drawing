var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');


//endTime shows timer in console + can be used to create countdown display*
var endTime;
var timerId = 0;

var isPaused = false;


var Menu = React.createClass({

    getInitialState: function() {
      return {
        category: "hands",
        timer: 30
      };
    },

    categoryChanged: function(e) {
      this.setState({
        category: e.currentTarget.value
      });
      console.log('category state', this.state.category);
    },

    timerChanged: function(e) {
      this.setState({
        timer: e.currentTarget.value
      });
      console.log('timer state', this.state.timer);
    },

    startSession: function(event) {
      console.log('actions menu', this.props);
        event.preventDefault();
        console.log("start session");


        this.props.dispatch(actions.startSession(this.state.category, this.state.timer));
        this.props.dispatch(actions.fetchImages());

        var that = this;

        function startTimer(duration) {
        var timer = duration, minutes, seconds;
        timerId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        endTime = minutes + ":" + seconds;
         console.log('endTime', endTime);

        if(isPaused) {
        timer++;
        }

        if (--timer < 0) {
      console.log('that + fetch', that, that.props);
         that.props.dispatch(actions.nextImage());
         that.props.dispatch(actions.fetchImages());

            timer = duration;

        }

    }, 1000);
}
    startTimer(this.state.timer);
    },

    endSession: function(event) {
        event.preventDefault();
        console.log("end session")
        this.props.dispatch(actions.endSession());
        clearInterval(timerId);
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

    pauseTimer: function(event) {
        event.preventDefault();
        this.props.dispatch(actions.togglePause());
        console.log('paused timer');
        isPaused = true;
    },

    resumeTimer: function(event) {
        event.preventDefault();
        this.props.dispatch(actions.togglePause());
        console.log('resumed timer');
        isPaused = false;
    },

    panel: function(e) {

      if (this.props.sessionOn == false) {
                return (
          <div className="menu">
            <form name="settings" onSubmit={this.startSession}>
            <div className="category">
            <p>What would you like to draw?</p>
              <div className="radio">
              <label>
              <input type="radio" value="hands" name="category" ref="category" onChange={this.categoryChanged} />
              Hands
              </label>
              </div>
              <div className="radio">
              <label>
              <input type="radio" value="heads" name="category" ref="category" onChange={this.categoryChanged} />
              Heads
              </label>
              </div>
              <div className="radio">
              <label>
              <input type="radio" value="torsos" name="category" ref="category" onChange={this.categoryChanged} />
              Torsos
              </label>
              </div>
            </div>

              <div className="timer">
              <p>For how long should each image stay?</p>
                <div className="radio">
                <label>
                <input type="radio" name="timer" value="30" onChange={this.timerChanged} />
                30 Seconds
                </label>
                </div>
                <div className="radio">
                <label>
                <input type="radio" name="timer" value="60" onChange={this.timerChanged} />
                1 Minute
                </label>
                </div>
                <div className="radio">
                <label>
                <input type="radio" name="timer" value="120" onChange={this.timerChanged} />
                2 Minutes
                </label>
                </div>
                </div>
              <div className="submit-button">
              <input type="submit" id="inputButton" name="submit" value="Begin"/>
              </div>
            </form>
            </div>
        );

      }
      else {
        return (
          <div className="controls">
          <input type="button" name="previous" value="Previous Image" onClick={this.previousImage} />&nbsp;
          {this.props.pause == false ? <input type="button" name="pause" value="Pause Timer" onClick={this.pauseTimer} /> : <input type="button" name="resume" id="resume" value="Resume Timer" onClick={this.resumeTimer} />}&nbsp;
          <input type="button" name="next" value="Next Image" onClick={this.nextImage} />&nbsp;
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
      sessionOn: state.sessionOn,
      imgUrl: state.imgUrl,
      pause: state.pause
    };
};

var Container = connect(mapStateToProps)(Menu);

module.exports = Container;
