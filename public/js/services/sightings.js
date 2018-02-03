//A service for loading all sightings from the server

app.factory('sightings', function(){
  return {
	  getData: function () {
		return $.get(serverURL + '/sightings', function(response) {
			return response;
		});
	  }
  };	  

});

