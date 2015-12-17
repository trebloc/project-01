var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                     "mongodb://localhost/bikeshare" )
var Comment = require('./comments');
var Station = require('./station');
var Suggest = require('./suggest');

module.exports.Comment = Comment;
module.exports.Station = Station;
module.exports.Suggest = Suggest;


