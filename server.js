// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
	
app.get('/suggest', function homepage (req, res) {
  res.sendFile(__dirname + '/views/suggest.html');
});

/* API Endpoint */

app.get('/api/stations', function stationsIndex(req, res) {
  db.Station.find({}, function(err, stations) {
    res.json(stations);
  });
});

app.get('/api/suggest', function suggestIndex(req, res) {
  db.Suggest.find({}, function(err, suggest) {
    // console.log(suggest);
    res.json(suggest);
  });
});

app.post('/api/suggest', function suggestCreate(req, res) {
  console.log("Create New Data");
  console.log('body', req.body);
  db.Suggest.create(req.body, function(err, suggest) {
    if (err) { console.log('error', err); }
    console.log(suggest);
    res.json(suggest);
  });

});

app.delete('/api/suggest/:id', function suggestIndex(req, res) {
	console.log('deleting id:', req.params.id);
	db.Suggest.remove({_id: req.params.id}, function(err, suggestion) {
		if (err) {console.log('error', err); }
		console.log('suggestion deleted: ' , req.params.id , suggestion.suggestStation);
		res.status(200).send();
	});
});


// app.listen(process.env.PORT || 3000)
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});