/* The main controller of the app, used for displaying all sightings so far. Loads the sightings from the server and shows them to the user. The user can select the preferred order of sightings. The
	controller also allows the user to delete sightings.
*/

app.controller('MainController', ['$scope', 'sightings','sightingdata', '$routeParams','$http','$route', function($scope,sightings,sightingdata,$routeParams, $http,$route) {
		
		
		
		
			//load the resolve "sightingdata" to avoid rendering before loading data
			
		$scope.apps = sightingdata;	
						
			

			
			

			//If some sightings exist, sort them with the sortFunction

			
		if($scope.apps.length != 0) {
					$scope.apps =  $scope.apps.sort(sortFunction);
					$scope.currentSelection = sightingdata[0];							
					$scope.$apply;
		} 
		
		
		
		
		
		
		//the sorting function which reads the route parameters and sorts the sightings in the way the user has selected
		
	
		function sortFunction(a,b) {
				if($routeParams.order == 'dateNew')  {
					return new Date(b.dateTime) - new Date(a.dateTime);
				} else if ($routeParams.order == 'dateOld') {
					return new Date(a.dateTime) - new Date(b.dateTime);
				} else if ($routeParams.order == 'number') {
					return b.count - a.count;
				} else if ($routeParams.order == 'species') {
					var aa = a.species.toUpperCase();
					var bb = b.species.toUpperCase();
					return (aa < bb) ? 1 : (aa > bb) ? -1 : 0;
					
				} else {
					return 0;
				}
		
		
		};
		
		
		
		
		//deletes a sighting
	
		$scope.deleteSighting = function() {
			
			var check = confirm("Delete sighting?");
			if(check) {
				
				
				$http.post(serverURL + "/delete",$scope.currentSelection)	//posts the sighting to the server
									.then(function() {
										$scope.refreshAllData();
									});
				
			}
		};
		
		
		
		//loads the view again
		
		$scope.refreshAllData = function () {
            $route.reload();
    
		};
	
		
		//updates which sighting is to be displayed seperately, enlarged and scrolls the page to the top via the global topFunction.
		
		
		$scope.updateSelection = function(duck) {
		
			$scope.currentSelection = duck;
			topFunction();
			
		};
		
		
		//a boolean function to externally check if there are no sightings to be displayed.
		
		$scope.noneLeft = function() {
			 return $scope.apps.length == 0; 
		};
		
		// a function to hide all the data
		$scope.HideAllData = function () {
			$scope.apps = [];
			
		};
		
		
		
		
		
		

		
	
  
}]);