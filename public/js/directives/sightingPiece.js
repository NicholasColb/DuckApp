//a directive for each element displaying a sighting

app.directive('sightingPiece', function() { 
  return {  
	restrict: 'E',
	scope: {
		info: '='
	},
    templateUrl: 'js/directives/sightingPiece.html'
	
	
  }; 
});