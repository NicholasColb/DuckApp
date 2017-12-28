app.controller('SightingController', ['$scope',  'sightingdata','$routeParams', function($scope, sightingdata, $routeParams) {
	
		
	//	$scope.detail = 
		$scope.detail = sightingdata[$routeParams.id]; 
		console.log($scope.detail.id + "is this id");
		
		/*sightingdata.filter(function( obj ) {
			console.log($routeParams.id + "hi" + obj.id);
			console.log($routeParams.id == obj.id);
			return obj.id == $routeParams.id;
		});*/
		
	
}]);