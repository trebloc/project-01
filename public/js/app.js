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
    console.log(id);
    // var commentID = $(this).parents('.station').data('comment-id');
    var formData = $(this).serialize();
    console.log(formData);
    $.ajax({
        method: "POST",
        url: ('/api/stations/' + id + '/comments'),
        data: formData,
        success: function (data) {
          console.log("SUCCESS DATA: " ,data);
          var comment_id = data._id;
          // TODO: append this comment_id as data-comment-id in your template

          var html = template(data);
            $('[data-station-id' + id + ']').append(html);
          // Take the comment template and append it to the rendered html page.
            //1 Put section to grab new comment template and place into existing template.
            //2 Add new templated comment and append it to the the "new comment section" defined in the original template. 
              //3 Create a new call of for comment template.
              //4 Use the new template with new comment data and append it to the rendered page.

          console.log(html);
        }      
   }); 
});


// Comment Delete
  $('#stations').on('click', '.delete-comment', function(e) {
    console.log("It Works!");
    var id = $(this).parents('.station').data('station-id');
    //TODO: commentID is not picking up the commentID, recode
    var commentID = $(this).parent().parent().parent()[0].dataset.commentId;

    console.log("this is the comment id", commentID);

    $.ajax({
      method: 'DELETE',
      url: ('/api/stations/' + id + '/comments/' + commentID),
      success: function() {
        console.log("Comment Deleted!");
        $('[data-comment-id=' + id + ']').remove();
      }   
    });
  });

});
  
