var express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var app = express();

var images = require('./images');


app.use('/', express.static('build'));

app.get('/images', function(req, res) {
		res.json(images);
	});

app.listen(process.env.PORT || 8080, function () {
console.log("Listening at 8080!");
});
