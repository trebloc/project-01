$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/stations').success(function (stations) {
    station.forEach(function(station) {
      renderStation(station);
    });
  });
});  