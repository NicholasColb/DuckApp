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
			
			if(dataType != 'description') { $location.path("/submit" + currentSubmit.getNextOne(dataType)); }																	//change ng-view																					//
			if(update) {$scope.$apply();}
		};
		
		$scope.readTime = function () {
			$scope.changeSelectionData('time',$('#timepicker').val(),false);
		};
		
		$scope.readCount = function () {
			$scope.changeSelectionData('count', $('#countpicker').val(),false);
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
						$.post("http://localhost:8081/sightings",{id:'',species:spec,description:descr,dateTime:dt,count:cou});
						return;
					} else {
						console.log('was not in array');
					}	
				}
			});	
			
		};
		
		
	
		
		
		
		
		
		

		
	
  
}]);