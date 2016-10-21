require('isomorphic-fetch');

var FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
var fetchImagesSuccess = function(images) {
    return {
        type: FETCH_IMAGES_SUCCESS,
        images: images

    };
};

var FETCH_IMAGES_ERROR= 'FETCH_IMAGES_ERROR';
var fetchImagesError = function(error) {
    return {
        type: FETCH_IMAGES_ERROR,
        error: error
    };
};

var START_SESSION = 'START_SESSION';
var startSession = function(category, timer) {
    return {
        type: START_SESSION,
        category: category,
        timer: timer
    };
};

var END_SESSION = 'END_SESSION';
var endSession = function() {
    return {
        type: END_SESSION
    };
};

var NEXT_IMAGE = 'NEXT_IMAGE';
var nextImage = function(){
  return {
    type: NEXT_IMAGE
  }
}

var PREVIOUS_IMAGE = 'PREVIOUS_IMAGE';
var previousImage = function() {
  return {
    type: PREVIOUS_IMAGE
  }
}

var TOGGLE_PAUSE = 'TOGGLE_PAUSE';
var togglePause = function(){
  return {
    type: TOGGLE_PAUSE
  }
}


var fetchImages = function() {
   return function(dispatch) {
       var url = 'http://localhost:8080/images';

       return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })

       .then(function(data) {
               console.log("IMG DATA", data);
           return dispatch(
               fetchImagesSuccess(data)
           );
       })
       .catch(function(error) {
           return dispatch(
               fetchImagesError(error)
           );
       });
   }
};

exports.FETCH_IMAGES_SUCCESS = FETCH_IMAGES_SUCCESS;
exports.fetchImagesSuccess = fetchImagesSuccess;
exports.FETCH_IMAGES_ERROR = FETCH_IMAGES_ERROR;
exports.fetchImagesError = fetchImagesError;

exports.START_SESSION = START_SESSION;
exports.startSession = startSession;
exports.END_SESSION = END_SESSION;
exports.endSession = endSession;
exports.NEXT_IMAGE = NEXT_IMAGE;
exports.nextImage = nextImage;
exports.PREVIOUS_IMAGE = PREVIOUS_IMAGE;
exports.previousImage = previousImage;
exports.TOGGLE_PAUSE = TOGGLE_PAUSE;
exports.togglePause = exports.togglePause;

exports.fetchImages = fetchImages;
