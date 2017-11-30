app.controller('SubmitController', ['$scope', function($scope) {
	
		
		
	$scope.RefreshAllData = function () {
        $.get('http://localhost:8081/sightings',function (data) {
			angular.extend($scope.apps, data);
			console.log("well that was easy, we now have a length of: " + data.length);
			$scope.$apply();	
        });       
	};
		
}]);