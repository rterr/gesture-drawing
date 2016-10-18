var actions = require('./actions');

var initialState = {
  sessionOn: false,
  category: null,
  timer: null,
  imgUrl: null
}

var reducer = function(state, action){
  state = state || initialState;
  if(action.type == actions.FETCH_IMAGES_SUCCESS){
    console.log('fetch image success');
    console.log('url thing ' + action.images[0].url);
    state = Object.assign({}, state, {
        imgUrl: action.images[0].url
      });
    return state;
  }
  else if (action.type === actions.FETCH_IMAGES_ERROR) {
    console.log(action.error);
  }
  else if (action.type == actions.START_SESSION){
    state = Object.assign({}, state, {
				sessionOn: true
      });
    return state;
  }
  else if (action.type == actions.END_SESSION){
    state = Object.assign({}, state, {
        sessionOn: false
      });
  }
  return state;
}

module.exports = reducer;
