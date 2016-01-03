$(document).on('ready', function() {
  var stationUrl = "/api/stations";
  var postStationUrl = "/api/stations/:stationId/comments";
  var results = $('#stations');
  var source = $('#current-station-template').html();
  // console.log(source);
  var template = Handlebars.compile(source);
  $.ajax({
    method: 'GET',
    url: stationUrl,
    success: function (data) {
      data.forEach(function(stations) {
        // console.log("this is the station id", station._id)
        var html = template(stations);
        $('#stations').append(html);
      });
    }
  });

  // Submitting Comment for Post
$('#stations').on('submit', '.comment-form', function(e) {
    console.log("It works!");
    e.preventDefault();
    console.log($(this));
    var id = $(this).parents('.station').data('station-id');
    var formData = $(this).serialize();
      //console.log(formData);
    $.ajax({
        method: "POST",
        url: ('/api/stations/' + id + '/comments'),
        data: formData,
        success: function (data) {
          console.log(data);
        var html = template(data);
        $('#stations').append(html);
        }      
   }); 
});
});   
