var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StationSuggestionSchema = new Schema({
  userName: String,
  suggestStation: String, //
  latitude: Number, // always be a positive 
  longitude: Number, // always be a negative   
  whyComment: String, // their comment about the above selection
  date: String // convert current date to a string
});

var NewStation = mongoose.model('SugStation', StationSuggestionSchema);

module.exports = NewStation;