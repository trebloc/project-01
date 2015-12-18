// This file allows us to seed our application with suggested stations data
// simply run: `node seed2.js` from the root of this project folder.

var db = require("./models");

var suggestList =[];
suggestList.push({
              userName: "Bob",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Tom",
              suggestStation: "12th City Center Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/15/15"
            });

suggestList.push({
              userName: "Frank",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Jane",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Kathy",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "James",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

db.Suggest.remove({}, function(err, suggest){

  db.Suggest.create(suggestList, function(err, suggest){
    if (err) { return console.log('ERROR', err); }
    console.log("all suggestions:", suggest);
    console.log("created", suggest.length, "suggest");
    process.exit();
  });
});

