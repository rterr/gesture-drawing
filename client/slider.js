var React = require('react');
var Slider = require('react-slick');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');

var endTime;

var SimpleSlider = React.createClass({
// var thirtySec = this.props.timer;
// var oneMin = this.props.timer;
// var twoMin = this.props.timer;

  componentWillMount: function() {
 var countdown = this.props.timer / 1000;
 console.log('countdown', countdown);
 this.startTimer(countdown);

},

startTimer: function(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        endTime = minutes + ":" + seconds;
         console.log('endTime', endTime);
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
},
//run condition when endTime hits 00:00 run next slide action
//or run it through the reducers



  render: function () {
    var imageStyle= {
      height: 200,
      width: 400
    }
    var settings = {
      // dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: this.props.timer
    }
     console.log('endTime', endTime);
    console.log('img', this.props.imgUrl);
        console.log('timer', this.props.timer);
    return (
      <div style={imageStyle}>
      <Slider {...settings}>
  
           <img src={this.props.imgUrl} /> 
    
          
  
    
      </Slider>
      </div>
    );
  }
});


var mapStateToProps = function(state, props) {
    return {
      sessionOn: state.sessionOn,
      imgUrl: state.imgUrl,
      timer: state.timer
    };
};

var Container = connect(mapStateToProps)(SimpleSlider);

module.exports = Container;
