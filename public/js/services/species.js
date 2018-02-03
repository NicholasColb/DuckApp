//A service for loading a list of species from the server

app.factory('species', function(){
  return $.get(serverURL + '/species')
  		.done(function(data){
    return data;
  })
  		.fail(function(err) {
             return err;
             });

});