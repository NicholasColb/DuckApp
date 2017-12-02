app.factory('species', function(){
  return $.get('http://localhost:8081/species')
  		.done(function(data){
			console.log("got spec data");
    return data;
  })
  		.fail(function(err) {
             return err;
             });

});