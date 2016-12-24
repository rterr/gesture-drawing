var actions = require('./actions');

var initialState = {
  sessionOn: false,
  category: null,
  timer: null,
  imgUrl: null
}

//sessionImages = array of IDs of images to be used in the session
var sessionImages = [];
var imgCounter = 0;


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
    console.log('test', imgCounter);
    state = Object.assign({}, state, {
        category: action.category,
        timer: action.timer,
				sessionOn: true
      });

    return state;
  }
  else if (action.type == actions.END_SESSION){
    console.log("end_session action")
    state = Object.assign({}, state, initialState);
  }

  else if (action.type == actions.NEXT_IMAGE) {
    console.log("next_image action")
    console.log(imgCounter)
    console.log(sessionImages.length)


    //reset imgCounter so the images keep scrolling
    if (imgCounter >= 4) {
      imgCounter = -1;
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
    return state;
  }

  return state;
}

module.exports = reducer;
