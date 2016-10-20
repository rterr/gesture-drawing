var actions = require('./actions');

var initialState = {
  sessionOn: false,
  category: null,
  timer: null,
  nextTime: null,
  imgUrl: null
}

//sessionImages = array of IDs of images to be used in the session
var sessionImages = [];
var imgCounter = 0;
var endTime;


var startTimer = function(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        endTime = minutes + ":" + seconds;
         console.log('endTime', endTime);
        if (--timer < 0) {
            imgCounter++
            timer = duration;
        }
        console.log('imgCounter in timer', imgCounter);
    }, 1000);
}

var reducer = function(state, action){
  state = state || initialState;
  if(action.type == actions.FETCH_IMAGES_SUCCESS){
    console.log('fetch_image_success action', action.images);
    state = Object.assign({}, state, {
        imgUrl: action.images[sessionImages[imgCounter]].url
      });
    return state;
  }
  else if (action.type === actions.FETCH_IMAGES_ERROR) {
    console.log(action.error);
  }
  else if (action.type == actions.START_SESSION){
    //start timer countdown
    var countdown = action.timer / 1000;
    console.log('reducer countdown', countdown);
    startTimer(countdown);

    console.log('start_session action');
    if (action.category == "hands"){
      sessionImages = [0, 1, 2, 3, 4]
    }
    if (action.category == "heads"){
      sessionImages = [5, 6, 7, 8, 9]
    }
    if (action.category == "torsos"){
      sessionImages = [10, 11, 12, 13, 14]
    }
    state = Object.assign({}, state, {
        category: action.category,
        timer: action.timer,
				sessionOn: true
      });
         // console.log('endTime after function', endTime);
    return state;
  }
  else if (action.type == actions.END_SESSION){
    console.log("end_session action")
    state = Object.assign({}, state, initialState);
  }

//test
else if (action.type == actions.TEST_TIME){
    console.log("test action")
    console.log('endTime after function', endTime);
    state = Object.assign({}, state, {
      nextTime: endTime
    });
    return state
  }

  else if (action.type == actions.NEXT_IMAGE) {
    console.log("next_image action")
    console.log(imgCounter)
    console.log(sessionImages.length)
     // console.log('endTime after function', endTime);


    //added condition to reset imgCounter so the images keep scrolling// Only showing 4/5 images*** (need more fix)
    if (imgCounter >= 4) {
      imgCounter = 0
    }
    if (imgCounter < sessionImages.length - 1) {
      imgCounter++;
    }

  }
  else if (action.type == actions.PREVIOUS_IMAGE) {
    console.log("previous_image action")
    if (imgCounter > 0) {
      imgCounter--;
    }
  }
  else if (action.type == actions.TOGGLE_PAUSE) {

  }

  return state;
}

module.exports = reducer;
