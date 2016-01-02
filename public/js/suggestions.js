// var suggestList =[];
// suggestList.push({
//               userName: "Bob",
//               suggestStation: "Lake Merritt Bart Station",
//               latitude: 37.7974997,
//               longitude: -122.2679975,
//               city: "Oakland",
//               whyComment: "Because Oakland Rocks!",
//               date: "12/14/15"
//             });

// suggestList.push({
//               userName: "Joe",
//               suggestStation: "Lake Merritt Bart Station",
//               latitude: 37.7974997,
//               longitude: -122.2679975,
//               city: "Oakland",
//               whyComment: "Because Oakland Rocks!",
//               date: "12/14/15"
//             });

// suggestList.push({
//               userName: "Joe",
//               suggestStation: "Lake Merritt Bart Station",
//               latitude: 37.7974997,
//               longitude: -122.2679975,
//               city: "Oakland",
//               whyComment: "Because Oakland Rocks!",
//               date: "12/14/15"
//             });

// suggestList.push({
//               userName: "Joe",
//               suggestStation: "Lake Merritt Bart Station",
//               latitude: 37.7974997,
//               longitude: -122.2679975,
//               city: "Oakland",
//               whyComment: "Because Oakland Rocks!",
//               date: "12/14/15"
//             });

// suggestList.push({
//               userName: "Joe",
//               suggestStation: "Lake Merritt Bart Station",
//               latitude: 37.7974997,
//               longitude: -122.2679975,
//               city: "Oakland",
//               whyComment: "Because Oakland Rocks!",
//               date: "12/14/15"
//             });

// suggestList.push({
//               userName: "Joe",
//               suggestStation: "Lake Merritt Bart Station",
//               latitude: 37.7974997,
//               longitude: -122.2679975,
//               city: "Oakland",
//               whyComment: "Because Oakland Rocks!",
//               date: "12/14/15"
//             });

//Client Side Ajax call for reading Stations for Suggestion Page

$(document).on('ready', function() {
	var searchUrl = "/api/suggestions";
	var results = $('#suggestions');
	var source = $('#station-template').html();
	// console.log(source);
	var template = Handlebars.compile(source);
	$.ajax({
		method: 'GET',
		url: searchUrl,
		success: function (data) {
			data.forEach(function(suggestion) {
				// console.log("this is the suggest id", suggestion._id)
				var html = template(suggestion);
				$('#suggestions').append(html);
			});
		}
	});

// Submitting suggestion for Post
	$('.form-horizontal').on('submit', function(e) {
		console.log("It works!");
		e.preventDefault();
		console.log($(this));
	    var formData = $(this).serialize();
	    //console.log(formData);

		$.ajax({
		  	method: "POST",
		  	url: searchUrl,
		  	data: formData,
	    	success: function (data) {
	    		console.log(data);
				var html = template(data);
				$('#suggestions').append(html);
		    }
	    });

	});	
	  	
// Suggestion Station Delete
	$('#suggestions').on('click', '.delete-station', function(e) {
		console.log("It Works!");
		var id = $(this).parents('.station').data('station-id');
		console.log("this is the suggest id", id);

		$.ajax({
			method: 'DELETE',
			url: ('/api/suggestions/' + id),
			success: function() {
				console.log("Suggestion Deleted!");
				$('[data-station-id=' + id + ']').remove();
			}		
		});
	});

});

	// suggestList.forEach(function(suggestion) {
	// 	var html = template(suggestion);
	// 	$('#suggest').append(html);

	


	// 0. without templates, write plain-ol html for two suggests

	// 1. get the suggestList on the page.  Use jquery.



	// 2. delete suggestList from this file, and get it from server
	//    it should still appear on the page when you're done
// });


