// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var stationList =[];
stationList.push({
              stationName: "Market at 4th",
              latitude: 37.786305,
              longitude: -122.404966,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 19
            });
stationList.push({
              stationName: "Market at Sansome",
              latitude: 37.789625,
              longitude: -122.400811,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 26
            });
stationList.push({
              stationName: "Powell at Post (Union Square)",
              latitude: 37.788446,
              longitude: -122.408499,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 19
            });
stationList.push({
              stationName: "Civic Center BART (7th at Market)",
              latitude: 37.781039,
              longitude: -122.411748,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 23
            });
stationList.push({
              stationName: "Grant Avenue at Columbus Avenue",
              latitude: 37.798522,
              longitude: -122.407245,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 15
            });


db.Station.remove({}, function(err, stations){

  db.Station.create(stationList, function(err, stations){
    if (err) { return console.log('ERROR', err); }
    console.log("all stations:", stations);
    console.log("created", stations.length, "stations");
    process.exit();
  });

});

