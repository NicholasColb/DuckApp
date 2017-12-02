app.controller('SightingController', ['$scope',  'sightingdata','$routeParams', function($scope, sightingdata, $routeParams) {
	
		
		$scope.detail = sightingdata[$routeParams.id];
		
		
	
}]);