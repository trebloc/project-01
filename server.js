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

app.get('/api/stations/:stationId/comments', function (req, res) {
  db.Station.findOne({_id: req.params.stationId}, function(err, station) {
		res.json(station.comments);
  });
});

// create comment embedded in stations
app.post('/api/stations/:stationId/comments', function (req, res) {
 // set the value of the station id
 var stationId = req.params.stationId;
 console.log("Station ID is: " + stationId);
 
 // store new comment in memory with data from request body
 var newComment = new db.Comment(req.body);
 // req.body.comment is going to be form data a user filled in for a comment
 console.log("User input the comment: " , newComment)

 // find station in db by id and add new comment
 db.Station.findOne({_id: stationId}, function (err, foundStation) {
   foundStation.comments.push(newComment);
   console.log("Here are the station comments:", foundStation.comments);
   foundStation.save(function (err, savedStation) {
     res.json(newComment);
   });
 });
});

app.delete('/api/stations/:stationId/comments/:id', function commentIndex(req, res) {
  var stationId = req.params.stationId;
  console.log("stationId is: ", stationId);
  var id = req.params.id;
  console.log('deleting id:', req.params.id);

  //TODO 1: find station in db
  db.Station.findOne({_id: stationId}, function(err, station) {
      // TODO 2: remove comment with commentID from station.comments array
      var foundComment = station.comments.id(id);
      foundComment.remove();  
      // TODO 3: save station document
      station.save(function (err, success) {
        console.log ("removed comment");
          // TODO 4; return inside save callback
        res.json (success);
      });

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