var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  userName: String,
  commentType: String, // roadCondition or bikeLane or bikeShop, or otehr
  userComment: String, // their comment about the above selection,
  stationId: Number
  // date: String // convert current date to a string
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;