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
    var commentID = $(this).parents('.station').data('comment-id');
    var formData = $(this).serialize();
      //console.log(formData);
    $.ajax({
        method: "POST",
        url: ('/api/stations/' + id + '/comments' + commentID),
        data: formData,
        success: function (data) {
          console.log(data);
        var html = template(data);
        $('#stations').append(html);
        }      
   }); 
});


// Comment Delete
  $('#stations').on('click', '.delete-comment', function(e) {
    console.log("It Works!");
    var id = $(this).parents('.station').data('station-id');
        var commentID = $(this).parents('.station').data('comment-id');

    console.log("this is the comment id", commentID);

    $.ajax({
      method: 'DELETE',
      url: ('/api/stations/' + id + '/comments/' + id),
      success: function() {
        console.log("Comment Deleted!");
        $('[data-comment-id=' + id + ']').remove();
      }   
    });
  });

});
  
