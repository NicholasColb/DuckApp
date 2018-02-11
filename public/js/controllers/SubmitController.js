/*The controller for adding a new sighting to the server. Changes the view route and gathers data from the user. 
Uses the service "currentSubmit" to store all current input given by the user. After all data is gathered, checks the data and posts it to the server.
*/
app.controller('SubmitController', ['$scope', 'currentSubmit', 'species' , '$location','$http', function($scope,currentSubmit, species,$location,$http) {
		
		
		
	//The service "species" gets a list of all species from the server through a http request. The user is shown a list of species to pick from. 
		
		$scope.loadSpecies = function() {																			

			species.then(function(data) {
				$scope.species = data;
				$scope.$apply();
				
			});
		};
		
		
		
		
		
		/*changeSelectionData stores inputted data into the service "currentSubmit" and changes the view to get the next piece of data from the user. Once all data is inputted,
			the function calls $scope.addADuck to post the sighting to the server.
		*/
		
		
		$scope.changeSelectionData = function(dataType,data,update) {
			
			currentSubmit.changeData(dataType,data);
			
			
			if(dataType != 'description') {
				
					
					$location.path("/submit" + currentSubmit.getNextOne(dataType));
					if(update) $scope.$apply();
						
				
			} else {
					
				$scope.addADuck(currentSubmit.getData());
				
					
			}
			
				
			
		};
		
		
		
		
		
		
		
		/* Functions for reading the inputted data from the user via html input elements and passing the data to the $scope.changeSelectionData function.
		*/
		
		$scope.readTime = function () {
			if($('#timepicker').val()){																		
			$scope.changeSelectionData('time',$('#timepicker').val(),false);
			}
		};
		
		$scope.readCount = function () {
			$scope.changeSelectionData('count', $('#number-picker').val(),false);
		};
		
		$scope.readDescription = function () {
			$scope.changeSelectionData('description', $('#descriptionpicker').val(),false);
			
		};
		
		
		
		$scope.addADuck = function(input) {
			if(input.date && input.time && input.species && input.count) {										//checks that the data exists
				var date = input.date;
				var time = input.time;
				var dt = date + "T" + time + ":00";																//creates the  ISO 8601 datetime string
			
				$http.get(serverURL + "/species")																//checks that an invalid species has not been inputted
					.then(function(response) {
						for(var i = 0; i < response.data.length; i++) {
							if(response.data[i].name === input.species) { 
								$http.post(serverURL + "/sightings",{id: '',species:input.species,description:input.description,dateTime:dt,count:input.count})	//posts the sighting to the server
									.then(function() {
										$('#sliderOut').hide('slide', {direction: 'left'},1000);								//jquery animates the html elements in the view
										$('#sliderIn').show('slide', {direction: 'right'},1000);
									});
								
								return;
							} 
						}
					});
			} else {
				alert("Failed to add sighting. Try not to reload the page while submitting.");
				$location.path("/submitdate");
			}
		};
		
		
		
		
		/*
		A function to return to the homepage after a sighting has been added
		*/
		
		
		$scope.imReady = function() {												
				$location.path("#/"); 
		};
		
		
	
		
		
		
		
		
		

		
	
  
}]);