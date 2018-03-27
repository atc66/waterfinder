// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

var map;

// Create a new blank array for all the listing markers
var markers = [];

// Create placemarkers array to use in multiple functons to have control over the number of places that show
var placeMarkers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	// center in NYC
    	center: {lat: 40.7413549, lng: -73.9980244},
    	zoom: 6,
  	});
  	// Storing locations in an array
  	// Normally stored in a DB
  	var locations = [
        {title: "Eastern State Pen", location: {lat: 39.968231, lng: -75.173497}},
  	    {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}}
    //     {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
    //     {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
    //     {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
    //     {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
    //     {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}},
  	];

  	// This group uses the location array to create an array of markers on initialiation.
  	for (var i = 0; i < locations.length; i++) {
  		// get the position from the lcoation array
  		// locations array location
  		var position = locations[i].location;
  		// locations array title
  		var title = locations[i].title;
  		// Creare a marker per location, and put into markers array.
  		var marker = new google.maps.Marker({
  			// map: map,
  			position: position,
  			title: title,
  			// icon: defaultIcon,
  			animation: google.maps.Animation.DROP,
  			id: i
  		});
  		// Push the marker to our array of markers
  		markers.push(marker);
  	}

    document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', function(){
    hideMarkers(markers);
	});
}

// This function will loop through the markers array and display them all.
function showListings() {
	var bounds = new google.maps.LatLngBounds();
	// Extend the boundaries of the map for each marker and display the marker
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
// make it generic, markers array is variable that is passed into this so we can hide arrays of markers.
function hideMarkers(markers) {
	for (var i = 0; i < markers.length; i++){
		markers[i].setMap(null);
	}
}
