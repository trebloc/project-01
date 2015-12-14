$(document).ready(function() {
  initListeners();
  console.log('app.js loaded!');
  $.get('/api/stations').success(function (stations) {
    stations.forEach(function(station, index) {
      renderStation(station, index);
    });  // forEach
  });  // $.get
}); // $(document).ready

function initListeners () {


  $('.modal').on('shown.bs.modal', function () {
  	var modalId = $(this).attr('id');
  	var stationName = $('#stations').find("a[href='#" + modalId + "']").eq(0).text();
  	var latitude = $('#stations').find("span[class='station-latitude']").eq(0).text();
var longitude = $('#stations').find("span[class='station-longitude']").eq(0).text();
var status = $('#stations').find("span[class='station-status']").eq(0).text();  	
var city = $('#stations').find("span[class='station-city']").eq(0).text(); 
var totalDocks = $('#stations').find("span[class='station-total-docks']").eq(0).text();  	
  	$(this).find('span.station-name').text(stationName);
  	$(this).find('span.station-latitude').text(latitude); 
  	$(this).find('span.station-longitude').text(longitude); 
  	$(this).find('span.station-status').text(status);  
  	$(this).find('span.station-city').text(city);  
  	$(this).find('span.station-total-docks').text(totalDocks);    	  		 	 	
  })

};


// this function takes a single station and renders it to the page
function renderStation(station, index) {
  console.log('rendering station:', station);

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
 /* buildSongsHtml(album.songs) +




  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "                <button class='btn btn-primary add-song'>Add Song</button>" +
  "                <button class='btn btn-info edit-album'>Edit Album</button>" +
  "                <button class='btn btn-danger delete-album'>Delete Album</button>" +
  "                <button class='btn btn-success save-album default-hidden'>Save Changes</button>" +
  "              </div>" +

  "            </div>" +

*/
  $('#stations').prepend(stationHtml);
 }