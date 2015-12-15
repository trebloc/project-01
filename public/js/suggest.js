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
              userName: "Joe",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Joe",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Joe",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Joe",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });

suggestList.push({
              userName: "Joe",
              suggestStation: "Lake Merritt Bart Station",
              latitude: 37.7974997,
              longitude: -122.2679975,
              city: "Oakland",
              whyComment: "Because Oakland Rocks!",
              date: "12/14/15"
            });



$(document).on('ready', function() {

	var source = $('#station-template').html();
	console.log(source);
	var template = Handlebars.compile(source);
	suggestList.forEach(function(suggestion) {
		var html = template(suggestion);
		$('#suggest').append(html);
	});
	
	var searchUrl = "/api/suggest";
	var $results = $('#suggest');

	// 0. without templates, write plain-ol html for two suggests

	// 1. get the suggestList on the page.  Use jquery.



	// 2. delete suggestList from this file, and get it from server
	//    it should still appear on the page when you're done
	console.log("It works!");
});