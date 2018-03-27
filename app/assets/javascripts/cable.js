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

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    	// center in NYC
    	center: {lat: 40.7413549, lng: -73.9980244},
    	zoom: 13,
    	// set the styles property to the map object which we defined above
    	// styles: styles,
    	// allows the user to change the map type, disabling by setting to false
    	// mapTypeControl: false
  	});
}
