app.controller('MainController', ['$scope', 'sightings','sightingdata', '$routeParams', function($scope,sightings,sightingdata,$routeParams) {
	//$scope.apps = sightings
	/*
	*/		
			
			$scope.apps = sightingdata;	
						//load the resolve to avoid rendering before loading data
		
			$scope.apps =  $scope.apps.sort(sortFunction);
			
				
			
			$scope.currentSelection = sightingdata[0];
			console.log($scope.currentSelection.species);
			$scope.$apply;
		
		
		
		
		
		
	
		function sortFunction(a,b) {
			
				console.log($routeParams.order + 'sortinggg...');
				if($routeParams.order == 'dateNew')  {
					return new Date(b.dateTime) - new Date(a.dateTime);
				} else if ($routeParams.order == 'dateOld') {
					return new Date(a.dateTime) - new Date(b.dateTime);
				} else if ($routeParams.order == 'number') {
					return b.count - a.count;
				} else if ($routeParams.order == 'species') {
					
					var aa = a.species.toUpperCase();
					var bb = b.species.toUpperCase();
					
					console.log("the first one is " + aa + ". The second one is " + bb + (aa<bb));
					
					return (aa < bb) ? 1 : (aa > bb) ? -1 : 0;
					
				} else {
					return 0;
				}
		
		
		};
	
		
		$scope.refreshAllData = function () {
            $.get('http://localhost:8081/sightings',function (data) {
                angular.extend($scope.apps, data);
				$scope.apps = $scope.apps.sort(sortFunction);
				console.log("well that was easy, we now have a length of: " + data.length);
				$scope.$apply();
				
				
            });
           
    };
	
		
		$scope.HideAllData = function () {
			$scope.apps = [];
			
		};
		
		
		$scope.updateSelection = function(duck) {
		
			$scope.currentSelection = duck;
			topFunction();
			
		};
		
		
		
		
		
		

		
	
  
}]);