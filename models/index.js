var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bikeshare_test");
// var Comment = require('./comments');
var Station = require('./station');
// var suggestStation = require('./suggest_station');

// module.exports.Comment = Comment;
module.exports.Station = Station;
