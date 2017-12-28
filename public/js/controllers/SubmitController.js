app.controller('SubmitController', ['$scope', 'currentSubmit', 'species', '$location', function($scope,currentSubmit,species,$location) {
		
		
			
		$scope.loadSpecies = function() {

			species.then(function(data) {
				$scope.species = data;
				console.log($scope.species[0].name);
				$scope.$apply();
				
			});
		};
		
		
		
		
		
		
		$scope.changeSelectionData = function(dataType,data,update) {
			console.log("The inputted data: " + data);
			currentSubmit.changeData(dataType,data);
			console.log("we changed " + dataType + "updating view 5..4...3...2...1");
			
			if(dataType != 'description') {
				
					
					$location.path("/submit" + currentSubmit.getNextOne(dataType));
					if(update) $scope.$apply();
						
				
			} else {
					
				$scope.addADuck(currentSubmit.getData());
				console.log(currentSubmit.getNextOne(dataType));
					
			}//change ng-view
			
				
			
		};
		
		$scope.readTime = function () {
			console.log($('#timepicker').val() + "hello");
			$scope.changeSelectionData('time',$('#timepicker').val(),false);
		};
		
		$scope.readCount = function () {
			$scope.changeSelectionData('count', $('#number-picker').val(),false);
		};
		
		$scope.getTime = function() {
			$scope.time();
		};
		$scope.updateTime = function(newl){console.log(newl);};
		
		$scope.readDescription = function () {
			$scope.changeSelectionData('description', $('#descriptionpicker').val(),false);
			
			$('#sliderOut').hide('slide', {direction: 'left'},1000);
			
			
		};
		
		
		$scope.addADuck = function(input) {
			
			var date = input.date;
			var time = input.time;
			
			console.log(date + "." + time);
			
			var dt = date + "T" + time + ":00";
			//dt = dt.replace(/\//g,"-");
			console.log(dt);
			console.log((new Date(dt)).getHours());
			
			
			
			$.get("http://localhost:8081/species",function(data,status){
				for(var i = 0; i < data.length; i++) {
					if(data[i].name === input.species) { 
						
						
						
						$.post("http://localhost:8081/sightings",{id: '',species:input.species,description:input.description,dateTime:dt,count:input.count},function () {
								$('#sliderIn').show('slide', {direction: 'right'},1000);
							});
						
						return;
					} 
				}
			});	
			
		};
		
		$scope.imReady = function() {
				$location.path("#/"); 
		};
		
		
	
		
		
		
		
		
		

		
	
  
}]);