app.controller('SightingController', ['$scope', 'sightings', '$routeParams', function($scope, sightings, $routeParams) {
	sightings.done(function(data) {
		console.log("the routeparam was" + $routeParams.id);
		$scope.detail = data[$routeParams.id];
		
		
	});
}]);