//The angular app itself. Uses routeProvider to change the view in index.html.


var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
  
	.when('/',{
		templateUrl: 'views/homepage.html',
		resolve: {
			sightingdata: function(sightings) {
				return sightings.getData();
			}
				
				
		}
	})
    .when('/sightings/:order', { 
      controller: 'MainController', 
      templateUrl: 'views/sightings.html',
	  resolve: {
			sightingdata: function(sightings) {
				return sightings.getData();
			}
				
				
		}
		
    }) 
  	.when('/sighting/:id', {
    	controller: 'SightingController',
    	templateUrl: 'views/sighting.html',
		resolve: {
			sightingdata: function(sightings) {
				return sightings.getData();
			}
				
				
		}
	})
	.when('/submitdate', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitDate.html'
	})
	.when('/submittime', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitTime.html'
	})
	.when('/submitspecies', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitSpecies.html'
	})
	.when('/submitcount', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitCount.html'
	})
	.when('/submitdescription', {
    	controller: 'SubmitController',
    	templateUrl: 'views/submitDescription.html'
	})
    .otherwise({ 
      redirectTo: '/' 
    }); 
	
});


