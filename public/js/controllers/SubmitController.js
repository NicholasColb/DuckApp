app.controller('SubmitController', ['$scope', 'currentSubmit', 'species', '$location', function($scope,currentSubmit,species,$location) {
		
		
			
		$scope.loadSpecies = function() {

			species.then(function(data) {
				$scope.species = data;
				console.log($scope.species[0].name);
				$scope.$apply();
				
			});
		};
		
		$scope.test = function(item){
			alert(item);
		};
		
		
		
		
		$scope.changeSelectionData = function(dataType,data,update) {
			console.log("The inputted data: " + data);
			currentSubmit.changeData(dataType,data);
			console.log("we changed " + dataType + "updating view 5..4...3...2...1");
			
			if(dataType != 'description') { 
				$location.path("/submit" + currentSubmit.getNextOne(dataType)); 
			} else {	
				$scope.addADuck(currentSubmit.getData());
					
			}//change ng-view																					//
			if(update) {$scope.$apply();}
		};
		
		$scope.readTime = function () {
			console.log($('#timepicker').val());
			$scope.changeSelectionData('time',$('#timepicker').val(),false);
		};
		
		$scope.readCount = function () {
			$scope.changeSelectionData('count', $('#countpicker').val(),false);
		};
		
		$scope.readDescription = function () {
			$scope.changeSelectionData('description', $('#descriptionpicker').val(),false);
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
						console.log('was in array');
						
						$.get("http://localhost:8081/sightings",function(data,status){
							console.log("so now we got the data to check index");
							$.post("http://localhost:8081/sightings",{id:data.length,species:input.species,description:input.description,dateTime:dt,count:input.count},function () {
							alert("added duck!");
							});
						});
						return;
					} else {
						console.log('was not in array');
					}	
				}
			});	
			
		};
		
		
	
		
		
		
		
		
		

		
	
  
}]);