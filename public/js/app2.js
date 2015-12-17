$(document).ready(function() {
  initListeners();
  console.log('app.js loaded!');
  $.get('/api/stations').success(function (stations) {
    stations.forEach(function(station, index) { 
      renderStation(station, index);
    });  // forEach
  });  // $.get

  $(".comment-form").on("submit", function(event){
    event.preventDefault();
    var comments = ($( this ).serialize());
    var whichModal = $(this).attr('id');
    console.log(whichModal);
    var thisStationID = $('.row.station').eq(0).attr('data-station-id');
    console.log("THIS STATION ID: " , thisStationID);
    $.post('/api/stations/' + thisStationID + '/comments', comments, function(data){
      console.log(data);        
    });     
  });


  $('body').on('click', '.delete', function(e){
    var commentDiv = $(this).parent();
    var commentId = $(this).data('delcomment-id');
    var stationId = $(this).data('station-id');
    console.log("I want to delete comment with ID : " + commentId);
    console.log("from StationID : " + $(this).data('station-id'));

    // create ajax request to delete with the id attached to the button you just pressed
    $.ajax({
      method: 'DELETE',
      url: ('/api/stations/' + stationId + '/comments/' + commentId),
      success: function() {
        console.log("Comment Deleted: " + commentId);
        $(commentDiv).remove();
      }
    });
  });
}); // $(document).ready



function initListeners () {


  $('.modal').on('shown.bs.modal', function () {
    var modalId = $(this).attr('id');
    // console.log(modalId);
    var whichModal = $(this).attr('id')[5];
    console.log(whichModal);
    var stationId = $('.row.station').eq(whichModal).attr('data-station-id');
    //console.log(stationId);
    var stationName = $('#stations').find("a[href='#" + modalId + "']").eq(whichModal).text();
    var latitude = $('#stations').find("span[class='station-latitude']").eq(whichModal).text();
    var longitude = $('#stations').find("span[class='station-longitude']").eq(whichModal).text();
    var status = $('#stations').find("span[class='station-status']").eq(whichModal).text();    
    var city = $('#stations').find("span[class='station-city']").eq(whichModal).text(); 
    var totalDocks = $('#stations').find("span[class='station-total-docks']").eq(whichModal).text();   
    $(this).find('span.station-name').text(stationName);
    $(this).find('span.station-latitude').text(latitude); 
    $(this).find('span.station-longitude').text(longitude); 
    $(this).find('span.station-status').text(status);  
    $(this).find('span.station-city').text(city);  
    $(this).find('span.station-total-docks').text(totalDocks); 
    $(this).find('input#stationId').attr('value', stationId);
    $.get('api/stations/' + stationId + '/comments', function (comments) {
      //console.log('Comments: ', comments);
      comments.forEach(function(comment) {
        //console.log(" JC: ",comment._id);
          $("#comments").append('<div class="IDComment"  data-comment-id="'+comment._id+'">')
          $('[data-comment-id=' + comment._id + ']').append("<p><strong>User Name:</strong> " + comment.userName + "</p>");  
          $('[data-comment-id=' + comment._id + ']').append("<p><strong>Comment Type:</strong> " + comment.commentType + "</p>");  
          $('[data-comment-id=' + comment._id + ']').append("<p><strong>Comment:</strong> " + comment.userComment + "</p><br>");  
          $('[data-comment-id=' + comment._id + ']').append('<button type="button" class="btn btn-danger delete"  data-station-id="' + stationId + '"data-delcomment-id="' + comment._id + '" >Delete</button></div>');
      });
    });
  });

};





// $('.row.station').attr('data','station-id')


// Listener for Delete 
// $('#comments').attr('data', '.delete-comment').on('click', '.delete', function(e){
//   console.log("This Button works");
//   event.preventDefault();
// });  


// this function takes a single station and renders it to the page
function renderStation(station, index) {
  //console.log('rendering station:', station);

  var stationHtml =
  "        <!-- one station -->" +
  "        <div class='row station' data-station-id='" + station._id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin station internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail station-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='station image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Station Name:</h4>" +
  "                        <span class='station-name'><a href='#modal" + index + "' data-toggle='modal'>" + station.stationName + "</a></span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Latitude:</h4>" +
  "                        <span class='station-latitude'>" + station.latitude + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Longitude:</h4>" +
  "                        <span class='station-longitude'>" + station.longitude+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Status:</h4>" +
  "                        <span class='station-status'>" + station.status+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>City:</h4>" +
  "                        <span class='station-city'>" + station.city+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Total Docks:</h4>" +
  "                        <span class='station-total-docks'>" + station.totalDocks+ "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of station internal row -->" +
    "          </div>" +
  "          <!-- end one station -->";
  $('#stations').prepend(stationHtml);
 }