//Comment Model

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  userName: String, // User Name
  commentType: String, // bikeLane or bikeShop, or other
  userComment: String, // their comment about the above selection,
  stationId: Number // ID attached to the Station that the comment belongs to
  // date: String // convert current date to a string
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;