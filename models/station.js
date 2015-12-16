var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Comment = require('./comments');

var StationSchema = new Schema({
  stationName: String,
  latitude: Number, // always be a positive 
  longitude: Number, // always be a negative 
  status: String,
  city: String,
  totalDocks: Number,
  comments: [Comment.schema] // comments on surrounding area of this station
});

var Station = mongoose.model('Station', StationSchema);

module.exports = Station;

// {
// id: 76,
// stationName: "Market at 4th",
// availableDocks: 3,
// totalDocks: 19,
// latitude: 37.786305,
// longitude: -122.404966,
// statusValue: "In Service",
// statusKey: 1,
// availableBikes: 16,
// stAddress1: "Market at 4th",
// stAddress2: "Market Street",
// city: "San Francisco",
// postalCode: "",
// location: "",
// altitude: "",
// testStation: false,
// lastCommunicationTime: null,
// landMark: "San Francisco"
// },