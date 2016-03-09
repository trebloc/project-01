$(document).ready(function() {
  initListeners();
  console.log('app.js loaded!');
  $.get('/api/stations').success(function (stations) {
    stations.forEach(function(station, index) { 
      renderStation(station, index);
    });  // forEach
  });  // $.get

// Comment Form for Adding a new Comment on an Existing Station
  $(".comment-form").on("submit", function(event){
    event.preventDefault();
    var comments = ($( this ).serialize());
    var whichModal = $(this).attr('id');
    console.log(whichModal);
    var thisStationID = $('.row.station').eq(0).attr('data-station-id');
    console.log("THIS STATION ID: " , thisStationID);
    $.post('/api/stations/' + thisStationID + '/comments', comments, function(data){
      console.log(data);    
      // clear form
      $('.comment-form').trigger('reset');    
    });     
  });

// Deleting Station Comment
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

// Modal Information to be rendered when clicking on a station
$('.modal').on('shown.bs.modal', function () {
    var modal = $(this);
    var modalId = $(this).attr('id');
    console.log('modalId: ', modalId);
    var whichModal = modal.attr('id')[5];
    console.log(whichModal);

    // below doesn't work because stations are PREpended into the DOM,
    //   so eq(0) will return the first station in the DOM, and that
    //   station links to modal4 (the last modal)
    // var stationId = $('.row.station').eq(whichModal).attr('data-station-id');
    //
    // do this instead:

    var $station = $('#stations').find("a[href='#modal" + whichModal + "']").closest(".row.station");
    var stationId = $station.data('station-id');
    console.log('stationId: ', stationId);
    var stationName = $station.find(".station-name a").text();
    console.log('stationName: ', stationName);
    var latitude = $station.find(".station-latitude").text();
    console.log('stationLatitude: ', latitude);
    var longitude = $station.find(".station-longitude").text();
    console.log('stationLongitude: ', longitude);    
    var status = $station.find(".station-status").text();
    console.log('stationStatus: ', status);
    var city = $station.find(".station-city").text();
    console.log('stationCity: ', city); 
    var totalDocks = $station.find(".station-total-docks").text();
    console.log('stationtotalDocks: ', totalDocks);       
    $(this).find('span.station-name').text(stationName);
    $(this).find('span.station-latitude').text(latitude);
    $(this).find('span.station-longitude').text(longitude);
    $(this).find('span.station-status').text(status);
    $(this).find('span.station-city').text(city);
    $(this).find('span.station-total-docks').text(totalDocks);
    $(this).find('input#stationId').attr('value', stationId);
    $.get('/api/stations/' + stationId + '/comments', function (comments) {
      console.log('Comments: ', comments);
      // clear all present comments
      modal.find("#comments").html("");
      comments.forEach(function(comment) {
        //console.log(" JC: ",comment._id);
          modal.find("#comments").append("<div class='IDComment' data-comment-id='" + comment._id + "'>");
          modal.find('[data-comment-id=' + comment._id + ']').append("<p><strong>User Name: </strong> " + comment.userName + "</p>");
          modal.find('[data-comment-id=' + comment._id + ']').append("<p><strong>Comment Type: </strong>" + comment.commentType + "</p>");
          modal.find('[data-comment-id=' + comment._id + ']').append("<p><strong>Comment: </strong>" + comment.userComment + "</p><br>");
          modal.find('[data-comment-id=' + comment._id + ']').append('<button type="button" class="btn btn-danger delete"  data-station-id="' + stationId + '"data-delcomment-id="' + comment._id + '" >Delete</button></div>');
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
  "              <div class='panel-body'>" +
  "              <!-- begin station internal row -->" +
  "                <div class='row'>" +
  "                  <div class='container' id='image'>" + 
  "                  </div>" +  
  "                  <div class='container'>" + 
  "                  <div class='col-md-9 .col-lg-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +  
  "                        <iframe class='embed-responsive-item' id='image' src=" + station.stationImage + " width='300' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>" +
  "                      </li>" + 
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
  "                  </div>" +
  "                </div>" +
  "                <!-- end of station internal row -->" +
  "          <!-- end one station -->";
  $('#stations').prepend(stationHtml);
 }