var React = require('react');
var Slider = require('react-slick');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions');



var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: this.props.timer
    }
    console.log('img', this.props.imgUrl);
        console.log('timer', this.props.timer);
    return (<div>
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
