// This file allows us to seed our application with the existing station data to the main page.
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var stationList =[];
stationList.push({
              stationImage: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.15917773975!2d-122.40715468519826!3d37.78630921926973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzEwLjciTiAxMjLCsDI0JzE3LjkiVw!5e0!3m2!1sen!2sus!4v1450398422053",
              stationName: "Market at 4th",
              latitude: 37.786305,
              longitude: -122.404966,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 19
            });
stationList.push({
              stationImage: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017518281454!2d-122.40299968519813!3d37.78962921907875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzIyLjYiTiAxMjLCsDI0JzAyLjkiVw!5e0!3m2!1sen!2sus!4v1450398203884",  
              stationName: "Market at Sansome",
              latitude: 37.789625,
              longitude: -122.400811,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 26
            });
stationList.push({
              stationImage: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0678256687997!2d-122.41068768519816!3d37.78845021914655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzE4LjQiTiAxMjLCsDI0JzMwLjYiVw!5e0!3m2!1sen!2sus!4v1450398487698", 
              stationName: "Powell at Post (Union Square)",
              latitude: 37.788446,
              longitude: -122.408499,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 19
            });
stationList.push({
              stationImage: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3838484071694!2d-122.41393668519834!3d37.781043219572844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzUxLjciTiAxMjLCsDI0JzQyLjMiVw!5e0!3m2!1sen!2sus!4v1450398555701",
              stationName: "Civic Center BART (7th at Market)",
              latitude: 37.781039,
              longitude: -122.411748,
              status: "In Service",
              city: "San Francisco",
              totalDocks: 23
            });
stationList.push({
              stationImage: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.637844337011!2d-122.40943368519785!3d37.79852621856659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzU0LjciTiAxMjLCsDI0JzI2LjEiVw!5e0!3m2!1sen!2sus!4v1450398643235", 
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

