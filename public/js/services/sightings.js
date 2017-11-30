app.factory('sightings', function(){
  return $.get('http://localhost:8081/sightings')
  		.done(function(data){
			console.log("got data");
    return data;
  })
  		.fail(function(err) {
             return err;
             });

});