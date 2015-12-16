var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bikeshare_test");
var Comment = require('./comments');
var Station = require('./station');
var Suggest = require('./suggest');

module.exports.Comment = Comment;
module.exports.Station = Station;
module.exports.Suggest = Suggest;
