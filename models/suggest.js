//Suggestion Model

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SuggestSchema = new Schema({
  userName: String,
  suggestStation: String, //
  latitude: Number, // always be a positive 
  longitude: Number, // always be a negative   
  city: String,
  whyComment: String, // their comment about the above selection
  date: String, // convert current date to a string
});

var Suggest = mongoose.model('Suggest', SuggestSchema);

module.exports = Suggest;