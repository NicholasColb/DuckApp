app.controller('MainController', ['$scope', 'sightings', function($scope,sightings) {
	//$scope.apps = [];
	/*
	*/
		sightings.done(function(data) {
			$scope.apps = data.sort(function (a,b) {
				return new Date(a.dateTime) - new Date(b.dateTime);
			});
			
			
		});
	
	
	
		
		$scope.RefreshAllData = function () {
            $.get('http://localhost:8081/sightings',function (data) {
                angular.extend($scope.apps, data);
				$scope.apps = $scope.apps.sort(function (a,b) {
					return new Date(b.dateTime) - new Date(a.dateTime);
				});
				console.log("well that was easy, we now have a length of: " + data.length);
				$scope.$apply();
				
				
            });
           
    };
	
		
		$scope.HideAllData = function () {
			$scope.apps = [];
			
		};
		
		
		$scope.addADuck = function() {
			
		var date,time,descr,spec,cou;
			
		date = $("#date1").val();						//since input type date-time is not widely supported, combining values date and time.
		time = $("#time1").val();
		var dt = date + "T" + time + ":00Z";
		descr= $("#description1").val();
		spec=$("#species1").val();
		cou=$("#count1").val();
			
		$.get("http://localhost:8081/species",function(data,status){
			for(var i = 0; i < data.length; i++) {
				if(data[i].name === spec) { 
					console.log('was in array');
					$.post("http://localhost:8081/sightings",{id:'',species:spec,description:descr,dateTime:dt,count:cou}, function () {
						$scope.RefreshAllData();
					});
					return
				} else {
					console.log('was not in array');
				}	
			}
		});	
			
	};
		
		
		
		
		
		

		
	
  
}]);